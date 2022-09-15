import BulkiForm, { FormInputTypes } from "../BulkiForm"
import states from "states-us"
import { useState, useMemo } from "react"


export const ShippingInfoForm = ({ className, onChange }) => {
  const [selectValue, setSelectValue] = useState()

  const form = useMemo(() => {

    const changeSelected = state => {
      setSelectValue(state);
      onChange('state', state.value, 'shippingInfo')
    }

    return {
      1: {
        type: FormInputTypes.input,
        width: 70,
        additionalProps: {
          label: 'Street Address',
          id: 'streetAddress'
        }
      },
      2: {
        type: FormInputTypes.input,
        width: 30,
        additionalProps: {
          label: 'City',
          id: 'city'
        }
      },
      3: {
        type: FormInputTypes.select,
        width: 25,
        additionalProps: {
          options: states.filter(x => (!x.territory && x.contiguous)).map(x => ({ value: x.name, label: x.abbreviation })),
          label: 'State',
          id: 'state',
        }
      },
      4: {
        type: FormInputTypes.input,
        width: 75,
        additionalProps: {
          label: 'Zip Code',
          id: 'zip'

        }
      }
    }
  }, [onChange])

  return <BulkiForm className={className} form={form}
    onChange={e => {
      onChange(e.target.id, e.target.value, 'shippingInfo')
    }}
  />
}


export const POCInfo = ({ className, onChange }) => {
  const form = useMemo(() => {
    return {
      1: {
        type: FormInputTypes.input,
        width: 50,
        additionalProps: {
          label: 'First Name',
          id: 'firstName'
        }
      },
      2: {
        type: FormInputTypes.input,
        width: 50,
        additionalProps: {
          label: 'Last Name',
          id: 'lastName'
        }
      },
      3: {
        type: FormInputTypes.input,
        width: 65,
        additionalProps: {
          label: 'Email',
          id: 'email'
        }
      },
      4: {
        type: FormInputTypes.input,
        width: 35,
        additionalProps: {
          label: 'Phone Number',
          id: 'phoneNumber'
        }
      }
    }
  }, [])
  return <BulkiForm className={className} form={form}
    onChange={e => onChange(e.target.id, e.target.value, 'poc')}
  />
}