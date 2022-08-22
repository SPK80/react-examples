import React, {useEffect, useState} from "react";
import s from './analogClock.module.css'

export const AnalogClock: React.FC = () => {
    const [dateTime, setDateTime] = useState<Date>(new Date())
    
    useEffect(() => {
        const timerId= setInterval(() => setDateTime(new Date()), 1000)
        return ()=> {
            clearInterval(timerId)
        }
    }, [])
    
    return <div className={s.analogClock}>
        {dateTime.toLocaleString()}
    </div>
}