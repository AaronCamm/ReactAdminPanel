import React from "react";
import { useParams } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "../../config";

export default function SingleParticipant() {
  const params = useParams();
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  const docName = params.documentid;

  getDownloadURL(ref(storage, "files/" + docName))
    .then((url) => {
      window.open(url + docName);
      window.open("/documents", "_self");
    })
    .catch((error) => {
      // Handle any errors
    });

  return <div>Opening: {docName}</div>;
}