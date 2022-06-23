import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/HomePage"
import About from "./pages/about/AboutPage"
import Education from "./pages/education/EducationPage"
import Experience from "./pages/experience/ExperiencePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/about" exact element={<About/>}/>
      <Route path="/experience" exact element={<Experience/>}/>
      <Route path="/education" exact element={<Education/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;


