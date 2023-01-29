import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from "react";
import { urls } from "../../../common";
import { signUp } from "../../../common/authentication";
import BulkiCheckbox from "../../../components/BulkiCheckbox/BulkiCheckbox";
import { EMAIL_REGEX, PASSWORD_REGEX, PASSWORD_RULES } from "../../../components/BulkiInput";
import { PageIfNotAuthenticated } from "../../utils";
import { LogInButton, StyledPaper } from "../utils";
import { StyledAgreements, StyledEmail, StyledHelperText, StyledNameDiv, StyledNameField, StyledPasswordDiv, StyledPasswordField } from "./style";

const SignUp = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [helperText, setHelperText] = useState()
  const [agreed, setAgreed] = useState(false);

  const verifyForm = async (e) => {
    e.preventDefault();
    const setStatus = response => response === "invalid" && setHelperText({ ref: "email", text: "Email Already in use" });

    const xCannotBeEmpty = (x) => `Must include ${x}`;

    if (firstName === '' || firstName === undefined) {
      setHelperText({ ref: 'firstName', text: xCannotBeEmpty('First name') })
    } else if (lastName === '' || lastName === undefined) {
      setHelperText({ ref: 'lastName', text: xCannotBeEmpty('Last name') })
    } else if (email === '' || email === undefined) {
      setHelperText({ ref: 'email', text: xCannotBeEmpty('Email') })
    } else if (!EMAIL_REGEX.test(email)) {
      setHelperText({ ref: 'email', text: "Invalid email address" })
    } else if (!PASSWORD_REGEX.test(password)) {
      setHelperText({ ref: 'password', text: PASSWORD_RULES })
    } else if (password !== passwordConfirm) {
      setHelperText({ ref: 'password', text: "Passwords must match" })
    } else {
      await signUp({ email, firstName, lastName, password, passwordConfirm }, router, setStatus);
    }
  }

  const disabledButton = () => {
    return !email || !password || !firstName || !lastName || !passwordConfirm || !agreed
  }

  return (
    <StyledPaper title='Sign up'>
      <PageIfNotAuthenticated>
        <form onSubmit={verifyForm}>
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
            value={agreed}
            onChange={e => setAgreed(e.target.checked)}
            label={<StyledAgreements>I agree to the {" "}
              <a href={urls.termsAndConditions} target="_blank" rel="noreferrer">Terms and Conditions</a>{" "}
              and the {" "}
              <a href={urls.privacyPolicy} target="_blank" rel="noreferrer">Privacy Policy</a>.</StyledAgreements>}
            required />
          <LogInButton
            type='submit'
            disabled={disabledButton()}
          >Sign up</LogInButton>
        </form>
      </PageIfNotAuthenticated>
    </StyledPaper >)
}

export default SignUp;