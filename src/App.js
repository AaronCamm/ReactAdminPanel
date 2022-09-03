import Home from "./pages/home/Home";
import Signin from "./pages/signin/Signin";
import ParticipantList from "./pages/list/ParticipantList";
import EmployeeList from "./pages/list/EmployeeList";
import CarePlanList from "./pages/list/CarePlanList";
import IncidentList from "./pages/list/IncidentList";
import DocumentList from "./pages/list/DocumentList";
import New from "./pages/new/New";
import NewEmployee from "./pages/new/NewEmployee";
import Signup from "./pages/signup/Signup";
import Single from "./pages/single/Single";
import Settings from "./pages/settings/Settings";
import SingleParticipant from "./pages/single/SingleParticipant";
import SingleCareplan from "./pages/single/SingleCareplan";
import SingleEmployee from "./pages/single/SingleEmployee";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="signin" element={<Signin/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="employee">
              <Route index element={<EmployeeList/>}/>
              <Route path=":employeeid" element={<SingleEmployee/>}/>
              <Route path="new" element={<NewEmployee/>}/>
            </Route>
            <Route path="participants">
              <Route index element={<ParticipantList/>}/>
              <Route path=":participantid" element={<SingleParticipant/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="careplans">
              <Route index element={<CarePlanList/>}/>
              <Route path=":careplanid" element={<SingleCareplan/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="incidents">
              <Route index element={<IncidentList/>}/>
              <Route path=":participantid" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="documents">
              <Route index element={<DocumentList/>}/>
              <Route path=":documentid" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="invoices">
              <Route index element={<ParticipantList/>}/>
              <Route path=":invoiceid" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
