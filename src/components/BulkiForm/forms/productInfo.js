import BulkiForm, { FormInputTypes } from "../BulkiForm"
import { useMemo } from "react"
import states from "states-us"


export const ProductBasicInfoForm = ({ className, onChange, values }) => {
  const form = useMemo(() => {
    return {
      product: {
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
          label: 'Description of a unit',
          required: true,
        }
      },

    }
  }, [])
  return <BulkiForm className={className} form={form}
    onChange={onChange} values={values}
  />
}
