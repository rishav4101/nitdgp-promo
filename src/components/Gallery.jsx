import React, { useState } from "react";
import "./galstyle.css";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core";
import { Container, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    color: "#343f56",
    padding: "20px 0px",
  },

  CardBody: {
    border: "2px solid #343f56",
    borderRadius: 10,
    boxShadow: "0px 2px 10px #d2939c",
    maxWidth: "100%",
    margin: "0px auto",
    [theme.breakpoints.down("md")]: {
      height: "200px",
      aspectRatio: 1 / 1,
    },
    [theme.breakpoints.down("xs")]: {
      height: "150px",
      aspectRatio: 1 / 1,
    },
    [theme.breakpoints.up("md")]: {
      height: "280px",
      aspectRatio: 1 / 1,
      "&:hover": {
        "& $CardImgText": {
          display: "block",
        },
      },
    },
  },

  CardImg: {
    position: "relative",
    margin: "0px auto",
    transition: "all 350ms ease",
    cursor: "pointer",
    "&:hover": {
      filter: "opacity(1)",
      transform: "scale(1.1)",
    },

    [theme.breakpoints.down("md")]: {
      height: "200px",
      aspectRatio: 1 / 1,
    },
    [theme.breakpoints.down("xs")]: {
      height: "150px",
      aspectRatio: 1 / 1,
    },
    [theme.breakpoints.up("md")]: {
      height: "280px",
      aspectRatio: 1 / 1,
    },
  },
  CardImgText: {
    padding: "5px 0px",
    position: "absolute",
    display: "block",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: "#ffffff",
      height: "40px",
      display: "none",
    },
    },
}));

export const Gallery = (props) => {
  const classes = useStyles();
  const [model, setmodel] = useState(false);
  const [Tempimg, setTempimg] = useState("");
  const [TempimgName, setTempimgName] = useState("");

  const getImgDetail = (imgsrc,name) => {
    setTempimg(imgsrc);
    setTempimgName(name);
    setmodel(true);
  };

  return (
    <>
      <div>
        {/* <h1
          style={{
            color: "#343f56",
            textTransform: "uppercase",
            margin: "20px",
            textAlign: "center",
          }}
        >
          <Text />
        </h1> */}
        {/* <Grid container spacing={2} style={{ background: "#fff7ef" }}> */}
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>
          {props.data.map((item) => {
            return (
              // <Grid
              //   item
              //   key={item.id}
              //   xs={6}
              //   sm={4}
              //   md={3}
              //   lg={3}
              //   style={{ background: "#fff7ef", textAlign: "center" }}
              // >
              <div style={{margin:8}}>
                <div className={model ? "model open" : "model"} style={{display: "flex", flexDirection: 'column'}}>
                  <img style={{ objectFit: "cover", height: "90vh", width: "90vh" }} src={Tempimg} alt="." />
                  <h3>{TempimgName}</h3>
                  <CloseIcon onClick={() => setmodel(false)} />
                </div>
                <Card
                  elevation={0}
                  className={classes.CardBody}
                  style={{
                    background: "#f5e6ca",
                    outline: "none",
                  }}
                >
                  <div onClick={() => getImgDetail(item.imgsrc,item.name)}>
                    <CardMedia
                      className={classes.CardImg}
                      image={item.imgsrc}
                      title={item.name}
                    >
                      <div className={classes.CardImgText}>
                        <Typography style={{lineHeight: 1}} variant="caption" component="p">
                          {item.name}
                        </Typography>
                      </div>
                    </CardMedia>
                  </div>
                </Card>
                </div>
              // </Grid>
            );
          })}
          </div>
        {/* </Grid> */}
      </div>
    </>
  );
};

export default Gallery;
