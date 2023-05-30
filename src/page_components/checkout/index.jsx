import { useElements, useStripe } from "@stripe/react-stripe-js";
import { cloneDeep } from "lodash";
import dynamic from "next/dynamic";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from 'react';
import makeOrder from "../../api/orders/makeOrder";
import makePayment from "../../api/payment/makePayment";
import { useCart } from "../../common/context";
import { PrimabullBody1, PrimabullH5 } from "../../common/styles";
import { PrimabullButtonTypes } from "../../components/PrimabullButton/PrimabullButton";
import { EMAIL_REGEX, LETTERS, PHONE_NUMBER, STREETADDRESS, ZIPCODE } from "../../components/PrimabullInput";
import { STATES } from "../../data/states";
import Payment from "./Payment";
import {
  StyledButton,
  StyledButtonsFlex,
  StyledCartContainer,
  StyledCartProductsContainer,
  StyledCheckbox,
  StyledError,
  StyledInfoContainer,
  StyledInfoFormContainer,
  StyledInput,
  StyledInputFlex,
  StyledLogoContainer,
  StyledPageFlex,
  StyledProgress,
  StyledSelect,
  StyledSubmitButton
} from "./style";

const CartProducts = dynamic(
  () => import('./CartProducts'),
  { ssr: false }
)

const MobileTotals = dynamic(
  () => import('./MobileTotals'),
  { ssr: false }
)

const defaultForm = {
  email: '',
  newsletter: true,
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  state: 'MA',
  zipCode: '',
  phone: '',
  acceptedPrivacy: false
}

const REGEXES = {
  email: EMAIL_REGEX,
  newsletter: undefined,
  firstName: LETTERS,
  lastName: LETTERS,
  address: STREETADDRESS,
  city: LETTERS,
  state: undefined,
  zipCode: ZIPCODE,
  phone: PHONE_NUMBER
}

const helperText = fieldName => (`Invalid ${fieldName}`)

export default function Checkout() {
  const { cart, setTax, totals, emptyCart } = useCart()
  const router = useRouter();
  const [form, setForm] = useState(defaultForm);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('')
  const [errorFields, setErrorFields] = useState({})

  const updateForm = (e, key) => {
    setForm(prev => ({ ...prev, [key]: e.target.value }))
  }

  const [buttonDisabled, setButtonDisabled] = useState(true)

  useEffect(() => {
    if (!stripe || !elements) {
      setButtonDisabled(true)
    } else {
      setButtonDisabled(false)
    }
  }, [stripe, elements])

  const updateSelect = async v => {
    if (form.state === 'CT' && v !== 'CT') {
      setTax(0);
    } else if (form.state !== 'CT' && v === 'CT') {
      setTax(6.38)
    }
    setForm(prev => ({ ...prev, state: v }))
  }

  const onSubmit = async () => {
    setButtonDisabled(true);
    const isValid = validateFields()
    if (isValid) {
      let cartOut = {};
      Object.keys(cart).forEach(cartKey => {
        if (cart[cartKey] > 0) {
          cartOut[cartKey] = cart[cartKey]
        }
      })
      try {
        await makePayment(stripe, elements,
          async () => {
            await makeOrder({ ...form, cart: cartOut }, totals);
            emptyCart();
            router.push({ pathname: '/', query: { confirmOrder: true } });
          },
          v => {
            setError(v);
            setButtonDisabled(false);
          });

      } catch (e) {
        console.log('Submit error: ' + e.message);
      }
    } else {
      setError('Some Fields are incomplete or invalid')
      setButtonDisabled(false)
    }
  }

  const validateFields = () => {
    let valid = true;
    let errorsClone = cloneDeep(errorFields);
    Object.keys(form).forEach(formKey => {
      if (REGEXES[formKey]) {
        const validField = form[formKey].match(REGEXES[formKey]) !== null
        errorsClone[formKey] = !validField;
        valid = valid && validField;
      }
    })
    setErrorFields(errorsClone)
    return valid;
  }

  return <StyledPageFlex>
    <StyledInfoContainer>
      <StyledInfoFormContainer>
        <Link href='/'>
          <StyledLogoContainer>
            <Image
              src='logos/MainPrimary.png'
              alt='Logo'
              layout='fill'
              // objectFit="cover"
              priority
            />
          </StyledLogoContainer>
        </Link>
        {/* <br /> */}
        <ContactInfo
          errorFields={errorFields}
          form={form}
          updateForm={updateForm}
          setForm={setForm} />
        <br /><br />
        <ShippingInfo
          errorFields={errorFields}
          updateSelect={updateSelect}
          form={form}
          updateForm={updateForm}
        />
        <br /><br />

        <PrimabullH5>
          Payment
        </PrimabullH5>
        <Payment />
        <br /><br />
        <MobileTotals />
        {error && <StyledError>
          <PrimabullBody1>{error}</PrimabullBody1>
        </StyledError>}

        <StyledCheckbox
          checked={form.acceptedPrivacy}
          onChange={e => setForm(prev => ({ ...prev, acceptedPrivacy: e.target.checked }))}
          label={<>I agree to the <a target="_blank" rel="noopener noreferrer" href='/policies/privacy'>Privacy Policy</a> </>} />

        <br /><br />

        <StyledButtonsFlex>
          <StyledButton size='large' variant={PrimabullButtonTypes.outline} onClick={() => router.push('/shop')}>
            Return to Cart</StyledButton>
          {/* <Link href='/'> */}
          <StyledSubmitButton
            size='large'
            disabled={buttonDisabled || !form.acceptedPrivacy}
            onTouchEnd={onSubmit}
            onClick={onSubmit}>
            {buttonDisabled ? <StyledProgress /> :
              'Confirm Order'}
          </StyledSubmitButton>
          {/* </Link> */}
        </StyledButtonsFlex>
      </StyledInfoFormContainer>
    </StyledInfoContainer>
    <StyledCartContainer>
      <StyledCartProductsContainer >
        <CartProducts />
      </StyledCartProductsContainer>
    </StyledCartContainer>
  </StyledPageFlex >
}


function ContactInfo({ form, updateForm, setForm, errorFields }) {
  return <div style={{ marginTop: '-60px' }}>
    <PrimabullH5>
      Contact
    </PrimabullH5>
    <br />
    <StyledInput
      helperText={errorFields.email ? helperText('Email') : ''}
      label='Email'
      onChange={e => updateForm(e, 'email')}
      value={form.email}
      required
      type='email'
      error={errorFields.email}
    />
    <StyledCheckbox
      checked={form.newsletter}
      onChange={e => setForm(prev => ({ ...prev, newsletter: e.target.checked }))}
      label='Email me with new deals!' />
    <br />
    <StyledInput
      helperText={errorFields.phone ? helperText('Phone Number') : ''}
      label='Phone Number'
      onChange={e => updateForm(e, 'phone')}
      value={form.phone}
      required
      type='phone'
      error={errorFields.phone}
    />

  </div>
}

function ShippingInfo({ form, updateForm, errorFields, updateSelect }) {
  return <>
    <PrimabullH5>
      Shipping Address
    </PrimabullH5>
    <br />
    <StyledInputFlex>
      <StyledInput
        label='First Name'
        onChange={e => updateForm(e, 'firstName')}
        value={form.firstName}
        required
        error={errorFields.firstName}
        helperText={errorFields.firstName ? helperText('First Name') : ''}

      />
      <StyledInput
        label='Last Name'
        onChange={e => updateForm(e, 'lastName')}
        value={form.lastName}
        required
        error={errorFields.lastName}
      // helperText={errorFields.lastName ? helperText('Last Name') : ''}
      />
    </StyledInputFlex>
    <StyledInput
      label='Address'
      onChange={e => updateForm(e, 'address')}
      value={form.address}
      required
      error={errorFields.address}
      helperText={errorFields.address ? helperText('Address') : ''}
    />
    <StyledInputFlex>
      <StyledInput
        label='City'
        onChange={e => updateForm(e, 'city')}
        value={form.city}
        required
        error={errorFields.city}
        helperText={errorFields.city ? helperText('City') : ''}


      />
      <StyledSelect
        label='State'
        options={STATES}
        value={form.state}
        onChange={updateSelect}
        required
      />
      <StyledInput
        label='Zip Code'
        onChange={e => updateForm(e, 'zipCode')}
        value={form.zipCode}
        required
        error={errorFields.zipCode}
        helperText={errorFields.zipCode ? helperText('Zip Code') : ''}
      />
    </StyledInputFlex>
  </>
}

