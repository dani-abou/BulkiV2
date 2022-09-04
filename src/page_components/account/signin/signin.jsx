import {
  StyledEmail, StyledPassword,
  StyledOptions, StyledSignIn,
  StyledCheckbox, StyledSearchFlex, StyledOptionsDiv
} from './style'
import { StyledPaper, LogInButton, AuthChecker } from "../utils";
import { useEmailSignIn, emailSignIn } from "../../../assets/authentication"
import { useState, useEffect } from "react";
import { Checkbox } from '@mui/material';
import { BulkiCaption } from '../../../assets/tags';
import Link from "next/link"
import { urls } from '../../../assets';
import { useRouter } from 'next/router';

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [status, setStatus] = useState();
  const router = useRouter();

  const signin = e => {
    e.preventDefault();
    emailSignIn(email, password, rememberMe, setStatus, router)
  }

  return <StyledPaper title='Log in'>
    <AuthChecker>
      <form onSubmit={signin}>
        <StyledEmail
          label='Email'
          value={email}
          onChange={setEmail} />

        <StyledPassword
          label='Password'
          value={password}
          onChange={setPassword}
          error={status?.type === 'error'}
          helperText={status?.message}
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

        <LogInButton type='submit' disabled={status?.type === 'loading'}>Log In</LogInButton>
      </form>
    </AuthChecker>
  </StyledPaper>
}

export default SignIn