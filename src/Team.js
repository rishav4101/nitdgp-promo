import React from "react";
import TeamCard from "./components/TeamCard";
import TeamData from "./data/TeamData";
import { useStyles } from "./components/Styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Loader from "./components/Loader";

export default function Team() {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);
  const classes = useStyles();
  return (
    <>
      {loaded ? <></> : <Loader />}
      <div
        style={{
          maxWidth: 1400,
          margin: "0px auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Link to="/">
            <Button
              variant="contained"
              style={{ backgroundColor: "#343f56", color: "white" }}
            >
              Back to Home
            </Button>
          </Link>
        </div>

        <h1 className={classes.SectionHead}>Coordinator</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
            <TeamCard
              img="./assets/images/team/ankan.jpg"
              title="Ankan Pramanik"
              inlink="https://www.linkedin.com/in/ankan-pramanik-67b911199/"
              glink="https://github.com/ankanpramanik"
            />
        </div>
        
        <h1 className={classes.SectionHead}>Web Team</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {TeamData?.map((dat) => (
            <TeamCard
              img={dat.img}
              title={dat.title}
              glink={dat.glink}
              inlink={dat.inlink}
            />
          ))}
        </div>

        <h1 className={classes.SectionHead}>Video Editors</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
            <TeamCard
              img="./assets/images/team/neeladri.jpeg"
              title="Neeladri Dhar"
              inlink="https://www.linkedin.com/in/neeladri-dhar-11a7b220b"
            />
            <TeamCard
              img="./assets/images/team/sankalp.jpeg"
              title="Sankalp Mishra"
              inlink="https://www.linkedin.com/in/sankalp-mishra-78652b201/"
            />
        </div>



        <div className={classes.Line}></div>
        <h1 className={classes.SectionHead} style={{ fontSize: 17 }}>
          Images used in this website have been provided by "STROKES, NIT
          Durgapur".<br/>
          Video used in Infrastructure is created by "STROKES, NIT
          Durgapur"
        </h1>
        <div className={classes.Line}></div>
      </div>
    </>
  );
}
