import React from "react";
import Step from "./step";

const StepsWizard = (props) => {
    return(
        props.arr.map((x) => <Step number={x}/>)
    )
}

export default StepsWizard