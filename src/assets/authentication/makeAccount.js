import { createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebaseConfig";
import { urls } from "..";
import { doc, setDoc } from "firebase/firestore";
import bulkiSignOut from "./signOut";


const signUp = async (credentials, router, setStatus) => {
  if (!app?.auth) throw 'Invalid auth instance'
  if (!app?.firestore) throw 'Invalid firestore instance'
  const { email, password, firstName, lastName } = credentials
  try {
    const newUser = await createUserWithEmailAndPassword(app?.auth, email, password);
    try {
      let metadata = {}
      for (const key of Object.keys(newUser.user.metadata)) { metadata[key] = newUser.user.metadata[key] }
      await setDoc(doc(app?.firestore, "users", newUser?.user.uid), { email, firstName, lastName, metadata });
      bulkiSignOut(router, urls.signin);
      setStatus('success');

    } catch (error) {
      throw 'Database error'
    }
  } catch (error) {
    setStatus('invalid')
  }
}

export default signUp