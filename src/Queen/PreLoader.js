import { useEffect } from "react";
import "./loader.css";
import { preLoaderAnim } from "../animatins";

function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
    
        <span className="tracking-in-contract-bck-top" >Breathe, </span>
        <span className="tracking-in-contract-bck-top">Relax , and </span>
        <span className="tracking-in-contract-bck-top">Connect</span>
      </div>
    </div>
  );
}

export default PreLoader;
