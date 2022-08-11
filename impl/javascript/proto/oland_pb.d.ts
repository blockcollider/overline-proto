// package: bc.oland
// file: oland.proto

import * as jspb from "google-protobuf";

export class Plot extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getPlotNumber(): number;
  setPlotNumber(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  getBlockchain(): string;
  setBlockchain(value: string): void;

  getDistance(): number;
  setDistance(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getPlotAttrsCount(): number;
  setPlotAttrsCount(value: number): void;

  getNonce(): Uint8Array | string;
  getNonce_asU8(): Uint8Array;
  getNonce_asB64(): string;
  setNonce(value: Uint8Array | string): void;

  getMerkleRoot(): Uint8Array | string;
  getMerkleRoot_asU8(): Uint8Array;
  getMerkleRoot_asB64(): string;
  setMerkleRoot(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getOwnerCount(): number;
  setOwnerCount(value: number): void;

  getMarkedTxHashesCount(): number;
  setMarkedTxHashesCount(value: number): void;

  getEmbHashesCount(): number;
  setEmbHashesCount(value: number): void;

  clearOwnersList(): void;
  getOwnersList(): Array<Uint8Array | string>;
  getOwnersList_asU8(): Array<Uint8Array>;
  getOwnersList_asB64(): Array<string>;
  setOwnersList(value: Array<Uint8Array | string>): void;
  addOwners(value: Uint8Array | string, index?: number): Uint8Array | string;

  clearMarkedTxsHashesList(): void;
  getMarkedTxsHashesList(): Array<Uint8Array | string>;
  getMarkedTxsHashesList_asU8(): Array<Uint8Array>;
  getMarkedTxsHashesList_asB64(): Array<string>;
  setMarkedTxsHashesList(value: Array<Uint8Array | string>): void;
  addMarkedTxsHashes(value: Uint8Array | string, index?: number): Uint8Array | string;

  clearEmbHashesList(): void;
  getEmbHashesList(): Array<Uint8Array | string>;
  getEmbHashesList_asU8(): Array<Uint8Array>;
  getEmbHashesList_asB64(): Array<string>;
  setEmbHashesList(value: Array<Uint8Array | string>): void;
  addEmbHashes(value: Uint8Array | string, index?: number): Uint8Array | string;

  clearAttributesList(): void;
  getAttributesList(): Array<PlotAttribute>;
  setAttributesList(value: Array<PlotAttribute>): void;
  addAttributes(value?: PlotAttribute, index?: number): PlotAttribute;

  clearPanelsList(): void;
  getPanelsList(): Array<PlotPanel>;
  setPanelsList(value: Array<PlotPanel>): void;
  addPanels(value?: PlotPanel, index?: number): PlotPanel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Plot.AsObject;
  static toObject(includeInstance: boolean, msg: Plot): Plot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Plot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Plot;
  static deserializeBinaryFromReader(message: Plot, reader: jspb.BinaryReader): Plot;
}

export namespace Plot {
  export type AsObject = {
    hash: Uint8Array | string,
    plotNumber: number,
    version: number,
    blockchain: string,
    distance: number,
    timestamp: number,
    plotAttrsCount: number,
    nonce: Uint8Array | string,
    merkleRoot: Uint8Array | string,
    signature: Uint8Array | string,
    ownerCount: number,
    markedTxHashesCount: number,
    embHashesCount: number,
    ownersList: Array<Uint8Array | string>,
    markedTxsHashesList: Array<Uint8Array | string>,
    embHashesList: Array<Uint8Array | string>,
    attributesList: Array<PlotAttribute.AsObject>,
    panelsList: Array<PlotPanel.AsObject>,
  }
}

export class PlotAttribute extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getType(): Uint8Array | string;
  getType_asU8(): Uint8Array;
  getType_asB64(): string;
  setType(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlotAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: PlotAttribute): PlotAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlotAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlotAttribute;
  static deserializeBinaryFromReader(message: PlotAttribute, reader: jspb.BinaryReader): PlotAttribute;
}

export namespace PlotAttribute {
  export type AsObject = {
    name: string,
    value: string,
    type: Uint8Array | string,
  }
}

export class PlotPanel extends jspb.Message {
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

  getShardHash(): Uint8Array | string;
  getShardHash_asU8(): Uint8Array;
  getShardHash_asB64(): string;
  setShardHash(value: Uint8Array | string): void;

  getShardNonce(): Uint8Array | string;
  getShardNonce_asU8(): Uint8Array;
  getShardNonce_asB64(): string;
  setShardNonce(value: Uint8Array | string): void;

  getPartialProof(): Uint8Array | string;
  getPartialProof_asU8(): Uint8Array;
  getPartialProof_asB64(): string;
  setPartialProof(value: Uint8Array | string): void;

  getPartialSignature(): Uint8Array | string;
  getPartialSignature_asU8(): Uint8Array;
  getPartialSignature_asB64(): string;
  setPartialSignature(value: Uint8Array | string): void;

  getTxCount(): number;
  setTxCount(value: number): void;

  clearTxsList(): void;
  getTxsList(): Array<Uint8Array | string>;
  getTxsList_asU8(): Array<Uint8Array>;
  getTxsList_asB64(): Array<string>;
  setTxsList(value: Array<Uint8Array | string>): void;
  addTxs(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlotPanel.AsObject;
  static toObject(includeInstance: boolean, msg: PlotPanel): PlotPanel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlotPanel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlotPanel;
  static deserializeBinaryFromReader(message: PlotPanel, reader: jspb.BinaryReader): PlotPanel;
}

export namespace PlotPanel {
  export type AsObject = {
    hash: Uint8Array | string,
    previousHash: Uint8Array | string,
    version: number,
    shardHash: Uint8Array | string,
    shardNonce: Uint8Array | string,
    partialProof: Uint8Array | string,
    partialSignature: Uint8Array | string,
    txCount: number,
    txsList: Array<Uint8Array | string>,
  }
}

