import React from "react";

export default function Light({onclick,colorClass, isSelected}){
    return(
        <div className="light-container">
            <span className={"light " + colorClass + (isSelected ? " selected": "")} onClick={onclick}></span>
        </div>
    )
}