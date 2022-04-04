// import './header.scss';
// import { Outlet, Link, NavLink } from "react-router-dom";
// import { useState, useEffect } from "react"
// // import logo from "../../assets/img/logo-digital-ofc.png"
//
// const HeaderLog = () => {
//
//     const [navSize, setnavSize] = useState("5rem");
//     const [navColor, setnavColor] = useState("transparent");
//     const listenScrollEvent = () => {
//         window.scrollY > 10 ? setnavColor("#DFE4EA") : setnavColor("transparent");
//         window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
//         // window.innerWidth <  ? setnavColor("#DFE4EA") : setnavColor("transparent");
//     };
//     useEffect(() => {
//         window.addEventListener("scroll", listenScrollEvent);
//         return () => {
//             window.removeEventListener("scroll", listenScrollEvent);
//         };
//     }, []);
//
//     function toggleMenu() {
//
//         const hmenu = document.getElementById('hmenu');
//         hmenu.classList.toggle('active');
//
//     }
//
//     return (
//         <>
//             <header className="header-bg">
//                 <nav id='nav' aria-label="primaria" style={{
//                     backgroundColor: navColor,
//                     height: navSize,
//                     transition: "all .5s"
//                 }}>
//                     <div className="header container" id='hmenu'>
//                         <Link to="/home-user">
//                             <img src="./logo192.png" width="180"  alt="Logotipo Digital Booking" />
//                         </Link>
//                         <ul className="header-menu font-1-m">
//                             <li className="menu-item"><NavLink to="/home-user">Categorias</NavLink></li>
//                             <li className="menu-item"><NavLink to="/home-user">Orçamento</NavLink></li>
//                             <li className="menu-item"><NavLink to="/home-user">Contato</NavLink></li>
//                             <li className='menu-item'><div className='user-info'><img src="./logo-user-test.png" width="32" alt="Iniciais do Usuário" /><p>Olá, Laura Souza</p></div></li>
//                             <li className='menu-item exit'><NavLink to="/">Sair</NavLink></li>
//                         </ul>
//
//                         <button id="btn-mobile" onClick={toggleMenu}>
//                             <p>Menu</p>
//                             <span id="hamburger"></span>
//                         </button>
//                     </div>
//                 </nav>
//             </header>
//             <Outlet />
//         </>
//     )
// }
//
// export default HeaderLog;