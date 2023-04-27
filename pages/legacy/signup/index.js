import { SignUp } from "../../src/page_components"
import { useEffect } from "react"

const PAGE_META = {
  title: "Sign Up - Bulki"
}

const SignUpPage = ({ headControls }) => {
  useEffect(() => headControls(PAGE_META), [headControls]);
  return <SignUp />
}

export default SignUpPage