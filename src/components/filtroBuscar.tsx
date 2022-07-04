import React, { useEffect, useState } from "react";
import { getCurrentWeater, getLocation } from "../common/fetch";
import { iClima } from "../common/interfaces";
import ClimaActual from "./climaActual";

const FiltroBuscar = () => {
    const [city, setCity] = useState<string | undefined>("");
    const [inputCity, setInputCity] = useState<string>("");
    const [climaActual, setClimaActual] = useState<iClima>();

    useEffect(() => {
        getLocation().then((location) => {
            if (location && location.data) {
                const { data } = location;
                data && data.city && setInputCity(data.city);
                getCurrentWeater(data.city).then((clima) => {
                    clima && clima.data && setClimaActual(clima.data);
                });
            }
        });
    }, []);

    useEffect(() => {
        console.log("city", city);
    }, [city]);

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        setClimaActual(undefined);
        setCity(inputCity);
    };

    return (
        <div className="mt-3">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-3">
                        <input
                            className="form-control"
                            type={"text"}
                            //  defaultValue={""}
                            value={inputCity}
                            onChange={(e) => setInputCity(e.target.value)}
                        ></input>
                    </div>
                    <div className="col-md-2">
                        <button
                            type="submit"
                            className="btn btn-primary" //onClick={onBuscar}>
                        >
                            Buscar
                        </button>
                    </div>
                </div>
            </form>
            <div
                className="row mt-3 ml-3"
                style={{
                    backgroundColor: "white",
                    minHeight: "200px",
                    borderRadius: "3px"
                }}
            >
                {climaActual && <ClimaActual data={climaActual} />}
            </div>
        </div>
    );
};

export default FiltroBuscar;
