import React from "react";
import { urlIcon } from "../../common/fetch";
import { iClima } from "../../common/interfaces";

interface Props {
    clima: iClima;
}

const CardClima = (props: Props) => {
    const { clima } = props;
    console.log(clima);
    let urlIcono = `${urlIcon}${clima.weather[0].icon}.png`;

    return (
        <div style={{ marginLeft: "15%" }}>
            <div
                className="card border-primary mb-3"
                style={{ maxWidth: "23rem" }}
            >
                <div className="card-header">{clima.name}</div>
                <div className="card-body text-primary">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={urlIcono} alt="icon" />
                        </div>
                        <div className="col-md-6 text-start">
                            <h5 className="card-title">
                                {clima.weather[0].description}
                            </h5>
                            <p className="card-text">
                                Temperatura
                                <div className="ms-3">
                                    Actual: {clima.main.temp + `°`} <br />
                                    Max.: {clima.main.temp_max + `°`} <br />
                                    Min.: {clima.main.temp_min + `°`} <br />
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardClima;
