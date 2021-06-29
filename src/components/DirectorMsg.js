import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme)=>({
  root:{
    margin: "80px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "90%"
    },
    [theme.breakpoints.up("md")]: {
      margin: "80px auto",
      borderRadius:"50px 0px",
      boxShadow: "0px 2px 10px #d2939c",
      backgroundColor: "#343f56",
      color: "white",
      padding:0,
      position: "relative",
      height: "330px",
    },
  },
  img: {
    objectFit: "cover",
    objectPosition: "top",
    [theme.breakpoints.down("sm")]: {
      height: "200px",
      aspectRatio: 1/1,
      borderRadius:"50%",
      marginTop: "10px",
      zIndex: 1
    },
    [theme.breakpoints.up("md")]: {
      height:"100%",
      aspectRatio: 1/1,
      border: "none",
      borderRadius:"50px 0px 0px 0px",
    }
  },
  text: {
    fontStyle: "italic",
    [theme.breakpoints.down("sm")]: {
      borderRadius:"50px 0px",
      boxShadow: "0px 2px 10px #d2939c",
      backgroundColor: "#343f56",
      color: "white",
      marginTop: "-100px",
      padding:"20px",
      paddingTop: "110px",
      fontSize: "12px",
      textAlign:"center",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2px",
      marginLeft: "10px",
      marginTop: "5px",
      marginBottom: "2px",
      fontSize: "13px",
      lineHeight: 1.5,
    }
  },
  head: {
    fontSize: 23,
    [theme.breakpoints.up("md")]: {
    backgroundColor: "#fff7ef",
    position:"absolute",
    top:"-10px",
    right:"40px",
    width:"250px",
    color: "#343f56",
    fontSize: 18,
    fontWeight: 700,
    textAlign:"center",
    padding: 5
    }
  }
}));

export default function DirectorMsg(){
  const classes = useStyles();
return(
    <Container>
      <div className={classes.root}>
        <div className={classes.head}>
          From the Director's Desk
        </div>
        <img className={classes.img} alt="." src="assets/images/Director.jpg" />
        <p className={classes.text}>
          It is a matter of great pleasure to release the Information Brochure
          of NIT Durgapur for the academic session 2021-22. This new brochure comes with a host of first-hand
          knowledge about the institute. It not only highlights the academic
          programmes operating on campus but also some of the most recent
          achievements of the students, faculty members and the institute as a
          whole on various national platforms. The academic programme curricula
          have not been included in this brochure as they are dynamically
          modified and kept posted up to date on the institute website.
          The existing programme curricula gives a lot of flexibility and
          opportunity to the aspiring students. This brochure fantastically
          focuses on various academic / research facilities and relevant outputs,
          which are of social importance. Campus facilities that inject life
          into the system have also been nicely depicted in this booklet.
          Lastly, it is noteworthy that NIT Durgapur has produced a large number
          of highly reputed personalities and an honest attempt has been made so
          as to inspire the student community.
          <br /><br />
          <b>Prof. Anupam Basu<br />
          Director, NIT Durgapur</b>
        </p>
      </div>
      <div style={{ textAlign: 'center', marginTop: 20, marginBottom: 20}}>
        <Link to="/files/Information_Brochure_2021-22.pdf" target="_blank" download>
          <Button variant="contained"
              style={{ backgroundColor: "#343f56", color: "white"}}>
            Download Brochure
          </Button>
        </Link>
      </div>
      </Container>
)
}
