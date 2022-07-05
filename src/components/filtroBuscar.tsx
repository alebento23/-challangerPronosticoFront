import React, { useEffect, useState } from "react";
import { getCurrentWeater, getForecast, getLocation } from "../common/fetch";
import { iClima, iPronostico } from "../common/interfaces";
import ClimaActual from "./climaActual";
import ClimaExtend from "./climaExtend";
import Spin from "./spin";

const FiltroBuscar = () => {
    const [cargando, setCargando] = useState(false);
    const [city, setCity] = useState<string | undefined>(undefined);
    const [inputCity, setInputCity] = useState<string>("");
    const [climaActual, setClimaActual] = useState<iClima>();
    const [pronostico, setPronostico] = useState<iPronostico>();
    const [status, setStatus] = useState<
        { code: number; message: string } | undefined
    >();

    useEffect(() => {
        setCargando(true);
        setCity(undefined);
        getLocation().then((location) => {
            if (location && location.data) {
                const { data } = location;
                data && data.city && setInputCity(data.city);
                getCurrentWeater(data.city).then((clima) => {
                    if (clima && clima.data) {
                        setClimaActual(clima.data);
                        setStatus({ code: 200, message: "" });
                    }

                    if (clima.code === 404) {
                        setStatus(clima);
                        setClimaActual(undefined);
                    }
                });
            }
            setCargando(false);
        });
    }, []);

    useEffect(() => {
        setCargando(true);

        city &&
            getForecast(city).then((pronostico) => {
                if (pronostico && pronostico.data) {
                    setStatus({ code: 200, message: "" });
                    setPronostico(pronostico.data);
                }

                if (pronostico.code === 404) {
                    setStatus(pronostico);
                    setPronostico(undefined);
                }

                setCargando(false);
            });
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
                        <div className="row">
                            <div className="col-md-5 mt-1">
                                <p className="text-muted">Ingresar ciudad:</p>
                            </div>
                            <div className="col-md-7">
                                <input
                                    className="form-control"
                                    type={"text"}
                                    value={inputCity}
                                    onChange={(e) =>
                                        setInputCity(e.target.value)
                                    }
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 text-start">
                        <button type="submit" className="btn btn-primary">
                            Buscar
                        </button>
                    </div>
                </div>
                <div>
                    <p className="font-monospace text-start">
                        Presione Buscar para cargar el pronóstico extendido
                    </p>
                </div>
            </form>
            {status && status?.code === 200 && (
                <div
                    className="row mt-3 ml-3"
                    style={{
                        backgroundColor: "white",
                        minHeight: "200px",
                        borderRadius: "3px"
                    }}
                >
                    {cargando === true && (
                        <div className="mt-3">
                            <Spin />
                        </div>
                    )}
                    {cargando === false && climaActual && (
                        <ClimaActual data={climaActual} />
                    )}
                    {cargando === false && pronostico && (
                        <ClimaExtend data={pronostico}></ClimaExtend>
                    )}
                </div>
            )}
            {cargando === false && status?.code === 404 && (
                <div className="mt-3 alert alert-danger">{status.message}</div>
            )}
        </div>
    );
};

export default FiltroBuscar;
