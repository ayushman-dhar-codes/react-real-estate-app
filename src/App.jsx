import {useRef} from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Contact from "./components/Contact/Contact";
import './App.css';
import Value from "./components/Value/Value";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
function App() {
  const contactRef = useRef(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({behavior:"smooth"});
  }

  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header onContactClick = {scrollToContact}/>
        <Hero />
        <Companies />
        <Residencies />
        <Value />
        <Contact fref = {contactRef}/>
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
}

export default App;
