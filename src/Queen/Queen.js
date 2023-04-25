import ScrollToTop from "react-scroll-to-top";
import "./Queen.css";

function Queen() {
  return ( 
    <div className="flexbox-container">
      <div className="flex-item-1">
        <h1 className="text">BE KIND TO YOUR MIND</h1>
        <div className="landing-page">
        <h6 className="paragraph">
          One day at one-thirty in the afternoon, i got to thinking what is
          meditation and how can I incorporate it in my life. I researced
          various types of meditation to see which one i could at least try
          without sleeping
        </h6>
        </div>
        {/* <h1 className="tt">tttt</h1> */}


        <button className="button"> GET STARTED</button>
        
      </div>
      <div className="flex-item-2">
      <div className="home_img"></div>
        {/* <img
          src="https://i.pinimg.com/564x/6c/24/97/6c24977082b357cff6cb81607fcd4e6f.jpg"
          alt="Meditation"
          // className="slide-in-elliptic-bottom-bck"
        /> */}
      </div>
    </div>
  );
}

export default Queen;
