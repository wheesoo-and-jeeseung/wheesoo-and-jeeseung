import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Navigation} from "./components/Navigation/Navigation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Invite} from "./views/Invite/Invite";
import {Map} from "./views/Map/Map";
import {Contact} from "./views/Contact/Contact";
import { analytics } from "./common/firebase";
import { QueryClient, QueryClientProvider }from 'react-query'


const queryClient = new QueryClient()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Invite/>} />
                <Route path="/map" element={<Map/>} />
                <Route path="/celebration" element={<Contact/>} />
            </Routes>
            <Navigation/>
        </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
