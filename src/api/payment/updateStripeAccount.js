const dummy = {
  business_type: 'individual',
  individual: {
    first_name: 'tony',
    last_name: 'tiger'
  }
}

// shape of account found here: https://stripe.com/docs/api/accounts/update
export default async function updateStripeAccount(stripeId, account = dummy) {
  console.log(stripeId, account);
  const response = await fetch(`/api/payment/updatestripeaccount/${stripeId}`, {
    method: "POST",
    body: JSON.stringify({ account }),
  });
  const myJson = await response.json();
  console.log(myJson);
  return myJson
}