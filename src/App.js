import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education and Projects/Education";
import Skills from "./components/Skills and Certifications/Skills";
import Contact from "./components/Contact/Contact";
import Confirmation from "./components/Contact/Confirmation";
import ThankYou from "./components/Contact/ThankYou";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>{" "}
    </div>
  );
}

export default App;
