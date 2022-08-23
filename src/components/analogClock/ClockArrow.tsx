import React from "react";

type ClockArrowPropsType = {
    width: number
    length: number
    angleDeg: number
    clockWidth: number
    color: string
}
export const ClockArrow: React.FC<ClockArrowPropsType> = (props) =>
    <div style={{
        position: 'absolute',
        backgroundColor: props.color,
        boxShadow: '1px 1px 3px 0 rgba(0,0,0,0.5)',
        borderRadius: props.width / 2,
        width: props.width,
        height: props.length,
        transformOrigin: 'bottom',
        transform: `translate(${props.clockWidth - props.width / 2}px, ${props.clockWidth - props.length}px)
                    rotate(${props.angleDeg}deg)`,
        // transition: "transform  0.8s"
    }}></div>