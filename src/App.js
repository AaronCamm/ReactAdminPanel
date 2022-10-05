import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import CarePlanList from "./pages/list/CarePlanList";
import DocumentList from "./pages/list/DocumentList";
import EmployeeList from "./pages/list/EmployeeList";
import IncidentList from "./pages/list/IncidentList";
import InvoiceList from "./pages/list/InvoiceList";
import ParticipantList from "./pages/list/ParticipantList";
import Logout from "./pages/logout/logout";
import NewEmployee from "./pages/new/NewEmployee";
import NewParticipant from "./pages/new/NewParticipant";
import Settings from "./pages/settings/Settings";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Single from "./pages/single/Single";
import SingleDocument from "./pages/single/SingleDocument";

import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { auth } from "./config";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <BrowserRouter>
        {user !== null ? (
          <div className="list">
            <Sidebar />
            <div className="listContainer">
              <Navbar />
              <div className="bodyContainer">
                <div className="backing">
                  <div className="widget">
                    <Routes>
                      <Route exact path="/">
                        {/* Protected routes */}
                        <Route exact path="dashboard" element={<Home />} />
                        <Route exact path="settings" element={<Settings />} />
                        <Route exact path="logout" element={<Logout />} />
                        <Route exact path="profile" element={<Single />} />
                        <Route exact path="employees">
                          <Route index element={<EmployeeList />} />
                          <Route
                            exact
                            path=":employeeid"
                            element={<Single />}
                          />
                          <Route exact path="new" element={<NewEmployee />} />
                        </Route>
                        <Route exact path="participants">
                          <Route index element={<ParticipantList />} />
                          <Route
                            exact
                            path=":participantid"
                            element={<Single />}
                          />
                          <Route
                            exact
                            path="new"
                            element={<NewParticipant />}
                          />
                        </Route>
                        <Route exact path="careplans">
                          <Route index element={<CarePlanList />} />
                          <Route
                            exact
                            path=":careplanid"
                            element={<Single />}
                          />
                          <Route
                            exact
                            path="new"
                            element={<NewParticipant />}
                          />
                        </Route>
                        <Route exact path="incidents">
                          <Route index element={<IncidentList />} />
                          <Route
                            exact
                            path=":incidentid"
                            element={<Single />}
                          />
                          <Route
                            exact
                            path="new"
                            element={<NewParticipant />}
                          />
                        </Route>
                        <Route exact path="documents">
                          <Route index element={<DocumentList />} />
                          <Route
                            exact
                            path=":documentid"
                            element={<SingleDocument />}
                          />
                          <Route
                            exact
                            path="new"
                            element={<NewParticipant />}
                          />
                        </Route>
                        <Route exact path="invoices">
                          <Route index element={<InvoiceList />} />
                          <Route exact path=":invoiceid" element={<Single />} />
                          <Route
                            exact
                            path="new"
                            element={<NewParticipant />}
                          />
                        </Route>
                        <Route
                          path="*"
                          exact={true}
                          element={<Navigate to="/dashboard" />}
                        />
                      </Route>
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<Signin />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
