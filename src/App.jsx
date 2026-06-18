import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
import FullScreenNav from "./components/common/FullScreenNav";
import { useState } from "react";


const App = () => {

  const [Menu, setMenu] = useState("hidden")
  const [Section, setSection] = useState("block")

  return (
    <div>

      <FullScreenNav/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/agence" element={<Agence/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>

      
    </div>
  )
}

export default App