import React, { useState, useEffect } from "react";
import { initializeApp } from "@firebase/app";
import { set, get, getDatabase, ref, child } from "firebase/database";
import { firebaseConfig } from "../../config";
import "./newemployee.scss";

const NewEmployee = () => {
  initializeApp(firebaseConfig);

  //Setting accessible variables so settable in return
  const [employeeFirst, setEmployeeFirst] = useState("");
  const [employeeLast, setEmployeeLast] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [position, setPostion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //Connect to Firebase database and set new data from return form
    const db = getDatabase();
    set(ref(db, "employees/" + tableData.length), {
      id: tableData.length,
      employeeFirst: employeeFirst,
      employeeLast: employeeLast,
      emergencyContact: emergencyContact,
      emergencyContactNumber: emergencyContactNumber,
      employeeNumber: employeeNumber,
      position: position,
    });
  };

  //This is just to get the length of the database
  //The length is required to insert at the correct point in the DB
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `employees`)).then((snapshot) =>
      setTableData(snapshot.val())
    );
  }, []);

  return (
    <div className="newEmployee">
      <div className="newContainer">
        <div className="bodyContainer">
          <div className="topbar">
            <div className="recordstext">
              <span>Add Employee</span>
            </div>
          </div>
          <hr />
          <div className="recordsbody">
            <form onSubmit={handleSubmit}>
              <label>
                Employee First Name:{" "}
                <input
                  type="text"
                  value={employeeFirst}
                  onChange={(e) => setEmployeeFirst(e.target.value)}
                  required
                />
              </label>
              <label>
                Employee Last Name:{" "}
                <input
                  type="text"
                  value={employeeLast}
                  onChange={(e) => setEmployeeLast(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Emergency Contact:{" "}
                <input
                  type="text"
                  value={emergencyContact}
                  onChange={(e) => setEmergencyContact(e.target.value)}
                  required
                />
              </label>
              <label>
                Emergency Contact Number:{" "}
                <input
                  type="text"
                  value={emergencyContactNumber}
                  onChange={(e) => setEmergencyContactNumber(e.target.value)}
                  required
                />
              </label>
              <label>
                Employee Number:{" "}
                <input
                  type="text"
                  value={employeeNumber}
                  onChange={(e) => setEmployeeNumber(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Position:{" "}
                <input
                  type="text"
                  value={position}
                  onChange={(e) => setPostion(e.target.value)}
                  required
                />
              </label>
              <button type="submit" className="addParticipant">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEmployee;
