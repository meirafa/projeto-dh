import TitleBgWhite from "./titles/TitleBgWhite";

function Marca() {
    const title = {span: "luxo e personalidade", title: "marcas"}
    return (
        <article className="parceiros">
            <div className="container">
                <TitleBgWhite {...title}/>
                <ul>
                    <li><img src="/img/parceiros/audi.svg" alt="Audi"/></li>
                    <li><img src="/img/parceiros/tesla.svg" alt="Tesla"/></li>
                    <li><img src="/img/parceiros/bmw.svg" alt="BMW"/></li>
                    <li><img src="/img/parceiros/dodge.svg" alt="Dodge"/></li>
                    <li><img src="/img/parceiros/ford.svg" alt="Ford"/></li>
                    <li><img src="/img/parceiros/gmc.svg" alt="GMC"/></li>
                    <li><img src="/img/parceiros/jeep.svg" alt="Jeep"/></li>
                    <li><img src="/img/parceiros/porsche.svg" alt="Porsche"/></li>
                </ul>
            </div>
        </article>
    )
}

export default Marca;