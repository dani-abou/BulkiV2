import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import newsletterSignup from "../../api/newsletter/signup";
import { BulkiH5 } from "../../common/styles";
import { isValidEmail } from "../../common/utils";
import BulkiButton from "../../components/BulkiButton";
import BulkiInput from "../../components/BulkiInput";
import { StyledFormDiv, StyledLogoDiv, StyledSurface } from "./style";

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  const [helperText, setHelperText] = useState()
  const [status, setStatus] = useState()


  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setHelperText('Please enter a valid email')
    } else if (status !== 'added') {
      setStatus('loading')
      newsletterSignup(email, fName, lName)
      setStatus('added')
    }
  }

  const onChange = (e) => {
    if (helperText) setHelperText();
    setEmail(e.target.value)
  }

  return <StyledSurface>
    <StyledLogoDiv>
      <Image
        src='BulkiLogo.png'
        alt='BulkiLogo'
        layout='fill'
      />
    </StyledLogoDiv>
    <StyledFormDiv onSubmit={onSubmit}>
      <br />
      <BulkiH5 style={{ textAlign: 'center' }}>Join the newsletter to be the first to know!</BulkiH5>
      <div style={{ display: 'flex', gap: '10px' }}>
        <BulkiInput
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          label='First Name'
        />
        <BulkiInput
          value={lName}
          onChange={(e) => setLName(e.target.value)}
          label='Last Name'
        />
      </div>
      <BulkiInput
        value={email}
        onChange={onChange}
        helperText={helperText}
        error={helperText}
        label='Email Address'
        required
      />
      <BulkiButton type='submit' disabled={status === 'loading'}
        style={{ height: '36.5px' }}
      >
        {!status ? 'Sign me up!' :
          status === 'added' ? 'Added :)' :
            <CircularProgress style={{ color: 'gray', width: '20px', height: '20px' }} />
        }
      </BulkiButton>

    </StyledFormDiv>

  </StyledSurface>
}