import { iClima } from "../common/interfaces";
import CardClima from "./cards/cardClima";

interface Props {
    data: iClima;
}

const ClimaActual = (props: Props) => {
    const { data } = props;

    return (
        <div>
            <div className="col-md-12 mt-3 ms-2" style={{ textAlign: "left" }}>
                <h5>Clima actual para la ciudad:</h5>
            </div>
            <div className="">
                <CardClima clima={data} />
            </div>
        </div>
    );
};

export default ClimaActual;
