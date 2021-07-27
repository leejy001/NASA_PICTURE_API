import React, { Fragment } from "react";
import Header from "./components/Header";
import MainContainer from "./components/routes/MainContainer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <MainContainer />
    </Fragment>
  );
};

export default App;
