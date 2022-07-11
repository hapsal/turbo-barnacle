import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route } from "react-router-dom";
import App from "../../App";
import CancelledData from "../CancelledData/CancelledData";
import AlertData from "../AlertData/AlertData";
import RoutesData from "../Routes/RoutesData";

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <h1 className="display-6">HSL APP</h1>
                </div>
                <div className="position-absolute top-50 end-0 translate-middle-y">
                    <Link to="/" component={App}><button className="btn btn-outline-secondary">Etusivu</button></Link>
                    <Link to="/Alerts" component={AlertData}><button className="btn btn-outline-secondary">Tiedotteet</button></Link>
                    <Link to="/Routes"><button className="btn btn-outline-secondary">Reitit</button></Link>
                    <Link to="/Cancelled"><button className="btn btn-outline-secondary">Perutut</button></Link>
                </div>
            </nav>
            <Routes>
                <Route path="/Alerts" element={<AlertData />} />
                <Route path="/Cancelled" element={<CancelledData />} />
                <Route path="/Routes" element={<RoutesData />} />
            </Routes>
        </div>
    )
}


export default Navigation;