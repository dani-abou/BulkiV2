import BulkiSurface from "../../components/BulkiSurface";

const TCHTML = ''

const TermsAndConditions = () => {
  return <BulkiSurface>
    <div dangerouslySetInnerHTML={{ __html: TCHTML }} />
  </BulkiSurface>
}

export default TermsAndConditions