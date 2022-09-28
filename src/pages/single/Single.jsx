import { initializeApp } from "@firebase/app";
import { child, get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firebaseConfig } from "../../config";
import "./Single.scss";

const Single = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [db, setDb] = useState("");

  useEffect(() => {
    Object.entries(params).map(([key, value]) =>
      setDb(key.replace("id", "s") + "/" + value)
    );
  }, [params]);

  //Get data from database and store as tableData for use in DataTable
  useEffect(() => {
    if (db === "") return;
    initializeApp(firebaseConfig);
    const dbRef = ref(getDatabase());
    get(child(dbRef, db)).then((snapshot) => setData(snapshot.val()));
  }, [db]);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
};

export default Single;
