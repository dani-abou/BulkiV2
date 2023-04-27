import { collection, doc, writeBatch } from "firebase/firestore";
import stripe from "stripe";
import app from "../../firebaseConfig";
import config from "./config.json";

const ourStripe = stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

/**API funciton for adding a order to the database */
export default async function makeOrder(req, res) {
  try {
    const { product, customer } = JSON.parse(req.body)
    // await makePayment(order.amount, order.listing?.destination)

    const newOrderId = await addOrderToDb({ ...customer, product })
    res.status(200).json({ newOrderId });
  } catch (e) {
    res.status(501).json({ message: e.message });
  }
}

async function addOrderToDb(order) {
  const timestamp = Date.now();

  const db = app.firestore
  //Instantiate batch
  const batch = writeBatch(db);
  //Creates the order doc
  order.orderedOn = timestamp;
  order.status = 'confirmed'
  const newOrderId = addOrderToOrders(batch, order)
  // addOrderToUsers(batch, order)
  //Commits the batch
  await batch.commit()
  return newOrderId
}

function addOrderToOrders(batch, order) {
  const newOrderDoc = doc(collection(app.firestore, "orders"));
  batch.set(newOrderDoc, order);
  return newOrderDoc.id
}

// async function addOrderToUsers(batch, order) {
//   const newBuyerDocRef = doc(collection(doc(collection(app.firestore, "users"), order.buyerId), "orders"), order.listing);
//   const newBuyerDoc = { product: order.listing, orderedOn: order.orderedOn, status: order.status };
//   batch.set(newBuyerDocRef, newBuyerDoc);
// }

// async function makePayment(amount, destination) {
//   if (!amount) throw { message: 'Invalid price' }
//   if (!destination) throw { message: 'Invalid destination' }

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await ourStripe.paymentIntents.create({
//     amount,
//     currency: "usd",
//     automatic_payment_methods: {
//       enabled: true,
//     },
//     transfer_data: {
//       amount: amount * ((100 - config.platformFee) / 100),
//       destination: destination
//     }
//   });
//   return paymentIntent.client_secret
// }


// export default async function makeOrder(req, res) {
//   try {
//     const { product, customer } = JSON.parse(req.body);



//     res.status(200).json('Success')
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }

// }