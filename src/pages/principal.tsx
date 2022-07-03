import React from "react";
import FiltroBuscar from "../components/filtroBuscar";

const Principal = () => {
    return (
        <div className="container-lg">
            <h1 className="display-6" style={{ color: "white" }}>
                <strong>Pronóstico del tiempo</strong>
            </h1>
            <FiltroBuscar />
        </div>
    );
};

export default Principal;
