import React, {useEffect, useState} from "react";

export const AnalogClock: React.FC = () => {
    const [dateTime, setDateTime] = useState<Date>(new Date())
    
    useEffect(() => {
        setInterval(() => setDateTime(new Date()), 1000)
    }, [])
    
    return <span>
        {dateTime.toLocaleString()}
    </span>
}