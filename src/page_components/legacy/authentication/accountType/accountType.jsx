import { useState, useEffect } from "react"
import { StyledPaper, EmailField, LogInButton } from "../utils"
import { PageIfNotAuthenticated } from "../../utils";

import { Radio, RadioGroup, FormControlLabel } from "@mui/material"
import {
  StyledFormLabel, StyledStyledInstruction, StyledSectionTitle, StyledFormControl
} from "./style"
import { urls } from "../../../common"
import { useRouter } from "next/router"
import BulkiInput from "../../../components/BulkiInput"

const AccountType = ({ accountInfo }) => {
  const [sell, setSell] = useState(false);
  // const router = useRouter()

  // useEffect(() => {
  //   if (!accountInfo) router.push(urls.signup)
  // }, [accountInfo, router])

  return <PageIfNotAuthenticated>
    <StyledPaper>
      <StyledFormControl sx={{ width: '100%' }}>
        <StyledFormLabel focused={false}>Do you sell products?</StyledFormLabel>
        <RadioGroup row>
          <FormControlLabel
            control={
              <Radio
                checked={sell}
                onChange={e => setSell(e.target.checked)} />}
            label='Yes' />
          <FormControlLabel
            control={
              <Radio
                checked={!sell}
                onChange={e => setSell(!e.target.checked)} />}
            label='No' />
        </RadioGroup>
        <StyledStyledInstruction>
          This can be changed anytime in your account settings
        </StyledStyledInstruction>
        {
          sell && <div>
            <StyledSectionTitle>Business</StyledSectionTitle>
          </div>
        }
        <LogInButton>Next</LogInButton>
      </StyledFormControl>
    </StyledPaper>
  </PageIfNotAuthenticated>
}

export default AccountType