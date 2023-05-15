export default async function sendMail(recipients, subject, message) {
  if (!recipients) return;
  const response = await fetch(`https://mailer-wblyqmc3dq-uc.a.run.app`, {
    method: 'POST',
    body: JSON.stringify({ recipients, subject, message })
  })

  const myJson = await response.json();
  return myJson;
}