import React from "react";
import DataArea from "../DataArea/index.js";
import "./Main.css";

function Main (){
    return (
        <>
           <div className="header">
            <h1>Employee Directory</h1>
            <p>Click on each heading to filter or use the search box to narrow your results</p>
        </div>
        <DataArea />
        </>
    );
};

export default Main;