import {Link} from "react-router-dom";
import React from "react";

export const ModalSuccess = ({text}) => {
    return (
        <main id="res-conc-main">
            <div className="container res-concluida">
                <div className="res-modal">
                    <div className="title-seta">
                        <Link to="/">
                            <svg height="2.8em" width="2.8em" viewBox="0 0 2 1" preserveAspectRatio="none">
                                <polyline
                                    fill="none"
                                    stroke="#000000"
                                    strokeWidth="0.1"
                                    points="0.9,0.1 0.1,0.5 0.9,0.9"
                                />
                            </svg>
                            <p>Voltar pra Home</p>
                        </Link>
                    </div>
                    <img width="200px" src="/img/icones/vintage-car.svg" alt="icon local"/>
                    <h2>{text}</h2>
                </div>
            </div>

        </main>
    )
};