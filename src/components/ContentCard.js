import React from "react";
import { useStyles } from "./Styles";

export default function ContentCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.ContentCardWrap}>
      <a href={props.link}>
        <img className={classes.ContentCardImg} alt="." src={props.source} />
      </a>
      <div className={classes.ContentCardText}>{props.text}</div>
    </div>
  );
}
