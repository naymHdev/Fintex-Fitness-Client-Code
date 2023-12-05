import { BarChart } from '@mui/x-charts/BarChart';

const DHChart = () => {
  return (
    <div>
        <h3 className='font-josefin text-white font-bold text-xl'>User Growth</h3>
      <BarChart
        series={[
          { data: [3, 4, 1, 6, 5], stack: "A", label: "Series A1" },
          { data: [4, 3, 1, 5, 8], stack: "A", label: "Series A2" },
          { data: [4, 2, 5, 4, 1], stack: "B", label: "Series B1" },
          { data: [2, 8, 1, 3, 1], stack: "B", label: "Series B2" },
          { data: [10, 6, 5, 8, 9], label: "Series C1" },
        ]}
        width={800}
        height={350}
        labelStyle={{ fill: 'red', fontSize: 12, fontWeight: 'bold' }}
        axisLabelStyle={{ fill: 'blue', fontSize: 14 }}
      />
    </div>
  );
};

export default DHChart;
