import React from 'react';
import {AnalogClock} from "./components/analogClock/AnalogClock";
import {Route, Routes} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import s from './App.module.css';
import {AccordionSample} from "./components/accordion/AccordionSample";

function App() {
    return (
        <div className={s.app}>
            <div className={s.navbar}>
                <Navbar/>
            </div>
            
            <div className={s.wrapperContent}>
                <Routes>
                    <Route path={'analog-clock'} element={<AnalogClock/>}/>
                    <Route path={'accordion-sample'} element={<AccordionSample/>}/>
                </Routes>
            </div>
        
        </div>
    )
}

export default App