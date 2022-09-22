import "./appointwidget.scss";
import "./backingwidget.scss";
import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useState, useEffect } from "react";
import { initializeApp } from "@firebase/app";
import { get, getDatabase, ref, child } from "firebase/database";
import { firebaseConfig } from "../../config";

const Widget = () => {
  const [appointmentData, setAppointmentData] = useState([]);
  //Get data from database and store as appointmentData for use in appointment widget
  useEffect(() => {
    initializeApp(firebaseConfig);
    const dbRef = ref(getDatabase());

    get(child(dbRef, "appointments")).then((snapshot) =>
      setAppointmentData(snapshot.val())
    );
  }, []);

  return (
    <div className="backing">
      <div className="widget">
        <div className="appointments">
          <div className="appointhead">
            <div className="appointtext">
              <span>Appointments</span>
            </div>
            <div className="addicon">
              <AddIcon />
            </div>
          </div>
          <hr />
          <div className="appointbody">
            {appointmentData.map((data) => {
              console.log(data);
              return (
                <div>
                  <div className="appointEntry">
                    <AccountBoxIcon className="accountIcon" />
                    <div className="dataText">
                      <p className="appointNameDate">
                        {data.participantName} - {data.date} from {data.period}
                      </p>
                      <p className="appointAddress">
                        {data.participantAddress}
                      </p>
                    </div>
                  </div>
                  <hr className="dataBreak"/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
