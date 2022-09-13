import { useState } from "react"
import BulkiRadioGroup from "../src/components/BulkiRadioGroup"

const dummyOptions = [
  { value: 'first', label: 'First' },
  { value: 'second', label: 'Second' },
  { value: 'third', label: 'Third' },
  { value: 'forth', label: 'Forth' },

]

const GalleryRadio = () => {
  const [options, setOptions] = useState(dummyOptions);

  const handleChange = e => {
    console.log(e.target.value);
  }

  return <BulkiRadioGroup
    row
    onChange={handleChange}
    label='Radio' options={options}
  />

}

export default GalleryRadio