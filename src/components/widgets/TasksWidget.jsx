import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { taskColumns } from "../../columns/columnData";
import { Datatable } from "../datatable/Datatable";
import "./BackingWidget.scss";
import "./TasksWidget.scss";

import { initializeApp } from "@firebase/app";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { useEffect } from "react";
import { firebaseConfig } from "../../config";

const Widget = () => {
  const [addToggle, setAddToggle] = useState(false);
  const [taskData, setTaskData] = useState([]);
  const [clientName, setClientName] = useState();
  const [description, setDescription] = useState();
  const [dueDate, setDueDate] = useState();
  const [dueTime, setDueTime] = useState();
  const [assignedStaff, setAssignedStaff] = useState();
  //Get data from database and store as appointmentData for use in appointment widget
  useEffect(() => {
    initializeApp(firebaseConfig);
    const dbRef = ref(getDatabase());

    get(child(dbRef, "tasks")).then((snapshot) => setTaskData(snapshot.val()));
  }, []);

  const dataHandler = (e) => {
    const [year, month, day] = dueDate.split("-");
    const newDueDate = [day, month, year].join("/");

    const db = getDatabase();
    set(ref(db, "tasks/" + taskData.length), {
      id: taskData.length,
      clientName: clientName,
      description: description,
      dueDate: newDueDate,
      dueTime: dueTime,
      assigned: assignedStaff,
    });
  };

  return (
    <div className="tasks">
      {addToggle && (
        <div className="newTaskBacking">
          <div className="newTaskBody">
            <div className="exit">
              <p
                onClick={() => {
                  setAddToggle(false);
                }}
              >
                x
              </p>
            </div>
            <form className="taskForm" onSubmit={dataHandler}>
              <input
                type="text"
                id="participantName"
                placeholder="Enter client name"
                onChange={(e) => setClientName(e.target.value)}
              />
              <input
                type="text"
                id="assignedName"
                placeholder="Enter assigned staff name"
                onChange={(e) => setAssignedStaff(e.target.value)}
              />
              <div className="due">
                <label>
                  Due Date:{" "}
                  <input
                    type="date"
                    id="dueDate"
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </label>
                <label>
                  Due at:{" "}
                  <input
                    type="time"
                    id="dueTime"
                    onChange={(e) => setDueTime(e.target.value)}
                  />
                </label>
              </div>
              <input
                type="text"
                id="description"
                placeholder="Enter task description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="buttonWrapper">
                <button type="submit" className="addTask">
                  Add Task <AddIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="taskhead">
        <div className="taskstext">
          <span>My Tasks</span>
        </div>
        <div className="addicon">
          <AddIcon
            onClick={() => {
              setAddToggle(true);
            }}
          />
        </div>
      </div>
      <hr />
      <div className="tasksbody">
        <div className="recordsbody">
          <Datatable db="tasks" columns={taskColumns} className="datatable" />
        </div>
      </div>
    </div>
  );
};

export default Widget;
