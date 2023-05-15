import mailchimp from "@mailchimp/mailchimp_marketing";
import { collection, doc, writeBatch } from "firebase/firestore";
// import nodemailer from "nodemailer";
import app from "../../../firebaseConfig";
import sendMail from "../mailer";
import orderEmail from "./orderEmail";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX
})

const listId = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE

const ORDER_RECIPIENTS = [
  // 'dabouhamad@gmail.com',
  'dani@bulki.us',
  // 'steve@bulki.us'
]

//make order in DB

//Add to newseltter if checked

//Send us an email
//submit payment

//empty cart


export default async function makeOrder(order, totals) {
  try {
    // let response = await fetch('/api/makeOrder', {
    //   method: 'POST',
    //   body: JSON.stringify({ order })
    // })
    // const { newOrderId } = await response.json();

    const newOrderId = await clientMakeOrder(order)


    console.log('New Order Id: ' + newOrderId);
    // if (order.newsletter) {
    //   // await clientNewsletter(order.email, order.firstName, order.lastName)
    //   let response = await fetch('/api/newsletter/signup', {
    //     method: 'POST',
    //     body: JSON.stringify({ email: order.email, fName: order.firstName, lName: order.lastName })
    //   })
    //   let newsletterJson = await response.json();
    //   console.log('Newsletter Response', newsletterJson)
    // }

    // await clientMailer(ORDER_RECIPIENTS, 'New Order Placed', orderEmail(order, newOrderId, totals))
    const mailerResponse = await sendMail(ORDER_RECIPIENTS, "New Order Placed", orderEmail(order, newOrderId, totals));

    // let response = await fetch('/api/mailer/sendMail', {
    //   method: 'POST',
    //   body: JSON.stringify({ recipients: ORDER_RECIPIENTS, subject: 'New Order Placed', message: orderEmail(order, newOrderId, totals) })
    // })
    // let mailerResponse = await response.json();
    console.log('Mailer Response', mailerResponse);

  } catch (err) {
    console.log(err)
    // throw new Error(err)
  }
}


async function clientMakeOrder(order) {
  const timestamp = Date.now();
  const db = app.firestore
  //Instantiate batch
  const batch = writeBatch(db);
  //Creates the order doc
  order.orderedOn = timestamp;
  order.status = 'confirmed'

  const newOrderDoc = doc(collection(app.firestore, "orders"));
  batch.set(newOrderDoc, order);

  const newOrderId = newOrderDoc.id
  // addOrderToUsers(batch, order)
  //Commits the batch
  await batch.commit()
  return newOrderId
}

// async function clientNewsletter(email, fName, lName) {
//   if (!email || !email.length) {
//     console.log('Error: no email')
//   }
//   try {
//     const response = await mailchimp.lists.setListMember(listId,
//       email,
//       {
//         email_address: email,
//         status_if_new: "subscribed",
//         merge_fields: {
//           FNAME: fName,
//           LNAME: lName
//         }
//       });
//     console.log('Newsletter success');
//     return;
//   } catch (error) {
//     console.log('Newsletter Error: ' + error.message)
//   }
// }

// async function clientMailer(recipients, subject, message) {
//   try {
//     let transporter = nodemailer.createTransport({
//       host: "smtp.office365.com",
//       port: 587,
//       auth: {
//         user: process.env.MAILER_USER,
//         pass: process.env.MAILER_PASS
//       },
//     });

//     let email = await transporter.sendMail({
//       from: process.env.MAILER_USER, // sender address
//       to: recipients, // list of recipients
//       subject: subject, // Subject line
//       html: `<b>${message}</b>`, // html body
//     });
//     console.log('Mailer sent')
//     return;
//   } catch (e) {
//     console.log('Mailer Error: ' + e.message);
//   }
// }