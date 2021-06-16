import React from "react";
import Slider from "./components/Slider";
import Tabs from "./components/Tabs";
import DirectorMsg from "./components/DirectorMsg";
import Loader from "./components/Loader";

export default function Home() {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);
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
        <Slider />
        <DirectorMsg />
        <Tabs />
      </div>
    </>
  );
}
