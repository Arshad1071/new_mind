import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  List,
  ListItem,
  IconButton,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Breadcrumbs,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import SideNav from "../Components/SideNav/SideNav";
import ContentSection from "../Components/ContentSection/ContentSection";

export default function Layout() {
  const [secondNav, setSecondNav] = useState(false);

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f2f6fa" }}>
      <CssBaseline />
      <SideNav />
      {secondNav && (
        <Box
          sx={{
            width: 200,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
            color: "#000000",
          }}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                padding: "5px",
                width: "100%",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Left-aligned Typography with black color */}
              <Typography sx={{ color: "black" }}>
                Transaction Content
              </Typography>

              {/* Right-aligned SVG Icon Button */}
              <IconButton
                color="black"
                onClick={() => setSecondNav(!secondNav)}
              >
                <ArrowBackIcon /> {/* Material-UI left arrow icon */}
              </IconButton>
            </Box>

            <Box
              sx={{
                padding: "1px",
                width: "100%",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Sub-section 1 */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1px",
                  borderRadius: "4px",
                  margin: "0px",
                  borderLeft: "1px solid #e0e0e0", // Top border
                  borderRight: "1px solid #e0e0e0", // Bottom border
                }}
              >
                <Typography variant="caption" sx={{ color: "black" }}>
                  12 Stages
                </Typography>
              </Box>

              {/* Sub-section 2 */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1px",
                  borderRadius: "4px",
                  margin: "0 1px",

                  borderRight: "1px solid #e0e0e0", // Bottom border
                }}
              >
                <Typography variant="caption" sx={{ color: "black" }}>
                  23 Subfolder
                </Typography>
              </Box>

              {/* Sub-section 3 */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1px",
                  borderRadius: "4px",
                  margin: "0 1px",

                  borderRight: "1px solid #e0e0e0", // Bottom border
                }}
              >
                <Typography variant="caption" sx={{ color: "black" }}>
                  1235 Document
                </Typography>
              </Box>

              {/* Sub-section 4 */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1px",
                  borderRadius: "4px",
                  margin: "0 1px",
                }}
              >
                <MenuIcon sx={{ color: "black" }} />
              </Box>
            </Box>

            <Box
              sx={{
                marginTop: "5px",
                padding: "5px",
                width: "100%",
                color: "white",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid #e0e0e0", // Top border
                borderBottom: "1px solid #e0e0e0", // Bottom border
              }}
            >
              <Typography variant="caption" sx={{ color: "black" }}>
                Filter by Client/Matter name
              </Typography>
            </Box>
            <Accordion disableGutters>
              <AccordionSummary
                expandIcon={<ArrowDropDown />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  flexDirection: "row-reverse",
                  minHeight: "unset",
                  padding: "0 45px",
                }}
              >
                <Typography>Stage 1</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0 45px" }}>
                {" "}
                {/* Removes default padding */}
                <List>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="caption">Stage 1.1</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="caption">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="body2">Stage 1.2</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="caption">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="body2">Stage 1.3</Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters>
              <AccordionSummary
                expandIcon={<ArrowDropDown />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  flexDirection: "row-reverse",
                  minHeight: "unset",
                  padding: "0 45px",
                }}
              >
                <Typography>Stage 2</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0 45px" }}>
                {" "}
                {/* Removes default padding */}
                <List>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="caption">Stage 1.1</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="caption">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="body2">Stage 1.2</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="caption">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="body2">Stage 1.3</Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters>
              <AccordionSummary
                expandIcon={<ArrowDropDown />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  flexDirection: "row-reverse",
                  minHeight: "unset",
                  padding: "0 45px",
                }}
              >
                <Typography>Stage 3</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0 45px" }}>
                {" "}
                {/* Removes default padding */}
                <List>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="caption">Stage 1.1</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="caption">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="body2">Stage 1.2</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="caption">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="body2">Stage 1.3</Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters>
              <AccordionSummary
                expandIcon={<ArrowDropDown />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  flexDirection: "row-reverse",
                  minHeight: "unset",
                  padding: "0 45px",
                }}
              >
                <Typography>Stage 4</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0 45px" }}>
                {" "}
                {/* Removes default padding */}
                <List>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="caption">Stage 1.1</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="caption">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="body2">Stage 1.2</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="caption">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="body2">Stage 1.3</Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters>
              <AccordionSummary
                expandIcon={<ArrowDropDown />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  flexDirection: "row-reverse",
                  minHeight: "unset",
                  padding: "0 45px",
                }}
              >
                <Typography>Stage 1</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0 45px" }}>
                {" "}
                {/* Removes default padding */}
                <List>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="caption">Stage 1.1</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="caption">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="body2">Stage 1.2</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="caption">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="body2">Stage 1.3</Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters>
              <AccordionSummary
                expandIcon={<ArrowDropDown />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  flexDirection: "row-reverse",
                  minHeight: "unset",
                  padding: "0 45px",
                }}
              >
                <Typography>Stage 2</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0 45px" }}>
                {" "}
                {/* Removes default padding */}
                <List>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="caption">Stage 1.1</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="caption">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="body2">Stage 1.2</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="caption">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="body2">Stage 1.3</Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters>
              <AccordionSummary
                expandIcon={<ArrowDropDown />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  flexDirection: "row-reverse",
                  minHeight: "unset",
                  padding: "0 45px",
                }}
              >
                <Typography>Stage 3</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0 45px" }}>
                {" "}
                {/* Removes default padding */}
                <List>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="caption">Stage 1.1</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="caption">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="body2">Stage 1.2</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="caption">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="body2">Stage 1.3</Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters>
              <AccordionSummary
                expandIcon={<ArrowDropDown />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  flexDirection: "row-reverse",
                  minHeight: "unset",
                  padding: "0 45px",
                }}
              >
                <Typography>Stage 4</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0 45px" }}>
                {" "}
                {/* Removes default padding */}
                <List>
                  <ListItem disablePadding>
                    <IconButton color="inherit">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="caption">Stage 1.1</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="caption">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="body2">Stage 1.2</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <IconButton color="caption">
                      <img
                        src="/folder.svg"
                        alt="Settings"
                        width={16}
                        height={16}
                      />
                    </IconButton>
                    <Typography variant="body2">Stage 1.3</Typography>
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
          <Toolbar
            sx={{ display: "flex", justifyContent: "flex-start", gap: 1 }}
          >
            <IconButton
              color="inherit"
              onClick={() => setSecondNav(!secondNav)}
            >
              <img
                src="/house-solid.svg"
                alt="Settings"
                width={16}
                height={16}
              />
            </IconButton>

            <Breadcrumbs
              separator="›"
              aria-label="breadcrumb"
              sx={{
                fontSize: "12px", 
                "& .MuiBreadcrumbs-separator": { color: "gray" },
                "& a": { color: "black" },
              }}
            >
              <span>CLIENT</span>
              <span> MATTER</span>
              <span> TRANSACTION DETAIL PAGE</span>
              <a href="/#" style={{ textDecoration: "none" }}>
                TRANSACTION CONTENTS
              </a>
            </Breadcrumbs>
          </Toolbar>
        </AppBar>
        <ContentSection />
      </Box>
    </Box>
  );
}
