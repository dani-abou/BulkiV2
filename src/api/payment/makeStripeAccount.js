export default async function makeStripeAccount() {
  const response = await fetch("/api/payment/makestripeaccount", {
    method: "POST",
  });
  const myJson = await response.json();
  console.log(myJson);
  return myJson
}