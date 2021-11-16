// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AuctionCancel extends ethereum.Event {
  get params(): AuctionCancel__Params {
    return new AuctionCancel__Params(this);
  }
}

export class AuctionCancel__Params {
  _event: AuctionCancel;

  constructor(event: AuctionCancel) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class AuctionEnd extends ethereum.Event {
  get params(): AuctionEnd__Params {
    return new AuctionEnd__Params(this);
  }
}

export class AuctionEnd__Params {
  _event: AuctionEnd;

  constructor(event: AuctionEnd) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get highestBidder(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get highestBid(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class AuctionStart extends ethereum.Event {
  get params(): AuctionStart__Params {
    return new AuctionStart__Params(this);
  }
}

export class AuctionStart__Params {
  _event: AuctionStart;

  constructor(event: AuctionStart) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get startingBid(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get startingTime(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get duration(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get currency(): i32 {
    return this._event.parameters[5].value.toI32();
  }
}

export class NFTPutOnSale extends ethereum.Event {
  get params(): NFTPutOnSale__Params {
    return new NFTPutOnSale__Params(this);
  }
}

export class NFTPutOnSale__Params {
  _event: NFTPutOnSale;

  constructor(event: NFTPutOnSale) {
    this._event = event;
  }

  get saleId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get currency(): i32 {
    return this._event.parameters[3].value.toI32();
  }
}

export class NFTRemovedFromSale extends ethereum.Event {
  get params(): NFTRemovedFromSale__Params {
    return new NFTRemovedFromSale__Params(this);
  }
}

export class NFTRemovedFromSale__Params {
  _event: NFTRemovedFromSale;

  constructor(event: NFTRemovedFromSale) {
    this._event = event;
  }

  get saleId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class NFTSalePriceUpdated extends ethereum.Event {
  get params(): NFTSalePriceUpdated__Params {
    return new NFTSalePriceUpdated__Params(this);
  }
}

export class NFTSalePriceUpdated__Params {
  _event: NFTSalePriceUpdated;

  constructor(event: NFTSalePriceUpdated) {
    this._event = event;
  }

  get saleId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get currency(): i32 {
    return this._event.parameters[3].value.toI32();
  }
}

export class NFTSold extends ethereum.Event {
  get params(): NFTSold__Params {
    return new NFTSold__Params(this);
  }
}

export class NFTSold__Params {
  _event: NFTSold;

  constructor(event: NFTSold) {
    this._event = event;
  }

  get saleId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get currency(): i32 {
    return this._event.parameters[3].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PlaceBid extends ethereum.Event {
  get params(): PlaceBid__Params {
    return new PlaceBid__Params(this);
  }
}

export class PlaceBid__Params {
  _event: PlaceBid;

  constructor(event: PlaceBid) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get bid(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RoboDogeMarketplace__auctionsResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: Address;
  value6: BigInt;
  value7: i32;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: Address,
    value6: BigInt,
    value7: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set(
      "value7",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value7))
    );
    return map;
  }
}

export class RoboDogeMarketplace__nftSalesResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: i32;

  constructor(value0: BigInt, value1: Address, value2: BigInt, value3: i32) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set(
      "value3",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value3))
    );
    return map;
  }
}

export class RoboDogeMarketplace extends ethereum.SmartContract {
  static bind(address: Address): RoboDogeMarketplace {
    return new RoboDogeMarketplace("RoboDogeMarketplace", address);
  }

  MAX_AUCTION_DURATION(): BigInt {
    let result = super.call(
      "MAX_AUCTION_DURATION",
      "MAX_AUCTION_DURATION():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_AUCTION_DURATION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_AUCTION_DURATION",
      "MAX_AUCTION_DURATION():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MIN_BID_RISE(): BigInt {
    let result = super.call("MIN_BID_RISE", "MIN_BID_RISE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MIN_BID_RISE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MIN_BID_RISE", "MIN_BID_RISE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  auctionCounter(): BigInt {
    let result = super.call("auctionCounter", "auctionCounter():(uint256)", []);

    return result[0].toBigInt();
  }

  try_auctionCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "auctionCounter",
      "auctionCounter():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  auctionDurationIncrease(): BigInt {
    let result = super.call(
      "auctionDurationIncrease",
      "auctionDurationIncrease():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_auctionDurationIncrease(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "auctionDurationIncrease",
      "auctionDurationIncrease():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  auctions(param0: BigInt): RoboDogeMarketplace__auctionsResult {
    let result = super.call(
      "auctions",
      "auctions(uint256):(uint256,address,uint256,uint256,uint256,address,uint256,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new RoboDogeMarketplace__auctionsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toAddress(),
      result[6].toBigInt(),
      result[7].toI32()
    );
  }

  try_auctions(
    param0: BigInt
  ): ethereum.CallResult<RoboDogeMarketplace__auctionsResult> {
    let result = super.tryCall(
      "auctions",
      "auctions(uint256):(uint256,address,uint256,uint256,uint256,address,uint256,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new RoboDogeMarketplace__auctionsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toAddress(),
        value[6].toBigInt(),
        value[7].toI32()
      )
    );
  }

  bnbRoyaltyReceived(): BigInt {
    let result = super.call(
      "bnbRoyaltyReceived",
      "bnbRoyaltyReceived():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_bnbRoyaltyReceived(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "bnbRoyaltyReceived",
      "bnbRoyaltyReceived():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  canClaimAuctionNft(_address: Address, _tokenId: BigInt): boolean {
    let result = super.call(
      "canClaimAuctionNft",
      "canClaimAuctionNft(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_address),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );

    return result[0].toBoolean();
  }

  try_canClaimAuctionNft(
    _address: Address,
    _tokenId: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "canClaimAuctionNft",
      "canClaimAuctionNft(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(_address),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  exists(param0: string): boolean {
    let result = super.call("exists", "exists(string):(bool)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toBoolean();
  }

  try_exists(param0: string): ethereum.CallResult<boolean> {
    let result = super.tryCall("exists", "exists(string):(bool)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  minTokenBalance(): BigInt {
    let result = super.call(
      "minTokenBalance",
      "minTokenBalance():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_minTokenBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minTokenBalance",
      "minTokenBalance():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mintFee(): BigInt {
    let result = super.call("mintFee", "mintFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_mintFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("mintFee", "mintFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mintFeeReceived(): BigInt {
    let result = super.call(
      "mintFeeReceived",
      "mintFeeReceived():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_mintFeeReceived(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mintFeeReceived",
      "mintFeeReceived():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nextAllowedBid(_tokenId: BigInt): BigInt {
    let result = super.call(
      "nextAllowedBid",
      "nextAllowedBid(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return result[0].toBigInt();
  }

  try_nextAllowedBid(_tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nextAllowedBid",
      "nextAllowedBid(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nftSales(param0: BigInt): RoboDogeMarketplace__nftSalesResult {
    let result = super.call(
      "nftSales",
      "nftSales(uint256):(uint256,address,uint256,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new RoboDogeMarketplace__nftSalesResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toI32()
    );
  }

  try_nftSales(
    param0: BigInt
  ): ethereum.CallResult<RoboDogeMarketplace__nftSalesResult> {
    let result = super.tryCall(
      "nftSales",
      "nftSales(uint256):(uint256,address,uint256,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new RoboDogeMarketplace__nftSalesResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toI32()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  royalty(): BigInt {
    let result = super.call("royalty", "royalty():(uint256)", []);

    return result[0].toBigInt();
  }

  try_royalty(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("royalty", "royalty():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  saleCounter(): BigInt {
    let result = super.call("saleCounter", "saleCounter():(uint256)", []);

    return result[0].toBigInt();
  }

  try_saleCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("saleCounter", "saleCounter():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenRoyaltyReceived(): BigInt {
    let result = super.call(
      "tokenRoyaltyReceived",
      "tokenRoyaltyReceived():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_tokenRoyaltyReceived(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenRoyaltyReceived",
      "tokenRoyaltyReceived():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _nft(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _mintFee(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _minTokenBalance(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _royalty(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _auctionDurationIncrease(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BuyNftCall extends ethereum.Call {
  get inputs(): BuyNftCall__Inputs {
    return new BuyNftCall__Inputs(this);
  }

  get outputs(): BuyNftCall__Outputs {
    return new BuyNftCall__Outputs(this);
  }
}

export class BuyNftCall__Inputs {
  _call: BuyNftCall;

  constructor(call: BuyNftCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyNftCall__Outputs {
  _call: BuyNftCall;

  constructor(call: BuyNftCall) {
    this._call = call;
  }
}

export class ClaimAuctionNftCall extends ethereum.Call {
  get inputs(): ClaimAuctionNftCall__Inputs {
    return new ClaimAuctionNftCall__Inputs(this);
  }

  get outputs(): ClaimAuctionNftCall__Outputs {
    return new ClaimAuctionNftCall__Outputs(this);
  }
}

export class ClaimAuctionNftCall__Inputs {
  _call: ClaimAuctionNftCall;

  constructor(call: ClaimAuctionNftCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ClaimAuctionNftCall__Outputs {
  _call: ClaimAuctionNftCall;

  constructor(call: ClaimAuctionNftCall) {
    this._call = call;
  }
}

export class DeleteAuctionCall extends ethereum.Call {
  get inputs(): DeleteAuctionCall__Inputs {
    return new DeleteAuctionCall__Inputs(this);
  }

  get outputs(): DeleteAuctionCall__Outputs {
    return new DeleteAuctionCall__Outputs(this);
  }
}

export class DeleteAuctionCall__Inputs {
  _call: DeleteAuctionCall;

  constructor(call: DeleteAuctionCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DeleteAuctionCall__Outputs {
  _call: DeleteAuctionCall;

  constructor(call: DeleteAuctionCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get _imageHash(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _metadata(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _count(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class PlaceBidCall extends ethereum.Call {
  get inputs(): PlaceBidCall__Inputs {
    return new PlaceBidCall__Inputs(this);
  }

  get outputs(): PlaceBidCall__Outputs {
    return new PlaceBidCall__Outputs(this);
  }
}

export class PlaceBidCall__Inputs {
  _call: PlaceBidCall;

  constructor(call: PlaceBidCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _bid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PlaceBidCall__Outputs {
  _call: PlaceBidCall;

  constructor(call: PlaceBidCall) {
    this._call = call;
  }
}

export class PutOnSaleCall extends ethereum.Call {
  get inputs(): PutOnSaleCall__Inputs {
    return new PutOnSaleCall__Inputs(this);
  }

  get outputs(): PutOnSaleCall__Outputs {
    return new PutOnSaleCall__Outputs(this);
  }
}

export class PutOnSaleCall__Inputs {
  _call: PutOnSaleCall;

  constructor(call: PutOnSaleCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _currency(): i32 {
    return this._call.inputValues[2].value.toI32();
  }
}

export class PutOnSaleCall__Outputs {
  _call: PutOnSaleCall;

  constructor(call: PutOnSaleCall) {
    this._call = call;
  }
}

export class RemoveFromSaleCall extends ethereum.Call {
  get inputs(): RemoveFromSaleCall__Inputs {
    return new RemoveFromSaleCall__Inputs(this);
  }

  get outputs(): RemoveFromSaleCall__Outputs {
    return new RemoveFromSaleCall__Outputs(this);
  }
}

export class RemoveFromSaleCall__Inputs {
  _call: RemoveFromSaleCall;

  constructor(call: RemoveFromSaleCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RemoveFromSaleCall__Outputs {
  _call: RemoveFromSaleCall;

  constructor(call: RemoveFromSaleCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class StartAuctionCall extends ethereum.Call {
  get inputs(): StartAuctionCall__Inputs {
    return new StartAuctionCall__Inputs(this);
  }

  get outputs(): StartAuctionCall__Outputs {
    return new StartAuctionCall__Outputs(this);
  }
}

export class StartAuctionCall__Inputs {
  _call: StartAuctionCall;

  constructor(call: StartAuctionCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _startingBid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _duration(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _currency(): i32 {
    return this._call.inputValues[3].value.toI32();
  }
}

export class StartAuctionCall__Outputs {
  _call: StartAuctionCall;

  constructor(call: StartAuctionCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateAuctionDurationIncreaseCall extends ethereum.Call {
  get inputs(): UpdateAuctionDurationIncreaseCall__Inputs {
    return new UpdateAuctionDurationIncreaseCall__Inputs(this);
  }

  get outputs(): UpdateAuctionDurationIncreaseCall__Outputs {
    return new UpdateAuctionDurationIncreaseCall__Outputs(this);
  }
}

export class UpdateAuctionDurationIncreaseCall__Inputs {
  _call: UpdateAuctionDurationIncreaseCall;

  constructor(call: UpdateAuctionDurationIncreaseCall) {
    this._call = call;
  }

  get _auctionDurationIncrease(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateAuctionDurationIncreaseCall__Outputs {
  _call: UpdateAuctionDurationIncreaseCall;

  constructor(call: UpdateAuctionDurationIncreaseCall) {
    this._call = call;
  }
}

export class UpdateMaxAuctionDurationCall extends ethereum.Call {
  get inputs(): UpdateMaxAuctionDurationCall__Inputs {
    return new UpdateMaxAuctionDurationCall__Inputs(this);
  }

  get outputs(): UpdateMaxAuctionDurationCall__Outputs {
    return new UpdateMaxAuctionDurationCall__Outputs(this);
  }
}

export class UpdateMaxAuctionDurationCall__Inputs {
  _call: UpdateMaxAuctionDurationCall;

  constructor(call: UpdateMaxAuctionDurationCall) {
    this._call = call;
  }

  get _duration(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateMaxAuctionDurationCall__Outputs {
  _call: UpdateMaxAuctionDurationCall;

  constructor(call: UpdateMaxAuctionDurationCall) {
    this._call = call;
  }
}

export class UpdateMinBidRiseCall extends ethereum.Call {
  get inputs(): UpdateMinBidRiseCall__Inputs {
    return new UpdateMinBidRiseCall__Inputs(this);
  }

  get outputs(): UpdateMinBidRiseCall__Outputs {
    return new UpdateMinBidRiseCall__Outputs(this);
  }
}

export class UpdateMinBidRiseCall__Inputs {
  _call: UpdateMinBidRiseCall;

  constructor(call: UpdateMinBidRiseCall) {
    this._call = call;
  }

  get _bidRise(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateMinBidRiseCall__Outputs {
  _call: UpdateMinBidRiseCall;

  constructor(call: UpdateMinBidRiseCall) {
    this._call = call;
  }
}

export class UpdateMinimumTokenBalanceCall extends ethereum.Call {
  get inputs(): UpdateMinimumTokenBalanceCall__Inputs {
    return new UpdateMinimumTokenBalanceCall__Inputs(this);
  }

  get outputs(): UpdateMinimumTokenBalanceCall__Outputs {
    return new UpdateMinimumTokenBalanceCall__Outputs(this);
  }
}

export class UpdateMinimumTokenBalanceCall__Inputs {
  _call: UpdateMinimumTokenBalanceCall;

  constructor(call: UpdateMinimumTokenBalanceCall) {
    this._call = call;
  }

  get _minTokenBalance(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateMinimumTokenBalanceCall__Outputs {
  _call: UpdateMinimumTokenBalanceCall;

  constructor(call: UpdateMinimumTokenBalanceCall) {
    this._call = call;
  }
}

export class UpdateMintFeeCall extends ethereum.Call {
  get inputs(): UpdateMintFeeCall__Inputs {
    return new UpdateMintFeeCall__Inputs(this);
  }

  get outputs(): UpdateMintFeeCall__Outputs {
    return new UpdateMintFeeCall__Outputs(this);
  }
}

export class UpdateMintFeeCall__Inputs {
  _call: UpdateMintFeeCall;

  constructor(call: UpdateMintFeeCall) {
    this._call = call;
  }

  get _mintFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateMintFeeCall__Outputs {
  _call: UpdateMintFeeCall;

  constructor(call: UpdateMintFeeCall) {
    this._call = call;
  }
}

export class UpdateRoyaltyFeeCall extends ethereum.Call {
  get inputs(): UpdateRoyaltyFeeCall__Inputs {
    return new UpdateRoyaltyFeeCall__Inputs(this);
  }

  get outputs(): UpdateRoyaltyFeeCall__Outputs {
    return new UpdateRoyaltyFeeCall__Outputs(this);
  }
}

export class UpdateRoyaltyFeeCall__Inputs {
  _call: UpdateRoyaltyFeeCall;

  constructor(call: UpdateRoyaltyFeeCall) {
    this._call = call;
  }

  get _royaltyFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateRoyaltyFeeCall__Outputs {
  _call: UpdateRoyaltyFeeCall;

  constructor(call: UpdateRoyaltyFeeCall) {
    this._call = call;
  }
}

export class UpdateSalePriceCall extends ethereum.Call {
  get inputs(): UpdateSalePriceCall__Inputs {
    return new UpdateSalePriceCall__Inputs(this);
  }

  get outputs(): UpdateSalePriceCall__Outputs {
    return new UpdateSalePriceCall__Outputs(this);
  }
}

export class UpdateSalePriceCall__Inputs {
  _call: UpdateSalePriceCall;

  constructor(call: UpdateSalePriceCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _currency(): i32 {
    return this._call.inputValues[2].value.toI32();
  }
}

export class UpdateSalePriceCall__Outputs {
  _call: UpdateSalePriceCall;

  constructor(call: UpdateSalePriceCall) {
    this._call = call;
  }
}

export class WithdrawRoyaltyCall extends ethereum.Call {
  get inputs(): WithdrawRoyaltyCall__Inputs {
    return new WithdrawRoyaltyCall__Inputs(this);
  }

  get outputs(): WithdrawRoyaltyCall__Outputs {
    return new WithdrawRoyaltyCall__Outputs(this);
  }
}

export class WithdrawRoyaltyCall__Inputs {
  _call: WithdrawRoyaltyCall;

  constructor(call: WithdrawRoyaltyCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawRoyaltyCall__Outputs {
  _call: WithdrawRoyaltyCall;

  constructor(call: WithdrawRoyaltyCall) {
    this._call = call;
  }
}
