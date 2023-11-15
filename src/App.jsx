import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./Login";
import Navegar from "./Navegar";
import Home from "./Home";


function App() {
  return (
    <div className="">
      <Router>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Navegar" element={<Navegar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
