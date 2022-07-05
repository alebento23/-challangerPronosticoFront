import { iDays, iPronostico } from "../common/interfaces";
import DaysPronostico from "./cards/daysPronostico";

interface Props {
    data: iPronostico;
}

const ClimaExtend = (props: Props) => {
    const { data } = props;

    return (
        <div key={`Extend`}>
            <div className="col-md-12 mt-3 ms-2" style={{ textAlign: "left" }}>
                <h5>Clima extendido para: {data.city.name}</h5>
            </div>
            <div className="">
                {data && data.list.length > 0 && getDays(data.list)}
            </div>
        </div>
    );

    function getDays(list: iDays[]) {
        let elements: JSX.Element[] = [];

        for (let i = 0; i < list.length; i++) {
            const days = list[i];
            elements.push(
                <DaysPronostico key={`DaysPronostic${i}`} days={days} />
            );
        }

        return elements;
    }
};

export default ClimaExtend;
