import { ResetPassword } from "../../src/page_components"
import { useRouter } from "next/router";
import { confirmResetCode } from "../../src/assets/authentication"

const ResetPasswordPage = ({ headControl, validationResponse, ...props }) => {

  const router = useRouter()
  const { mode, oobCode } = router.query;
  return <ResetPassword validationResponse={validationResponse} />
}

export const getServerSideProps = async ({ query }) => {

  const { oobCode, mode } = query;
  const response = await confirmResetCode(oobCode, mode);
  return {
    props: {
      validationResponse: response,
    }
  };
}

export default ResetPasswordPage