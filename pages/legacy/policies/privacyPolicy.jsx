import { PrivacyPolicy } from "../../src/page_components/policies";
import { useEffect } from "react"

const PAGE_META = {
  title: 'Bulki Privacy Policy'
}

const PrivacyPolicyPage = ({ headControls }) => {
  useEffect(() => headControls(PAGE_META), [headControls])
  return <PrivacyPolicy />
}

export default PrivacyPolicyPage;