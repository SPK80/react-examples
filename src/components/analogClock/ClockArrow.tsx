import React from "react";

type ClockArrowPropsType = {
    width: number
    length: number
    angleDeg: number
    clockWidth: number
    color: string
}
export const ClockArrow: React.FC<ClockArrowPropsType> = (props) => {
    const transform: string = `translate(${props.clockWidth - props.width / 2}px, ${props.clockWidth - props.length}px)
                                rotate(${props.angleDeg}deg)`
    return (<>
            <div style={{
                position: 'absolute',
                backgroundColor: props.color,
                width: props.width,
                height: props.length,
                transformOrigin: 'bottom',
                transform: transform,
                transition: "transform  0.5s"
            }}></div>
        </>
    )
}