import ReactApexChart from "react-apexcharts";

export const Chart = ({ values }) => {
  const initial = {
    series: [
      {
        name: "Ganancias a tope",
        data: values || [],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },

      title: {
        text: "A tope",
        align: "left",
      },
      subtitle: {
        text: "Vamos hp!!",
        align: "left",
      },
      labels: values,
      xaxis: {
        type: "string",
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={initial.options}
        series={initial.series}
        type="area"
        height={350}
      />
    </div>
  );
};
