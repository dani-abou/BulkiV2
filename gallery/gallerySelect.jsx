import { useState } from "react";
import BulkiSelect from "../src/components/BulkiSelect";

const dummyData = [
  { value: 'test', label: 'Test' },
  { value: 'ghj', label: 'Test' },
  { value: 'second', label: 'Tessst' },
  { value: 'tedsfsst', label: 'Test' },
]

const GallerySelect = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState(dummyData)

  const handleChange = selectedOption => {
    setValue(prev => {
      console.log(prev, selectedOption)
      const compared = prev.findIndex(selected =>
        selected.value === selectedOption.value && selected.label === selectedOption.label)
      if (compared >= 0) prev.splice(compared, 1);
      else prev.push(selectedOption);
      return prev
    })
  }
  return <BulkiSelect
    options={data}
    sx={{ width: 400 }}
    value={value}
    onChange={option => {
      setValue(option.label)
    }} />
}

export default GallerySelect