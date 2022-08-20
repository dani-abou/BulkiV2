import { useEffect } from "react"
import BulkiPage from "../src/common/BulkiPage"

const PAGE_META = {
  title: 'Contact Us'
}

const ContactUs = ({ headControls }) => {
  useEffect(() => headControls(PAGE_META), [headControls])
  return <>
    Contact Us
  </>
}

export default ContactUs