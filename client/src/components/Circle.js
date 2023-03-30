import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./Circle.css";

function Circle() {
    const [currCol, setCurrCol] = useState("#DF2E38");

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
        }, 500); // Poll every 1 second

        return () => clearInterval(interval);
    }, []);
const fetchData = async () => {
    try {
        const response = await fetch("http://localhost:5005/currColor");
        const json = await response.json();
        console.log(json,"JSON");
        setCurrCol(json.currColor);
        console.log(currCol);
    } catch (error) {
        console.error(error);
    }
};


return (
    <div className="container">
         <div className="inside" style={{backgroundColor: currCol}}>
          <h1>AI Assingment 5 </h1>
        </div>
        </div>
    );
}

export default Circle;