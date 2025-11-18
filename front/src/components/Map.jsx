import { Chart } from "react-google-charts";
import { useContext } from "react";
import { AppContext } from "./App";

const options = {
  colorAxis: { colors: ["white", "orange"] },
  backgroundColor: "white",
  datalessRegionColor: "#f8bbd0ff",
  defaultColor: "#f5f5f5",
  //displayMode: "text",
  legend: {
    position: "none",
  },
};

function Map() {
  const { visitData, setSelectedCountry, setDisplay } = useContext(AppContext);

  const mapData = visitData
    .filter((data) => data.is_visited === true)
    .map((data) => [
      data.country_name,
      Math.floor(
        (new Date(data.visit_date).getTime() - new Date().getTime()) /
          1000 /
          60 /
          60 /
          24 /
          365
      ),
    ]);
  mapData.unshift(["Country", "years ago"]);

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
              const region = mapData[selection[0].row + 1];
              setSelectedCountry(region[0]);
              setDisplay("detail");
            },
          },
        ]}
        chartType="GeoChart"
        width="800px"
        data={mapData}
        options={options}
      />
    </>
  );
}

export default Map;
