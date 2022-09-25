import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { initializeApp } from "@firebase/app";
import { set, get, getDatabase, ref, child } from "firebase/database";
import { firebaseConfig } from "../../config";
import "./newparticipant.scss";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const NewParticipant = () => {
  initializeApp(firebaseConfig);

  const [ndisNum, setNdisNum] = useState("");
  const [participantFirst, setParticipantFirst] = useState("");
  const [participantLast, setParticipantLast] = useState("");
  const [primaryContactName, setPrimaryContactName] = useState("");
  const [primaryContact, setPrimaryContact] = useState("");
  const [dob, setDob] = useState("");
  const [disabilities, setDisabilities] = useState("");
  const [languages, setLanguages] = useState("");
  const [planType, setPlanType] = useState("Plan Managed");
  const [planStatus, setPlanStatus] = useState("Active");

  const [likes, setLikes] = useState("");
  const [dislikes, setDislikes] = useState("");
  const [goals, setGoals] = useState("");
  const [supportMe, setSupportMe] = useState("");

  const [connections, setConnections] = useState([{}]);

  const handleSubmit = (event) => {
    event.preventDefault();

    //Setting form data into Firebase DB
    const db = getDatabase();
    set(ref(db, "participants/" + tableData.length), {
      id: tableData.length,
      ndisNumber: ndisNum,
      participantFirst: participantFirst,
      participantSecond: participantLast,
      primaryWorker: primaryContactName,
      primaryContact: primaryContact,
      planType: planType,
      status: planStatus,
      dob: dob,
      disabilities: disabilities,
      languages: languages,

      likes: likes,
      dislikes: dislikes,
      goals: goals,
      supportMe: supportMe,

      connections: connections,
    });
  };

  const [tableData, setTableData] = useState([]);
  // to get length of database
  useEffect(() => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `participants`)).then((snapshot) =>
      setTableData(snapshot.val())
    );
  }, []);

  const [value, setValue] = useState("1");
  //This simple allows tab functionality
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const nextPage = () => {
    setValue((parseInt(value) + 1).toString());
  };

  return (
    <div className="newParticipant">
      <div className="newContainer">
        <div className="bodyContainer">
          <div className="topbar">
            <div className="recordstext">
              <span>Add Participant</span>
            </div>
          </div>
          <hr />
          <div className="recordsbody">
            <Box
              sx={{
                width: "169vh",
                typography: "body1",
                display: "flex",
                flexDirection: "column",
                flexShrink: 3,
              }}
            >
              <TabContext value={value}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <TabList onChange={handleChange}>
                    <Tab label="Basic Details" value="1" className="tabList" />
                    <Tab label="Goals & Info" value="2" className="tabList" />
                    <Tab label="Connections" value="3" className="tabList" />
                  </TabList>
                </Box>
                <form onSubmit={handleSubmit} className="topForm">
                  <TabPanel value="1" className="tabPanel">
                    <div className="formField">
                      <div className="firstInput">
                        <label>
                          <input
                            type="text"
                            placeholder="First Name"
                            value={participantFirst}
                            onChange={(e) =>
                              setParticipantFirst(e.target.value)
                            }
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            placeholder="Last Name"
                            value={participantLast}
                            onChange={(e) => setParticipantLast(e.target.value)}
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            placeholder="Primary Contact Name"
                            value={primaryContactName}
                            onChange={(e) =>
                              setPrimaryContactName(e.target.value)
                            }
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            placeholder="Primary Contact Email/Number"
                            value={primaryContact}
                            onChange={(e) => setPrimaryContact(e.target.value)}
                          />
                        </label>
                      </div>
                      <br />
                      <div className="secondInput">
                        <label>
                          <input
                            type="date"
                            placeholder="Date of Birth"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            placeholder="Disabilities"
                            value={disabilities}
                            onChange={(e) => setDisabilities(e.target.value)}
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            placeholder="Languages Spoken"
                            value={languages}
                            onChange={(e) => setLanguages(e.target.value)}
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            placeholder="NDIS Number"
                            value={ndisNum}
                            onChange={(e) => setNdisNum(e.target.value)}
                          />
                        </label>
                      </div>
                      <br />
                      <div className="thirdInput">
                        <label>
                          Plan Type:{" "}
                          <select
                            value={planType}
                            onChange={(e) => setPlanType(e.target.value)}
                          >
                            <option value="planManaged">Plan Managed</option>
                            <option value="selfManaged">Self Managed</option>
                            <option value="ndiaManaged">NDIA Managed</option>
                          </select>
                        </label>
                        <label>
                          Status:{" "}
                          <select
                            value={planStatus}
                            onChange={(e) => setPlanStatus(e.target.value)}
                          >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </label>
                      </div>
                    </div>
                    <div className="addDiv">
                      <button
                        type="submit"
                        className="nextField"
                        onClick={nextPage}
                      >
                        Next <ArrowForwardIcon />
                      </button>
                    </div>
                  </TabPanel>
                  <TabPanel value="2" className="tabPanel">
                    <div className="formField">
                      <div className="firstInput">
                        <label>
                          <textarea
                            className="textArea"
                            type="text"
                            placeholder="Likes & Interests"
                            value={likes}
                            onChange={(e) => setLikes(e.target.value)}
                          />
                        </label>
                        <label>
                          <textarea
                            className="textArea"
                            type="text"
                            placeholder="Dislikes"
                            value={dislikes}
                            onChange={(e) => setDislikes(e.target.value)}
                          />
                        </label>
                      </div>
                      <br />
                      <div className="secondInput">
                        <label>
                          <textarea
                            className="textArea"
                            type="text"
                            placeholder="Goals"
                            value={goals}
                            onChange={(e) => setGoals(e.target.value)}
                          />
                        </label>
                        <label>
                          <textarea
                            className="textArea"
                            type="text"
                            placeholder="How To Support Me"
                            value={supportMe}
                            onChange={(e) => setSupportMe(e.target.value)}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="addDiv">
                      <button
                        type="submit"
                        className="nextField"
                        onClick={nextPage}
                      >
                        Next <ArrowForwardIcon />
                      </button>
                    </div>
                  </TabPanel>
                  <TabPanel value="3" className="tabPanel">
                    <div className="formField">
                      <div className="secondInput">
                        <label>
                          <input
                            type="text"
                            placeholder="Contact Name"
                            onChange={(e) => {
                              setConnections((arr) => ({
                                ...arr,
                                0: { ...arr[0], name: e.target.value },
                              }));
                            }}
                            onInvalid={(e) =>
                              e.target.setCustomValidity(
                                "Please provide at least one contact"
                              )
                            }
                            onInput={(e) => e.target.setCustomValidity("")}
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            placeholder="Contact Info"
                            onChange={(e) => {
                              setConnections((arr) => ({
                                ...arr,
                                0: { ...arr[0], info: e.target.value },
                              }));
                            }}
                          />
                        </label>
                        <label>
                          <select
                            onChange={(e) => {
                              setConnections((arr) => ({
                                ...arr,
                                0: { ...arr[0], method: e.target.value },
                              }));
                            }}
                          >
                            <option />
                            <option value="landLine">Landline</option>
                            <option value="mobile">Mobile</option>
                            <option value="email">Email</option>
                          </select>
                        </label>
                        <label>
                          <select
                            onChange={(e) => {
                              setConnections((arr) => ({
                                ...arr,
                                0: { ...arr[0], type: e.target.value },
                              }));
                            }}
                          >
                            <option />
                            <option value="emergency">Emergency Contact</option>
                            <option value="family">Family Member</option>
                            <option value="friend">Friend</option>
                            <option value="doctor">GP/Doctor</option>
                            <option value="psychiatrist">Psychiatrist</option>
                            <option value="alliedHealth">Allied Health</option>
                          </select>
                        </label>
                      </div>
                      <br />
                      <div className="firstInput">
                        <label>
                          <input
                            type="text"
                            placeholder="Contact Name"
                            onChange={(e) => {
                              setConnections((arr) => ({
                                ...arr,
                                1: { ...arr[1], name: e.target.value },
                              }));
                            }}
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            placeholder="Contact Info"
                            onChange={(e) => {
                              setConnections((arr) => ({
                                ...arr,
                                1: { ...arr[1], info: e.target.value },
                              }));
                            }}
                          />
                        </label>
                        <label>
                          <select
                            onChange={(e) => {
                              setConnections((arr) => ({
                                ...arr,
                                1: { ...arr[1], method: e.target.value },
                              }));
                            }}
                          >
                            <option />
                            <option value="landLine">Landline</option>
                            <option value="mobile">Mobile</option>
                            <option value="email">Email</option>
                          </select>
                        </label>
                        <label>
                          <select
                            onChange={(e) => {
                              setConnections((arr) => ({
                                ...arr,
                                1: { ...arr[1], type: e.target.value },
                              }));
                            }}
                          >
                            <option />
                            <option value="emergency">Emergency Contact</option>
                            <option value="family">Family Member</option>
                            <option value="friend">Friend</option>
                            <option value="doctor">GP/Doctor</option>
                            <option value="psychiatrist">Psychiatrist</option>
                            <option value="alliedHealth">Allied Health</option>
                          </select>
                        </label>
                      </div>
                      <br />
                      <div className="thirdInput">
                        <label>
                          <input
                            type="text"
                            placeholder="Contact Name"
                            onChange={(e) => {
                              setConnections((arr) => ({
                                ...arr,
                                2: { ...arr[2], name: e.target.value },
                              }));
                            }}
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            placeholder="Contact Info"
                            onChange={(e) => {
                              setConnections((arr) => ({
                                ...arr,
                                2: { ...arr[2], info: e.target.value },
                              }));
                            }}
                          />
                        </label>
                        <label>
                          <select
                            onChange={(e) => {
                              setConnections((arr) => ({
                                ...arr,
                                2: { ...arr[2], method: e.target.value },
                              }));
                            }}
                          >
                            <option />
                            <option value="landLine">Landline</option>
                            <option value="mobile">Mobile</option>
                            <option value="email">Email</option>
                          </select>
                        </label>
                        <label>
                          <select
                            onChange={(e) => {
                              setConnections((arr) => ({
                                ...arr,
                                2: { ...arr[2], type: e.target.value },
                              }));
                            }}
                          >
                            <option />
                            <option value="emergency">Emergency Contact</option>
                            <option value="family">Family Member</option>
                            <option value="friend">Friend</option>
                            <option value="doctor">GP/Doctor</option>
                            <option value="psychiatrist">Psychiatrist</option>
                            <option value="alliedHealth">Allied Health</option>
                          </select>
                        </label>
                      </div>
                      <br />
                      <div className="fourthInput">
                        <label>
                          <input
                            type="text"
                            placeholder="Contact Name"
                            onChange={(e) => {
                              setConnections((arr) => ({
                                ...arr,
                                3: { ...arr[3], name: e.target.value },
                              }));
                            }}
                          />
                        </label>
                        <label>
                          <input
                            type="text"
                            placeholder="Contact Info"
                            onChange={(e) => {
                              setConnections((arr) => ({
                                ...arr,
                                3: { ...arr[3], info: e.target.value },
                              }));
                            }}
                          />
                        </label>
                        <label>
                          <select
                            onChange={(e) => {
                              setConnections((arr) => ({
                                ...arr,
                                3: { ...arr[3], method: e.target.value },
                              }));
                            }}
                          >
                            <option />
                            <option value="landLine">Landline</option>
                            <option value="mobile">Mobile</option>
                            <option value="email">Email</option>
                          </select>
                        </label>
                        <label>
                          <select
                            onChange={(e) => {
                              setConnections((arr) => ({
                                ...arr,
                                3: { ...arr[3], type: e.target.value },
                              }));
                            }}
                          >
                            <option />
                            <option value="emergency">Emergency Contact</option>
                            <option value="family">Family Member</option>
                            <option value="friend">Friend</option>
                            <option value="doctor">GP/Doctor</option>
                            <option value="psychiatrist">Psychiatrist</option>
                            <option value="alliedHealth">Allied Health</option>
                          </select>
                        </label>
                      </div>
                    </div>
                    <div className="addDiv">
                      <button
                        type="submit"
                        className="nextField"
                        onSubmit={handleSubmit}
                      >
                        Add <AddIcon />
                      </button>
                    </div>
                  </TabPanel>
                </form>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewParticipant;
