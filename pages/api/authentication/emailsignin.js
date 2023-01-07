import {
  browserLocalPersistence, browserSessionPersistence, setPersistence, signInWithEmailAndPassword
} from 'firebase/auth';
import app from '../../../firebaseConfig';

const responses = {
  success: { type: 'success' },
  invalid: { type: 'error', message: 'Incorrect email or password' },
  generalError: { type: 'error', message: 'Unknown error, please contact customer service' }
}

export default async function emailSignIn(req, res) {
  try {
    const b64EmailPassword = req.headers.authorization?.split(' ')[1] || '';
    const [email, password] = Buffer.from(b64EmailPassword, 'base64').toString().split(':')



    res.status(200).json({ email, password })
  } catch (error) {
    res.status(501).json({ error })
  }

  // const auth = app?.auth;
  // setStatus(responses.loading)
  // if (!auth) setStatus(responses.generalError)
  // else {
  //   try {
  //     await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence)
  //     await signInWithEmailAndPassword(auth, email, password)
  //     setStatus(responses.success);
  //     if (router) router.push(urls.catalog);
  //   } catch (error) {
  //     setStatus(responses.invalid)
  //   }
  // }
}