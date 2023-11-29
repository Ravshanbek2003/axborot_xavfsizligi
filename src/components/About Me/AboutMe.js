import React, { Fragment } from "react";

import classes from "./aboutMe.module.css";

import { useSelector } from "react-redux";
const AboutMe = () => {
  const uiColor = useSelector((state) => state.uiColor);

  return (
    <Fragment>
      <div className={classes.contactMe}>
        <h1 style={{ fontSize: "500px" }}>😁</h1>
      </div>
    </Fragment>
  );
};
export default AboutMe;
