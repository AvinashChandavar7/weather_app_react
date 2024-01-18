/* eslint-disable react/prop-types */
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { formatTimestampTo12Hour } from '../utils/helper';


export default function MyLine({ forecastData }) {

  const numDataPointsToShow = 6;

  const hourlyTempData = forecastData?.hourly?.slice(0, numDataPointsToShow).map((hourData) => hourData.temp) || [];
  const xLabels = forecastData?.hourly?.slice(0, numDataPointsToShow).map((hourData) => formatTimestampTo12Hour(hourData.dt)) || [];

  return (
    <ChartContainer
      styles={{ color: "red" }}
      width={400}
      height={200}
      series={[{ type: 'line', label: 'temp', yAxisId: 'leftAxisId', data: hourlyTempData, }]}
      xAxis={[{ scaleType: 'point', data: xLabels, }]}
    >
      <LinePlot />
      <MarkPlot />
      <ChartsXAxis />
    </ChartContainer>
  );
}


