import { iClima } from "../common/interfaces";

interface Props {
    data: iClima;
}

const ClimaActual = (props: Props) => {
    const { data } = props;

    console.log(data);

    return (
        <div className="row mt-3 ml-3">
            <div className="col-md-12  mt-3" style={{ textAlign: "left" }}>
                <h5>Clima actual para la ciudad: {data.name}</h5>
            </div>
        </div>
    );
};

export default ClimaActual;
