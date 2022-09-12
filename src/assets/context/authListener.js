import app from "../../../firebaseConfig"

const authListener = (prev, setAuth) => {
  app.auth.onAuthStateChanged(user => {
    if (user && !prev) setAuth(user);
    else if (!user && prev) setAuth(undefined)
  })
}

export default authListener