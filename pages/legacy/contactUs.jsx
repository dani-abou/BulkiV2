import { useEffect } from "react"

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