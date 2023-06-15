import AboutUs from "./componants/AboutUs";
import GetApp from "./componants/GetApp";
import Header from "./componants/Header";
import NavBar from "./componants/NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Header />
      <AboutUs />
      <GetApp />
    </BrowserRouter>
  );
}

export default App;
