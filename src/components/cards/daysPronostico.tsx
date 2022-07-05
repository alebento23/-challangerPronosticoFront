import React from "react";
import { iDays, iDia } from "../../common/interfaces";
import DayPronostico from "./dayPronostico";

interface Prop {
    days: iDays;
}

const DaysPronostico = (props: Prop) => {
    const { days } = props;
    const { dayString, data } = days;

    return (
        <div className="row">
            <div>
                <h5 className="card-title text-primary text-start">
                    {dayString}
                </h5>
            </div>
            {data && data.length > 0 && getDay(data)}
        </div>
    );

    function getDay(dayList: iDia[]) {
        let elements: JSX.Element[] = [];

        for (let i = 0; i < dayList.length; i++) {
            const day = dayList[i];

            elements.push(<DayPronostico key={`Days${i}`} day={day} />);
        }

        return elements;
    }
};

export default DaysPronostico;
