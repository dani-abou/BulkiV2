import { useMemo } from "react"
import states from "states-us"
import PrimabullForm, { FormInputTypes } from "../PrimabullForm"


export const ProductBasicInfoForm = ({ className, onChange, values }) => {
  const form = useMemo(() => {
    return {
      name: {
        type: FormInputTypes.input,
        width: 100,
        additionalProps: {
          label: 'Product Name',
          required: true,
        }
      },
      description: {
        type: FormInputTypes.input,
        width: 100,
        additionalProps: {
          label: 'Description',
          rows: 3,
          multiline: true,
          inputProps: {
            style: {
              padding: '15px',
            }
          },
          required: true,
        }
      },
      unitDefinition: {
        type: FormInputTypes.input,
        width: 100,
        additionalProps: {
          label: 'One unit consists of:',
          required: true,
        }
      },

    }
  }, [])
  return <PrimabullForm className={className} form={form}
    onChange={onChange} values={values}
  />
}
