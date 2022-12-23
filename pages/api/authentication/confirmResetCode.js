import app from "../../../firebaseConfig";
import { verifyPasswordResetCode } from "firebase/auth";
import { Link } from "next/link";
import { urls } from "../../../src/common";


const ValidationResponses = {
  success: { type: 'success' },
  invalid: { type: 'failure', message: 'Invalid reset code' },
  expired: { type: 'failure', message: `Expired reset code, click <Link href={${urls.forgotPassword}}>here</Link>to restart the process` },
  generalFailure: { type: 'failure', message: 'Unknown failure' }
}

const confirmResetCode = async (code, mode) => {
  if (!app?.auth) return ValidationResponses.generalFailure;
  if (mode !== 'resetPassword') return ValidationResponses.invalid
  try {
    const email = await verifyPasswordResetCode(app.auth, code);
    return { ...ValidationResponses, message: email }
  }
  catch (error) {
    if (error.code === 'auth/expired-action-code') {
      return ValidationResponses.expired
    } else if (error.code === 'auth/invalid-action-code') {
      return ValidationResponses.invalid
    }
    return generalFailure;
  }
}

export default confirmResetCode