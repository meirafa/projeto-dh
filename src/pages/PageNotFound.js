import {Link} from "react-router-dom";
import React from "react";

const PageNotFound = () => {
    return (
        <>
            <section className="notfound">
                <div>
                    <Link to="/">
                        <svg height="0.8em" width="0.8em" viewBox="0 0 2 1" preserveAspectRatio="none">
                            <polyline
                                fill="none"
                                stroke="#777777"
                                stroke-width="0.1"
                                points="0.9,0.1 0.1,0.5 0.9,0.9"
                            />
                        </svg>
                        Voltar para página inicial
                    </Link>
                    <div className="background-wrapper">
                        <h1 id="visual">Ops..</h1>
                        <p id="visual" className="font-h3">A página que está procurando não existe.</p>
                    </div>
                </div>
            </section>
        </>
    )
};


export default PageNotFound;