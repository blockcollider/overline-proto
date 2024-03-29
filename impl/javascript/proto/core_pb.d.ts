// package: bc.core
// file: core.proto

import * as jspb from "google-protobuf";

export class Null extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Null.AsObject;
  static toObject(includeInstance: boolean, msg: Null): Null.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Null, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Null;
  static deserializeBinaryFromReader(message: Null, reader: jspb.BinaryReader): Null;
}

export namespace Null {
  export type AsObject = {
  }
}

export class Block extends jspb.Message {
  getBlockchain(): string;
  setBlockchain(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  getPreviousHash(): string;
  setPreviousHash(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getMerkleRoot(): string;
  setMerkleRoot(value: string): void;

  getMarkedTxCount(): number;
  setMarkedTxCount(value: number): void;

  clearMarkedTxsList(): void;
  getMarkedTxsList(): Array<MarkedTransaction>;
  setMarkedTxsList(value: Array<MarkedTransaction>): void;
  addMarkedTxs(value?: MarkedTransaction, index?: number): MarkedTransaction;

  getDifficulty(): number;
  setDifficulty(value: number): void;

  getNonce(): Uint8Array | string;
  getNonce_asU8(): Uint8Array;
  getNonce_asB64(): string;
  setNonce(value: Uint8Array | string): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    blockchain: string,
    hash: string,
    previousHash: string,
    timestamp: number,
    height: number,
    merkleRoot: string,
    markedTxCount: number,
    markedTxsList: Array<MarkedTransaction.AsObject>,
    difficulty: number,
    nonce: Uint8Array | string,
    proof: Uint8Array | string,
  }
}

export class TetheredWork extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): void;

  getBlockchain(): string;
  setBlockchain(value: string): void;

  getBlockHash(): Uint8Array | string;
  getBlockHash_asU8(): Uint8Array;
  getBlockHash_asB64(): string;
  setBlockHash(value: Uint8Array | string): void;

  getNonce(): Uint8Array | string;
  getNonce_asU8(): Uint8Array;
  getNonce_asB64(): string;
  setNonce(value: Uint8Array | string): void;

  getDifficulty(): number;
  setDifficulty(value: number): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getTxPanel(): Uint8Array | string;
  getTxPanel_asU8(): Uint8Array;
  getTxPanel_asB64(): string;
  setTxPanel(value: Uint8Array | string): void;

  getPoolUrl(): Uint8Array | string;
  getPoolUrl_asU8(): Uint8Array;
  getPoolUrl_asB64(): string;
  setPoolUrl(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TetheredWork.AsObject;
  static toObject(includeInstance: boolean, msg: TetheredWork): TetheredWork.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TetheredWork, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TetheredWork;
  static deserializeBinaryFromReader(message: TetheredWork, reader: jspb.BinaryReader): TetheredWork;
}

export namespace TetheredWork {
  export type AsObject = {
    version: number,
    blockchain: string,
    blockHash: Uint8Array | string,
    nonce: Uint8Array | string,
    difficulty: number,
    signature: Uint8Array | string,
    txPanel: Uint8Array | string,
    poolUrl: Uint8Array | string,
  }
}

export class MarkedTransaction extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getHash(): string;
  setHash(value: string): void;

  getId(): string;
  setId(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  getAddrFrom(): string;
  setAddrFrom(value: string): void;

  getAddrTo(): string;
  setAddrTo(value: string): void;

  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  getIndex(): number;
  setIndex(value: number): void;

  getBlockHash(): string;
  setBlockHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkedTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: MarkedTransaction): MarkedTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkedTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkedTransaction;
  static deserializeBinaryFromReader(message: MarkedTransaction, reader: jspb.BinaryReader): MarkedTransaction;
}

export namespace MarkedTransaction {
  export type AsObject = {
    value: Uint8Array | string,
    hash: string,
    id: string,
    token: string,
    addrFrom: string,
    addrTo: string,
    blockHeight: number,
    index: number,
    blockHash: string,
  }
}

export class BlockchainHeaders extends jspb.Message {
  clearBtcList(): void;
  getBtcList(): Array<BlockchainHeader>;
  setBtcList(value: Array<BlockchainHeader>): void;
  addBtc(value?: BlockchainHeader, index?: number): BlockchainHeader;

  clearEthList(): void;
  getEthList(): Array<BlockchainHeader>;
  setEthList(value: Array<BlockchainHeader>): void;
  addEth(value?: BlockchainHeader, index?: number): BlockchainHeader;

  clearLskList(): void;
  getLskList(): Array<BlockchainHeader>;
  setLskList(value: Array<BlockchainHeader>): void;
  addLsk(value?: BlockchainHeader, index?: number): BlockchainHeader;

  clearNeoList(): void;
  getNeoList(): Array<BlockchainHeader>;
  setNeoList(value: Array<BlockchainHeader>): void;
  addNeo(value?: BlockchainHeader, index?: number): BlockchainHeader;

  clearWavList(): void;
  getWavList(): Array<BlockchainHeader>;
  setWavList(value: Array<BlockchainHeader>): void;
  addWav(value?: BlockchainHeader, index?: number): BlockchainHeader;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockchainHeaders.AsObject;
  static toObject(includeInstance: boolean, msg: BlockchainHeaders): BlockchainHeaders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockchainHeaders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockchainHeaders;
  static deserializeBinaryFromReader(message: BlockchainHeaders, reader: jspb.BinaryReader): BlockchainHeaders;
}

export namespace BlockchainHeaders {
  export type AsObject = {
    btcList: Array<BlockchainHeader.AsObject>,
    ethList: Array<BlockchainHeader.AsObject>,
    lskList: Array<BlockchainHeader.AsObject>,
    neoList: Array<BlockchainHeader.AsObject>,
    wavList: Array<BlockchainHeader.AsObject>,
  }
}

export class BcBlock extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  getPreviousHash(): string;
  setPreviousHash(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getSchemaVersion(): number;
  setSchemaVersion(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getMiner(): string;
  setMiner(value: string): void;

  getDifficulty(): string;
  setDifficulty(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getMerkleRoot(): string;
  setMerkleRoot(value: string): void;

  getChainRoot(): string;
  setChainRoot(value: string): void;

  getDistance(): string;
  setDistance(value: string): void;

  getTotalDistance(): string;
  setTotalDistance(value: string): void;

  getNonce(): string;
  setNonce(value: string): void;

  getNrgGrant(): number;
  setNrgGrant(value: number): void;

  getTwn(): number;
  setTwn(value: number): void;

  clearTwsList(): void;
  getTwsList(): Array<TetheredWork>;
  setTwsList(value: Array<TetheredWork>): void;
  addTws(value?: TetheredWork, index?: number): TetheredWork;

  getEmblemWeight(): number;
  setEmblemWeight(value: number): void;

  getEmblemChainFingerprintRoot(): string;
  setEmblemChainFingerprintRoot(value: string): void;

  getEmblemChainAddress(): string;
  setEmblemChainAddress(value: string): void;

  getTxCount(): number;
  setTxCount(value: number): void;

  clearTxsList(): void;
  getTxsList(): Array<Transaction>;
  setTxsList(value: Array<Transaction>): void;
  addTxs(value?: Transaction, index?: number): Transaction;

  getTxFeeBase(): number;
  setTxFeeBase(value: number): void;

  getTxDistanceSumLimit(): number;
  setTxDistanceSumLimit(value: number): void;

  getBlockchainHeadersCount(): number;
  setBlockchainHeadersCount(value: number): void;

  hasBlockchainHeaders(): boolean;
  clearBlockchainHeaders(): void;
  getBlockchainHeaders(): BlockchainHeaders | undefined;
  setBlockchainHeaders(value?: BlockchainHeaders): void;

  getBlockchainFingerprintsRoot(): string;
  setBlockchainFingerprintsRoot(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BcBlock.AsObject;
  static toObject(includeInstance: boolean, msg: BcBlock): BcBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BcBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BcBlock;
  static deserializeBinaryFromReader(message: BcBlock, reader: jspb.BinaryReader): BcBlock;
}

export namespace BcBlock {
  export type AsObject = {
    hash: string,
    previousHash: string,
    version: number,
    schemaVersion: number,
    height: number,
    miner: string,
    difficulty: string,
    timestamp: number,
    merkleRoot: string,
    chainRoot: string,
    distance: string,
    totalDistance: string,
    nonce: string,
    nrgGrant: number,
    twn: number,
    twsList: Array<TetheredWork.AsObject>,
    emblemWeight: number,
    emblemChainFingerprintRoot: string,
    emblemChainAddress: string,
    txCount: number,
    txsList: Array<Transaction.AsObject>,
    txFeeBase: number,
    txDistanceSumLimit: number,
    blockchainHeadersCount: number,
    blockchainHeaders?: BlockchainHeaders.AsObject,
    blockchainFingerprintsRoot: string,
  }
}

export class OutPoint extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getHash(): string;
  setHash(value: string): void;

  getIndex(): number;
  setIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutPoint.AsObject;
  static toObject(includeInstance: boolean, msg: OutPoint): OutPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OutPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutPoint;
  static deserializeBinaryFromReader(message: OutPoint, reader: jspb.BinaryReader): OutPoint;
}

export namespace OutPoint {
  export type AsObject = {
    value: Uint8Array | string,
    hash: string,
    index: number,
  }
}

export class WalletOutPoint extends jspb.Message {
  hasOutpoint(): boolean;
  clearOutpoint(): void;
  getOutpoint(): OutPoint | undefined;
  setOutpoint(value?: OutPoint): void;

  getCallbackScript(): Uint8Array | string;
  getCallbackScript_asU8(): Uint8Array;
  getCallbackScript_asB64(): string;
  setCallbackScript(value: Uint8Array | string): void;

  getOriginalScript(): Uint8Array | string;
  getOriginalScript_asU8(): Uint8Array;
  getOriginalScript_asB64(): string;
  setOriginalScript(value: Uint8Array | string): void;

  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletOutPoint.AsObject;
  static toObject(includeInstance: boolean, msg: WalletOutPoint): WalletOutPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WalletOutPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletOutPoint;
  static deserializeBinaryFromReader(message: WalletOutPoint, reader: jspb.BinaryReader): WalletOutPoint;
}

export namespace WalletOutPoint {
  export type AsObject = {
    outpoint?: OutPoint.AsObject,
    callbackScript: Uint8Array | string,
    originalScript: Uint8Array | string,
    blockHeight: number,
  }
}

export class WalletData extends jspb.Message {
  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  getBlockHash(): string;
  setBlockHash(value: string): void;

  clearUnconfirmedSpendableOutpointsList(): void;
  getUnconfirmedSpendableOutpointsList(): Array<WalletOutPoint>;
  setUnconfirmedSpendableOutpointsList(value: Array<WalletOutPoint>): void;
  addUnconfirmedSpendableOutpoints(value?: WalletOutPoint, index?: number): WalletOutPoint;

  clearSpendableOutpointsList(): void;
  getSpendableOutpointsList(): Array<WalletOutPoint>;
  setSpendableOutpointsList(value: Array<WalletOutPoint>): void;
  addSpendableOutpoints(value?: WalletOutPoint, index?: number): WalletOutPoint;

  clearCollateralizedMakerOutpointsList(): void;
  getCollateralizedMakerOutpointsList(): Array<WalletOutPoint>;
  setCollateralizedMakerOutpointsList(value: Array<WalletOutPoint>): void;
  addCollateralizedMakerOutpoints(value?: WalletOutPoint, index?: number): WalletOutPoint;

  clearCollateralizedUnmatchedOutpointsList(): void;
  getCollateralizedUnmatchedOutpointsList(): Array<WalletOutPoint>;
  setCollateralizedUnmatchedOutpointsList(value: Array<WalletOutPoint>): void;
  addCollateralizedUnmatchedOutpoints(value?: WalletOutPoint, index?: number): WalletOutPoint;

  clearCollateralizedMatchedOutpointsList(): void;
  getCollateralizedMatchedOutpointsList(): Array<WalletOutPoint>;
  setCollateralizedMatchedOutpointsList(value: Array<WalletOutPoint>): void;
  addCollateralizedMatchedOutpoints(value?: WalletOutPoint, index?: number): WalletOutPoint;

  clearCollateralizedSpendableOutpointsList(): void;
  getCollateralizedSpendableOutpointsList(): Array<WalletOutPoint>;
  setCollateralizedSpendableOutpointsList(value: Array<WalletOutPoint>): void;
  addCollateralizedSpendableOutpoints(value?: WalletOutPoint, index?: number): WalletOutPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletData.AsObject;
  static toObject(includeInstance: boolean, msg: WalletData): WalletData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WalletData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletData;
  static deserializeBinaryFromReader(message: WalletData, reader: jspb.BinaryReader): WalletData;
}

export namespace WalletData {
  export type AsObject = {
    blockHeight: number,
    blockHash: string,
    unconfirmedSpendableOutpointsList: Array<WalletOutPoint.AsObject>,
    spendableOutpointsList: Array<WalletOutPoint.AsObject>,
    collateralizedMakerOutpointsList: Array<WalletOutPoint.AsObject>,
    collateralizedUnmatchedOutpointsList: Array<WalletOutPoint.AsObject>,
    collateralizedMatchedOutpointsList: Array<WalletOutPoint.AsObject>,
    collateralizedSpendableOutpointsList: Array<WalletOutPoint.AsObject>,
  }
}

export class Transaction extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): void;

  getNonce(): string;
  setNonce(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  getOverline(): string;
  setOverline(value: string): void;

  getNinCount(): number;
  setNinCount(value: number): void;

  getNoutCount(): number;
  setNoutCount(value: number): void;

  clearInputsList(): void;
  getInputsList(): Array<TransactionInput>;
  setInputsList(value: Array<TransactionInput>): void;
  addInputs(value?: TransactionInput, index?: number): TransactionInput;

  clearOutputsList(): void;
  getOutputsList(): Array<TransactionOutput>;
  setOutputsList(value: Array<TransactionOutput>): void;
  addOutputs(value?: TransactionOutput, index?: number): TransactionOutput;

  getLockTime(): number;
  setLockTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    version: number,
    nonce: string,
    hash: string,
    overline: string,
    ninCount: number,
    noutCount: number,
    inputsList: Array<TransactionInput.AsObject>,
    outputsList: Array<TransactionOutput.AsObject>,
    lockTime: number,
  }
}

export class UnspentTransactions extends jspb.Message {
  clearUtxoList(): void;
  getUtxoList(): Array<string>;
  setUtxoList(value: Array<string>): void;
  addUtxo(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnspentTransactions.AsObject;
  static toObject(includeInstance: boolean, msg: UnspentTransactions): UnspentTransactions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnspentTransactions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnspentTransactions;
  static deserializeBinaryFromReader(message: UnspentTransactions, reader: jspb.BinaryReader): UnspentTransactions;
}

export namespace UnspentTransactions {
  export type AsObject = {
    utxoList: Array<string>,
  }
}

export class TransactionInput extends jspb.Message {
  hasOutPoint(): boolean;
  clearOutPoint(): void;
  getOutPoint(): OutPoint | undefined;
  setOutPoint(value?: OutPoint): void;

  getScriptLength(): number;
  setScriptLength(value: number): void;

  getInputScript(): Uint8Array | string;
  getInputScript_asU8(): Uint8Array;
  getInputScript_asB64(): string;
  setInputScript(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionInput.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionInput): TransactionInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionInput;
  static deserializeBinaryFromReader(message: TransactionInput, reader: jspb.BinaryReader): TransactionInput;
}

export namespace TransactionInput {
  export type AsObject = {
    outPoint?: OutPoint.AsObject,
    scriptLength: number,
    inputScript: Uint8Array | string,
  }
}

export class Utxos extends jspb.Message {
  clearUtxoList(): void;
  getUtxoList(): Array<Utxo>;
  setUtxoList(value: Array<Utxo>): void;
  addUtxo(value?: Utxo, index?: number): Utxo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Utxos.AsObject;
  static toObject(includeInstance: boolean, msg: Utxos): Utxos.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Utxos, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Utxos;
  static deserializeBinaryFromReader(message: Utxos, reader: jspb.BinaryReader): Utxos;
}

export namespace Utxos {
  export type AsObject = {
    utxoList: Array<Utxo.AsObject>,
  }
}

export class Utxo extends jspb.Message {
  hasOutput(): boolean;
  clearOutput(): void;
  getOutput(): TransactionOutput | undefined;
  setOutput(value?: TransactionOutput): void;

  getTxHash(): string;
  setTxHash(value: string): void;

  getTxIndex(): number;
  setTxIndex(value: number): void;

  getBlockHash(): string;
  setBlockHash(value: string): void;

  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  getCoinbase(): boolean;
  setCoinbase(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Utxo.AsObject;
  static toObject(includeInstance: boolean, msg: Utxo): Utxo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Utxo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Utxo;
  static deserializeBinaryFromReader(message: Utxo, reader: jspb.BinaryReader): Utxo;
}

export namespace Utxo {
  export type AsObject = {
    output?: TransactionOutput.AsObject,
    txHash: string,
    txIndex: number,
    blockHash: string,
    blockHeight: number,
    coinbase: boolean,
  }
}

export class TransactionOutput extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getUnit(): Uint8Array | string;
  getUnit_asU8(): Uint8Array;
  getUnit_asB64(): string;
  setUnit(value: Uint8Array | string): void;

  getScriptLength(): number;
  setScriptLength(value: number): void;

  getOutputScript(): Uint8Array | string;
  getOutputScript_asU8(): Uint8Array;
  getOutputScript_asB64(): string;
  setOutputScript(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionOutput.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionOutput): TransactionOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionOutput;
  static deserializeBinaryFromReader(message: TransactionOutput, reader: jspb.BinaryReader): TransactionOutput;
}

export namespace TransactionOutput {
  export type AsObject = {
    value: Uint8Array | string,
    unit: Uint8Array | string,
    scriptLength: number,
    outputScript: Uint8Array | string,
  }
}

export class BlockchainHeader extends jspb.Message {
  getBlockchain(): string;
  setBlockchain(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  getPreviousHash(): string;
  setPreviousHash(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getMerkleRoot(): string;
  setMerkleRoot(value: string): void;

  getBlockchainConfirmationsInParentCount(): number;
  setBlockchainConfirmationsInParentCount(value: number): void;

  clearMarkedTxsList(): void;
  getMarkedTxsList(): Array<MarkedTransaction>;
  setMarkedTxsList(value: Array<MarkedTransaction>): void;
  addMarkedTxs(value?: MarkedTransaction, index?: number): MarkedTransaction;

  getMarkedTxCount(): number;
  setMarkedTxCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockchainHeader.AsObject;
  static toObject(includeInstance: boolean, msg: BlockchainHeader): BlockchainHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockchainHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockchainHeader;
  static deserializeBinaryFromReader(message: BlockchainHeader, reader: jspb.BinaryReader): BlockchainHeader;
}

export namespace BlockchainHeader {
  export type AsObject = {
    blockchain: string,
    hash: string,
    previousHash: string,
    timestamp: number,
    height: number,
    merkleRoot: string,
    blockchainConfirmationsInParentCount: number,
    markedTxsList: Array<MarkedTransaction.AsObject>,
    markedTxCount: number,
  }
}

export class AppVersion extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  getCommit(): string;
  setCommit(value: string): void;

  getDbVersion(): number;
  setDbVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppVersion.AsObject;
  static toObject(includeInstance: boolean, msg: AppVersion): AppVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppVersion;
  static deserializeBinaryFromReader(message: AppVersion, reader: jspb.BinaryReader): AppVersion;
}

export namespace AppVersion {
  export type AsObject = {
    version: string,
    commit: string,
    dbVersion: number,
  }
}

