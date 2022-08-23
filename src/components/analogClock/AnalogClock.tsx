import React, {useEffect, useState} from "react";
import {ClockArrow} from "./ClockArrow";

export const AnalogClock: React.FC = () => {
    const [dateTime, setDateTime] = useState<Date>(new Date())
    
    useEffect(() => {
        const timerId = setInterval(() => setDateTime(new Date()), 1000)
        return () => clearInterval(timerId)
    }, [])
    
    const seconds = dateTime.getSeconds()
    const minutes = dateTime.getMinutes()
    const hours = dateTime.getHours()
    console.log(hours + ':' + minutes + ':' + seconds)
    
    return (
        <div style={{
            position: 'relative',
            width: 200,
            height: 200,
            border: 'solid 1px aqua',
            borderRadius: '50%',
        }}>
            <ClockArrow
                clockWidth={100}
                color={'red'}
                width={6}
                length={70}
                angleDeg={hours * 15}
            />
            <ClockArrow
                clockWidth={100}
                color={'blue'}
                width={5}
                length={90}
                angleDeg={minutes * 6}
            />
            <ClockArrow
                clockWidth={100}
                color={'lightgreen'}
                width={2}
                length={100}
                angleDeg={seconds * 6}
            />
        </div>
    )
}