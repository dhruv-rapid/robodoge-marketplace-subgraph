import { BigInt } from "@graphprotocol/graph-ts";
import {
  ItemAdded,
  ItemUpdated,
  ItemRemoved,
  ItemBought,
} from "../generated/RoboDogeTAUniversity/RoboDogeTAUniversity";
import { Tutorial, UserTutorials } from "../generated/schema";

export function handleItemAdded(event: ItemAdded): void {
  const id = event.params.id.toString();
  const tutorial = new Tutorial(id);

  tutorial.active = true;
  tutorial.metadata = event.params.metadata;
  tutorial.price = event.params.price;
  tutorial.currency =
    event.params.currency.toString() === "0" ? "ROBODOGE" : "BNB";
  tutorial.soldCount = BigInt.fromI32(0);

  tutorial.save();
}

export function handleItemUpdated(event: ItemUpdated): void {
  const id = event.params.id.toString();
  const tutorial = Tutorial.load(id);

  if (!tutorial) return;

  tutorial.price = event.params.price;
  tutorial.currency =
    event.params.currency.toString() === "0" ? "ROBODOGE" : "BNB";

  tutorial.save();
}

export function handleItemRemoved(event: ItemRemoved): void {
  const id = event.params.id.toString();
  const tutorial = Tutorial.load(id);

  if (!tutorial) return;

  tutorial.active = false;

  tutorial.save();
}

export function handleItemBought(event: ItemBought): void {
  const tutorialId = event.params.id.toString();
  const tutorial = Tutorial.load(tutorialId);

  if (!tutorial) return;
  tutorial.soldCount = tutorial.soldCount.plus(BigInt.fromI32(1));

  tutorial.save();

  const id = event.transaction.from.toString();
  let user = UserTutorials.load(id);

  if (!user) {
    user = new UserTutorials(id);
  }

  let userTutorials = user.tutorials;
  if (!userTutorials) {
    userTutorials = [];
  }
  userTutorials.push(tutorialId);

  user.tutorials = userTutorials;

  user.save();
}
