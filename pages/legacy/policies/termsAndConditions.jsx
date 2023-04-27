import { TermsAndConditions } from "../../src/page_components/policies"
import { useEffect } from "react"

const PAGE_META = {
  title: 'Bulki Terms & Conditions'
}

const TermsConditionPage = ({ headControls }) => {
  useEffect(() => headControls(PAGE_META), [headControls])
  return <TermsAndConditions />
}

export default TermsConditionPage;