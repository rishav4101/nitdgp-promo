import React from "react";
import { useStyles } from "./Styles";
import PulseText from './PulseText'


export default function Navbar() {
  const classes = useStyles();
  return (
    <>

      <div
        className={classes.NavRoot}

      >
        <PulseText />
                    &nbsp;&nbsp;&nbsp;
        <h1 style={{
          color: "#343f56", textTransform: "uppercase", margin: 0,
          textShadow: "3px 3px 0px #999"
        }}>national institute of technology, durgapur</h1>


      </div>
    </>
  );
}
