import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ShareExperience from "./pages/ShareExperience";
import AllExperiences from "./pages/AllExperiences";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [experiences, setExperiences] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!isAuthenticated ? <Login setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/home" />}
        />
        <Route
          path="/signup"
          element={!isAuthenticated ? <Signup setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/share"
          element={isAuthenticated ? (
            <ShareExperience
              onSubmit={(exp) => setExperiences([...experiences, exp])}
            />
          ) : (
            <Navigate to="/" />
          )}
        />
        <Route
          path="/all"
          element={isAuthenticated ? (
            <AllExperiences experiences={experiences} />
          ) : (
            <Navigate to="/" />
          )}
        />
      </Routes>
    </Router>
  );
}

export default App;
