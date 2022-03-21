import { Outlet, Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Cabecalho() {
    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#DFE4EA") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    function toggleMenu() {

        const hmenu = document.getElementById('hmenu');
        hmenu.classList.toggle('active');

    }

    return (
        <>
            <header className="header-bg">
                <nav id="nav" style={{
                    backgroundColor: navColor,
                    height: navSize,
                    transition: "all .5s"
                }}>
                    <div className="header" id='hmenu'>
                        <Link to="/">
                            <img src="/logo192.png" width="200" alt="Logotipo Digital Booking" />
                        </Link>

                        <ul className="header-menu font-h4 cor-0">
                            <li className="menu-item"><NavLink to="/categorias">Categorias</NavLink></li>
                            <li className="menu-item"><NavLink to="/reserva">Reserva</NavLink></li>
                            <li className="menu-item"><NavLink to="/contato">Contato</NavLink></li>
                            <li className="menu-item"><NavLink to="/login">Login</NavLink></li>
                            <li className="menu-item"><NavLink  to="/cadastro">Cadastro</NavLink></li>

                        </ul>

                        <button id="btn-mobile" onClick={toggleMenu}>
                            <p>Menu</p>
                            <span id="hamburger"></span>
                        </button>

                    </div>
                </nav>
            </header>
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
        </>
    )
}


export default Cabecalho;