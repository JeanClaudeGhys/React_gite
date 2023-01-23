import React from 'react'
import './header.css'

function Header() {
  return (
    <>
        <nav>
            <div id="main">
                <div className="contbout">
                    <img src={process.env.PUBLIC_URL + "./media/moulin-logo.png"} alt="logo" />
                </div>

                <div>
                    <a id="hebclas" className="boutonMenu" href="#">Hébergements classiques</a>
                    {/* <!--Menu déroulant  gîte classque--> */}
                    <div className="menuderclass">
                            <a href="./legite.html">Le Gîte</a>
                            <a href="./studios.html">Les Studios</a>    
                    </div>
                </div>

                <div>
                    <a id="hebinsol" className="boutonMenu" href="#">Hébergements insolites</a>
                    {/* <!--Menu déroulant  gîte insolite--> */}
                    <div className="menuderinsol">
                        <a href="./roulotte.html">La Roulotte</a>
                        <a href="./kota.html">Le Kota</a>    
                    </div>
                </div>

                <div><a className="boutonMenu" href="#">Services</a></div>
                <div><a className="boutonMenu" href="#">Contact</a></div>
            </div>
        </nav>
    </>
  )
}

export default Header

