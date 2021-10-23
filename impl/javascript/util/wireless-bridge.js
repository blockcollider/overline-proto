"use strict";

const {
  BcBlock,
  Transaction,
  MarkedTransaction,
  BlockchainHeaders,
  BlockchainHeader,
  TransactionInput,
  TransactionOutput,
} = require("../proto/core_pb");

const {
  WirelessBcBlock,
  WirelessTransaction,
  WirelessMarkedTransaction,
  WirelessTransactionInput,
  WirelessOutPoint,
  WirelessTransactionOutput,
  WirelessBlockchainHeaders,
  WirelessBlockchainHeader,
} = require("../proto/wireless_pb");
const BN = require("bn.js");

// takes protobuf serialized BcBlock in Buffer as input
// returns protobuf serialized WirelessBcBlock in Buffer
function encodeBcBlockForWireless(serializedBcBlock) {
  const bcBlock = BcBlock.deserializeBinary(serializedBcBlock);
  const wirelessBcBlock = new WirelessBcBlock();
  wirelessBcBlock.setHash(
    new Uint8Array(Buffer.from(bcBlock.getHash(), "hex"))
  );
  wirelessBcBlock.setPreviousHash(
    new Uint8Array(Buffer.from(bcBlock.getPreviousHash(), "hex"))
  );
  wirelessBcBlock.setVersion(bcBlock.getVersion());
  wirelessBcBlock.setSchemaVersion(bcBlock.getSchemaVersion());
  wirelessBcBlock.setHeight(bcBlock.getHeight());
  wirelessBcBlock.setMiner(bcBlock.getMiner());
  const difficulty = new BN(bcBlock.getDifficulty());
  wirelessBcBlock.setDifficulty(
    difficulty.toArrayLike(Uint8Array, "be", difficulty.byteLength())
  );
  wirelessBcBlock.setTimestamp(bcBlock.getTimestamp());
  wirelessBcBlock.setMerkleRoot(
    new Uint8Array(Buffer.from(bcBlock.getMerkleRoot(), "hex"))
  );
  wirelessBcBlock.setChainRoot(
    new Uint8Array(Buffer.from(bcBlock.getChainRoot(), "hex"))
  );
  const distance = new BN(bcBlock.getDistance());
  wirelessBcBlock.setDistance(
    distance.toArrayLike(Uint8Array, "be", distance.byteLength())
  );
  const totalDistance = new BN(bcBlock.getTotalDistance());
  wirelessBcBlock.setTotalDistance(
    totalDistance.toArrayLike(Uint8Array, "be", totalDistance.byteLength())
  );
  wirelessBcBlock.setNonce(bcBlock.getNonce());
  wirelessBcBlock.setNrgGrant(bcBlock.getNrgGrant());
  wirelessBcBlock.setTwn(bcBlock.getTwn());
  wirelessBcBlock.setTwsList(bcBlock.getTwsList());
  wirelessBcBlock.setEmblemWeight(bcBlock.getEmblemWeight());
  wirelessBcBlock.setEmblemChainFingerprintRoot(
    bcBlock.getEmblemChainFingerprintRoot()
  );
  wirelessBcBlock.setEmblemChainAddress(bcBlock.getEmblemChainAddress());
  wirelessBcBlock.setTxCount(bcBlock.getTxCount());
  const txs = bcBlock.getTxsList();
  const wirelessTxs = [];
  for (const tx of txs) {
    const wirelessTransaction = encodeTransactionForWireless(tx, false);
    wirelessTxs.push(wirelessTransaction);
  }
  wirelessBcBlock.setTxsList(wirelessTxs);
  wirelessBcBlock.setTxFeeBase(bcBlock.getTxFeeBase());
  wirelessBcBlock.setTxDistanceSumLimit(bcBlock.getTxDistanceSumLimit());
  wirelessBcBlock.setBlockchainHeadersCount(
    bcBlock.getBlockchainHeadersCount()
  );

  const headers = bcBlock.getBlockchainHeaders();
  const wirelessHeaders = new WirelessBlockchainHeaders();
  for (const chain of ["Btc", "Eth", "Lsk", "Neo", "Wav"]) {
    const getter = `get${chain}List`;
    const setter = `set${chain}List`;
    const bcBlockList = headers[getter]();
    const wirelessBcBlockList = [];

    for (const header of bcBlockList) {
      const wirelessHeader = new WirelessBlockchainHeader();
      wirelessHeader.setBlockchain(header.getBlockchain());
      wirelessHeader.setHash(header.getHash());
      wirelessHeader.setPreviousHash(header.getPreviousHash());
      wirelessHeader.setTimestamp(header.getTimestamp());
      wirelessHeader.setHeight(header.getHeight());
      wirelessHeader.setMerkleRoot(header.getMerkleRoot());
      wirelessHeader.setBlockchainConfirmationsInParentCount(
        header.getBlockchainConfirmationsInParentCount()
      );

      const markedTransactions = header.getMarkedTxsList();
      const wirelessMarkedTransactions = [];
      for (const mtx of markedTransactions) {
        const wirelessMarkedTransaction = new WirelessMarkedTransaction();
        wirelessMarkedTransaction.setValue(mtx.getValue());
        wirelessMarkedTransaction.setHash(mtx.getHash());
        wirelessMarkedTransaction.setId(mtx.getId());
        wirelessMarkedTransaction.setToken(mtx.getToken());
        wirelessMarkedTransaction.setAddrFrom(mtx.getAddrFrom());
        wirelessMarkedTransaction.setAddrTo(mtx.getAddrTo());
        wirelessMarkedTransaction.setBlockHeight(mtx.getBlockHeight());
        wirelessMarkedTransaction.setIndex(mtx.getIndex());
        wirelessMarkedTransaction.setBlockHash(mtx.getBlockHash());
        wirelessMarkedTransactions.push(wirelessMarkedTransaction);
      }
      wirelessHeader.setMarkedTxsList(wirelessMarkedTransactions);
      wirelessHeader.setMarkedTxCount(header.getMarkedTxCount());
      wirelessBcBlockList.push(wirelessHeader);
    }

    wirelessHeaders[setter](wirelessBcBlockList);
  }
  wirelessBcBlock.setBlockchainHeaders(wirelessHeaders);
  wirelessBcBlock.setBlockchainFingerprintsRoot(
    new Uint8Array(Buffer.from(bcBlock.getBlockchainFingerprintsRoot(), "hex"))
  );

  return wirelessBcBlock.serializeBinary();
}

function decodeWirelessBcBlockForBcnode(serializedWirelessBcBlock) {
  const wirelessBcBlock = WirelessBcBlock.deserializeBinary(
    serializedWirelessBcBlock
  );
  const bcBlock = new BcBlock();
  bcBlock.setHash(Buffer.from(wirelessBcBlock.getHash_asU8()).toString("hex"));
  bcBlock.setPreviousHash(
    Buffer.from(wirelessBcBlock.getPreviousHash_asU8()).toString("hex")
  );
  bcBlock.setVersion(wirelessBcBlock.getVersion());
  bcBlock.setSchemaVersion(wirelessBcBlock.getSchemaVersion());
  bcBlock.setHeight(wirelessBcBlock.getHeight());
  bcBlock.setMiner(wirelessBcBlock.getMiner());

  const wirelessDifficulty = new BN(wirelessBcBlock.getDifficulty_asU8(), "be");
  bcBlock.setDifficulty(wirelessDifficulty.toString());
  bcBlock.setTimestamp(wirelessBcBlock.getTimestamp());
  bcBlock.setMerkleRoot(
    Buffer.from(wirelessBcBlock.getMerkleRoot_asU8()).toString("hex")
  );
  bcBlock.setChainRoot(
    Buffer.from(wirelessBcBlock.getChainRoot_asU8()).toString("hex")
  );

  const wirelessDistance = new BN(wirelessBcBlock.getDistance_asU8(), "be");
  bcBlock.setDistance(wirelessDistance.toString());
  const wirelessTotalDistance = new BN(
    wirelessBcBlock.getTotalDistance_asU8(),
    "be"
  );
  bcBlock.setTotalDistance(wirelessTotalDistance.toString());
  bcBlock.setNonce(wirelessBcBlock.getNonce());
  bcBlock.setNrgGrant(wirelessBcBlock.getNrgGrant());
  bcBlock.setTwn(wirelessBcBlock.getTwn());
  bcBlock.setTwsList(wirelessBcBlock.getTwsList());
  bcBlock.setEmblemWeight(wirelessBcBlock.getEmblemWeight());
  bcBlock.setEmblemChainFingerprintRoot(
    wirelessBcBlock.getEmblemChainFingerprintRoot()
  );
  bcBlock.setEmblemChainAddress(wirelessBcBlock.getEmblemChainAddress());
  bcBlock.setTxCount(wirelessBcBlock.getTxCount());
  const wirelessTxs = wirelessBcBlock.getTxsList();
  const txs = [];
  for (const wirelessTransaction of wirelessTxs) {
    const transaction = decodeWirelessTransactionForBcnode(
      wirelessTransaction,
      false
    );
    txs.push(transaction);
  }
  bcBlock.setTxsList(txs);
  bcBlock.setTxFeeBase(wirelessBcBlock.getTxFeeBase());
  bcBlock.setTxDistanceSumLimit(wirelessBcBlock.getTxDistanceSumLimit());
  bcBlock.setBlockchainHeadersCount(
    wirelessBcBlock.getBlockchainHeadersCount()
  );

  const headers = new BlockchainHeaders();
  const wirelessHeaders = wirelessBcBlock.getBlockchainHeaders();
  for (const chain of ["Btc", "Eth", "Lsk", "Neo", "Wav"]) {
    const getter = `get${chain}List`;
    const setter = `set${chain}List`;
    const wirelessBcBlockList = wirelessHeaders[getter]();
    const bcBlockList = [];

    for (const wirelessHeader of wirelessBcBlockList) {
      const header = new BlockchainHeader();
      header.setBlockchain(wirelessHeader.getBlockchain());
      header.setHash(wirelessHeader.getHash());
      header.setPreviousHash(wirelessHeader.getPreviousHash());
      header.setTimestamp(wirelessHeader.getTimestamp());
      header.setHeight(wirelessHeader.getHeight());
      header.setMerkleRoot(wirelessHeader.getMerkleRoot());
      header.setBlockchainConfirmationsInParentCount(
        wirelessHeader.getBlockchainConfirmationsInParentCount()
      );

      const wirelessMarkedTransactions = wirelessHeader.getMarkedTxsList();
      const markedTransactions = [];
      for (const wmtx of wirelessMarkedTransactions) {
        const markedTransaction = new MarkedTransaction();
        markedTransaction.setValue(wmtx.getValue());
        markedTransaction.setHash(wmtx.getHash());
        markedTransaction.setId(wmtx.getId());
        markedTransaction.setToken(wmtx.getToken());
        markedTransaction.setAddrFrom(wmtx.getAddrFrom());
        markedTransaction.setAddrTo(wmtx.getAddrTo());
        markedTransaction.setBlockHeight(wmtx.getBlockHeight());
        markedTransaction.setIndex(wmtx.getIndex());
        markedTransaction.setBlockHash(wmtx.getBlockHash());
        markedTransactions.push(markedTransaction);
      }
      header.setMarkedTxsList(markedTransactions);
      header.setMarkedTxCount(wirelessHeader.getMarkedTxCount());
      bcBlockList.push(header);
    }

    headers[setter](bcBlockList);
  }
  bcBlock.setBlockchainHeaders(headers);
  bcBlock.setBlockchainFingerprintsRoot(
    Buffer.from(wirelessBcBlock.getBlockchainFingerprintsRoot_asU8()).toString(
      "hex"
    )
  );

  return bcBlock.serializeBinary();
}

function encodeTransactionForWireless(
  inputTransaction,
  isInputSerialized = true
) {
  let transaction;
  if (isInputSerialized) {
    transaction = Transaction.deserializeBinary(inputTransaction);
  } else {
    transaction = inputTransaction;
  }
  const wirelessTransaction = new WirelessTransaction();
  wirelessTransaction.setVersion(transaction.getVersion());
  wirelessTransaction.setNonce(transaction.getNonce());
  wirelessTransaction.setHash(
    new Uint8Array(Buffer.from(transaction.getHash(), "hex"))
  );
  wirelessTransaction.setOverline(transaction.getOverline());

  const inputs = transaction.getInputsList();
  const wirelessInputs = [];
  for (const input of inputs) {
    const wirelessInput = new WirelessTransactionInput();
    const wirelessOutPoint = new WirelessOutPoint();
    const outPoint = input.getOutPoint();
    wirelessOutPoint.setValue(outPoint.getValue());
    wirelessOutPoint.setHash(
      new Uint8Array(Buffer.from(outPoint.getHash(), "hex"))
    );
    wirelessOutPoint.setIndex(outPoint.getIndex());
    wirelessInput.setOutPoint(wirelessOutPoint);
    wirelessInput.setScriptLength(input.getScriptLength());
    wirelessInput.setInputScript(input.getInputScript());
    wirelessInputs.push(wirelessInput);
  }
  wirelessTransaction.setInputsList(wirelessInputs);

  const outputs = transaction.getOutputsList();
  const wirelessOutputs = [];
  for (const output of outputs) {
    const wirelessOutput = new WirelessTransactionOutput();
    wirelessOutput.setValue(output.getValue());
    wirelessOutput.setUnit(output.getUnit());
    wirelessOutput.setScriptLength(output.getScriptLength());
    wirelessOutput.setOutputScript(output.getOutputScript());
    wirelessOutputs.push(wirelessOutput);
  }
  wirelessTransaction.setOutputsList(wirelessOutputs);

  wirelessTransaction.setNinCount(transaction.getNinCount());
  wirelessTransaction.setNoutCount(transaction.getNoutCount());
  wirelessTransaction.setLockTime(transaction.getLockTime());

  if (isInputSerialized) {
    return wirelessTransaction.serializeBinary();
  }

  return wirelessTransaction;
}

function decodeWirelessTransactionForBcnode(
  inputWirelessTransaction,
  isInputSerialized = true
) {
  let wirelessTransaction;
  if (isInputSerialized) {
    wirelessTransaction = WirelessTransaction.deserializeBinary(
      inputWirelessTransaction
    );
  } else {
    wirelessTransaction = inputWirelessTransaction;
  }
  const transaction = new WirelessTransaction();
  transaction.setVersion(wirelessTransaction.getVersion());
  transaction.setNonce(wirelessTransaction.getNonce());
  transaction.setHash(
    Buffer.from(wirelessTransaction.getHash_asU8()).toString("hex")
  );
  transaction.setOverline(wirelessTransaction.getOverline());

  const wirelessInputs = wirelessTransaction.getInputsList();
  const inputs = [];
  for (const wirelessInput of wirelessInputs) {
    const input = new TransactionInput();
    const outPoint = new WirelessOutPoint();
    const wirelessOutPoint = wirelessInput.getOutPoint();

    outPoint.setValue(wirelessOutPoint.getValue());
    outPoint.setHash(
      Buffer.from(wirelessOutPoint.getHash_asU8()).toString("hex")
    );
    outPoint.setIndex(wirelessOutPoint.getIndex());
    input.setOutPoint(outPoint);
    input.setScriptLength(wirelessInput.getScriptLength());
    input.setInputScript(wirelessInput.getInputScript());
    inputs.push(input);
  }
  transaction.setInputsList(inputs);

  const wirelessOutputs = wirelessTransaction.getOutputsList();
  const outputs = [];
  for (const wirelessOutput of wirelessOutputs) {
    const output = new TransactionOutput();
    output.setValue(wirelessOutput.getValue());
    output.setUnit(wirelessOutput.getUnit());
    output.setScriptLength(wirelessOutput.getScriptLength());
    output.setOutputScript(wirelessOutput.getOutputScript());
    outputs.push(output);
  }
  transaction.setOutputsList(outputs);

  transaction.setNinCount(wirelessTransaction.getNinCount());
  transaction.setNoutCount(wirelessTransaction.getNoutCount());
  transaction.setLockTime(wirelessTransaction.getLockTime());

  if (isInputSerialized) {
    return transaction.serializeBinary();
  }

  return transaction;
}

const codec = {
  encodeBcBlockForWireless,
  encodeTransactionForWireless,
  decodeWirelessBcBlockForBcnode,
  decodeWirelessTransactionForBcnode,
};

module.exports = { codec };
