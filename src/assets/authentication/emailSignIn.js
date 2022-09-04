import app from "../../../firebaseConfig"
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence
} from 'firebase/auth';
import { urls } from '..'

const responses = {
  success: { type: 'success' },
  loading: { type: 'loading' },
  invalid: { type: 'error', message: 'Incorrect email or password' },
  generalError: { type: 'error', message: 'Unknown error, please contact customer service' }
}

const emailSignIn = async (email, password, rememberMe, setStatus, router) => {
  const auth = app?.auth;
  setStatus(responses.loading)
  if (!auth) setStatus(responses.generalError)
  else {
    try {
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence)
      await signInWithEmailAndPassword(auth, email, password)
      setStatus(responses.success);
      if (router) router.push(urls.catalog);
    } catch (error) {
      setStatus(responses.invalid)
    }
  }
}

export default emailSignIn