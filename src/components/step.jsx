import React from "react";

const Step = (props) => {
    //create two style options
    //apperantly style is an object - {}
    const visited = {
        backgroundColor : "green",
        borderRadius: "50%",
        padding: "10px"
    };
    const notYet = {
        backgroundColor : "gray",
        borderRadius: "50%",
        padding: "10px"
    };
    let buttonStyle = (props.number <= props.currentStep) ? visited : notYet;
    return(
        <button style={buttonStyle}>{props.number}</button>
    )
}

export default Step