import NavBar from "./componants/NavBar";
import FindDoc from "./componants/FindDoc";
import Header from "./componants/Header";
import AboutUs from "./componants/AboutUs";
import GetApp from "./componants/GetApp";
import OurServices from "./componants/OurServices";
import Search from "./componants/Search";
import Testimonial from "./componants/Testimonial";
import Faq from "./componants/Faq";
import Stats from "./componants/Stats";
import Contact from "./componants/Contact";
import Footer from "./componants/Footer";
import Scroll_to_up from "./componants/Scroll_to_up";
import EmtyArea from "./componants/EmtyArea";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <AboutUs />
      <GetApp />
      <FindDoc />
      <OurServices />
      
      <Search />

      <Testimonial />
      <Faq />
      <Stats />
      {/* <Contact /> */}
      {/* <EmtyArea /> */}
      {/* <Footer /> */}
      {/* <Scroll_to_up /> */}
    </div>
  );
}

export default App;
