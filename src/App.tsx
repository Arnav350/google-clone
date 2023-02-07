import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InputProvider } from "./components/InputContext";
import Main from "./pages/Main";
import Search from "./pages/Search";
import "./App.css";

function App() {
  const [input, setInput] = useState("temp");

  return (
    <InputProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </Router>
    </InputProvider>
  );
}

export default App;
