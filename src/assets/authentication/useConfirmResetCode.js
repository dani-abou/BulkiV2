import { verifyPasswordResetCode } from "firebase/auth";
import { useState, useEffect } from "react"
import app from "../../../firebaseConfig";

const useConfirmResetCode = (code) => {
  const [loading, setLoading] = useState(true);
  const [validity, setValidity] = useState(false);
  const [expired, setExpired] = useState(false)
  const [response, setResponse] = useState()



  useEffect(() => {
    const checkValidity = async () => {
      setLoading(true);
      if (!app?.auth) throw 'Invalid auth token'
      try {
        const email = await verifyPasswordResetCode(app.auth, code);
        setValidity(true)
        setResponse(email)
      } catch (error) {
        if (error.code === 'auth/expired-action-code') {
          console.log('Expired action code');
          setExpired(true);
        } else if (error.code === 'auth/invalid-action-code') {
          console.log('Invalid action code');
          setValidity(false);
        }
      }
      setLoading(false)
    }
    checkValidity()
    setLoading(false);

  }, [code])
  return [validity, loading, expired, response]
}

export default useConfirmResetCode