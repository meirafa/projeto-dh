import InputReservation from "./forms/InputReservation";
import { Link } from "react-router-dom";

const Reservation = () => {


    return (
        <>
        
        <div className="reserve-box  ">
                    <div className="reserve-cal">
                        <InputReservation />
                    </div>

                    <div className="reserve-btn">
                        <p>Faça já sua reserva</p>
                        <button className="botao">Reservar</button>
                    </div>

                    <span className="termos-link"><Link to="/termos">Nossos Termos</Link></span>
                </div>
        </>
    )

}

export default Reservation;