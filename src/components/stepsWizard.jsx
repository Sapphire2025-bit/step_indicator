import React from "react";
import { useState } from 'react';
import Step from "./step";

const StepsWizard = (props) => {
    const [currentStep, setCurrentStep] = useState(1);
    let allSteps = props.arr.map((x) => <Step number={x} currentStep={currentStep}/>);

    function RemoveFromIndex()
    {
        if(currentStep > props.arr[0])
            setCurrentStep(currentStep - 1);
    }

    function AddToIndex()
    {
        if(currentStep < props.arr[props.arr.length-1])
            setCurrentStep(currentStep + 1);
    }

    const styleForSteps = {
        display: "flex",
        justifyContent: "space-around"
    }

    return(
        <div>
            <button onClick={RemoveFromIndex} disabled={currentStep <= 1}>Prev</button>
            <button onClick={AddToIndex} disabled={currentStep >= props.arr[props.arr.length-1]}>Next</button>
            <br/>
            <div style={styleForSteps}>{allSteps}</div>
        </div>
    )
}

export default StepsWizard