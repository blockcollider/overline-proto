// package: bc.wireless
// file: wireless.proto

import * as jspb from "google-protobuf";

export class WirelessBcBlock extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getPreviousHash(): Uint8Array | string;
  getPreviousHash_asU8(): Uint8Array;
  getPreviousHash_asB64(): string;
  setPreviousHash(value: Uint8Array | string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getSchemaVersion(): number;
  setSchemaVersion(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getMiner(): string;
  setMiner(value: string): void;

  getDifficulty(): Uint8Array | string;
  getDifficulty_asU8(): Uint8Array;
  getDifficulty_asB64(): string;
  setDifficulty(value: Uint8Array | string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getMerkleRoot(): Uint8Array | string;
  getMerkleRoot_asU8(): Uint8Array;
  getMerkleRoot_asB64(): string;
  setMerkleRoot(value: Uint8Array | string): void;

  getChainRoot(): Uint8Array | string;
  getChainRoot_asU8(): Uint8Array;
  getChainRoot_asB64(): string;
  setChainRoot(value: Uint8Array | string): void;

  getDistance(): Uint8Array | string;
  getDistance_asU8(): Uint8Array;
  getDistance_asB64(): string;
  setDistance(value: Uint8Array | string): void;

  getTotalDistance(): Uint8Array | string;
  getTotalDistance_asU8(): Uint8Array;
  getTotalDistance_asB64(): string;
  setTotalDistance(value: Uint8Array | string): void;

  getNonce(): string;
  setNonce(value: string): void;

  getNrgGrant(): number;
  setNrgGrant(value: number): void;

  getTwn(): number;
  setTwn(value: number): void;

  clearTwsList(): void;
  getTwsList(): Array<string>;
  setTwsList(value: Array<string>): void;
  addTws(value: string, index?: number): string;

  getEmblemWeight(): number;
  setEmblemWeight(value: number): void;

  getEmblemChainFingerprintRoot(): string;
  setEmblemChainFingerprintRoot(value: string): void;

  getEmblemChainAddress(): string;
  setEmblemChainAddress(value: string): void;

  getTxCount(): number;
  setTxCount(value: number): void;

  clearTxsList(): void;
  getTxsList(): Array<WirelessTransaction>;
  setTxsList(value: Array<WirelessTransaction>): void;
  addTxs(value?: WirelessTransaction, index?: number): WirelessTransaction;

  getTxFeeBase(): number;
  setTxFeeBase(value: number): void;

  getTxDistanceSumLimit(): number;
  setTxDistanceSumLimit(value: number): void;

  getBlockchainHeadersCount(): number;
  setBlockchainHeadersCount(value: number): void;

  hasBlockchainHeaders(): boolean;
  clearBlockchainHeaders(): void;
  getBlockchainHeaders(): WirelessBlockchainHeaders | undefined;
  setBlockchainHeaders(value?: WirelessBlockchainHeaders): void;

  getBlockchainFingerprintsRoot(): Uint8Array | string;
  getBlockchainFingerprintsRoot_asU8(): Uint8Array;
  getBlockchainFingerprintsRoot_asB64(): string;
  setBlockchainFingerprintsRoot(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WirelessBcBlock.AsObject;
  static toObject(includeInstance: boolean, msg: WirelessBcBlock): WirelessBcBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WirelessBcBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WirelessBcBlock;
  static deserializeBinaryFromReader(message: WirelessBcBlock, reader: jspb.BinaryReader): WirelessBcBlock;
}

export namespace WirelessBcBlock {
  export type AsObject = {
    hash: Uint8Array | string,
    previousHash: Uint8Array | string,
    version: number,
    schemaVersion: number,
    height: number,
    miner: string,
    difficulty: Uint8Array | string,
    timestamp: number,
    merkleRoot: Uint8Array | string,
    chainRoot: Uint8Array | string,
    distance: Uint8Array | string,
    totalDistance: Uint8Array | string,
    nonce: string,
    nrgGrant: number,
    twn: number,
    twsList: Array<string>,
    emblemWeight: number,
    emblemChainFingerprintRoot: string,
    emblemChainAddress: string,
    txCount: number,
    txsList: Array<WirelessTransaction.AsObject>,
    txFeeBase: number,
    txDistanceSumLimit: number,
    blockchainHeadersCount: number,
    blockchainHeaders?: WirelessBlockchainHeaders.AsObject,
    blockchainFingerprintsRoot: Uint8Array | string,
  }
}

export class WirelessBlockchainHeaders extends jspb.Message {
  clearBtcList(): void;
  getBtcList(): Array<WirelessBlockchainHeader>;
  setBtcList(value: Array<WirelessBlockchainHeader>): void;
  addBtc(value?: WirelessBlockchainHeader, index?: number): WirelessBlockchainHeader;

  clearEthList(): void;
  getEthList(): Array<WirelessBlockchainHeader>;
  setEthList(value: Array<WirelessBlockchainHeader>): void;
  addEth(value?: WirelessBlockchainHeader, index?: number): WirelessBlockchainHeader;

  clearLskList(): void;
  getLskList(): Array<WirelessBlockchainHeader>;
  setLskList(value: Array<WirelessBlockchainHeader>): void;
  addLsk(value?: WirelessBlockchainHeader, index?: number): WirelessBlockchainHeader;

  clearNeoList(): void;
  getNeoList(): Array<WirelessBlockchainHeader>;
  setNeoList(value: Array<WirelessBlockchainHeader>): void;
  addNeo(value?: WirelessBlockchainHeader, index?: number): WirelessBlockchainHeader;

  clearWavList(): void;
  getWavList(): Array<WirelessBlockchainHeader>;
  setWavList(value: Array<WirelessBlockchainHeader>): void;
  addWav(value?: WirelessBlockchainHeader, index?: number): WirelessBlockchainHeader;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WirelessBlockchainHeaders.AsObject;
  static toObject(includeInstance: boolean, msg: WirelessBlockchainHeaders): WirelessBlockchainHeaders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WirelessBlockchainHeaders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WirelessBlockchainHeaders;
  static deserializeBinaryFromReader(message: WirelessBlockchainHeaders, reader: jspb.BinaryReader): WirelessBlockchainHeaders;
}

export namespace WirelessBlockchainHeaders {
  export type AsObject = {
    btcList: Array<WirelessBlockchainHeader.AsObject>,
    ethList: Array<WirelessBlockchainHeader.AsObject>,
    lskList: Array<WirelessBlockchainHeader.AsObject>,
    neoList: Array<WirelessBlockchainHeader.AsObject>,
    wavList: Array<WirelessBlockchainHeader.AsObject>,
  }
}

export class WirelessBlockchainHeader extends jspb.Message {
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
  getMarkedTxsList(): Array<WirelessMarkedTransaction>;
  setMarkedTxsList(value: Array<WirelessMarkedTransaction>): void;
  addMarkedTxs(value?: WirelessMarkedTransaction, index?: number): WirelessMarkedTransaction;

  getMarkedTxCount(): number;
  setMarkedTxCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WirelessBlockchainHeader.AsObject;
  static toObject(includeInstance: boolean, msg: WirelessBlockchainHeader): WirelessBlockchainHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WirelessBlockchainHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WirelessBlockchainHeader;
  static deserializeBinaryFromReader(message: WirelessBlockchainHeader, reader: jspb.BinaryReader): WirelessBlockchainHeader;
}

export namespace WirelessBlockchainHeader {
  export type AsObject = {
    blockchain: string,
    hash: string,
    previousHash: string,
    timestamp: number,
    height: number,
    merkleRoot: string,
    blockchainConfirmationsInParentCount: number,
    markedTxsList: Array<WirelessMarkedTransaction.AsObject>,
    markedTxCount: number,
  }
}

export class WirelessMarkedTransaction extends jspb.Message {
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
  toObject(includeInstance?: boolean): WirelessMarkedTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: WirelessMarkedTransaction): WirelessMarkedTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WirelessMarkedTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WirelessMarkedTransaction;
  static deserializeBinaryFromReader(message: WirelessMarkedTransaction, reader: jspb.BinaryReader): WirelessMarkedTransaction;
}

export namespace WirelessMarkedTransaction {
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

export class WirelessTransaction extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): void;

  getNonce(): string;
  setNonce(value: string): void;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getOverline(): string;
  setOverline(value: string): void;

  getNinCount(): number;
  setNinCount(value: number): void;

  getNoutCount(): number;
  setNoutCount(value: number): void;

  clearInputsList(): void;
  getInputsList(): Array<WirelessTransactionInput>;
  setInputsList(value: Array<WirelessTransactionInput>): void;
  addInputs(value?: WirelessTransactionInput, index?: number): WirelessTransactionInput;

  clearOutputsList(): void;
  getOutputsList(): Array<WirelessTransactionOutput>;
  setOutputsList(value: Array<WirelessTransactionOutput>): void;
  addOutputs(value?: WirelessTransactionOutput, index?: number): WirelessTransactionOutput;

  getLockTime(): number;
  setLockTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WirelessTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: WirelessTransaction): WirelessTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WirelessTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WirelessTransaction;
  static deserializeBinaryFromReader(message: WirelessTransaction, reader: jspb.BinaryReader): WirelessTransaction;
}

export namespace WirelessTransaction {
  export type AsObject = {
    version: number,
    nonce: string,
    hash: Uint8Array | string,
    overline: string,
    ninCount: number,
    noutCount: number,
    inputsList: Array<WirelessTransactionInput.AsObject>,
    outputsList: Array<WirelessTransactionOutput.AsObject>,
    lockTime: number,
  }
}

export class WirelessTransactionInput extends jspb.Message {
  hasOutPoint(): boolean;
  clearOutPoint(): void;
  getOutPoint(): WirelessOutPoint | undefined;
  setOutPoint(value?: WirelessOutPoint): void;

  getScriptLength(): number;
  setScriptLength(value: number): void;

  getInputScript(): Uint8Array | string;
  getInputScript_asU8(): Uint8Array;
  getInputScript_asB64(): string;
  setInputScript(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WirelessTransactionInput.AsObject;
  static toObject(includeInstance: boolean, msg: WirelessTransactionInput): WirelessTransactionInput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WirelessTransactionInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WirelessTransactionInput;
  static deserializeBinaryFromReader(message: WirelessTransactionInput, reader: jspb.BinaryReader): WirelessTransactionInput;
}

export namespace WirelessTransactionInput {
  export type AsObject = {
    outPoint?: WirelessOutPoint.AsObject,
    scriptLength: number,
    inputScript: Uint8Array | string,
  }
}

export class WirelessOutPoint extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getIndex(): number;
  setIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WirelessOutPoint.AsObject;
  static toObject(includeInstance: boolean, msg: WirelessOutPoint): WirelessOutPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WirelessOutPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WirelessOutPoint;
  static deserializeBinaryFromReader(message: WirelessOutPoint, reader: jspb.BinaryReader): WirelessOutPoint;
}

export namespace WirelessOutPoint {
  export type AsObject = {
    value: Uint8Array | string,
    hash: Uint8Array | string,
    index: number,
  }
}

export class WirelessTransactionOutput extends jspb.Message {
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
  toObject(includeInstance?: boolean): WirelessTransactionOutput.AsObject;
  static toObject(includeInstance: boolean, msg: WirelessTransactionOutput): WirelessTransactionOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WirelessTransactionOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WirelessTransactionOutput;
  static deserializeBinaryFromReader(message: WirelessTransactionOutput, reader: jspb.BinaryReader): WirelessTransactionOutput;
}

export namespace WirelessTransactionOutput {
  export type AsObject = {
    value: Uint8Array | string,
    unit: Uint8Array | string,
    scriptLength: number,
    outputScript: Uint8Array | string,
  }
}

