import React from "react";
import { urlIcon } from "../../common/fetch";
import { iDia } from "../../common/interfaces";

interface Prop {
    day: iDia;
}

const DayPronostico = (props: Prop) => {
    const { day } = props;

    let hora = new Date(day.dt_txt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });
    let urlIcono = `${urlIcon}${day.weather[0].icon}.png`;

    return (
        <div className="col" key={day.dt}>
            <div
                className="card border-primary mb-3"
                style={{ maxWidth: "18rem" }}
            >
                <div className="card-header">{hora}</div>
                <div className="card-body text-primary">
                    <div className="row">
                        <div className="">
                            <img src={urlIcono} alt="icon" />
                        </div>
                        <div className="text-center">
                            <h5
                                className="card-title"
                                style={{ minHeight: "3rem" }}
                            >
                                {day.weather[0].description}
                            </h5>
                            <div className="card-text text-center">
                                <p className="text-start">Temperatura</p>
                                <p className="ms-2  text-center">
                                    Actual: {day.main.temp + `°`} <br />
                                    Max.: {day.main.temp_max + `°`} <br />
                                    Min.: {day.main.temp_min + `°`} <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DayPronostico;
