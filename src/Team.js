import React from "react";
import TeamCard from "./components/TeamCard";
import TeamData from "./data/TeamData";
import { useStyles } from "./components/Styles";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function Team(){
    const classes = useStyles();
    return(
        <>
        <div style={{textAlign: 'center'}}>
          <Link to='/'><Button variant="contained" color="primary">Back to Home</Button></Link>
        </div>
        <h1 className={classes.SectionHead}>Web Team</h1>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>
            {TeamData?.map((dat) => (
                <TeamCard img={dat.img} title={dat.title} glink={dat.glink} inlink={dat.inlink}/>
            ))}
        </div>
        </>
    )
}
