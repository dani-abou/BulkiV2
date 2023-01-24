import { isEqual } from "lodash";
import { useEffect, useState } from "react";
import getStripeAccount from "../../../api/payment/getStripeAccount";
import BulkiInput from "../../../components/BulkiInput";
import BulkiSelect from "../../../components/BulkiSelect";
import { StyledAccountPageHeader, StyledInputLabel } from "../style";
import { ChangesButtons } from "./accountProfile";


export default function BusinessProfile({ userData }) {
  const [originalProfile, setOriginalProfile] = useState()
  const [formProfile, setFormProfile] = useState()
  const [loading, setLoading] = useState(true)

  const onChange = (section, key, value) => {
    setFormProfile(prev => ({
      ...prev,
      [section]: { ...prev[section], [key]: value }
    }))
    console.log(key, value);
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

  function saveChanges() {
    console.log(`submitting changes for ${userData?.email}`)
  }

  return <>
    <StyledAccountPageHeader>Business Profile</StyledAccountPageHeader>
    <ChangesButtons
      isNotChanged={isEqual(originalProfile, formProfile)}
      revertChanges={revertChanges}
      saveChanges={saveChanges}
      email={userData?.email}
    />
    <br />
    <br />


    <ProfileSection onChange={(k, v) => onChange('profile', k, v)
    } form={formProfile?.profile} loading={loading} />

    <PaymentSection onChange={(k, v) => onChange('paymentMethod', k, v)} form={formProfile?.paymentMethod} loading={loading} />
  </>
}

const BUSINESS_TYPES = {
  individual: 'Individual',
  company: 'Company'
}

function ProfileSection({ onChange, form, loading }) {
  return <>
    <StyledInputLabel>First Name</StyledInputLabel>
    <BulkiSelect
      options={Object.keys(BUSINESS_TYPES).map(key => ({ value: key, label: BUSINESS_TYPES[key] }))}
      value={{ value: form?.business_type, label: BUSINESS_TYPES[form?.business_type] }}
      // value={form?.business_type}
      onChange={e => onChange('business_type', e.value)}

    />
    {/* <BulkiInput value={form?.firstName} onChange={e => onChange('firstName', e.target.value)} disabled={loading} /> */}
  </>
}

function PaymentSection({ onChange, form, loading }) {
  return <>Payment</>
}