import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div id="contfoot">

                <div id="mentions">
                    <p class="entet">
                        Mentions
                    </p>
                    <ul>
                        <li><a href="#">Mentions légales</a></li>
                        <li><a href="#">Conditions générales de ventes</a></li>
                        <li><a href="#">Politique de confidentialité</a></li>
                    </ul>
                </div>

                <div id="coordonnees">
                    <p class="entet">
                        Coordonnées
                    </p>
                    <ul id="coord">
                        <li>
                            <p>LE GITE DU MOULIN<br/>
                                112 rue du Labrador<br/>
                                62125 Ablain-St-Nazaire
                            </p>
                        </li>
                        <li>03 00 01 02 03</li>
                    </ul>
                </div>

                <div id="resosoc">
                    <p class="entet">
                        Suivez-nous
                    </p>
                    <div>
                        <Link to="#"><img src={process.env.PUBLIC_URL + "media/fb.png"} alt="fb" /></Link>
                        <Link to="#"><img src={process.env.PUBLIC_URL + "media/insta.png"} alt="insta" /></Link>
                        <Link to="#"><img src={process.env.PUBLIC_URL + "media/twitter.png"} alt="insta" /></Link>
                        <Link to="#"><img src={process.env.PUBLIC_URL + "media/youtube.png"} alt="insta" /></Link>
                    </div>    
                </div>
            </div>

            <div id="partenaire">
                <p>Notre partenaire:&nbsp;&nbsp;</p>
                <Link to="#"><img id="part" src={process.env.PUBLIC_URL + "media/part.jpg"} alt="part" /></Link>
            </div>   
        </footer>        

    )
}

export default Footer

