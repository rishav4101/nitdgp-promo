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
      <Video source="https://www.youtube.com/embed/QuxyIjcvlmg" />
      <br />
      <div
        className={classes.SectionText}
      >
        The Institute houses several clubs and student bodies ranging from cultural, technical, environmental etc.
         The clubs organise workshops, fests and events all year around and witness huge participation.
      </div>
      <div className={classes.Line}></div>
      {SocietiesData?.map((club) => (
          <ContentCard text={club.text} source={club.imgsrc} link={club.link}/>
      ))}
    </div>
  );
}
