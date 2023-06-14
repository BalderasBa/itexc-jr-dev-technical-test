import Header from "./componants/Header";
import NavBar from "./componants/NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Header />
    </BrowserRouter>
  );
}

export default App;
