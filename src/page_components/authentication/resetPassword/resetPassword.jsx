import { CircularProgress } from "@mui/material"
import { useConfirmResetCode, resetPassword } from "../../../common/authentication"
import { StyledPaper, PasswordField, LogInButton } from "../utils"
import { PageIfNotAuthenticated } from "../../utils";

import { Link } from "next/link"
import { urls } from "../../../common"
import { useState } from "react"
import { StyledPaperBody, StyledFieldDiv, StyledResponse, StyledResponseDiv } from "./style"
import { PASSWORD_REGEX, PASSWORD_RULES } from "../../../components/BulkiInput"

const ResetPassword = ({ validationResponse }) => {
  // const [codeValidity, loadingConfirmation, expired, email] = useConfirmResetCode(code)
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [helperText, setHelperText] = useState()
  const [response, setResponse] = useState();

  const validatePassword = (email) => {
    if (!PASSWORD_REGEX.test(password)) setHelperText(PASSWORD_RULES);
    else if (password !== confirmPassword) setHelperText("Password and confirm password must match")
    else {
      resetPassword(email, password, setResponse);
    }
  }

  return <StyledPaper title='Reset Password'>
    <PageIfNotAuthenticated>
      <StyledPaperBody>
        {
          validationResponse.type === 'failure' ?
            <>{validationResponse.message}</> :
            <>
              <StyledFieldDiv>
                <PasswordField
                  value={password}
                  onChange={setPassword}
                  shrink
                  error={helperText}
                  helperText={helperText}
                />
              </StyledFieldDiv>
              <StyledFieldDiv>
                <PasswordField
                  label='Confirm Password'
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                  shrink
                />
              </StyledFieldDiv>

              <LogInButton onClick={() => validatePassword(validationResponse.message)}>Reset password</LogInButton>
              <StyledResponseDiv>
                <StyledResponse>{response}</StyledResponse>
              </StyledResponseDiv>
            </>
        }
      </StyledPaperBody>
    </PageIfNotAuthenticated>

  </StyledPaper>
}

export default ResetPassword