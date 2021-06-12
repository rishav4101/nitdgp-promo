import React from "react";
import TeamCard from "./components/TeamCard";
import TeamData from "./data/TeamData";
import { useStyles } from "./components/Styles";

export default function Team(){
    const classes = useStyles();
    return(
        <>
        <h1 className={classes.SectionHead}>Our Team</h1>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>
            {TeamData?.map((dat) => (
                <a href={dat.link} style={{textDecoration:"none"}}>
                <TeamCard img={dat.img} title={dat.title}/>
                </a>
            ))}
        </div>
        </>
    )
}