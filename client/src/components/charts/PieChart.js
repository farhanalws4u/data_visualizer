import React from "react";
import { Pie } from "react-chartjs-2";
import { Box, Paper } from "@mui/material";

function PieChart({ chartData }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {" "}
      <h2 style={{ textAlign: "center", color: "#6e48aa" }}>
        Pie Representation of Data sets
      </h2>
      <Box sx={{ width: "60%" }}>
        <Pie
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                //   text: "Pie Representation of Data set",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}
export default PieChart;
