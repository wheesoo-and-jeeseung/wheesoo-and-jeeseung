import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Navigation} from "./components/Navigation/Navigation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Invite} from "./views/Invite/Invite";
import {Map} from "./views/Map/Map";
import {Celebration} from "./views/Celebration/Celebration";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Invite/>} />
                <Route path="/map" element={<Map/>} />
                <Route path="/celebration" element={<Celebration/>} />
            </Routes>
            <Navigation/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
