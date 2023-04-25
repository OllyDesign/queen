import Queen from "./Queen/Queen";
import PreLoader from "./Queen/PreLoader";
import Navbar from "./Navbar/Navbar";
import General from "./Categories/General";

function App() {
  return (
    <div>
    <PreLoader/>
    <Navbar/>
    <Queen/>
    <General/>
    </div>
  );
}

export default App;
