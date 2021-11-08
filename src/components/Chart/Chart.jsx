import "./Chart.css";
import CharBar from "./ChartBar";

const Chart = (props) => {
  const dataPointvalues = props.dataPoints.map((dataPoint) => dataPoint.value); // we are transform from Object to Number
  const totalMaximum = Math.max(...dataPointvalues); // since dataPointvalues is an array, we are using spread operator, to pull out all the array elements and add them as standalone arguments to max() method

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <CharBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxvalue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
