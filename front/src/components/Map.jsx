import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];

const options = {
  colorAxis: { colors: ["white", "orange"] },
  backgroundColor: "white",
  datalessRegionColor: "#f8bbd0ff",
  defaultColor: "#f5f5f5",
};

function Map() {
  return (
    <>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="900px"
        height="500px"
        data={data}
        options={options}
      />
    </>
  );
}

export default Map;
