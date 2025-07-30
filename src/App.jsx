import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ShareExperience from "./pages/ShareExperience";
import AllExperiences from "./pages/AllExperiences";

function App() {
  const [user, setUser] = useState(null);
  const [experiences, setExperiences] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!user ? <Login onLogin={setUser}/> : <Navigate to="/home" />} />
        <Route path="/signup" element={!user ? <Signup onSignup={setUser}/> : <Navigate to="/home" />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        <Route
          path="/share"
          element={user ? <ShareExperience onSubmit={(exp) => {
            setExperiences([...experiences, exp]);
          }} /> : <Navigate to="/" />}
        />
        <Route
          path="/all"
          element={user ? <AllExperiences experiences={experiences} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
