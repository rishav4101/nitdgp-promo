import React from "react";
import { useStyles } from "./Styles";

export default function Video(props) {
  const classes = useStyles();
  return (
    <div className={classes.VideoComp}>
      <iframe
        width="100%"
        height="100%"
        style={{ borderRadius: 8 }}
        src={props.source}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
