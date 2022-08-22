import React, {useEffect, useState} from "react";

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
            <div style={{
                position: 'absolute',
                backgroundColor: 'lightgreen',
                width: 5,
                height: 100,
                transformOrigin: 'bottom',
                transform: `translateX(100px) rotate(${seconds * 6}deg)`,
            }}></div>
            <div style={{
                position: 'absolute',
                backgroundColor: 'red',
                width: 5,
                height: 70,
                transformOrigin: 'bottom',
                transform: `translate(100px, 30px) rotate(${hours * 30}deg)`,
            }}></div>
        </div>
    )
}