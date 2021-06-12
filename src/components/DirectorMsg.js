import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@material-ui/core';


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
      //border: "3px solid",
      borderRadius:"50px 0px",
      backgroundColor: "#343f56",
      color: "white",
      padding:0,
      position: "relative",
      height: "300px",
    },
  },
  img: {
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
      //border: "3px solid transparent",
      borderRadius:"50px 0px",
      backgroundColor: "#343f56",
      color: "white",
      marginTop: "-100px",
      padding:"20px",
      paddingTop: "110px",
      fontSize: "12px",
      textAlign:"center",
    },
    [theme.breakpoints.up("md")]: {
      padding: "20px",
      marginLeft: "20px",
      marginTop: "30px",
      marginBottom: "20px",
      fontSize: "14px",
    }
  },
  head: {
    [theme.breakpoints.up("md")]: {
    backgroundColor: "#fff7ef",
    position:"absolute",
    top:"-10px",
    right:"40px",
    width:"250px",
    textAlign:"center",
    color: "black",
    }
  }
}));

export default function DirectorMsg(){
  const classes = useStyles();
return(
    <Container>
      <div className={classes.root}>
        <div className={classes.head}>
          <h5>From the Director's Desk</h5>
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
          1.10.32."
        </p>
      </div>
      </Container>
)
}
