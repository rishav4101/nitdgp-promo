import React from "react";
import { useStyles } from "./Styles";

export default function ContentCard(props){
    const classes = useStyles();
return(
    <div className={classes.ContentCardWrap}>
        <img className={classes.ContentCardImg} alt="." src={props.source} />
        <div className={classes.ContentCardText}>
          {props.text}
        </div>
      </div>
)
}