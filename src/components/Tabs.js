import React from "react";
import { TabsBtn1, TabsBtn2 } from "./TabsBtn";
import Infrastructure from "./Infrastructure";
import Societies from "./Societies";
import Fests from "./Fests";
import Alumni from "./AlumniComponent";
import { useStyles } from "./Styles";

export default function Tabs() {
  const classes =  useStyles();
  const [infra, setInfra] = React.useState(true);
  const [society, setSociety] = React.useState(false);
  const [fests, setFests] = React.useState(false);
  const [alumni, setAlumni] = React.useState(false);

  const selectInfra = async () => {
    setInfra(true);
    setSociety(false);
    setFests(false);
    setAlumni(false);
  };
  const selectSociety = async () => {
    setInfra(false);
    setSociety(true);
    setFests(false);
    setAlumni(false);
  };
  const selectFests = async () => {
    setInfra(false);
    setSociety(false);
    setFests(true);
    setAlumni(false);
  };
  const selectAlumni = async () => {
    setInfra(false);
    setSociety(false);
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
        {society ? (
          <TabsBtn2 text="Societies" />
        ) : (
          <TabsBtn1 text="Societies" onClickFunction={selectSociety} />
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
      {society ? <Societies /> : <></>}
      {fests ? <Fests /> : <></>}
      {alumni ? <Alumni /> : <></>}
    </>
  );
}
