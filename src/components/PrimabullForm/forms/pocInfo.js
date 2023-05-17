import PrimabullForm, { FormInputTypes } from "../PrimabullForm"
import states from "states-us"
import { useState, useMemo, useEffect } from "react"

export const POCInfo = ({ className, onChange, values }) => {

  const form = useMemo(() => ({
    firstName: {
      type: FormInputTypes.input,
      width: 50,
      additionalProps: {
        label: 'First Name',
        required: true,
      }
    },
    lastName: {
      type: FormInputTypes.input,
      width: 50,
      additionalProps: {
        label: 'Last Name',
        required: true

      }
    },
    email: {
      type: FormInputTypes.input,
      width: 65,
      additionalProps: {
        label: 'Email',
        required: true

      }
    },
    phone: {
      type: FormInputTypes.input,
      width: 35,
      additionalProps: {
        label: 'Phone Number',
        required: true
      }
    }
  }), [])
  return <PrimabullForm className={className} form={form} values={values} onChange={onChange} />
}