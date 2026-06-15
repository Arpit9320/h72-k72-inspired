import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/agence" element={<Agence/>}/>
        <Route path="/projects" element={<Projects/>}/>
        
      </Routes>
    </div>
  )
}

export default App