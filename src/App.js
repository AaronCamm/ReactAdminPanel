import Home from "./pages/home/Home";
import Signin from "./pages/signin/Signin";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Signup from "./pages/signup/Signup";
import Single from "./pages/single/Single";
import Settings from "./pages/settings/Settings";

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
            <Route path="staff">
              <Route index element={<List/>}/>
              <Route path=":staffid" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="participants">
              <Route index element={<List/>}/>
              <Route path=":participantid" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="careplans">
              <Route index element={<List/>}/>
              <Route path=":participantid" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="incidents">
              <Route index element={<List/>}/>
              <Route path=":participantid" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="resources">
              <Route index element={<List/>}/>
              <Route path=":resourceid" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
