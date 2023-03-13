import { Alert, Snackbar } from "@mui/material";
import { isEqual } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import getUserData from "../../../api/database/users/getUserData";
import { BulkiBody1, BulkiBody2, BulkiCaption, BulkiH3, BulkiH4, BulkiH5, BulkiH6 } from "../../../common/styles";
import { isValidEmail } from "../../../common/utils";
import BulkiButton, { BulkiButtonTypes } from "../../../components/BulkiButton";
import BulkiInput from "../../../components/BulkiInput";
import BulkiModal from "../../../components/BulkiModal";
import {
  StyledAccountButton, StyledAccountPageHeader, StyledAccountSectionLabel, StyledButtonsFlex, StyledEmailSubmitButtons, StyledInputFlex, StyledInputLabel, StyledModal, StyledModalBodyDiv, StyledNameInputWithLabel,
  StyledPasswordResetButton, StyledSubmitButton
} from "../style";

const AccountProfile = ({ userData }) => {
  const [originalUser, setOriginalUser] = useState()
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showEmailResetModal, setShowEmailResetModal] = useState(false);
  const [showPasswordResetModal, setShowPasswordResetModal] = useState(false);
  const [showSuccessfulChanges, setShowSuccessfulChanges] = useState(false);

  useEffect(() => {
    async function getter() {
      setLoading(true);
      const response = await getUserData(userData?.uid);
      setUser(response);
      setOriginalUser(response)
      setLoading(false);
    }
    getter()
  }, [userData]);

  function changeFormValue(key, value) {
    setUser(prev => ({ ...prev, [key]: value }))
  }

  function revertChanges() {
    setUser(originalUser);
  }

  function saveChanges() {
    setShowPasswordModal(true);
  }

  function onSuccesfulPasswordCheck() {
    setShowPasswordModal(false);
    console.log('sending all changes but email');
    setShowSuccessfulChanges(true);
    if (originalUser.email !== user.email) {
      setShowEmailResetModal(true)
    }
  }

  return <>
    <StyledAccountPageHeader>User Information</StyledAccountPageHeader>

    {/* Confirm password modal (showed before changes are pushed) */}
    <ModalConfirmPassword originalEmail={originalUser?.email}
      show={showPasswordModal}
      onSubmit={onSuccesfulPasswordCheck}
      onClose={() => setShowPasswordModal(false)}
    />


    {/* Confirm email change */}
    <ModalConfirmEmail
      newEmail={user?.email}
      show={showEmailResetModal}
      onClose={() => setShowEmailResetModal(false)}
    />

    {/* Toast for showing succesful changes*/}
    <Snackbar
      open={showSuccessfulChanges}
      onClose={() => setShowSuccessfulChanges(false)}
      autoHideDuration={6000}
    >
      <Alert severity='success' variant="filled">
        Changes were succesful!
      </Alert>
    </Snackbar>

    {/* Revert changes and save changes buttons */}
    <ChangesButtons
      isNotChanged={isEqual(originalUser, user)}
      email={user?.email}
      revertChanges={revertChanges}
      saveChanges={saveChanges}
    />
    <br />

    {/* Email */}
    <StyledAccountSectionLabel>Email</StyledAccountSectionLabel>
    <BulkiInput
      value={user?.email}
      onChange={e => changeFormValue('email', e.target.value)}
      disabled={loading}
      error={!isValidEmail(user?.email)}
      helperText={isValidEmail(user?.email) ? '' : 'Invalid email'} />
    <StyledAccountSectionLabel>Name</StyledAccountSectionLabel>

    {/* First and last name */}
    <StyledInputFlex>
      <StyledNameInputWithLabel>
        <StyledInputLabel>First Name</StyledInputLabel>
        <BulkiInput value={user?.firstName} onChange={e => changeFormValue('firstName', e.target.value)} disabled={loading} />
      </StyledNameInputWithLabel>
      <StyledNameInputWithLabel>
        <StyledInputLabel>Last Name</StyledInputLabel>
        <BulkiInput value={user?.lastName} onChange={e => changeFormValue('lastName', e.target.value)} disabled={loading} />
      </StyledNameInputWithLabel>
    </StyledInputFlex>

    {/* Company name and phone number */}
    <StyledAccountSectionLabel>Company Name</StyledAccountSectionLabel>
    <BulkiInput value={user?.companyName} onChange={e => changeFormValue('companyName', e.target.value)} disabled={loading} />
    <StyledAccountSectionLabel>Phone number</StyledAccountSectionLabel>
    <BulkiInput value={user?.phone} onChange={e => changeFormValue('phone', e.target.value)} disabled={loading} />

    {/* Reset Button */}

    <StyledPasswordResetButton size='large'>Change password</StyledPasswordResetButton>

  </>
}

export function ChangesButtons({ isNotChanged, revertChanges, saveChanges, email }) {
  return <StyledButtonsFlex>
    <StyledAccountButton
      variant="outline"
      disabled={isNotChanged}
      onClick={revertChanges}
    >Revert changes</StyledAccountButton>
    <StyledAccountButton
      disabled={isNotChanged || !isValidEmail(email)}
      onClick={saveChanges}
    >
      Save changes
    </StyledAccountButton>
  </StyledButtonsFlex>
}

export function ModalConfirmPassword({ originalEmail, onSubmit, ...props }) {
  const [password, setPassword] = useState('');

  const [status, setStatus] = useState();

  const checkPasswordAndSubmit = () => {
    console.log('send password');
    onSubmit();
  }

  return <StyledModal title=' '{...props}>
    <StyledModalBodyDiv>
      <BulkiH6>Please confirm your password to save changes</BulkiH6>
      <br />
      <br />
      <BulkiInput
        label='Password'
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        error={status === 'invalid'}
        helperText={status === 'invalid' ? 'Incorrect password' : ''}
      />
      <StyledSubmitButton disabled={status === 'loading'} onClick={checkPasswordAndSubmit}>Submit</StyledSubmitButton>
    </StyledModalBodyDiv>

  </StyledModal>
}

function ModalConfirmEmail({ newEmail, onSubmit, ...props }) {
  const [code, setCode] = useState('');

  const [status, setStatus] = useState('');

  const checkCodeAndSubmit = () => {
    console.log('send code');
    const response = 'response';
    if (response === 'success') {
      onSubmit()
    }
  }

  return <StyledModal title=' '{...props}>
    <StyledModalBodyDiv>
      <BulkiBody1>Please verify your new email address to change it</BulkiBody1>
      <br />
      <BulkiCaption>A code has been sent to the new email address, please submit it below</BulkiCaption>
      <br />
      <br />
      <BulkiInput
        label='Code'
        value={code}
        onChange={e => setCode(e.target.value)}
      />
      <StyledEmailSubmitButtons>
        <BulkiButton variant={BulkiButtonTypes.outline}>Resend Email</BulkiButton>
        <BulkiButton onClick={checkCodeAndSubmit}>Submit</BulkiButton>

      </StyledEmailSubmitButtons>
    </StyledModalBodyDiv>
  </StyledModal>
}

export default AccountProfile;