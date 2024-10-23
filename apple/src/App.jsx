import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Container1 from "./components/Container1";
import Container2 from "./components/Container2";
import Grids from "./components/Grids";
import Grids2 from "./components/Grids2";
import Grids3 from "./components/Grids3";
import Slides from "./components/Slides";
import MarqueeSlider from "./components/MarqueeSlider";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container1 />
      <Container2 />
      <Grids />
      <Grids2 />
      <Grids3 />
      <Slides />
      <MarqueeSlider />
      <Footer />
    </>
  );
}

export default App;
