import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Routes from "../routes";

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      {Routes}
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
