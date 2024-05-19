import { convertDate } from "./convertDate";
export const settingChartData = (setChartData, prices1, prices2) => {
  //setting chart data
  if (prices2 !==false || prices2.length > 0) {
    setChartData({
      //x values
      labels: prices1.map((item) =>  convertDate(item[0])),
      datasets: [
        {
          //y left values
          label:"crypto1",
          data: prices1.map((item) => item[1]),
          borderColor: "#3a80e9",
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          backgroundColor: "rgba(58, 128, 233, 0.1)",
          pointRadius: 0,
          yAxisID: 'crypto1'
        },
        {
          //y right values
          label:"crypto2",
          data: prices2.map((item) => item[1]),
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          borderColor: "#61c96f",
          pointRadius: 0,
          yAxisID: 'crypto2'
        },
      ],
    });
  }else{
    setChartData({
      //x values
      labels: prices1.map((item) => convertDate(item[0])),
      datasets: [
        {
          //y values
          label:"crypto1",
          data: prices1.map((item) => item[1]),
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          borderColor: "#3a80e9",
          backgroundColor: "rgba(58, 128, 233, 0.1)",
          pointRadius: 0,
          yAxisID: 'crypto1'
        },
      ],
    });
  }
};
