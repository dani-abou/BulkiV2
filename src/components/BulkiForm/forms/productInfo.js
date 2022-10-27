import BulkiForm, { FormInputTypes } from "../BulkiForm"
import { useMemo } from "react"
import states from "states-us"


export const ProductBasicInfoForm = ({ className, onChange, values }) => {
  const form = useMemo(() => {
    return {
      1: {
        type: FormInputTypes.input,
        width: 100,
        additionalProps: {
          label: 'Product Name',
          id: 'productName',
          required: true,
          value: values?.productName ? values.productName : undefined
          // error: errors.includes('productName'),
          // helperText: errors.includes('productName') ? "This field is required" : ""
        }
      },
      2: {
        type: FormInputTypes.input,
        width: 100,
        additionalProps: {
          label: 'Description',
          id: 'description',
          rows: 3,
          multiline: true,
          inputProps: {
            style: {
              padding: '15px',
            }
          },
          required: true,
          value: values?.description ? values.description : undefined
          // error: errors.includes('description'),
          // helperText: errors.includes('description') ? "This field is required" : ""

        }
      },
      3: {
        type: FormInputTypes.input,
        width: 100,
        additionalProps: {
          label: 'Description of a unit',
          id: 'unitDefinition',
          required: true,
          value: values?.unitDefinition ? values.unitDefinition : undefined
          // error: errors.includes('unitDefinition'),
          // helperText: errors.includes('unitDefinition') ? "This field is required" : ""
        }
      },
    }
  }, [values])
  return <BulkiForm className={className} form={form}
    onChange={e => onChange(e.target.id, e.target.value)}
  />
}

export const ProductDimensionsForm = ({ className, onChange }) => {
  const form = useMemo(() => {
    return {
      1: {
        type: FormInputTypes.input,
        width: 100,
        additionalProps: {
          label: 'Product Name',
          id: 'productName'
        }
      },
      2: {
        type: FormInputTypes.input,
        width: 100,
        additionalProps: {
          label: 'Description',
          id: 'description',
          rows: 3,
          multiline: true,
          inputProps: {
            style: {
              padding: '15px',

            }
          }
        }
      },
      3: {
        type: FormInputTypes.input,
        width: 100,
        additionalProps: {
          label: 'Description of a unit',
          id: 'unitDefinition'
        }
      },
    }
  }, [])
  return <BulkiForm className={className} form={form}
    onChange={e => onChange(e.target.id, e.target.value, 'dimensions')}
  />
}

export const PickupInfoForm = ({ className, onChange }) => {
  const form = useMemo(() => {
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
  }, [])

  return <BulkiForm className={className} form={form}
    onChange={e => {
      onChange(e.target.id, e.target.value, 'pickupInfo')
    }}
  />
}
