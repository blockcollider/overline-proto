# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `bc.oland` package
- `bc.core.TetheredWork` message
- GH pull request template

### Modified

- `bc.core.Block` new fields `difficulty`, `nonce` and `proof`
- `bc.core.MarkedTransaction.tws` is now of type `repeated bc.oland.TetheredWork`

## [0.4.0] - 2022-04-15

Empty release for 0.4.0

## [0.4.0-rc.0] - 2022-04-15

### Added

- google-protobuf, @grpc/grpc-js and bn.js are just peerDependencies

### Fixed

- Reported depenedency vulnerabilities

## [0.3.4] - 2022-04-06

### Added

- Introduce new BcMessages message with a list of FeedMessage as only member

### [0.3.3] - 2022-03-09

- Introduced new proto objects and  rpc calls for ephemeral and saved feed messages.

## [0.3.2] - 2021-12-07

### Fixed

- Docs about publishing NPM package

### Added

- Introduced a new rpc call (GetOriginalMakerOrder) that returns the original Maker Transaction with respect to the transaction hash and index provided as arguments.


## [0.3.1] - 2021-12-03

### Added

- Introduced a new rpc call (getBlocksByRoveredHash) that returns the Overline Blocks with respect to the child chain id and hash.

## [0.3.0] - 2021-11-03

### Changed

- Rename RpcFeedTransaction and RpcUpdateFeedTransaction (added -Request suffix)
- change data_type and data_length field types in RpcFeedTransactionRequest and RpcUpdateFeedTransactionRequest

## [0.2.0] - 2021-10-28

### Added

- bc.GetTakerForMaker RPC method

## [0.1.0] - 2021-10-28

### Added

- added javascript implementation

### Changed

### Removed

### Fixed

## [0.0.0]

### Added

- initial version

[Unreleased]: https://github.com/blockcollider/overline-proto/compare/v0.1.0...HEAD
