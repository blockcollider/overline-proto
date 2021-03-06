// package: bc.exchange
// file: bc.proto

import * as jspb from "google-protobuf";
import * as core_pb from "./core_pb";

export class HelpResponse extends jspb.Message {
  getHelpText(): string;
  setHelpText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelpResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelpResponse): HelpResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelpResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelpResponse;
  static deserializeBinaryFromReader(message: HelpResponse, reader: jspb.BinaryReader): HelpResponse;
}

export namespace HelpResponse {
  export type AsObject = {
    helpText: string,
  }
}

export class StatsResponse extends jspb.Message {
  getCalls(): number;
  setCalls(value: number): void;

  getLatestGpuMinerUpdate(): number;
  setLatestGpuMinerUpdate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatsResponse): StatsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsResponse;
  static deserializeBinaryFromReader(message: StatsResponse, reader: jspb.BinaryReader): StatsResponse;
}

export namespace StatsResponse {
  export type AsObject = {
    calls: number,
    latestGpuMinerUpdate: number,
  }
}

export class RpcTransaction extends jspb.Message {
  getFromAddr(): string;
  setFromAddr(value: string): void;

  getToAddr(): string;
  setToAddr(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getTxFee(): string;
  setTxFee(value: string): void;

  getPrivateKeyHex(): string;
  setPrivateKeyHex(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RpcTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: RpcTransaction): RpcTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RpcTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RpcTransaction;
  static deserializeBinaryFromReader(message: RpcTransaction, reader: jspb.BinaryReader): RpcTransaction;
}

export namespace RpcTransaction {
  export type AsObject = {
    fromAddr: string,
    toAddr: string,
    amount: string,
    txFee: string,
    privateKeyHex: string,
  }
}

export class RpcFeedTransactionRequest extends jspb.Message {
  getOwnerAddr(): string;
  setOwnerAddr(value: string): void;

  getFeedAddr(): string;
  setFeedAddr(value: string): void;

  getDataType(): FeedTransactionDataTypeMap[keyof FeedTransactionDataTypeMap];
  setDataType(value: FeedTransactionDataTypeMap[keyof FeedTransactionDataTypeMap]): void;

  getDataLength(): number;
  setDataLength(value: number): void;

  getData(): string;
  setData(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getTxFee(): string;
  setTxFee(value: string): void;

  getTxPart(): string;
  setTxPart(value: string): void;

  getTxPanel(): string;
  setTxPanel(value: string): void;

  getTxNonce(): string;
  setTxNonce(value: string): void;

  getMinimumDistance(): string;
  setMinimumDistance(value: string): void;

  getPrivateKeyHex(): string;
  setPrivateKeyHex(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RpcFeedTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RpcFeedTransactionRequest): RpcFeedTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RpcFeedTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RpcFeedTransactionRequest;
  static deserializeBinaryFromReader(message: RpcFeedTransactionRequest, reader: jspb.BinaryReader): RpcFeedTransactionRequest;
}

export namespace RpcFeedTransactionRequest {
  export type AsObject = {
    ownerAddr: string,
    feedAddr: string,
    dataType: FeedTransactionDataTypeMap[keyof FeedTransactionDataTypeMap],
    dataLength: number,
    data: string,
    amount: string,
    txFee: string,
    txPart: string,
    txPanel: string,
    txNonce: string,
    minimumDistance: string,
    privateKeyHex: string,
  }
}

export class RpcUpdateFeedTransactionRequest extends jspb.Message {
  getOwnerAddr(): string;
  setOwnerAddr(value: string): void;

  getFeedAddr(): string;
  setFeedAddr(value: string): void;

  getSenderAddr(): string;
  setSenderAddr(value: string): void;

  getDataType(): FeedTransactionDataTypeMap[keyof FeedTransactionDataTypeMap];
  setDataType(value: FeedTransactionDataTypeMap[keyof FeedTransactionDataTypeMap]): void;

  getDataLength(): number;
  setDataLength(value: number): void;

  getData(): string;
  setData(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getTxFee(): string;
  setTxFee(value: string): void;

  getTxPanel(): string;
  setTxPanel(value: string): void;

  getTxPart(): string;
  setTxPart(value: string): void;

  getTxNonce(): string;
  setTxNonce(value: string): void;

  getMinimumDistance(): string;
  setMinimumDistance(value: string): void;

  getPrivateKeyHex(): string;
  setPrivateKeyHex(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RpcUpdateFeedTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RpcUpdateFeedTransactionRequest): RpcUpdateFeedTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RpcUpdateFeedTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RpcUpdateFeedTransactionRequest;
  static deserializeBinaryFromReader(message: RpcUpdateFeedTransactionRequest, reader: jspb.BinaryReader): RpcUpdateFeedTransactionRequest;
}

export namespace RpcUpdateFeedTransactionRequest {
  export type AsObject = {
    ownerAddr: string,
    feedAddr: string,
    senderAddr: string,
    dataType: FeedTransactionDataTypeMap[keyof FeedTransactionDataTypeMap],
    dataLength: number,
    data: string,
    amount: string,
    txFee: string,
    txPanel: string,
    txPart: string,
    txNonce: string,
    minimumDistance: string,
    privateKeyHex: string,
  }
}

export class RpcTransactionResponse extends jspb.Message {
  getStatus(): RpcTransactionResponseStatusMap[keyof RpcTransactionResponseStatusMap];
  setStatus(value: RpcTransactionResponseStatusMap[keyof RpcTransactionResponseStatusMap]): void;

  getTxHash(): string;
  setTxHash(value: string): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RpcTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RpcTransactionResponse): RpcTransactionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RpcTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RpcTransactionResponse;
  static deserializeBinaryFromReader(message: RpcTransactionResponse, reader: jspb.BinaryReader): RpcTransactionResponse;
}

export namespace RpcTransactionResponse {
  export type AsObject = {
    status: RpcTransactionResponseStatusMap[keyof RpcTransactionResponseStatusMap],
    txHash: string,
    error: string,
  }
}

export class Transfer extends jspb.Message {
  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getTxHash(): string;
  setTxHash(value: string): void;

  getTxOutputIndex(): number;
  setTxOutputIndex(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transfer.AsObject;
  static toObject(includeInstance: boolean, msg: Transfer): Transfer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transfer;
  static deserializeBinaryFromReader(message: Transfer, reader: jspb.BinaryReader): Transfer;
}

export namespace Transfer {
  export type AsObject = {
    from: string,
    to: string,
    amount: string,
    txHash: string,
    txOutputIndex: number,
    timestamp: number,
    height: number,
  }
}

export class TransferRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getMax(): number;
  setMax(value: number): void;

  getFrom(): string;
  setFrom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferRequest): TransferRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferRequest;
  static deserializeBinaryFromReader(message: TransferRequest, reader: jspb.BinaryReader): TransferRequest;
}

export namespace TransferRequest {
  export type AsObject = {
    address: string,
    max: number,
    from: string,
  }
}

export class GetHistoryRequest extends jspb.Message {
  getFrom(): string;
  setFrom(value: string): void;

  getMax(): number;
  setMax(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoryRequest): GetHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoryRequest;
  static deserializeBinaryFromReader(message: GetHistoryRequest, reader: jspb.BinaryReader): GetHistoryRequest;
}

export namespace GetHistoryRequest {
  export type AsObject = {
    from: string,
    max: number,
  }
}

export class TransferResponse extends jspb.Message {
  clearTransfersList(): void;
  getTransfersList(): Array<Transfer>;
  setTransfersList(value: Array<Transfer>): void;
  addTransfers(value?: Transfer, index?: number): Transfer;

  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferResponse): TransferResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferResponse;
  static deserializeBinaryFromReader(message: TransferResponse, reader: jspb.BinaryReader): TransferResponse;
}

export namespace TransferResponse {
  export type AsObject = {
    transfersList: Array<Transfer.AsObject>,
    from: string,
    to: string,
  }
}

export class GetUtxoLengthRequest extends jspb.Message {
  getScriptType(): string;
  setScriptType(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUtxoLengthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUtxoLengthRequest): GetUtxoLengthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUtxoLengthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUtxoLengthRequest;
  static deserializeBinaryFromReader(message: GetUtxoLengthRequest, reader: jspb.BinaryReader): GetUtxoLengthRequest;
}

export namespace GetUtxoLengthRequest {
  export type AsObject = {
    scriptType: string,
    address: string,
  }
}

export class GetUtxosRequest extends jspb.Message {
  getScriptType(): string;
  setScriptType(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUtxosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUtxosRequest): GetUtxosRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUtxosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUtxosRequest;
  static deserializeBinaryFromReader(message: GetUtxosRequest, reader: jspb.BinaryReader): GetUtxosRequest;
}

export namespace GetUtxosRequest {
  export type AsObject = {
    scriptType: string,
    address: string,
    from: string,
    to: string,
  }
}

export class GetUtxoLengthResponse extends jspb.Message {
  getLength(): number;
  setLength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUtxoLengthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUtxoLengthResponse): GetUtxoLengthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUtxoLengthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUtxoLengthResponse;
  static deserializeBinaryFromReader(message: GetUtxoLengthResponse, reader: jspb.BinaryReader): GetUtxoLengthResponse;
}

export namespace GetUtxoLengthResponse {
  export type AsObject = {
    length: number,
  }
}

export class GetSpendableCollateralRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getFrom(): number;
  setFrom(value: number): void;

  getTo(): number;
  setTo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSpendableCollateralRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSpendableCollateralRequest): GetSpendableCollateralRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSpendableCollateralRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSpendableCollateralRequest;
  static deserializeBinaryFromReader(message: GetSpendableCollateralRequest, reader: jspb.BinaryReader): GetSpendableCollateralRequest;
}

export namespace GetSpendableCollateralRequest {
  export type AsObject = {
    address: string,
    from: number,
    to: number,
  }
}

export class GetSpendableCollateralResponse extends jspb.Message {
  clearOutpointsList(): void;
  getOutpointsList(): Array<core_pb.OutPoint>;
  setOutpointsList(value: Array<core_pb.OutPoint>): void;
  addOutpoints(value?: core_pb.OutPoint, index?: number): core_pb.OutPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSpendableCollateralResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSpendableCollateralResponse): GetSpendableCollateralResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSpendableCollateralResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSpendableCollateralResponse;
  static deserializeBinaryFromReader(message: GetSpendableCollateralResponse, reader: jspb.BinaryReader): GetSpendableCollateralResponse;
}

export namespace GetSpendableCollateralResponse {
  export type AsObject = {
    outpointsList: Array<core_pb.OutPoint.AsObject>,
  }
}

export class GetBalanceRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBalanceRequest): GetBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBalanceRequest;
  static deserializeBinaryFromReader(message: GetBalanceRequest, reader: jspb.BinaryReader): GetBalanceRequest;
}

export namespace GetBalanceRequest {
  export type AsObject = {
    address: string,
  }
}

export class GetEmbBalanceResponse extends jspb.Message {
  getBalance(): string;
  setBalance(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmbBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmbBalanceResponse): GetEmbBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmbBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmbBalanceResponse;
  static deserializeBinaryFromReader(message: GetEmbBalanceResponse, reader: jspb.BinaryReader): GetEmbBalanceResponse;
}

export namespace GetEmbBalanceResponse {
  export type AsObject = {
    balance: string,
  }
}

export class GetByteFeeResponse extends jspb.Message {
  getFee(): string;
  setFee(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByteFeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetByteFeeResponse): GetByteFeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetByteFeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByteFeeResponse;
  static deserializeBinaryFromReader(message: GetByteFeeResponse, reader: jspb.BinaryReader): GetByteFeeResponse;
}

export namespace GetByteFeeResponse {
  export type AsObject = {
    fee: string,
  }
}

export class GetBalanceResponse extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getConfirmed(): string;
  setConfirmed(value: string): void;

  getUnconfirmed(): string;
  setUnconfirmed(value: string): void;

  getCollateralized(): string;
  setCollateralized(value: string): void;

  getUnlockable(): string;
  setUnlockable(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBalanceResponse): GetBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBalanceResponse;
  static deserializeBinaryFromReader(message: GetBalanceResponse, reader: jspb.BinaryReader): GetBalanceResponse;
}

export namespace GetBalanceResponse {
  export type AsObject = {
    height: number,
    confirmed: string,
    unconfirmed: string,
    collateralized: string,
    unlockable: string,
  }
}

export class GetUnlockTakerTxParamsRequest extends jspb.Message {
  getTxHash(): string;
  setTxHash(value: string): void;

  getTxOutputIndex(): number;
  setTxOutputIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnlockTakerTxParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnlockTakerTxParamsRequest): GetUnlockTakerTxParamsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUnlockTakerTxParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnlockTakerTxParamsRequest;
  static deserializeBinaryFromReader(message: GetUnlockTakerTxParamsRequest, reader: jspb.BinaryReader): GetUnlockTakerTxParamsRequest;
}

export namespace GetUnlockTakerTxParamsRequest {
  export type AsObject = {
    txHash: string,
    txOutputIndex: number,
  }
}

export class GetUnlockTakerTxParamsResponse extends jspb.Message {
  clearUnlockScriptsList(): void;
  getUnlockScriptsList(): Array<string>;
  setUnlockScriptsList(value: Array<string>): void;
  addUnlockScripts(value: string, index?: number): string;

  getValueInTx(): Uint8Array | string;
  getValueInTx_asU8(): Uint8Array;
  getValueInTx_asB64(): string;
  setValueInTx(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnlockTakerTxParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnlockTakerTxParamsResponse): GetUnlockTakerTxParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUnlockTakerTxParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnlockTakerTxParamsResponse;
  static deserializeBinaryFromReader(message: GetUnlockTakerTxParamsResponse, reader: jspb.BinaryReader): GetUnlockTakerTxParamsResponse;
}

export namespace GetUnlockTakerTxParamsResponse {
  export type AsObject = {
    unlockScriptsList: Array<string>,
    valueInTx: Uint8Array | string,
  }
}

export class MakerOrderInfo extends jspb.Message {
  getTradeHeight(): number;
  setTradeHeight(value: number): void;

  getDeposit(): number;
  setDeposit(value: number): void;

  getSettlement(): number;
  setSettlement(value: number): void;

  getShiftMaker(): number;
  setShiftMaker(value: number): void;

  getShiftTaker(): number;
  setShiftTaker(value: number): void;

  getSendsFromChain(): string;
  setSendsFromChain(value: string): void;

  getReceivesToChain(): string;
  setReceivesToChain(value: string): void;

  getSendsFromAddress(): string;
  setSendsFromAddress(value: string): void;

  getReceivesToAddress(): string;
  setReceivesToAddress(value: string): void;

  getSendsUnit(): string;
  setSendsUnit(value: string): void;

  getReceivesUnit(): string;
  setReceivesUnit(value: string): void;

  getDoubleHashedBcAddress(): string;
  setDoubleHashedBcAddress(value: string): void;

  getCollateralizedNrg(): string;
  setCollateralizedNrg(value: string): void;

  getOriginalNrg(): string;
  setOriginalNrg(value: string): void;

  getNrgUnit(): string;
  setNrgUnit(value: string): void;

  getTxHash(): string;
  setTxHash(value: string): void;

  getTxOutputIndex(): number;
  setTxOutputIndex(value: number): void;

  getIsSettled(): boolean;
  setIsSettled(value: boolean): void;

  getFixedUnitFee(): string;
  setFixedUnitFee(value: string): void;

  getBase(): number;
  setBase(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MakerOrderInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MakerOrderInfo): MakerOrderInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MakerOrderInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MakerOrderInfo;
  static deserializeBinaryFromReader(message: MakerOrderInfo, reader: jspb.BinaryReader): MakerOrderInfo;
}

export namespace MakerOrderInfo {
  export type AsObject = {
    tradeHeight: number,
    deposit: number,
    settlement: number,
    shiftMaker: number,
    shiftTaker: number,
    sendsFromChain: string,
    receivesToChain: string,
    sendsFromAddress: string,
    receivesToAddress: string,
    sendsUnit: string,
    receivesUnit: string,
    doubleHashedBcAddress: string,
    collateralizedNrg: string,
    originalNrg: string,
    nrgUnit: string,
    txHash: string,
    txOutputIndex: number,
    isSettled: boolean,
    fixedUnitFee: string,
    base: number,
  }
}

export class TakerOrderInfo extends jspb.Message {
  getSendsFromAddress(): string;
  setSendsFromAddress(value: string): void;

  getReceivesToAddress(): string;
  setReceivesToAddress(value: string): void;

  getDoubleHashedBcAddress(): string;
  setDoubleHashedBcAddress(value: string): void;

  getIsSettled(): boolean;
  setIsSettled(value: boolean): void;

  getTxHash(): string;
  setTxHash(value: string): void;

  getTxOutputIndex(): number;
  setTxOutputIndex(value: number): void;

  getTotalCollateral(): string;
  setTotalCollateral(value: string): void;

  getTradeHeight(): number;
  setTradeHeight(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TakerOrderInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TakerOrderInfo): TakerOrderInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TakerOrderInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TakerOrderInfo;
  static deserializeBinaryFromReader(message: TakerOrderInfo, reader: jspb.BinaryReader): TakerOrderInfo;
}

export namespace TakerOrderInfo {
  export type AsObject = {
    sendsFromAddress: string,
    receivesToAddress: string,
    doubleHashedBcAddress: string,
    isSettled: boolean,
    txHash: string,
    txOutputIndex: number,
    totalCollateral: string,
    tradeHeight: number,
    timestamp: number,
  }
}

export class MatchedOrderInfo extends jspb.Message {
  hasMaker(): boolean;
  clearMaker(): void;
  getMaker(): MakerOrderInfo | undefined;
  setMaker(value?: MakerOrderInfo): void;

  hasTaker(): boolean;
  clearTaker(): void;
  getTaker(): TakerOrderInfo | undefined;
  setTaker(value?: TakerOrderInfo): void;

  getUnlocked(): boolean;
  setUnlocked(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchedOrderInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MatchedOrderInfo): MatchedOrderInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchedOrderInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchedOrderInfo;
  static deserializeBinaryFromReader(message: MatchedOrderInfo, reader: jspb.BinaryReader): MatchedOrderInfo;
}

export namespace MatchedOrderInfo {
  export type AsObject = {
    maker?: MakerOrderInfo.AsObject,
    taker?: TakerOrderInfo.AsObject,
    unlocked: boolean,
  }
}

export class GetOpenOrdersResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<MakerOrderInfo>;
  setOrdersList(value: Array<MakerOrderInfo>): void;
  addOrders(value?: MakerOrderInfo, index?: number): MakerOrderInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOpenOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOpenOrdersResponse): GetOpenOrdersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOpenOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOpenOrdersResponse;
  static deserializeBinaryFromReader(message: GetOpenOrdersResponse, reader: jspb.BinaryReader): GetOpenOrdersResponse;
}

export namespace GetOpenOrdersResponse {
  export type AsObject = {
    ordersList: Array<MakerOrderInfo.AsObject>,
  }
}

export class GetMatchedOrdersResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<MatchedOrderInfo>;
  setOrdersList(value: Array<MatchedOrderInfo>): void;
  addOrders(value?: MatchedOrderInfo, index?: number): MatchedOrderInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMatchedOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMatchedOrdersResponse): GetMatchedOrdersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMatchedOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMatchedOrdersResponse;
  static deserializeBinaryFromReader(message: GetMatchedOrdersResponse, reader: jspb.BinaryReader): GetMatchedOrdersResponse;
}

export namespace GetMatchedOrdersResponse {
  export type AsObject = {
    ordersList: Array<MatchedOrderInfo.AsObject>,
  }
}

export class GetHistoricalOrdersResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<MatchedOrderInfo>;
  setOrdersList(value: Array<MatchedOrderInfo>): void;
  addOrders(value?: MatchedOrderInfo, index?: number): MatchedOrderInfo;

  getNextBlock(): number;
  setNextBlock(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHistoricalOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHistoricalOrdersResponse): GetHistoricalOrdersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHistoricalOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHistoricalOrdersResponse;
  static deserializeBinaryFromReader(message: GetHistoricalOrdersResponse, reader: jspb.BinaryReader): GetHistoricalOrdersResponse;
}

export namespace GetHistoricalOrdersResponse {
  export type AsObject = {
    ordersList: Array<MatchedOrderInfo.AsObject>,
    nextBlock: number,
  }
}

export class TakerOrder extends jspb.Message {
  getSendsFromAddress(): string;
  setSendsFromAddress(value: string): void;

  getReceivesToAddress(): string;
  setReceivesToAddress(value: string): void;

  getMakerTxHash(): string;
  setMakerTxHash(value: string): void;

  getMakerTxOutputIndex(): number;
  setMakerTxOutputIndex(value: number): void;

  getCollateralizedNrg(): string;
  setCollateralizedNrg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TakerOrder.AsObject;
  static toObject(includeInstance: boolean, msg: TakerOrder): TakerOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TakerOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TakerOrder;
  static deserializeBinaryFromReader(message: TakerOrder, reader: jspb.BinaryReader): TakerOrder;
}

export namespace TakerOrder {
  export type AsObject = {
    sendsFromAddress: string,
    receivesToAddress: string,
    makerTxHash: string,
    makerTxOutputIndex: number,
    collateralizedNrg: string,
  }
}

export class GetBlake2blRequest extends jspb.Message {
  getToBeHashed(): string;
  setToBeHashed(value: string): void;

  getTimes(): number;
  setTimes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlake2blRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlake2blRequest): GetBlake2blRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlake2blRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlake2blRequest;
  static deserializeBinaryFromReader(message: GetBlake2blRequest, reader: jspb.BinaryReader): GetBlake2blRequest;
}

export namespace GetBlake2blRequest {
  export type AsObject = {
    toBeHashed: string,
    times: number,
  }
}

export class GetBlake2blResponse extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlake2blResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlake2blResponse): GetBlake2blResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlake2blResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlake2blResponse;
  static deserializeBinaryFromReader(message: GetBlake2blResponse, reader: jspb.BinaryReader): GetBlake2blResponse;
}

export namespace GetBlake2blResponse {
  export type AsObject = {
    hash: string,
  }
}

export class VanityConvertRequest extends jspb.Message {
  getVanity(): string;
  setVanity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VanityConvertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VanityConvertRequest): VanityConvertRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VanityConvertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VanityConvertRequest;
  static deserializeBinaryFromReader(message: VanityConvertRequest, reader: jspb.BinaryReader): VanityConvertRequest;
}

export namespace VanityConvertRequest {
  export type AsObject = {
    vanity: string,
  }
}

export class VanityConvertResponse extends jspb.Message {
  getBcAddress(): string;
  setBcAddress(value: string): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VanityConvertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VanityConvertResponse): VanityConvertResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VanityConvertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VanityConvertResponse;
  static deserializeBinaryFromReader(message: VanityConvertResponse, reader: jspb.BinaryReader): VanityConvertResponse;
}

export namespace VanityConvertResponse {
  export type AsObject = {
    bcAddress: string,
    error: string,
  }
}

export class GetRoveredBlockHashRequest extends jspb.Message {
  getBlockchain(): string;
  setBlockchain(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoveredBlockHashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoveredBlockHashRequest): GetRoveredBlockHashRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoveredBlockHashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoveredBlockHashRequest;
  static deserializeBinaryFromReader(message: GetRoveredBlockHashRequest, reader: jspb.BinaryReader): GetRoveredBlockHashRequest;
}

export namespace GetRoveredBlockHashRequest {
  export type AsObject = {
    blockchain: string,
    hash: string,
  }
}

export class GetRoveredBlockHeightRequest extends jspb.Message {
  getBlockchain(): string;
  setBlockchain(value: string): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoveredBlockHeightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoveredBlockHeightRequest): GetRoveredBlockHeightRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoveredBlockHeightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoveredBlockHeightRequest;
  static deserializeBinaryFromReader(message: GetRoveredBlockHeightRequest, reader: jspb.BinaryReader): GetRoveredBlockHeightRequest;
}

export namespace GetRoveredBlockHeightRequest {
  export type AsObject = {
    blockchain: string,
    height: number,
  }
}

export class GetBlockHashRequest extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockHashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockHashRequest): GetBlockHashRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockHashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockHashRequest;
  static deserializeBinaryFromReader(message: GetBlockHashRequest, reader: jspb.BinaryReader): GetBlockHashRequest;
}

export namespace GetBlockHashRequest {
  export type AsObject = {
    hash: string,
  }
}

export class GetBlockHeightRequest extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockHeightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockHeightRequest): GetBlockHeightRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockHeightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockHeightRequest;
  static deserializeBinaryFromReader(message: GetBlockHeightRequest, reader: jspb.BinaryReader): GetBlockHeightRequest;
}

export namespace GetBlockHeightRequest {
  export type AsObject = {
    height: number,
  }
}

export class GetBlocksRequest extends jspb.Message {
  getStartHeight(): number;
  setStartHeight(value: number): void;

  getEndHeight(): number;
  setEndHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlocksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlocksRequest): GetBlocksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlocksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlocksRequest;
  static deserializeBinaryFromReader(message: GetBlocksRequest, reader: jspb.BinaryReader): GetBlocksRequest;
}

export namespace GetBlocksRequest {
  export type AsObject = {
    startHeight: number,
    endHeight: number,
  }
}

export class GetBlocksResponse extends jspb.Message {
  clearBlocksList(): void;
  getBlocksList(): Array<core_pb.BcBlock>;
  setBlocksList(value: Array<core_pb.BcBlock>): void;
  addBlocks(value?: core_pb.BcBlock, index?: number): core_pb.BcBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlocksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlocksResponse): GetBlocksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlocksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlocksResponse;
  static deserializeBinaryFromReader(message: GetBlocksResponse, reader: jspb.BinaryReader): GetBlocksResponse;
}

export namespace GetBlocksResponse {
  export type AsObject = {
    blocksList: Array<core_pb.BcBlock.AsObject>,
  }
}

export class GetRoveredBlocksRequest extends jspb.Message {
  getBlockchain(): string;
  setBlockchain(value: string): void;

  getStartHeight(): number;
  setStartHeight(value: number): void;

  getEndHeight(): number;
  setEndHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoveredBlocksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoveredBlocksRequest): GetRoveredBlocksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoveredBlocksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoveredBlocksRequest;
  static deserializeBinaryFromReader(message: GetRoveredBlocksRequest, reader: jspb.BinaryReader): GetRoveredBlocksRequest;
}

export namespace GetRoveredBlocksRequest {
  export type AsObject = {
    blockchain: string,
    startHeight: number,
    endHeight: number,
  }
}

export class GetRawMempoolResponse extends jspb.Message {
  clearTransactionsList(): void;
  getTransactionsList(): Array<core_pb.Transaction>;
  setTransactionsList(value: Array<core_pb.Transaction>): void;
  addTransactions(value?: core_pb.Transaction, index?: number): core_pb.Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRawMempoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRawMempoolResponse): GetRawMempoolResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRawMempoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRawMempoolResponse;
  static deserializeBinaryFromReader(message: GetRawMempoolResponse, reader: jspb.BinaryReader): GetRawMempoolResponse;
}

export namespace GetRawMempoolResponse {
  export type AsObject = {
    transactionsList: Array<core_pb.Transaction.AsObject>,
  }
}

export class GetRoveredBlocksResponse extends jspb.Message {
  clearBlocksList(): void;
  getBlocksList(): Array<core_pb.Block>;
  setBlocksList(value: Array<core_pb.Block>): void;
  addBlocks(value?: core_pb.Block, index?: number): core_pb.Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoveredBlocksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoveredBlocksResponse): GetRoveredBlocksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoveredBlocksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoveredBlocksResponse;
  static deserializeBinaryFromReader(message: GetRoveredBlocksResponse, reader: jspb.BinaryReader): GetRoveredBlocksResponse;
}

export namespace GetRoveredBlocksResponse {
  export type AsObject = {
    blocksList: Array<core_pb.Block.AsObject>,
  }
}

export class GetTxRequest extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxRequest): GetTxRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxRequest;
  static deserializeBinaryFromReader(message: GetTxRequest, reader: jspb.BinaryReader): GetTxRequest;
}

export namespace GetTxRequest {
  export type AsObject = {
    hash: string,
  }
}

export class GetMarkedTxRequest extends jspb.Message {
  getBlockchain(): string;
  setBlockchain(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarkedTxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarkedTxRequest): GetMarkedTxRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMarkedTxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarkedTxRequest;
  static deserializeBinaryFromReader(message: GetMarkedTxRequest, reader: jspb.BinaryReader): GetMarkedTxRequest;
}

export namespace GetMarkedTxRequest {
  export type AsObject = {
    blockchain: string,
    hash: string,
  }
}

export class GetOutPointRequest extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  getIndex(): number;
  setIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOutPointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOutPointRequest): GetOutPointRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOutPointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOutPointRequest;
  static deserializeBinaryFromReader(message: GetOutPointRequest, reader: jspb.BinaryReader): GetOutPointRequest;
}

export namespace GetOutPointRequest {
  export type AsObject = {
    hash: string,
    index: number,
  }
}

export class GetBlocksByRoveredHashRequest extends jspb.Message {
  getBlockchain(): string;
  setBlockchain(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlocksByRoveredHashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlocksByRoveredHashRequest): GetBlocksByRoveredHashRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlocksByRoveredHashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlocksByRoveredHashRequest;
  static deserializeBinaryFromReader(message: GetBlocksByRoveredHashRequest, reader: jspb.BinaryReader): GetBlocksByRoveredHashRequest;
}

export namespace GetBlocksByRoveredHashRequest {
  export type AsObject = {
    blockchain: string,
    hash: string,
  }
}

export class GetBlocksByRoveredHashResponse extends jspb.Message {
  clearBlocksList(): void;
  getBlocksList(): Array<core_pb.BcBlock>;
  setBlocksList(value: Array<core_pb.BcBlock>): void;
  addBlocks(value?: core_pb.BcBlock, index?: number): core_pb.BcBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlocksByRoveredHashResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlocksByRoveredHashResponse): GetBlocksByRoveredHashResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlocksByRoveredHashResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlocksByRoveredHashResponse;
  static deserializeBinaryFromReader(message: GetBlocksByRoveredHashResponse, reader: jspb.BinaryReader): GetBlocksByRoveredHashResponse;
}

export namespace GetBlocksByRoveredHashResponse {
  export type AsObject = {
    blocksList: Array<core_pb.BcBlock.AsObject>,
  }
}

export class GetTradeStatusResponse extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradeStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradeStatusResponse): GetTradeStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTradeStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradeStatusResponse;
  static deserializeBinaryFromReader(message: GetTradeStatusResponse, reader: jspb.BinaryReader): GetTradeStatusResponse;
}

export namespace GetTradeStatusResponse {
  export type AsObject = {
    status: number,
  }
}

export class GetOutPointStatusResponse extends jspb.Message {
  getUnspent(): boolean;
  setUnspent(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOutPointStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOutPointStatusResponse): GetOutPointStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOutPointStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOutPointStatusResponse;
  static deserializeBinaryFromReader(message: GetOutPointStatusResponse, reader: jspb.BinaryReader): GetOutPointStatusResponse;
}

export namespace GetOutPointStatusResponse {
  export type AsObject = {
    unspent: boolean,
  }
}

export class CurrentWork extends jspb.Message {
  getWork(): string;
  setWork(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentWork.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentWork): CurrentWork.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentWork, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentWork;
  static deserializeBinaryFromReader(message: CurrentWork, reader: jspb.BinaryReader): CurrentWork;
}

export namespace CurrentWork {
  export type AsObject = {
    work: string,
  }
}

export class SyncStatus extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyncStatus.AsObject;
  static toObject(includeInstance: boolean, msg: SyncStatus): SyncStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SyncStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyncStatus;
  static deserializeBinaryFromReader(message: SyncStatus, reader: jspb.BinaryReader): SyncStatus;
}

export namespace SyncStatus {
  export type AsObject = {
    status: string,
  }
}

export class SettingsResponse extends jspb.Message {
  getNgrokTunnel(): string;
  setNgrokTunnel(value: string): void;

  getBuildVersion(): string;
  setBuildVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SettingsResponse): SettingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettingsResponse;
  static deserializeBinaryFromReader(message: SettingsResponse, reader: jspb.BinaryReader): SettingsResponse;
}

export namespace SettingsResponse {
  export type AsObject = {
    ngrokTunnel: string,
    buildVersion: string,
  }
}

export class GetNrgSupplyResponse extends jspb.Message {
  getAmount(): string;
  setAmount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNrgSupplyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNrgSupplyResponse): GetNrgSupplyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNrgSupplyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNrgSupplyResponse;
  static deserializeBinaryFromReader(message: GetNrgSupplyResponse, reader: jspb.BinaryReader): GetNrgSupplyResponse;
}

export namespace GetNrgSupplyResponse {
  export type AsObject = {
    amount: string,
  }
}

export class GetMarkedTxs extends jspb.Message {
  clearTxsList(): void;
  getTxsList(): Array<core_pb.MarkedTransaction>;
  setTxsList(value: Array<core_pb.MarkedTransaction>): void;
  addTxs(value?: core_pb.MarkedTransaction, index?: number): core_pb.MarkedTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarkedTxs.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarkedTxs): GetMarkedTxs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMarkedTxs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarkedTxs;
  static deserializeBinaryFromReader(message: GetMarkedTxs, reader: jspb.BinaryReader): GetMarkedTxs;
}

export namespace GetMarkedTxs {
  export type AsObject = {
    txsList: Array<core_pb.MarkedTransaction.AsObject>,
  }
}

export class FeedBalance extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedBalance.AsObject;
  static toObject(includeInstance: boolean, msg: FeedBalance): FeedBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedBalance;
  static deserializeBinaryFromReader(message: FeedBalance, reader: jspb.BinaryReader): FeedBalance;
}

export namespace FeedBalance {
  export type AsObject = {
    name: string,
    amount: string,
  }
}

export class FeedMessage extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  clearBalancesList(): void;
  getBalancesList(): Array<FeedBalance>;
  setBalancesList(value: Array<FeedBalance>): void;
  addBalances(value?: FeedBalance, index?: number): FeedBalance;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: FeedMessage): FeedMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedMessage;
  static deserializeBinaryFromReader(message: FeedMessage, reader: jspb.BinaryReader): FeedMessage;
}

export namespace FeedMessage {
  export type AsObject = {
    address: string,
    message: string,
    balancesList: Array<FeedBalance.AsObject>,
    timestamp: number,
  }
}

export class FeedMessages extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<FeedMessage>;
  setMessagesList(value: Array<FeedMessage>): void;
  addMessages(value?: FeedMessage, index?: number): FeedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedMessages.AsObject;
  static toObject(includeInstance: boolean, msg: FeedMessages): FeedMessages.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedMessages, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedMessages;
  static deserializeBinaryFromReader(message: FeedMessages, reader: jspb.BinaryReader): FeedMessages;
}

export namespace FeedMessages {
  export type AsObject = {
    messagesList: Array<FeedMessage.AsObject>,
  }
}

export class GetFeedMessagesRequest extends jspb.Message {
  getFrom(): number;
  setFrom(value: number): void;

  getTo(): number;
  setTo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeedMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeedMessagesRequest): GetFeedMessagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFeedMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeedMessagesRequest;
  static deserializeBinaryFromReader(message: GetFeedMessagesRequest, reader: jspb.BinaryReader): GetFeedMessagesRequest;
}

export namespace GetFeedMessagesRequest {
  export type AsObject = {
    from: number,
    to: number,
  }
}

export interface FeedTransactionDataTypeMap {
  TYPE1: 0;
}

export const FeedTransactionDataType: FeedTransactionDataTypeMap;

export interface RpcTransactionResponseStatusMap {
  SUCCESS: 0;
  FAILURE: 1;
}

export const RpcTransactionResponseStatus: RpcTransactionResponseStatusMap;

