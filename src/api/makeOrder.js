const ORDER_RECIPIENTS = [
  'dabouhamad@gmail.com'
]


export default async function makeOrder(product, customer) {
  try {
    const response = await fetch('/api/makeOrder', {
      method: 'POST',
      body: JSON.stringify({ product, customer })
    })
    const myJson = await response.json();
    console.log('Order: ', myJson)

    // const mailerResponse = await fetch('/api/mailer/sendMail') {

    // }
  } catch (err) {
    throw new Error(err)
  }
}