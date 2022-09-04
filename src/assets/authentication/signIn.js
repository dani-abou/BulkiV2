import app from "../../../firebaseConfig"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { urls } from "..";

const useEmailSignIn = (email, password, redirectPath = urls.primary) => {
  const [status, setStatus] = useState('inProgress')
  const router = useRouter()

  useEffect(() => {

    const signIn = async () => {
      setStatus('loading')
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setStatus('success')
        if (redirectPath) router.push(redirectPath)
      } catch (error) {
        setStatus('incorrect')
      }
    }

    const auth = app?.auth;
    if (!auth) throw 'Auth instance invalid'
    console.log(email, password)
    if (email && email !== '' && password && password !== '') {
      signIn();
    }

  }, [email, password, redirectPath, router])
  return status
}

export default useEmailSignIn