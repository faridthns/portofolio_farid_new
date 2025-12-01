import { Navbar } from "@/components/navbar";
import { BtnSpeedDial } from "@/components/btnSosmed";
import IndexPage from "@/sections/index";
import ParallaxText from "@/components/velocity";
import Skills from "@/sections/skills";
// import Socialmedia from "@/sections/socialmedia";
import Projects from "@/sections/projects";
import Contact from "@/sections/contactme";
import Footer from "@/sections/footer";

function App() {
  return (
    <>
      <Navbar />
      <IndexPage />
      <ParallaxText />
      <Skills />
      <Projects />
      {/* <Socialmedia /> */}
      <Contact />
      <Footer />
      <BtnSpeedDial />
    </>
  );
}

export default App;
