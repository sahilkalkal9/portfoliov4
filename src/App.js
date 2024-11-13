import { useState } from 'react';
import './App.scss';
import Nav from './components/nav/nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Projects from './components/projects/projects';
import PDFViewer from './components/resume/resume';

function App() {

  const [theme, setTheme] = useState("dark")

  return (
    <div className="App">
      <div className="app-content">
        <Nav theme />
        <Routes>
          <Route path='/' element={<Home theme />} />
          <Route path='/about-me' element={<About theme />} />
          <Route path='/resume' element={<PDFViewer theme />} />
          <Route path='/projects' element={<Projects theme />} />
        </Routes>

        <Footer />
      </div>
    </div> 
  );
}

export default App;
