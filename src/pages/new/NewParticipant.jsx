import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { initializeApp } from "@firebase/app";
import { set, get, getDatabase, ref, child } from "firebase/database";
import { firebaseConfig } from "../../config";
import "./newparticipant.scss";

const NewParticipant = () => {
  initializeApp(firebaseConfig);

  const [ndisNum, setNdisNum] = useState("");
  const [participantFirst, setParticipantFirst] = useState("");
  const [participantLast, setParticipantLast] = useState("");
  const [primaryContactName, setPrimaryContactName] = useState("");
  const [primaryContact, setPrimaryContact] = useState("");
  const [planType, setPlanType] = useState("Plan Managed");
  const [planStatus, setPlanStatus] = useState("Active");

  const handleSubmit = (event) => {
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
    });
  };

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `participants`)).then((snapshot) =>
      setTableData(snapshot.val())
    );
  }, []);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function tabProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="bodyContainer">
          <div className="backing">
            <div className="widget">
              <div className="topbar">
                <div className="recordstext">
                  <span>Add Participant</span>
                </div>
              </div>
              <hr />
              <div className="recordsbody">
                <div className="tabBody">
                  <Box sx={{ width: "100%" }}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <Tabs value={value} onChange={handleChange} centered variant="fullWidth" sx={"width: 170vh"}>
                        <Tab label="Client Information" {...tabProps(0)} />
                        <Tab label="Client Goals" {...tabProps(1)} />
                        <Tab label="Support Address" {...tabProps(2)} />
                        <Tab label="Care Team Contacts" {...tabProps(3)} />
                      </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                      <form onSubmit={handleSubmit}>
                        <label>
                          Participant First Name:{" "}
                          <input
                            type="text"
                            value={participantFirst}
                            onChange={(e) =>
                              setParticipantFirst(e.target.value)
                            }
                            required
                          />
                        </label>
                        <label>
                          Participant Last Name:{" "}
                          <input
                            type="text"
                            value={participantLast}
                            onChange={(e) => setParticipantLast(e.target.value)}
                            required
                          />
                        </label>
                        <br />
                        <label>
                          Primary Contact Name:{" "}
                          <input
                            type="text"
                            value={primaryContactName}
                            onChange={(e) =>
                              setPrimaryContactName(e.target.value)
                            }
                            required
                          />
                        </label>
                        <label>
                          Primary Contact:{" "}
                          <input
                            type="text"
                            value={primaryContact}
                            onChange={(e) => setPrimaryContact(e.target.value)}
                            required
                          />
                        </label>
                        <label>
                          NDIS Number:{" "}
                          <input
                            type="text"
                            value={ndisNum}
                            onChange={(e) => setNdisNum(e.target.value)}
                            required
                          />
                        </label>
                        <br />
                        <label>
                          Plan Type:{" "}
                          <select
                            value={planType}
                            onChange={(e) => setPlanType(e.target.value)}
                            required
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
                            required
                          >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </label>
                        <button type="submit" className="addParticipant">
                          Add
                        </button>
                      </form>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                      Item Four
                    </TabPanel>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewParticipant;
