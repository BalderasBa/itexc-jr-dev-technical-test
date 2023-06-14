import NavBar from "./componants/NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
