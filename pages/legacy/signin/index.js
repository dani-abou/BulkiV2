import { SignIn } from "../../src/page_components";
import { useEffect } from 'react'

const PAGE_META = {
  title: 'Sign in - Bulki'
}

const SignInPage = ({ headControls }) => {
  useEffect(() => headControls(PAGE_META), [headControls])

  return <SignIn />
}

export default SignInPage