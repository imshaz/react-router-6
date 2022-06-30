import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}
function Profile() {
  return <h2>Profile</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
