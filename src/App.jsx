import Header from "./components/Header/Header";
import Hero from "./components/Hero/hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Contact from "./components/Contact/Contact";
import './App.css';
import Value from "./components/Value/Value";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
        <Companies />
        <Residencies />
        <Value />
        <Contact/>
        <GetStarted/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
