import { PageIfNotAuthenticated } from "../../utils";
import { LogInButton, StyledPaper } from "../utils";
import {
  StyledCheckbox, StyledEmail, StyledOptions, StyledOptionsDiv, StyledPassword, StyledSearchFlex, StyledSignIn
} from './style';
// import { useEmailSignIn, emailSignIn } from "../../../common/authentication"
import { Checkbox } from '@mui/material';
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
// import emailSignIn from '../../../api/authentication/emailSignIn';
import { urls } from '../../../common';
import { emailSignIn } from "../../../common/authentication";
import { BulkiCaption } from '../../../common/styles';

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [status, setStatus] = useState();
  const router = useRouter();

  const signin = e => {
    e.preventDefault();
    emailSignIn(email, password, rememberMe, setStatus, router);
    // emailSignIn(email, password, rememberMe)
  }

  return <StyledPaper title='Log in'>
    <PageIfNotAuthenticated>
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
    </PageIfNotAuthenticated>
  </StyledPaper>
}

export default SignIn