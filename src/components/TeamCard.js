import React from "react";
import { useStyles } from "./Styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function TeamCard(props){
    const classes = useStyles();
    return(
        <div className={classes.TeamCardWrap}>
            <img src={props.img} alt="." className={classes.TeamImg} />
            <div className={classes.TeamTitle}>{props.title}</div>
            <div className={classes.TeamTitle}>
              <a href={props.inlink}><LinkedInIcon /></a>
              <a href={props.glink}><GitHubIcon /></a>
            </div>
        </div>
    )
}
