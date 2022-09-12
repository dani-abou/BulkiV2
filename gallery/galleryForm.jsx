import BulkiForm, { FormInputTypes } from "../src/components/BulkiForm"

const dummyData = {
  1: {
    type: FormInputTypes.input,
    additionalProps: {
      placeholder: 'test',
    },
    width: 50
  },
  2: {
    type: FormInputTypes.input,
    additionalProps: {
      placeholder: 'test'
    },
    width: 50
  },
  3: {
    type: FormInputTypes.input,
    additionalProps: {
      placeholder: 'test'
    },
    width: 30
  },
  4: {
    type: FormInputTypes.input,
    additionalProps: {
      placeholder: 'test'
    },
    width: 40
  },
  5: {
    type: FormInputTypes.input,
    additionalProps: {
      placeholder: 'test'
    },
    width: 30
  }
}

const GalleryForm = () => {
  return <div style={{ width: '50%', marginLeft: '25%' }}>
    <BulkiForm form={dummyData} />
  </div>
}

export default GalleryForm