import { initializeApp } from "@firebase/app";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddIcon from "@mui/icons-material/Add";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { firebaseConfig } from "../../config";

import "./AppointWidget.scss";
import "./BackingWidget.scss";

const Widget = () => {
  const [appointmentData, setAppointmentData] = useState([]);
  const [addToggle, setAddToggle] = useState(false);
  const [participantName, setParticipantName] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [participantAddress, setParticipantAddress] = useState();
  //Get data from database and store as appointmentData for use in appointment widget
  useEffect(() => {
    initializeApp(firebaseConfig);
    const dbRef = ref(getDatabase());

    get(child(dbRef, "appointments")).then((snapshot) =>
      setAppointmentData(snapshot.val())
    );
  }, []);

  const dataHandler = (e) => {
    e.preventDefault();

    const [year, month, day] = date.split("-");
    const newDate = [day, month, year].join("/");

    const db = getDatabase();
    set(ref(db, "appointments/" + appointmentData.length), {
      id: appointmentData.length,
      participantName: participantName,
      task: description,
      date: newDate,
      period: startTime + "-" + endTime,
      participantAddress: participantAddress,
    });
  };

  return (
    <div className="appointments">
      {addToggle && (
        <div className="newAppointBacking">
          <div className="newAppointmentBody">
            <div className="exit">
              <p
                onClick={() => {
                  setAddToggle(false);
                }}
              >
                x
              </p>
            </div>
            <form className="appointForm" onSubmit={dataHandler}>
              <input
                type="text"
                id="participantName"
                placeholder="Enter participant name"
                required
                onChange={(e) => {
                  setParticipantName(e.target.value);
                }}
              />
              <input
                type="text"
                id="title"
                placeholder="Enter a description"
                required
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <input
                type="date"
                id="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              <div className="timeInput">
                <label>
                  Start Time:{" "}
                  <input
                    type="time"
                    id="startTime"
                    required
                    onChange={(e) => {
                      setStartTime(e.target.value);
                    }}
                  />
                </label>
                <label>
                  End Time:{" "}
                  <input
                    type="time"
                    id="endTime"
                    required
                    onChange={(e) => {
                      setEndTime(e.target.value);
                    }}
                  />
                </label>
              </div>
              <input
                type="text"
                id="address"
                placeholder="Enter participant address"
                required
                onChange={(e) => {
                  setParticipantAddress(e.target.value);
                }}
              />
              <div className="buttonWrapper">
                <button type="submit" className="addAppointment">
                  Add Appointment <AddIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="appointhead">
        <div className="appointtext">
          <span>Appointments</span>
        </div>
        <div className="addicon">
          <AddIcon
            onClick={() => {
              setAddToggle(true);
            }}
          />
        </div>
      </div>
      <hr className="topBar" />
      <div className="appointbody">
        {appointmentData.map((data) => {
          return (
            <div key={data.id}>
              <div className="appointEntry">
                <AccountBoxIcon className="accountIcon" />
                <div className="dataText">
                  <p className="appointNameDate">
                    {data.participantName} - {data.date} from {data.period}
                  </p>
                  <p className="title">{data.task}</p>
                  <p className="appointAddress">{data.participantAddress}</p>
                </div>
              </div>
              <hr className="dataBreak" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Widget;
