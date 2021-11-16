import { RemoveNft } from "../generated/RoboDogeItemRemover/RoboDogeItemRemover";
import { Nft, Auction, Sale } from "../generated/schema";

export function handleRemoveNft(event: RemoveNft): void {
  const id = event.params.id.toHex();
  const nft = Nft.load(id);

  if (!nft) return;
  nft.hidden = true;

  nft.save();

  // if (!nft.auctions) return;
  // if (!nft.auctions.length) return;
  // const auctionId = nft.auctions[nft.auctions.length - 1];
  // if (!auctionId) return;
  // const auction = Auction.load(auctionId);

  // if (!auction) return;
  // auction.hidden = true;

  // auction.save();

  // if (nft.sales) {
  //   const saleId = nft.sales[nft.sales.length - 1];
  //   if (!saleId) return;
  //   const sale = Sale.load(saleId);

  //   if (!sale) return;
  //   sale.hidden = true;

  //   sale.save();
  // }
}
