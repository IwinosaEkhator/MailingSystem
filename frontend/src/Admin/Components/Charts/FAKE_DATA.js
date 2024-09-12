export const lineChartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Inbound",
      data: [50, 100, 20, 40, 10, 60, 90, 100, 70, 30, 0, 80],
      borderColor: "#6BCB77",
      backgroundColor: "#6bcb7842",
      borderWidth: 2,
      tension: "0.5",
    },
    {
      label: "Outbound",
      data: [40, 90, 10, 30, 40, 50, 80, 90, 60, 20, 30, 70],
      borderColor: "#FF6B6B",
      backgroundColor: "#ff6b6b48",
      borderWidth: 2,
      tension: "0.5",
    },
  ],
};

export const pieChartData = {
  type: "doughnut",
  labels: ["Pending", "Approved", "Declined"],
  datasets: [
    {
      type: "doughnut",
      label: "Requests",
      data: [500, 100, 60],
      backgroundColor: ["#FFD93D", "#6BCB77", "#FF6B6B"],
      hoverOffset: 4,
    },
  ],
};
