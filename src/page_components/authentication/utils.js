import styled from "styled-components";
import { Paper } from "@mui/material";
import BulkiInput from "../../components/BulkiInput";
import BulkiButton, { BulkiIconButton } from "../../components/BulkiButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { BulkiH4 } from "../../assets/styles";
import { useRouter } from "next/router"
import { useEffect } from "react";
import app from "../../../firebaseConfig";
import { urls } from "../../assets";
import { BulkiContextConsumer } from "../../assets/context";

const StyledSignInContainer = styled(Paper)`
  margin-left: auto;
  margin-right:auto;
  margin-top: 2%;
  width: 500px;
  height: min-content;
`

const StyledPaddingDiv = styled.div`
  height: 100%;
  width: 100%;
  padding: 8% 15%;
  position: relative;
`

export const StyledPaper = ({ children, title, className, ...props }) => {
  return <StyledSignInContainer className={className} {...props}>
    <StyledPaddingDiv>
      <BulkiH4>{title}</BulkiH4>
      {children}
    </StyledPaddingDiv>
  </StyledSignInContainer>
}



export const EmailField = ({ label = 'Email', value, onChange, className, ...props }) => {
  return <BulkiInput
    {...props}
    className={className}
    placeholder='email@website.com'
    required
    label={label}
    value={value}
    onChange={e => onChange(e.target.value)} />
}

const StyledIconDiv = styled.div`
  width: min-content;
  margin-right: 5px;
`
const StyledIconButton = styled(BulkiIconButton)`
  color: ${props => props.$secondary ? props.theme.colors.secondary.lighten(0.1).hexa() : props.theme.colors.onSurface.hexa()};
`

export const PasswordField = ({ label = 'Password', shrink, value, onChange, className, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return <BulkiInput
    InputLabelProps={{ shrink: shrink }}
    {...props}
    className={className}
    label={label}
    required
    value={value}
    onChange={e => onChange(e.target.value)}
    type={showPassword ? 'text' : 'password'}
    suffix={<StyledIconDiv>
      <StyledIconButton onClick={() => setShowPassword(prev => !prev)} $secondary={showPassword}>
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </StyledIconButton>
    </StyledIconDiv>
    }
  />
}

const StyledLogInButton = styled(BulkiButton)`
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 10%;
  width: 100%;
`

export const LogInButton = ({ children, ...props }) => {
  return <StyledLogInButton {...props}>{children}</StyledLogInButton>
}


const AuthCheckerRouter = ({ context, children }) => {
  const router = useRouter()

  useEffect(() => {
    if (context?.userData) {
      router.push(urls.catalog);
    }
  }, [router, context])
  return children
}

export const AuthChecker = (props) => {
  return <BulkiContextConsumer>
    {context => <AuthCheckerRouter {...props} context={context} />}
  </BulkiContextConsumer>
}