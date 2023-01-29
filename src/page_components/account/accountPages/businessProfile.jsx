import { isEqual } from "lodash";
import { useEffect, useState } from "react";
import getStripeAccount from "../../../api/payment/getStripeAccount";
import makeStripeAccount from "../../../api/payment/makeStripeAccount";
import { BulkiCaption } from "../../../common/styles";
import BulkiDatePicker from "../../../components/BulkiDatePicker/BulkiDatePicker";
import BulkiInput from "../../../components/BulkiInput";
import BulkiSelect from "../../../components/BulkiSelect";
import { StyledAccountPageHeader, StyledAccountSectionLabel, StyledInputFlex, StyledInputLabel, StyledNameInputWithLabel, StyledPasswordResetButton } from "../style";
import { ChangesButtons, ModalConfirmPassword } from "./accountProfile";


export default function BusinessProfile({ userData }) {
  const [originalProfile, setOriginalProfile] = useState()
  const [formProfile, setFormProfile] = useState()
  const [loading, setLoading] = useState(true)
  const [showPasswordCallback, setShowPasswordCallback] = useState()

  const onChange = (section, key, value) => {
    setFormProfile(prev => ({
      ...prev,
      [section]: { ...prev[section], [key]: value }
    }))
  }

  useEffect(() => {
    const getBusinessProfile = async () => {
      setLoading(true)
      const account = await getStripeAccount(userData?.uid);
      setOriginalProfile(account);
      setFormProfile(account);
      setLoading(false);
    }
    getBusinessProfile()
  }, [userData?.uid])

  function revertChanges() {
    setFormProfile(originalProfile);
  }

  async function saveChanges() {
    console.log(`submitting changes for ${userData?.email}`)
    await makeStripeAccount(formProfile)
  }


  return <>
    <ModalConfirmPassword
      originalEmail={userData?.email}
      show={showPasswordCallback}
      onSubmit={showPasswordCallback}
      onClose={() => setShowPasswordCallback()}
    />
    <StyledAccountPageHeader>
      Business Profile
    </StyledAccountPageHeader>
    <ChangesButtons
      isNotChanged={isEqual(originalProfile, formProfile)}
      revertChanges={revertChanges}
      saveChanges={saveChanges}
      email={userData?.email}
    />

    <ProfileSection onChange={(k, v) => onChange('profile', k, v)
    } setModalCallback={setShowPasswordCallback} form={formProfile?.profile} loading={loading} />

    <PaymentSection onChange={(k, v) => onChange('paymentMethod', k, v)} form={formProfile?.paymentMethod} loading={loading} />
  </>
}

const BUSINESS_TYPES = {
  individual: 'Individual',
  company: 'Company'
}

function ProfileSection(props) {
  const { onChange, form, loading, setModalCallback } = props
  return <div>
    <StyledInputFlex >
      <StyledNameInputWithLabel>

        <StyledInputLabel>Business Type</StyledInputLabel>
        <BulkiSelect
          options={Object.keys(BUSINESS_TYPES).map(key => ({ value: key, label: BUSINESS_TYPES[key] }))}
          value={{ value: form?.business_type, label: BUSINESS_TYPES[form?.business_type] }}
          // value={form?.business_type}
          onChange={e => onChange('business_type', e.value)}
        />
      </StyledNameInputWithLabel>
      <StyledNameInputWithLabel>
        <StyledInputLabel>Business Website</StyledInputLabel>
        <BulkiInput value={form?.url} onChange={e => onChange('url', e.target.value)} disabled={loading} />
      </StyledNameInputWithLabel>
    </StyledInputFlex>
    <br />
    {
      form?.business_type === 'individual' &&
      <IndividualProfile {...props} />
    }
    {
      form?.business_type === 'company' && <CompanyProfile {...props} />
    }


  </div>
}

function IndividualProfile({ onChange, form, onButtonClick, loading }) {
  return <><StyledInputFlex>
    <StyledNameInputWithLabel>

      <StyledInputLabel>First Name</StyledInputLabel>
      <BulkiInput value={form?.firstName} onChange={e => onChange('firstName', e.target.value)} disabled={loading} />
    </StyledNameInputWithLabel>
    <StyledNameInputWithLabel>
      <StyledInputLabel>Last Name</StyledInputLabel>
      <BulkiInput value={form?.lastName} onChange={e => onChange('lastName', e.target.value)} disabled={loading} />
    </StyledNameInputWithLabel>

  </StyledInputFlex>
    <br />
    <StyledInputLabel>Date of Birth</StyledInputLabel>
    <BulkiDatePicker value={form?.dob} onChange={newVal => onChange('dob', newVal)} disabled={loading} />
    <StyledPasswordResetButton size='small'>{form?.ssn_last_4_provided ? 'Update' : 'Add'} SSN</StyledPasswordResetButton>
  </>
}

function CompanyProfile({ onChange, form, loading, onButtonClick }) {
  return <>
    <StyledInputLabel>Company Name</StyledInputLabel>
    <BulkiInput value={form?.name} onChange={e => onChange('name', e.target.value)} disabled={loading} />
    <StyledPasswordResetButton size='small'>{form?.tax_id_provided ? 'Update' : 'Add'} Tax ID</StyledPasswordResetButton>
  </>
}

function PaymentSection({ onChange, form, onButtonClick, loading }) {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const disableWhileLoading = async () => {
    setButtonDisabled(true);
    await onButtonClick();
    setButtonDisabled(false)
  }

  return <>
    <br />
    <StyledAccountSectionLabel>Bank Account</StyledAccountSectionLabel>
    <StyledNameInputWithLabel>
      <StyledInputLabel>Account holder{"'"}s name</StyledInputLabel>
      <BulkiInput value={form?.account_holder_name} onChange={e => onChange('firstName', e.target.value)} disabled={loading} />
    </StyledNameInputWithLabel>
    <br />
    <StyledNameInputWithLabel>
      <StyledInputLabel>Routing number</StyledInputLabel>
      <BulkiInput value={form?.routing_number} onChange={e => onChange('routing_number', e.target.value)} disabled={loading} />
    </StyledNameInputWithLabel>
    <StyledPasswordResetButton size='small' onClick={disableWhileLoading} disabled={buttonDisabled}>{form?.last4 ? 'Update' : 'Add'} Account Number</StyledPasswordResetButton>
  </>
}