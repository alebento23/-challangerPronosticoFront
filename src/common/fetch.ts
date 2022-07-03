import { iClima, iLocation } from "./interfaces";

const urlIpInfo = "http://ip-api.com/json/";
const urlApiBack = "http://localhost:5000/v1/";
const currentPath = "current/";

export const getLocation = async () => {
    let location: {
        code: number;
        message: string;
        data?: iLocation;
    } = {
        code: 404,
        message: "Error de Ubicacion"
    };
    try {
        let infoLocation = await fetch(urlIpInfo);
        let data = (await infoLocation.json()) as iLocation;
        return {
            code: 200,
            message: "location",
            data: data
        };
    } catch (error) {
        console.log("error location", error);
        location = {
            code: 404,
            message: "Error de Ubicacion"
        };
        return location;
    }
};

export const getCurrentWeater = async (city: string) => {
    let url = `${urlApiBack}${currentPath}`;
    let location: {
        code: number;
        message: string;
        data?: iClima;
    } = {
        code: 404,
        message: "Error de Ubicacion"
    };
    try {
        let infoWeater = await fetch(`${url}${city}`);
        let data = (await infoWeater.json()) as iClima;
        return {
            code: 200,
            message: "clima actual",
            data: data
        };
    } catch (error) {
        console.log("clima actual", error);
        location = {
            code: 404,
            message: "Error Clima actual"
        };
        return location;
    }
};
