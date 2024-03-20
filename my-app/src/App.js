import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IcecoffeePage from './components/icecoffeepage'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container mrgnbtm">
          <div className="row justify-content-center">
            <div className="col-md-6">
            </div>
          </div>
        </div>
        {/* สร้างเส้นทางสำหรับเมนูไก่ */}
        <Routes>
          <Route path="/IcecoffeePage" element={<IcecoffeePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
