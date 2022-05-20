import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import Header from "../components/header";
import FormComplain from "../pages/FormComplain";
import Submitted from "../pages/Submitted";

import { AnimatePresence } from 'framer-motion'

function AnimatorRoute(props) {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<WelcomePage/>} />
                <Route path='/form' element={<><Header/><FormComplain /></>} />
                <Route path='/submitted' element={<><Header /><Submitted /></>} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatorRoute;