import orderEmail from "./orderEmail";

const ORDER_RECIPIENTS = [
  'dabouhamad@gmail.com',
  'dani@bulki.us',
  'steve@bulki.us'
]

//make order in DB

//Add to newseltter if checked

//Send us an email
//submit payment

//empty cart


export default async function makeOrder(order, totals) {
  try {
    console.log(order, totals)
    let response = await fetch('/api/makeOrder', {
      method: 'POST',
      body: JSON.stringify({ order })
    })
    const { newOrderId } = await response.json();

    if (order.newsletter) {
      response = await fetch('/api/newsletter/signup', {
        method: 'POST',
        body: JSON.stringify({ email: order.email, fName: order.firstName, lName: order.lastName })
      })
      let newsletterJson = await response.json();
      console.log('Newsletter Response', newsletterJson)
    }

    response = await fetch('/api/mailer/sendMail', {
      method: 'POST',
      body: JSON.stringify({ recipients: ORDER_RECIPIENTS, subject: 'New Order Placed', message: orderEmail(order, newOrderId, totals) })
    })
    let mailerResponse = await response.json();
    console.log('Mailer Response', mailerResponse);

  } catch (err) {
    console.log(err)
    // throw new Error(err)
  }
}