import React from "react";
import {
    Typography,
    List,
    ListItem,
    IconButton,
    Paper,
    Stack
  } from "@mui/material";


const RightSideBar = () => {
  return (
    <Paper
      sx={{
        width: 80,
        height: "80vh",
        boxSizing: "border-box",
        position: "fixed",
        right: 10,
        top: 80,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {[
          { src: "/house.svg", label: "Transaction" },
          { src: "/sliders.svg", label: "Contents" },
          { src: "/folder.svg", label: "Tasks" },
          { src: "/sliders.svg", label: "Phases" },
          { src: "/clipboard-pen.svg", label: "Sign Tracking" },
          { src: "/bookmark.svg", label: "Critical Info Setting" },
          { src: "/sliders.svg", label: "Analysis Phases" },
          { src: "/calender-days-2.svg", label: "Calanders" },
          { src: "/sliders.svg", label: "Activity Log" },
          { src: "/ellipsis.svg", label: "" },
        ].map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ justifyContent: "center" }}
          >
            <Stack alignItems="center">
              <IconButton color="inherit">
                <img
                  src={item.src}
                  alt="icon"
                  width={item.size || 10}
                  height={item.size || 10}
                />
              </IconButton>
              <Typography
                variant="caption"
                sx={{ textAlign: "center", width: "100%" }}
              >
                {item.label}
              </Typography>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default RightSideBar;
