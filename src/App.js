import React from "react";
import { css } from "@emotion/css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products/Products";
import Admin from "./Admin/Admin";

const AppStyles = css`
  margin: 50px auto;
  width: 380px;
  .Container {
    background: #1d1e26;
    border: 4px solid #9580ff;
    border-radius: 6px;
    padding: 25px;
  }
`;

const App = () => {
  return (
    <div className={AppStyles}>
      <Router>
        <div className="Container">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
