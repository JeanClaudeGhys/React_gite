import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {

    function menuClassiqueEnter() {
        let elem = document.querySelectorAll('.menuderclass')
        elem[0].style.visibility = "visible"
    }

    function menuClassiqueLeave() {
        let elem = document.querySelectorAll('.menuderclass')
        elem[0].style.visibility = "hidden"
    }

    function menuInsolEnter() {
        let elem = document.querySelectorAll('.menuderinsol')
        elem[0].style.visibility = "visible"
    }

    function menuInsolLeave() {
        let elem = document.querySelectorAll('.menuderinsol')
        elem[0].style.visibility = "hidden"
    }
    
    return (
        <>
            <nav>
                <div id="main">
                    <div>
                        <img src={process.env.PUBLIC_URL + "./media/moulin-logo.png"} alt="logo" />
                    </div>

                    <div>
                        <div>
                            <Link to="#" onMouseEnter={menuClassiqueEnter} onMouseLeave={menuClassiqueLeave} id="hebclas" className="boutonMenu" >Hébergements classiques</Link>
                            {/* <!--Menu déroulant  gîte classque--> */}
                            <div onMouseEnter={menuClassiqueEnter} onMouseLeave={menuClassiqueLeave} className="menuderclass">
                                    <a href="./legite.html">Le Gîte</a>
                                    <a href="./studios.html">Les Studios</a>    
                            </div>
                        </div>

                        <div>
                            <Link to="#" onMouseEnter={menuInsolEnter} onMouseLeave={menuInsolLeave} id="hebinsol" className="boutonMenu" href="#">Hébergements insolites</Link>
                            {/* <!--Menu déroulant  gîte insolite--> */}
                            <div onMouseEnter={menuInsolEnter} onMouseLeave={menuInsolLeave} className="menuderinsol">
                                <a href="./roulotte.html">La Roulotte</a>
                                <a href="./kota.html">Le Kota</a>    
                            </div>
                        </div>

                        <div><Link to="#" className="boutonMenu" href="#">Services</Link></div>
                        <div><Link to="#" className="boutonMenu" href="#">Contact</Link></div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header

