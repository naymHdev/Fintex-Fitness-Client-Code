import { LineChart } from "@mui/x-charts";

const GrowthAnalytics = () => {
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];
  const xLabels = ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"];

  return (
    <div>
        <h2 className="font-bold text-xl text-white">Growth Analytics</h2>
      <LineChart
        width={800}
        height={300}
        series={[
          { data: pData, label: "pv", area: true, stack: "total", showMark: false },
          {
            data: amtData,
            label: "amt",
            area: true,
            stack: "total",
            showMark: false,
          },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        sx={{
          ".MuiLineElement-root": {
            display: "none",
            textDecorationColor: 'red',
            fontFamily: 'fantasy'
          },
        }}
      />
    </div>
  );
};

export default GrowthAnalytics;
