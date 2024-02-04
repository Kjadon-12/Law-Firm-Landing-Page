import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./Section/About/About";
import AreaOP from "./Section/AreaOfPractice/AreaOP";
import Review from "./Section/Review/Review";
import Team from "./Section/Team/Team";


function App() {
  const [theme, setTheme] = useState(false)
  return (
    <div className="App">
     <Navbar/>
     <HeroSection/>
     <About/>
     <AreaOP/>
     <Review/>
     <Team/>
    </div>
  );
}

export default App;
