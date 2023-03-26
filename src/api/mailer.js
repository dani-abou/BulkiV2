export default async function sendMail(recipients, subject, message) {
  if (!recipients) return;
  const response = await fetch(`/api/mailer/sendMail`, {
    method: 'POST',
    body: JSON.stringify({ recipients, subject, message })
  })

  const myJson = await response.json();
  console.log(myJson);
  return myJson;
}