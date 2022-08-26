import app from "../../../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

const sendPasswordReset = async (email, setResponse) => {
  if (!app?.auth) throw 'Invalid Auth token'
  try {
    await sendPasswordResetEmail(app?.auth, email);
    setResponse('success')
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      setResponse('noUser')
    } else {
      throw error
    }
  }
}

export default sendPasswordReset