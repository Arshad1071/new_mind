import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 80; // Adjusted for small sidebar

const data = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 28 },
  { id: 3, name: "Alice Brown", age: 35 },
];

export default function Layout() {
  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f2f6fa" }}>
      <CssBaseline />
      {/* Sidebar (Always First) */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 0",
            backgroundColor: "#002874", // Set background color
            color: "#ffffff", // Optional: Set text/icons to white for better contrast
          },
        }}
      >
        {/* List for Icons */}
        <List
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ListItem disablePadding>
            <IconButton color="inherit">
              {" "}
              {/* Set to inherit so it takes white color */}
              <DashboardIcon fontSize="large" />
            </IconButton>
          </ListItem>
          <ListItem disablePadding>
            <IconButton color="inherit">
              <SettingsIcon fontSize="large" />
            </IconButton>
          </ListItem>
          <ListItem disablePadding>
            <IconButton color="inherit">
              <SettingsIcon fontSize="large" />
            </IconButton>
          </ListItem>
          <ListItem disablePadding>
            <IconButton color="inherit">
              <SettingsIcon fontSize="large" />
            </IconButton>
          </ListItem>
          <ListItem disablePadding>
            <IconButton color="inherit">
              <SettingsIcon fontSize="large" />
            </IconButton>
          </ListItem>
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
      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Header (AppBar) */}
        <AppBar
          position="fixed"
          sx={{
            width: `calc(99% - ${drawerWidth}px)`, // Adjust width to avoid overlapping
            marginLeft: `${drawerWidth}px`,
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "#ffffff",
            margin: "5px",
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap>
              Material UI Layout
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Content Section */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: "auto",
            p: 3,
            marginTop: "64px", // Offset for the AppBar height
          }}
        >
          <Typography variant="h6" gutterBottom>
            User Data Table
          </Typography>

          {/* Table Container */}
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Age</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.age}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
