import logo from './logo.svg';
import './App.css';
import FormComplain from './pages/FormComplain';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import Submitted from './pages/Submitted';
import WelcomePage from "./pages/WelcomePage";
import React from "react";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path='/' element={<WelcomePage />} />
                <Route path='/form' element={<><Header/><FormComplain /></>} />
                <Route path='/submitted' element={<><Header /><Submitted /></>} />
            </Routes>
        </div>
    );
}

export default App;
