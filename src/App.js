import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { Navbar, Footers } from "./components";
import Home from "./pages/Home";
import Hire from "./pages/Hire";
import Work from "./pages/Work";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/hire" element={<Hire />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <Footers />
    </Router>
  );
}

export default App;
