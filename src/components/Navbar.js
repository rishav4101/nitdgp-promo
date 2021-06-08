import React from "react";
import { useStyles } from "./Styles";
import JumpText from './Jump'

export default function Navbar() {
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.NavRoot}

      >
        <img src="./nitdgp.png" alt="," style={{ height: 60, width: "auto" }} />
                    &nbsp;&nbsp;&nbsp;
        <h1 style={{
          color: "#343f56", textTransform: "uppercase", margin: 0,
          textShadow: "3px 3px 0px #999"
        }}>national institute of technology, durgapur</h1>
      </div>
    </>
  );
}
