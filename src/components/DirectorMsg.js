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
      height: "300px",
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
      padding: "10px",
      marginLeft: "10px",
      marginTop: "10px",
      marginBottom: "10px",
      fontSize: "14px",
      lineHeight: 1.3,
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
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making it
          over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going through
          the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
          of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
          Cicero, written in 45 BC. This book is a treatise on the theory of
          ethics, very popular during the Renaissance. The first line of Lorem
          Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
          1.10.32."<br /><br />
          Prof. Anupam Basu<br />
          Director, NIT Durgapur
        </p>
      </div>
      <div style={{ textAlign: 'center', marginTop: 20, marginBottom: 20}}>
        <Link to="/files/brochure.pdf" target="_blank" download>
          <Button variant="contained"
              style={{ backgroundColor: "#343f56", color: "white"}}>
            Download Brochure
          </Button>
        </Link>
      </div>
      </Container>
)
}
