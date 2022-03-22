import ListCategory from "./cards/ListCategory";
import TitleBgWhite from "./titles/TitleBgWhite";
import CityFilter from "./../components/CityFilter"

function Categoria() {
    const title = {span: "As suas novas emoções começam aqui", title: "categorias"}
    return (
        <article className="carros-lista">
            <div className="container">
                <TitleBgWhite {...title}/>
                <ul>
                    <ListCategory/>
                    
                </ul>
            </div>
        </article>
    )
}

export default Categoria;