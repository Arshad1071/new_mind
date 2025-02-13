import React, { useState } from "react";
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Icon for accordion

const data = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 28 },
  { id: 3, name: "Alice Brown", age: 35 },
];

export default function Layout() {
  const [secondNav, setSecondNav] = useState(false);

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f2f6fa" }}>
      <CssBaseline />

      {/* Left Sidebar */}
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
            padding: "16px 0",
            backgroundColor: "#002874",
            color: "#ffffff",
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

      {/* Right Sidebar (Nested to the right of the left drawer) */}
      {secondNav && (
        <Box
          sx={{
            width: 200,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 0",
            backgroundColor: "#FFFFFF",
            color: "#000000", // Changed to black for better contrast
          }}
        >
          {/* Add content for the right sidebar */}
          <List
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%", // Ensure the list takes full width
            }}
          >
            {/* Accordion Section */}
            <Accordion sx={{ width: "100%", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <SettingsIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="body2">Profile</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <SettingsIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="body2">Security</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <SettingsIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="body2">Notifications</Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            {/* Another Accordion Section */}
            <Accordion sx={{ width: "100%", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Tools</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <SettingsIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="body2">Analytics</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <SettingsIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="body2">Reports</Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            {/* Accordion Section */}
            <Accordion sx={{ width: "100%", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <SettingsIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="body2">Profile</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <SettingsIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="body2">Security</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <SettingsIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="body2">Notifications</Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            {/* Another Accordion Section */}
            <Accordion sx={{ width: "100%", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Tools</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <SettingsIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="body2">Analytics</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <SettingsIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="body2">Reports</Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </List>
        </Box>
      )}

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Header (AppBar) */}
        <AppBar
          position="fixed"
          sx={{
            width: secondNav ? `calc(100% - 300px)` : `calc(100% - 100px)`, // Adjust width to account for both sidebars
            marginLeft: 280, // Offset for both sidebars
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "#ffffff",
            margin: "5px",
          }}
        >
          <Toolbar>
            <Button
              onClick={() => setSecondNav(!secondNav)}
              variant="contained"
            >
              Contained
            </Button>
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
