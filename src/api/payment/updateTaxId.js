export default async function updateTaxId(stripeId, newId) {
  const response = await fetch(`/api/payment/updatestripeaccount/${stripeId}`, {
    method: "POST",
    body: JSON.stringify({ account: { company: { tax_id: newId } } }),
  });
  const myJson = await response.json();
  console.log(myJson);
  return myJson
}