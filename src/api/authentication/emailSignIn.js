
const responses = {
  success: { type: 'success' },
  loading: { type: 'loading' },
  invalid: { type: 'error', message: 'Incorrect email or password' },
  generalError: { type: 'error', message: 'Unknown error, please contact customer service' }
}

const emailSignIn = async (email, password) => {
  if (email && password) {
    // await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence)
    // await signInWithEmailAndPassword(auth, email, password)
    const response = await fetch('/api/authentication/emailsignin', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${email}:${password}`)}`
      },
    })
    const myJson = await response.json();
    console.log(myJson);
  }
}

export default emailSignIn