import { useState } from "react";
import { StyledPaper, LogInButton } from "../utils";
import { PageIfNotAuthenticated } from "../../utils";
import {
  StyledNameDiv, StyledNameField, StyledEmail, StyledHelperText,
  StyledPasswordDiv, StyledPasswordField, StyledAgreements
} from "./style";
import { signUp } from "../../../common/authentication"
import { useRouter } from 'next/router'
import { PASSWORD_REGEX, PASSWORD_RULES, EMAIL_REGEX } from "../../../components/BulkiInput";
import BulkiCheckbox from "../../../components/BulkiCheckbox/BulkiCheckbox";
import Link from "next/link";
import { urls } from "../../../common";

const SignUp = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [helperText, setHelperText] = useState()

  return (
    <StyledPaper title='Sign up'>
      <PageIfNotAuthenticated>
        <form>
          <StyledNameDiv>
            <StyledNameField
              required
              label='First Name'
              placeholder='John'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              error={helperText?.ref === 'firstName'}
              helperText={helperText?.ref == 'firstName' ? helperText?.text : undefined}
            />
            <StyledNameField
              required
              label='Last Name'
              placeholder='Doe'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              error={helperText?.ref === 'lastName'}
              helperText={helperText?.ref == 'lastName' ? helperText?.text : undefined}
            />
          </StyledNameDiv>

          <StyledEmail
            value={email}
            onChange={setEmail}
            error={helperText?.ref === 'email'}
            helperText={helperText?.ref === 'email' ? helperText?.text : undefined}
          />
          <StyledPasswordDiv>
            <StyledPasswordField
              value={password}
              onChange={setPassword}
              shrink
              error={helperText?.ref === 'password' || helperText?.ref === 'password'}
              helperText={helperText?.ref == 'password' ? <StyledHelperText>{helperText?.text}</StyledHelperText> : undefined} />
            <StyledPasswordField
              label='Confirm Password'
              shrink
              value={passwordConfirm}
              onChange={setPasswordConfirm} />
          </StyledPasswordDiv>
          <BulkiCheckbox
            label={<StyledAgreements>I agree to the {" "}
              <a href={urls.termsAndConditions} target="_blank" rel="noreferrer">Terms and Conditions</a>{" "}
              and the {" "}
              <a href={urls.privacyPolicy} target="_blank" rel="noreferrer">Privacy Policy</a>.</StyledAgreements>}
            required />
          <LogInButton
            type='submit'
            onClick={() => verifyForm({ email, firstName, lastName, password, passwordConfirm },
              setHelperText, router)
            }>Next</LogInButton>
        </form>
      </PageIfNotAuthenticated>
    </StyledPaper >)
}

const verifyForm = async (credentials, setHelperText, router) => {
  const setStatus = response => response === "invalid" && setHelperText({ ref: "email", text: "Email Already in use" });

  const xCannotBeEmpty = (x) => `Must include ${x}`;
  const { password, passwordConfirm, ...creds } = credentials;

  if (creds?.firstName === '' || creds?.firstName === undefined) {
    setHelperText({ ref: 'firstName', text: xCannotBeEmpty('First name') })
  } else if (creds?.lastName === '' || creds?.lastName === undefined) {
    setHelperText({ ref: 'lastName', text: xCannotBeEmpty('Last name') })
  } else if (creds?.email === '' || creds?.email === undefined) {
    setHelperText({ ref: 'email', text: xCannotBeEmpty('Email') })
  } else if (!EMAIL_REGEX.test(creds.email)) {
    setHelperText({ ref: 'email', text: "Invalid email address" })
  } else if (!PASSWORD_REGEX.test(password)) {
    setHelperText({ ref: 'password', text: PASSWORD_RULES })
  } else if (password !== passwordConfirm) {
    setHelperText({ ref: 'password', text: "Passwords must match" })
  } else {
    signUp(credentials, router, setStatus);
  }
}


export default SignUp;