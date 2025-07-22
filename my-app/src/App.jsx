import { Routes, Route } from 'react-router-dom';
import NavBar from './assets/NavBar/NavBar';
import Footer from './assets/Footer/Footer';
import Home from './index';
import './App.css';


function App() {
  return (
    <div className="container1">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
