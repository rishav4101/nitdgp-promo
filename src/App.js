import './App.css';
import Home from "./Home";
import React from "react";
import Loader from './components/Loader';

function App() {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(()=>{setLoaded(true)}, 3000);
  }, []);
  return (
    <div className="App">
      {loaded ? <></> : <Loader/>}
      <div >
      <Home/>
      </div>
    </div>
  );
}

export default App;
