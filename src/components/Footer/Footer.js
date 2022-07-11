import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">Etusivu</a></li>
            <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">Tiedotteet</a></li>
            <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">Reitit</a></li>
            <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">Perutut</a></li>
            </ul>
            <p className="text-center text-muted">&copy; Hannu Salo</p>
        </footer>
    )
}

export default Footer;