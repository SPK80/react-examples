import React, {useEffect, useState} from "react";
import {ClockArrow} from "./ClockArrow";

type AnalogClockPropsType = {
    size?: number
}

export const AnalogClock: React.FC<AnalogClockPropsType> = (props) => {
    const [dateTime, setDateTime] = useState<Date>(new Date())
    
    useEffect(() => {
        const timerId = setInterval(() => setDateTime(new Date()), 1000)
        return () => clearInterval(timerId)
    }, [])
    
    const size = props.size ?? 200
    const radius = size / 2
    
    const seconds = dateTime.getSeconds()
    const minutes = dateTime.getMinutes()
    const hours = dateTime.getHours()
    // console.log(hours + ':' + minutes + ':' + seconds)
    
    return (
        <div style={{
            position: 'relative',
            width: size,
            height: size,
            borderRadius: '50%',
            backgroundColor: '#ffa600',
            boxShadow: 'inset 0px 0px 5px 2px #7cfc00',
        }}>
            <ClockArrow
                clockRadius={radius}
                color={'red'}
                width={6}
                length={radius * 0.7}
                angleDeg={hours * 15}
            />
            <ClockArrow
                clockRadius={radius}
                color={'blue'}
                width={5}
                length={radius * 0.9}
                angleDeg={minutes * 6}
            />
            <ClockArrow
                clockRadius={size / 2}
                color={'lightgreen'}
                width={2}
                length={radius}
                angleDeg={seconds * 6}
            />
            <div style={{
                position: 'absolute',
                backgroundColor: 'yellow',
                boxShadow: '1px 1px 3px 0 rgba(0,0,0,0.5)',
                borderRadius: '50%',
                width: 10,
                height: 10,
                transformOrigin: 'bottom',
                transform: `translate(${radius - 5}px, ${radius - 5}px)`,
            }}></div>
        </div>
    )
}