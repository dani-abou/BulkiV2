import { collection, doc, writeBatch } from "firebase/firestore";
import { cloneDeep } from "lodash";
import app from "../../../../firebaseConfig";

/**API funciton for adding a listing to the database */
export default async function makeListing(req, res) {
  try {
    const timestamp = Date.now();
    const listing = JSON.parse(req.body);
    const db = app.firestore
    //Instantiate batch
    const batch = writeBatch(db);
    //Creates the listing doc
    listing.postedOn = timestamp;
    const newListingId = addListingToCatalog(batch, listing)
    addListingToUser(batch, { ...listing, id: newListingId })
    //Commits the batch
    await batch.commit()
    res.status(200).json("Created listing: " + newListingId);
  } catch (e) {
    res.status(404).json(e.message);
  }
}

function addListingToCatalog(batch, listing) {
  const { pricing, ...newListing } = listing;
  const newListingDoc = doc(collection(app.firestore, "listings"));
  batch.set(newListingDoc, newListing);
  //Creates a doc in the pricing collection for each pricing option
  Object.values(pricing).forEach(price => {
    const newPricingDoc = doc(collection(newListingDoc, "pricing"));
    let priceObject = cloneDeep(price);
    if (!priceObject.title || priceObject.title.length === 0) {
      priceObject.title = priceObject.quantity + " units"
    }
    batch.set(newPricingDoc, priceObject)
  })
  return newListingDoc.id
}

function addListingToUser(batch, listing) {
  const newDocRef = doc(collection(doc(collection(app.firestore, "users"), listing.sellerId), "listings"), listing.id);
  const newDoc = { product: listing.product, images: listing.images, postedOn: listing.postedOn, }
  batch.set(newDocRef, newDoc);
}