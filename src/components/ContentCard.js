import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Gallery from "./Gallery";
import { makeStyles } from "@material-ui/core/styles";

export default function ContentCard(props) {
  const useStyles = makeStyles((theme) => ({
    ContentCardWrap: {
      textDecoration: "none",
      width: "min(95%, 1000px)",
      margin: "20px auto !important",
      display: "flex !important",
      justifyContent: "center !important",
      alignItems: "center !important",
      border: "2px solid #343f56 !important",
      borderRadius: "15px !important",
      boxShadow: "0px 2px 10px #d2939c !important",
      flexWrap: "wrap !important",
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
      "&:nth-child(odd)": {
        flexDirection: "row-reverse !important",
      },
      color: "#343f56",
    },
    Contentc: {
      display: "flex !important",
      justifyContent: "center !important",
      alignItems: "center !important",
      [theme.breakpoints.down("xs")]: {
        flexWrap: "wrap !important",
        width: "90%",
      },
    },
    Rootc: {
      display: "flex !important",
      justifyContent: "center !important",
      alignItems: "center !important",
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap !important",
      },
    },
    Droot: {
      padding: 0,
    },
    ContentCardImg: {
      height: 130,
      width: 130,
      margin: "20px 40px",
      objectFit: "contain",
      borderRadius: 20,
    },
    ContentCardText: {
      textDecoration: "none",
      width: "100%",
      textAlign: "left",
      padding: "20px",
      color: "#343f56",
    },
  }));
  const classes = useStyles();
  return (
    <Accordion className={classes.ContentCardWrap}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={props.source}
        id={props.source}
        classes={{
          root: classes.Rootc,
          content: classes.Contentc,
        }}
      >
        <a href={props.link}>
          <img className={classes.ContentCardImg} alt="." src={props.source} />
        </a>
        <div className={classes.ContentCardText}>{props.text}</div>
      </AccordionSummary>
      {props.array ? (
        <AccordionDetails
          classes={{
            root: classes.Droot,
          }}
        >
          <Gallery data={props.array} />
        </AccordionDetails>
      ) : (
        <></>
      )}
    </Accordion>
  );
}
