import React from "react";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { pieChartData } from "./FAKE_DATA";

ChartJS.register(
    ArcElement, Tooltip, Legend 
);

const PieGraph = () => {

    const options = {
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                const value = pieChartData.datasets[0].data[tooltipItem.dataIndex];
                return `${pieChartData.labels[tooltipItem.dataIndex]}: ${value}`;
              },
            },
          },
          datalabels: {
            formatter: (value, context) => {
              return value;
            },
            color: '#fff',
          },
        },
      };
    return (
        <>
            <Pie options={options} data={pieChartData} />
        </>
    );
};

export default PieGraph;