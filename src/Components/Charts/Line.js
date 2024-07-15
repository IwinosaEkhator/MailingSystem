import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import { lineChartData } from "./FAKE_DATA";

ChartJS.register(
    CategoryScale, LinearScale, BarElement, Tooltip, Legend 
)

const LineGraph = () => {

    const options = {
        
    }

    return (
            <Bar options={options} data={lineChartData}/>
    );
}

export default LineGraph;