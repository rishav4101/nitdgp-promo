import React from "react";
import { TabsBtn1, TabsBtn2 } from "./TabsBtn";
import Infrastructure from "./Infrastructure";
import Admin from "./Admin";
import Fests from "./Fests";
import Alumni from "./AlumniComponent";
import { useStyles } from "./Styles";

export default function Tabs() {
  const classes =  useStyles();
  const [infra, setInfra] = React.useState(true);
  const [admin, setAdmin] = React.useState(false);
  const [fests, setFests] = React.useState(false);
  const [alumni, setAlumni] = React.useState(false);

  const selectInfra = async () => {
    setInfra(true);
    setAdmin(false);
    setFests(false);
    setAlumni(false);
  };
  const selectAdmin = async () => {
    setInfra(false);
    setAdmin(true);
    setFests(false);
    setAlumni(false);
  };
  const selectFests = async () => {
    setInfra(false);
    setAdmin(false);
    setFests(true);
    setAlumni(false);
  };
  const selectAlumni = async () => {
    setInfra(false);
    setAdmin(false);
    setFests(false);
    setAlumni(true);
  };

  return (
    <>
      <div
      className={classes.TabsHead}
      >
        {infra ? (
          <TabsBtn2 text="Infrastructure" />
        ) : (
          <TabsBtn1 text="Infrastructure" onClickFunction={selectInfra} />
        )}
        {admin ? (
          <TabsBtn2 text="Admin" />
        ) : (
          <TabsBtn1 text="Admin" onClickFunction={selectAdmin} />
        )}
        {fests ? (
          <TabsBtn2 text="Fests" />
        ) : (
          <TabsBtn1 text="Fests" onClickFunction={selectFests} />
        )}
        {alumni ? (
          <TabsBtn2 text="Alumni" />
        ) : (
          <TabsBtn1 text="Alumni" onClickFunction={selectAlumni} />
        )}
      </div>
      {infra ? <Infrastructure /> : <></>}
      {admin ? <Admin /> : <></>}
      {fests ? <Fests /> : <></>}
      {alumni ? <Alumni /> : <></>}
    </>
  );
}
