export default async function newsletterSignup(email, fName, lName) {
  if (email) {
    const response = await fetch('https://newslettersignup-wblyqmc3dq-uc.a.run.app', {
      method: 'POST',
      // body: JSON.stringify({ email, fName, lName })
      body: JSON.stringify({ email, fName, lName })
    })
    const myJson = await response.json();
    console.log(myJson)
    return myJson
  } else throw 'Invalid Email'
}