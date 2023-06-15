import NavBar from "./componants/NavBar";
import FindDoc from "./componants/FindDoc";
import Header from "./componants/Header";
import AboutUs from "./componants/AboutUs";
import GetApp from "./componants/GetApp";
import OurServices from "./componants/OurServices";
import Search from "./componants/Search";

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
    </div>
  );
}

export default App;
