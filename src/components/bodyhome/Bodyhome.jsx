import React from 'react'
import './bodyhome.css'
import { Link } from 'react-router-dom'

function Bodyhome() {
    return (
        <>
            <section id="principale">

                <div id="grandPhoto">
                    <img id="photo" src={process.env.PUBLIC_URL + "./media/moulin.png"} alt="logo" /> 
                    <h1 id="GrandTexte">
                        Le Gîte du Moulin
                    </h1>   
                </div>

                <article>
                    <div id="text1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend lorem justo. Duis mollis ligula laoreet est eleifend cursus. Proin scelerisque ex lectus, eu tincidunt dolor dapibus quis. Maecenas luctus odio eu lectus fermentum ornare. Ut consectetur lorem a leo dictum, vel feugiat nisi iaculis. Mauris fringilla dui a nunc pulvinar, a dapibus felis dictum. Vestibulum odio ligula, porta quis ipsum eu, facilisis malesuada dolor. Nulla mattis a augue eget tincidunt. Duis rutrum finibus massa vel dictum. Praesent pharetra viverra laoreet. Aliquam ante tellus, iaculis fermentum purus quis, faucibus tincidunt eros. Ut malesuada dui et odio congue, vel eleifend lectus feugiat. Proin a pharetra lectus, a tempor tortor.
                    </div>
                </article>

                {/*<!--carrousel-->*/}
                <section>
                    <div id="carrousel">
                        <div class="contImageCar">
                            <img id="image_gauche" src={process.env.PUBLIC_URL + "./media/studio.png"} alt="image_gauche" />
                        </div>

                        <button id="gauche" class="direction">
                            <img id="leftBouton" src={process.env.PUBLIC_URL + "./media/bouton.png"} alt="Bouton_gauche" />
                        </button>

                        <div class="contImageCar">
                            <Link to="#">
                                <img id="image_centre" class="imageCar" src={process.env.PUBLIC_URL + "./media/gite.jpg"} alt="image_centrale" />
                            </Link>
                            <Link to="#" id="intitul">Hébergement classique: Le Gîte</Link>
                        </div>

                        <button id="droite" class="direction">
                            <img id="rightBouton" src={process.env.PUBLIC_URL + "./media/bouton.png"} alt="Bouton_droit" />
                        </button>

                        <div class="contImageCar">
                            <img id="image_droite" src={process.env.PUBLIC_URL + "./media/kota.jpg"} alt="image_droit" />
                        </div>
                    </div>    
                </section>
                {/*<!--fin carrousel-->*/}

                <article>
                    <div id="conteneurArticle1">
                        <div id="conteneurAside11">
                            <aside>
                                <p>
                                    Notre aire de camping car it amet, consectetur adipiscing elit. Vivamus eleifend lorem justo. Duis mollis ligula laoreet est eleifend cursus. Proin scelerisque ex lectus, eu tincidunt dolor dapibus quis. Maecenas luctus odio eu lectus fermentum ornare. Ut consectetur lorem a leo dictum, vel feugiat nisi iaculis. Mauris fringilla dui a nunc pulvinar, a dapibus felis dictum. Vestibulum odio ligula, porta quis ipsum eu. Duis mollis ligula laoreet est eleifend cursus. Proin scelerisque ex lectus, eu tincidunt dolor dapibus quis. Maecenas luctus odio eu lectus fermentum ornare.
                                </p>
                            </aside>

                            <button id="reservCc">
                                <p>RESERVER</p>
                            </button>
                        </div>

                        <div id="conteneurAside12">
                            <aside>
                                <p>
                                    Notre aire de camping car
                                </p>
                                <div>
                                    <img id="photo2" src={process.env.PUBLIC_URL + "./media/airecc.png"} alt="image_airecc" />
                                </div>
                            </aside>
                        </div>

                    </div>
                </article>

                <article>
                    <div id="conteneurArticle2">
                        <div id="conteneurAside21">
                            <aside>
                                <p>
                                    Notre service hostellerie
                                </p>
                                <div>
                                    <img id="photo3" src={process.env.PUBLIC_URL + "./media/kotagrill.jpg"} alt="image_kotagrill" />
                                </div>
                            </aside>
                        </div>

                        <div id="conteneurAside22">
                            <aside>
                                <p>
                                    Notre hostellerie it amet, consectetur adipiscing elit. Vivamus eleifend lorem justo. Duis mollis ligula laoreet est eleifend cursus. Proin scelerisque ex lectus, eu tincidunt dolor dapibus quis. Maecenas luctus odio eu lectus fermentum ornare. Ut consectetur lorem a leo dictum, vel feugiat nisi iaculis. Mauris fringilla dui a nunc pulvinar, a dapibus felis dictum. Vestibulum odio ligula, porta quis ipsum eu. Duis mollis ligula laoreet est eleifend cursus. Proin scelerisque ex lectus, eu tincidunt dolor dapibus quis. Maecenas luctus odio eu lectus fermentum ornare.
                                </p>
                            </aside>
                            <button id="reservKg">
                                <p>RESERVER</p>
                            </button>
                        </div>
                    </div>
                </article>

                <article>
                    <div id="conteneurArticle3">

                        <div id="conteneurAside31">
                            <aside>
                                <p>
                                    A découvrir dans les environs car it amet, consectetur adipiscing elit. Vivamus eleifend lorem justo. Duis mollis ligula laoreet est eleifend cursus. Proin scelerisque ex lectus, eu tincidunt dolor dapibus quis. Maecenas luctus odio eu lectus fermentum ornare. Ut consectetur lorem a leo dictum, vel feugiat nisi iaculis. Mauris fringilla dui a nunc pulvinar, a dapibus felis dictum. Vestibulum odio ligula, porta quis ipsum eu. Duis mollis ligula laoreet est eleifend cursus. Proin scelerisque ex lectus, eu tincidunt dolor dapibus quis. Maecenas luctus odio eu lectus fermentum ornare.
                                </p>
                            </aside>
                        </div>

                        <div id="conteneurAside32">
                            <aside>
                                <p>
                                    A découvrir
                                </p>
                                <div>
                                    <img id="photo4" src={process.env.PUBLIC_URL + "./media/ndl.png"} alt="image_decouv" />
                                </div>
                            </aside>
                        </div>

                    </div>
                </article>

                <article>
                    <div id="conteneurArticle4">

                        <div id="conteneurAside41">
                            <aside>
                                <p>
                                    Nos extérieurs
                                </p>
                                <div>
                                    <img id="photo5" src={process.env.PUBLIC_URL + "./media/exterieur.jpg"} alt="image_ext" />
                                </div>
                            </aside>
                        </div>

                        <div id="conteneurAside42">
                            <aside>
                                <p>
                                    Nos extérieurs it amet, consectetur adipiscing elit. Vivamus eleifend lorem justo. Duis mollis ligula laoreet est eleifend cursus. Proin scelerisque ex lectus, eu tincidunt dolor dapibus quis. Maecenas luctus odio eu lectus fermentum ornare. Ut consectetur lorem a leo dictum, vel feugiat nisi iaculis. Mauris fringilla dui a nunc pulvinar, a dapibus felis dictum. Vestibulum odio ligula, porta quis ipsum eu. Duis mollis ligula laoreet est eleifend cursus. Proin scelerisque ex lectus, eu tincidunt dolor dapibus quis. Maecenas luctus odio eu lectus fermentum ornare.
                                </p>
                            </aside>
                        </div>

                    </div>
                </article>
            </section>       
            
        </>
    )
}

export default Bodyhome