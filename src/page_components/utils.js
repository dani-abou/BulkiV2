import { BulkiContextConsumer } from "../common/context";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { urls } from "../common";

const NotAuthCheckerRouter = ({ context, children }) => {
  const router = useRouter()
  useEffect(() => {
    if (context?.userData) {
      router.push(urls.catalog);
    }
  }, [router, context])
  return children
}

export const PageIfNotAuthenticated = (props) => {
  return <BulkiContextConsumer>
    {context => <NotAuthCheckerRouter {...props} context={context} />}
  </BulkiContextConsumer>
}

const AuthCheckerRouter = ({ context, children }) => {
  const router = useRouter()

  useEffect(() => {
    if (!context?.userData) {
      router.push(urls.signin);
    }
  }, [router, context])
  return children
}

export const PageIfAuthenticated = (props) => {
  return <BulkiContextConsumer>
    {context => <AuthCheckerRouter {...props} context={context} />}
  </BulkiContextConsumer>
}