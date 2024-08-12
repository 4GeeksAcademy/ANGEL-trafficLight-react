import React from "react";

export default function Main({children}){
    return(
        <div className="traffic-light-panel">
            <section className="section">
                {children}
            </section>
        </div>
    )
}