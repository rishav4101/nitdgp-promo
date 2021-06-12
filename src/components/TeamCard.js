import React from "react";
import { useStyles } from "./Styles";

export default function TeamCard(props){
    const classes = useStyles();
    return(
        <div className={classes.TeamCardWrap}>
            <img src={props.img} alt="." className={classes.TeamImg} />
            <div className={classes.TeamTitle}>{props.title}</div>
        </div>
    )
}