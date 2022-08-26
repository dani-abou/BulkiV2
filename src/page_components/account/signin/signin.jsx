import {
  StyledEmail, StyledPassword,
  StyledOptions, StyledSignIn,
  StyledCheckbox, StyledSearchFlex, StyledOptionsDiv
} from './style'
import { StyledPaper, LogInButton } from "../utils";
import { useEmailSignIn } from "../../../assets/authentication"
import { useState, useEffect } from "react";
import { Checkbox } from '@mui/material';
import { BulkiCaption } from '../../../assets/tags';
import Link from "next/link"
import { urls } from '../../../assets';

const SignIn = () => {
  const [credentials, setCredentials] = useState({})
  const status = useEmailSignIn(credentials?.email, credentials?.password)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [rememberMe, setRememberMe] = useState(false)

  useEffect(() => {
    if (status !== 'loading') {
      setCredentials({})
    }
  }, [status])

  return <StyledPaper title='Log in'>
    <StyledEmail
      label='Email'
      value={email}
      onChange={setEmail} />

    <StyledPassword
      label='Password'
      value={password}
      onChange={setPassword}
    />

    <StyledSearchFlex>
      <StyledCheckbox
        control={<Checkbox
          value={rememberMe}
          onChange={() => setRememberMe(prev => !prev)}
          size={'small'} />}
        label={<BulkiCaption>Remember Me</BulkiCaption>} />
      <StyledOptionsDiv>
        <Link href={urls.signup}>
          <StyledOptions>Create account</StyledOptions>
        </Link>
        <Link href={urls.forgotPassword}>
          <StyledOptions>Forgot password?</StyledOptions>
        </Link>
      </StyledOptionsDiv>
    </StyledSearchFlex>

    <LogInButton onClick={() => setCredentials({ email, password })}>Log In</LogInButton>

  </StyledPaper>
}

export default SignIn