import React from "react";
import { useStyles } from "./Styles";

export function TabsBtn1({ text, onClickFunction }) {
    const classes =  useStyles();
  return (
    <>
      <button
        onClick={onClickFunction}
        className={classes.TabsBtn1}
        
      >
        {text}
      </button>
    </>
  );
}

export function TabsBtn2({ text }) {
    const classes =  useStyles();
  return (
    <>
      <button
       className={classes.TabsBtn2}
      >
        {text}
      </button>
    </>
  );
}
