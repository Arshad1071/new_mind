import React from "react";
import {
  Typography,
  Drawer,
  List,
  ListItem,
  IconButton,
  Box,
  Stack,
} from "@mui/material";

const index = () => {
  return (
    <div>
      <Drawer
        variant="permanent"
        sx={{
          width: 80,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 80,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",

            backgroundColor: "#002874",
            color: "#ffffff",
          },
        }}
      >
        {/* List for Icons */}
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {[
            { src: "/Muamelat logo.svg", label: "Muamelat", size: 40 },
            { src: "/chart-simple.svg", label: "Panorama" },
            { src: "/file-lines.svg", label: "Transaction" },
            { src: "/folder-3.svg", label: "Documents" },
            { src: "/envelope.svg", label: "Email" },
            { src: "/folder.svg", label: "Reports" },
            { src: "/sliders.svg", label: "Management Panal" },
            { src: "/sliders.svg", label: "Transaction Calander" },
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
                    width={item.size || 18}
                    height={item.size || 18}
                    className={index == 0 ? "" : "white-icon"}
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

        {/* Rounded Image at Bottom */}
        <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
          <img
            src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250"
            alt="Profile"
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Drawer>
    </div>
  );
};

export default index;
