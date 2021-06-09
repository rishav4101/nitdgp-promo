import React from "react";
import { useStyles } from "./Styles";

export default function Navbar() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.NavRoot}>
        <img src="./nitdgp.png" alt="," className={classes.NavLogo}/>
        &nbsp;&nbsp;&nbsp;
        <h1
          className={classes.NavText}
        >
          national institute of technology, durgapur
        </h1>
      </div>
    </>
  );
}
