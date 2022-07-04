import React from "react";
import "./App.css";
import Principal from "./pages/principal";

function App() {
    return (
        <div
            className="App"
            style={{
                background:
                    "linear-gradient(to right bottom, rgb(182 203 241) 20%, rgb(58 66 104) 93%)",
                minHeight: "800px"
            }}
        >
            <Principal></Principal>
        </div>
    );
}

export default App;
