import { useStyles } from "./Styles";
import React from "react";
import Gallery from "./Gallery";
import Datainfra from "../data/DataInfra";
import Video from "./Video";

export default function Infrastructure() {
  const classes = useStyles();
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h1 className={classes.SectionHead}>THE INFRASTRUCTURE</h1>
      <Video source="https://www.youtube.com/embed/OvQSCw20NJA"/>
      <br/>
      <div
        className={classes.SectionText}
      >
        The campus is spread across 187 acres of land and houses multiple buildings, laboratories and classrooms.
         It has state of the art infrastructure with modern amenities. The campus is also physically-handicapped friendly.
          Among the buildings, it has lush green gardens and huge trees.
      </div>
      <div className={classes.Line}></div>
      <Gallery data={Datainfra} />
    </div>
  );
}
