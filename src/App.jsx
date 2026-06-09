import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Motor from "./components/Motor";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Offer2 from "./components/Offer2";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
