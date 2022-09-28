import { getAuth, signOut } from "firebase/auth";

export default function logout() {
  const auth = getAuth();

  signOut(auth)
    .then(() => {
      window.location.href = "/signin";
    })
    .catch((error) => {
      // An error happened.
    });
  signOut(auth);
}
