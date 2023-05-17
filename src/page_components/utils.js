import { PrimabullContextConsumer } from "../common/context";
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
  return <PrimabullContextConsumer>
    {context => <NotAuthCheckerRouter {...props} context={context} />}
  </PrimabullContextConsumer>
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
  return <PrimabullContextConsumer>
    {context => <AuthCheckerRouter {...props} context={context} />}
  </PrimabullContextConsumer>
}

