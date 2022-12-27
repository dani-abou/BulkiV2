import { collection, doc, writeBatch } from "firebase/firestore";
import { cloneDeep } from "lodash";
import app from "../../../../firebaseConfig";

/**API funciton for adding a order to the database */
export default async function makeOrder(req, res) {
  try {
    const timestamp = Date.now();
    const order = JSON.parse(req.body)
    const db = app.firestore
    //Instantiate batch
    const batch = writeBatch(db);
    //Creates the order doc
    order.orderedOn = timestamp;
    order.status = 'confirmed'
    const newOrderId = addOrderToDb(batch, order)
    addOrderToUsers(batch, order)
    //Commits the batch
    await batch.commit()
    res.status(200).json(newOrderId);
  } catch (e) {
    res.status(404).json(e.message);
  }
}

function addOrderToDb(batch, order) {
  const newOrderDoc = doc(collection(app.firestore, "orders"));
  batch.set(newOrderDoc, order);
  return newOrderDoc.id
}

async function addOrderToUsers(batch, order) {
  const newBuyerDocRef = doc(collection(doc(collection(app.firestore, "users"), order.buyerId), "orders"), order.listing);
  const newBuyerDoc = { product: order.listing, orderedOn: order.orderedOn, status: order.status };
  batch.set(newBuyerDocRef, newBuyerDoc);
}