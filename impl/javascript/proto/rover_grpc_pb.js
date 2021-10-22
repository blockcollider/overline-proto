// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var rover_pb = require('./rover_pb.js');
var core_pb = require('./core_pb.js');

function serialize_bc_core_Block(arg) {
  if (!(arg instanceof core_pb.Block)) {
    throw new Error('Expected argument of type bc.core.Block');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_core_Block(buffer_arg) {
  return core_pb.Block.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_core_Null(arg) {
  if (!(arg instanceof core_pb.Null)) {
    throw new Error('Expected argument of type bc.core.Null');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_core_Null(buffer_arg) {
  return core_pb.Null.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_rover_MarkedTxsReq(arg) {
  if (!(arg instanceof rover_pb.MarkedTxsReq)) {
    throw new Error('Expected argument of type bc.rover.MarkedTxsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_rover_MarkedTxsReq(buffer_arg) {
  return rover_pb.MarkedTxsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_rover_QueuedMarkedTxsResponse(arg) {
  if (!(arg instanceof rover_pb.QueuedMarkedTxsResponse)) {
    throw new Error('Expected argument of type bc.rover.QueuedMarkedTxsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_rover_QueuedMarkedTxsResponse(buffer_arg) {
  return rover_pb.QueuedMarkedTxsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_rover_RoverIdent(arg) {
  if (!(arg instanceof rover_pb.RoverIdent)) {
    throw new Error('Expected argument of type bc.rover.RoverIdent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_rover_RoverIdent(buffer_arg) {
  return rover_pb.RoverIdent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_rover_RoverMessage(arg) {
  if (!(arg instanceof rover_pb.RoverMessage)) {
    throw new Error('Expected argument of type bc.rover.RoverMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_rover_RoverMessage(buffer_arg) {
  return rover_pb.RoverMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_rover_RoverMessage_RoverBlockRange(arg) {
  if (!(arg instanceof rover_pb.RoverMessage.RoverBlockRange)) {
    throw new Error('Expected argument of type bc.rover.RoverMessage.RoverBlockRange');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_rover_RoverMessage_RoverBlockRange(buffer_arg) {
  return rover_pb.RoverMessage.RoverBlockRange.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_rover_RoverSyncStatus(arg) {
  if (!(arg instanceof rover_pb.RoverSyncStatus)) {
    throw new Error('Expected argument of type bc.rover.RoverSyncStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_rover_RoverSyncStatus(buffer_arg) {
  return rover_pb.RoverSyncStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_rover_SettleTxCheckReq(arg) {
  if (!(arg instanceof rover_pb.SettleTxCheckReq)) {
    throw new Error('Expected argument of type bc.rover.SettleTxCheckReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_rover_SettleTxCheckReq(buffer_arg) {
  return rover_pb.SettleTxCheckReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_rover_SettleTxCheckResponse(arg) {
  if (!(arg instanceof rover_pb.SettleTxCheckResponse)) {
    throw new Error('Expected argument of type bc.rover.SettleTxCheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_rover_SettleTxCheckResponse(buffer_arg) {
  return rover_pb.SettleTxCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RoverService = exports.RoverService = {
  // Sends a greeting
join: {
    path: '/bc.rover.Rover/Join',
    requestStream: false,
    responseStream: true,
    requestType: rover_pb.RoverIdent,
    responseType: rover_pb.RoverMessage,
    requestSerialize: serialize_bc_rover_RoverIdent,
    requestDeserialize: deserialize_bc_rover_RoverIdent,
    responseSerialize: serialize_bc_rover_RoverMessage,
    responseDeserialize: deserialize_bc_rover_RoverMessage,
  },
  // Rovers sends block collected from the respective network
collectBlock: {
    path: '/bc.rover.Rover/CollectBlock',
    requestStream: true,
    responseStream: false,
    requestType: core_pb.Block,
    responseType: core_pb.Null,
    requestSerialize: serialize_bc_core_Block,
    requestDeserialize: deserialize_bc_core_Block,
    responseSerialize: serialize_bc_core_Null,
    responseDeserialize: deserialize_bc_core_Null,
  },
  // Rover reports back sync status
reportSyncStatus: {
    path: '/bc.rover.Rover/ReportSyncStatus',
    requestStream: false,
    responseStream: false,
    requestType: rover_pb.RoverSyncStatus,
    responseType: core_pb.Null,
    requestSerialize: serialize_bc_rover_RoverSyncStatus,
    requestDeserialize: deserialize_bc_rover_RoverSyncStatus,
    responseSerialize: serialize_bc_core_Null,
    responseDeserialize: deserialize_bc_core_Null,
  },
  // Rover submits block range
reportBlockRange: {
    path: '/bc.rover.Rover/ReportBlockRange',
    requestStream: false,
    responseStream: false,
    requestType: rover_pb.RoverMessage.RoverBlockRange,
    responseType: core_pb.Null,
    requestSerialize: serialize_bc_rover_RoverMessage_RoverBlockRange,
    requestDeserialize: deserialize_bc_rover_RoverMessage_RoverBlockRange,
    responseSerialize: serialize_bc_core_Null,
    responseDeserialize: deserialize_bc_core_Null,
  },
  // Check is TX reciveved in rover is watched and before settlement height
isBeforeSettleHeight: {
    path: '/bc.rover.Rover/IsBeforeSettleHeight',
    requestStream: false,
    responseStream: false,
    requestType: rover_pb.SettleTxCheckReq,
    responseType: rover_pb.SettleTxCheckResponse,
    requestSerialize: serialize_bc_rover_SettleTxCheckReq,
    requestDeserialize: deserialize_bc_rover_SettleTxCheckReq,
    responseSerialize: serialize_bc_rover_SettleTxCheckResponse,
    responseDeserialize: deserialize_bc_rover_SettleTxCheckResponse,
  },
  // check if any marked txs have been queued
getQueuedMarkedTxs: {
    path: '/bc.rover.Rover/GetQueuedMarkedTxs',
    requestStream: false,
    responseStream: false,
    requestType: rover_pb.MarkedTxsReq,
    responseType: rover_pb.QueuedMarkedTxsResponse,
    requestSerialize: serialize_bc_rover_MarkedTxsReq,
    requestDeserialize: deserialize_bc_rover_MarkedTxsReq,
    responseSerialize: serialize_bc_rover_QueuedMarkedTxsResponse,
    responseDeserialize: deserialize_bc_rover_QueuedMarkedTxsResponse,
  },
};

exports.RoverClient = grpc.makeGenericClientConstructor(RoverService);
