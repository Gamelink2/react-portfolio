import React from 'react';
import './App.css';
import NavBar from './Navigation_Bar';
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom';
import Contact from './Pages/contactMe';
import About from './Pages/aboutMe';



function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/About' element={<About />} />
                <Route path='/Contact_me' element={<Contact />} />
            </Routes>
        </Router>
    );
}
 
export default App;