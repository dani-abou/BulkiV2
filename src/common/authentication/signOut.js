import { signOut } from "firebase/auth";
import app from "../../../firebaseConfig";
import { urls } from "..";

const bulkiSignOut = async (router, redirectPath = urls.catalog) => {
  const auth = app?.auth;
  if (!auth) throw 'Auth instance invalid';
  try {
    await signOut(auth);
    if (router && redirectPath) router.push(redirectPath)
  } catch (error) {
    console.log(error)
  }
}

export default bulkiSignOut