import InputSelect from "./InputSelect";
import InputDateTime from "./InputDateTime";
import TitleBgBlack from "../titles/TitleBgBlack";
import {useNavigate, useParams} from "react-router";
import {useUser} from "../../context/UserContext";

export const ComponentInputHome = () => {
    const navigate = useNavigate();
    const {scheduleLocal} = useUser();

    const {category = 'all'} = useParams();

    function redirect() {
        navigate(`/categorias/${category}/${scheduleLocal}`);
    }

    const title = {span: "a melhor experiência de luxo de aluguel de carros", title: "faça já sua reserva"};
    return (
        <>
            <article className="bg-input-home">
                <div className="container">
                    <TitleBgBlack {...title}/>
                    <div className="form form-home">
                        <InputSelect/>
                        <InputDateTime/>
                        <input type="submit" className="botao" value="CONSULTAR" onClick={redirect}/>
                    </div>
                </div>
            </article>
        </>
    )
};