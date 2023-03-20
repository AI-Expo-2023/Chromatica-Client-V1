import React, { useEffect, useState } from "react"
import * as _ from "./style"

type mainPropsType ={
    onChange: any;
    value: number;
    min: number;
    max: number;
    step?: number;
    width?: string;
    label: string;
}

function Range({onChange, value, min, max, step=1, width="100%", label}:mainPropsType){
    const [thumbPos, setThumbPos] = useState((value-min)/(max-min));
    useEffect(()=>{
        setThumbPos((value-min)/(max-min));
    },[value]);

    return(
        <div>
            <_.spaceBetween>
                <p>{label}</p>
                <p>{value}</p>
            </_.spaceBetween>
            <_.inputRange onChange={onChange} type="range" value={value} min={min} max={max} step={step} cssThumbPos={thumbPos} />
        </div>
    )
}

export default Range;