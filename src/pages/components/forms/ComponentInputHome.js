import InputSelect from "./InputSelect";
import InputDateTime from "./InputDateTime";
import TitleBgBlack from "../titles/TitleBgBlack";

export const ComponentInputHome = () => {
    const title = {span: "a melhor experiência de luxo de aluguel de carros", title: "faça já sua reserva"};
    return (
        <>
            <article className="bg-input-home">
                <div className="container">
                    <TitleBgBlack {...title}/>
                    <div className="form form-home">
                        <InputSelect/>
                        <InputDateTime/>
                        <input type="submit" className="botao" value="CONSULTAR"/>
                    </div>
                </div>
            </article>
        </>
    )
};