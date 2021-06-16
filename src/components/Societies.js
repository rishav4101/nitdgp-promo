import React from "react";
import { useStyles } from "./Styles";
import Video from "./Video";
import ContentCard from "./ContentCard";
import SocietiesData from "../data/SocietiesData";

export default function Societies() {
  const classes = useStyles();
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h1 className={classes.SectionHead}>OUR societies</h1>
      <Video source="https://www.youtube.com/embed/RwwdWcIqRbA" />
      <br />
      <div
        className={classes.SectionText}
      >
        The Institute houses several clubs and students bodies ranging from cultural, technical, environmental etc.
         The clubs organise workshops, fests and events all year around and witnesses huge participation from all students
      </div>
      <div className={classes.Line}></div>
      {SocietiesData?.map((club) => (
          <ContentCard text={club.text} source={club.imgsrc} link={club.link}/>
      ))}
    </div>
  );
}
