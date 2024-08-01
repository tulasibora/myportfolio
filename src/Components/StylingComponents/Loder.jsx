import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LoderComponent() {
  return (
    <div className="LoderComponent">
      <div>
        <h1>Welcome to Tulasi's Portfolio</h1>
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </div>
    </div>
  );
}
