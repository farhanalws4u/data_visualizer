import { Bar } from "react-chartjs-2";
import { Box } from "@mui/material";

const BarChart = ({ chartData }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <h2 style={{ textAlign: "center", color: "#6e48aa" }}>
        Bar Representation of Data sets
      </h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              //   text: "representation for all the data",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </Box>
  );
};
export default BarChart;
