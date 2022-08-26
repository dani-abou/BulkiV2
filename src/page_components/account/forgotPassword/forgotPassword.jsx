import { useState } from "react"
import { sendPasswordReset, } from "../../../assets/authentication"
import { StyledPaper, EmailField, LogInButton } from "../utils"
import {
  StyledInstructions, StyledInstructionsDiv, StyledFieldDiv, StyledSentDiv,
  StyledSent
} from "./style"
import { EMAIL_REGEX } from "../../../components/BulkiInput"

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [response, setResponse] = useState('')
  const [helperText, setHelperText] = useState('')

  const invalidEmail = () => !EMAIL_REGEX.test(email);

  const sendEmail = async () => {
    if (!invalidEmail()) {
      setHelperText('')
      await sendPasswordReset(email, setResponse);
    } else {
      setHelperText('Invalid email address')
    }
  }

  const onEmailChange = (v) => {
    setEmail(v);
    if (response !== '') setResponse('')
  }


  return <StyledPaper title='Reset Password'>
    <StyledInstructionsDiv>
      <StyledInstructions>
        {`Enter your account's email address and we'll
      send an email with instructions to reset your password.`}
      </StyledInstructions>
      <StyledFieldDiv>
        <EmailField
          value={email}
          onChange={onEmailChange}
          error={invalidEmail() || response === 'noUser'}
          helperText={response === 'noUser'
            ? 'No User found with that email' : helperText}
        />
      </StyledFieldDiv>
      <LogInButton onClick={sendEmail}>
        {response === 'success' ? 'Send again' : 'Send Instructions'}</LogInButton>
    </StyledInstructionsDiv>
    {response === 'success' && <StyledSentDiv>
      <StyledSent>
        Email sent!
      </StyledSent>
    </StyledSentDiv>
    }
  </StyledPaper>
}


export default ForgotPassword