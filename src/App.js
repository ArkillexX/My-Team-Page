
import './App.css';
import Nav from "./components/nav.jsx";
import Frame from "./components/frame.jsx";

import image1 from "./img/photo1.png"
import image2 from "./img/photo2.png"
import image3 from "./img/photo3.png"
import image4 from "./img/photo4.png"
import image5 from "./img/photo5.png"
import image6 from "./img/photo6.png"


function App() {
  return (
    <div className="App">
      <Nav />
      <div className='Skyline'>
      <Frame className="Frame" alt="image1" url={image1} name="Bill Mahoney" ocuppation="PRODUCT OWNER" />
      <Frame className="Frame mid double" alt="image2" url={image2} name="Saba Cabrera" ocuppation="ART DIRECTOR" />
      <Frame className="Frame" alt="image3" url={image3} name="Shae Le" ocuppation="TECH LEAD" />
      <Frame className="Frame double" alt="image4" url={image4} name="Skylah Lu" ocuppation="UX DESIGNER" />
      <Frame className="Frame mid" alt="image5" url={image5} name="Griff Richards" ocuppation="DEVELOPER" />
      <Frame className="Frame double" alt="image6" url={image6} name="Stan John" ocuppation="DEVELOPER" />
      </div>
    </div>
  );
}

export default App;
