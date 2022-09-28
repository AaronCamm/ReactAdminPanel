import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

//Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyCf9orBfM18CrfDi_Ysn-NLBAmeFvJN9kA",
  authDomain: "bendigosupport-42bbd.firebaseapp.com",
  databaseURL:
    "https://bendigosupport-42bbd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bendigosupport-42bbd",
  storageBucket: "bendigosupport-42bbd.appspot.com",
  messagingSenderId: "521790147241",
  appId: "1:521790147241:web:c36264051db11557b7f7b8",
  measurementId: "G-MR1N3NBESX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch {
    return false;
  }
};
const registerWithEmailAndPassword = async (email, password) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
