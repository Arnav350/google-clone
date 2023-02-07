import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InputProvider } from "./components/InputContext";
import Main from "./pages/Main";
import "./App.css";

function App() {
  const [input, setInput] = useState("temp");

  return (
    <InputProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/search" element={<h1>test</h1>} /> */}
        </Routes>
      </Router>
    </InputProvider>
  );
}

export default App;
