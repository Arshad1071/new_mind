import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
  Collapse,
  Button,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

// Updated data structure
const data = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    phase: "Phase 1",
    status: "In Progress",
    document: "Document A",
    responsibleParty: "Team A",
    updateDate: "2023-10-01",
    details: "Some details about John Doe",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    phase: "Phase 2",
    status: "Completed",
    document: "Document B",
    responsibleParty: "Team B",
    updateDate: "2023-10-05",
    details: "Some details about Jane Smith",
  },
  {
    id: 3,
    name: "Alice Brown",
    age: 35,
    phase: "Phase 3",
    status: "Pending",
    document: "Document C",
    responsibleParty: "Team C",
    updateDate: "2023-10-10",
    details: "Some details about Alice Brown",
  },
  {
    id: 4,
    name: "Bob Johnson",
    age: 40,
    phase: "Phase 1",
    status: "In Progress",
    document: "Document D",
    responsibleParty: "Team D",
    updateDate: "2023-10-15",
    details: "Some details about Bob Johnson",
  },
  {
    id: 5,
    name: "Charlie Davis",
    age: 25,
    phase: "Phase 2",
    status: "Completed",
    document: "Document E",
    responsibleParty: "Team E",
    updateDate: "2023-10-20",
    details: "Some details about Charlie Davis",
  },
  {
    id: 6,
    name: "Eva Green",
    age: 32,
    phase: "Phase 3",
    status: "Pending",
    document: "Document F",
    responsibleParty: "Team F",
    updateDate: "2023-10-25",
    details: "Some details about Eva Green",
  },
  {
    id: 7,
    name: "Frank White",
    age: 45,
    phase: "Phase 1",
    status: "In Progress",
    document: "Document G",
    responsibleParty: "Team G",
    updateDate: "2023-10-30",
    details: "Some details about Frank White",
  },
];

const ContentSection = () => {
  const [openRows, setOpenRows] = useState({});

  const handleToggleRow = (id) => {
    setOpenRows((prevOpenRows) => ({
      ...prevOpenRows,
      [id]: !prevOpenRows[id],
    }));
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        overflow: "auto",
        p: 3,
        marginTop: "64px",
        marginRight: "84px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ffffff", // Light gray background
          padding: 1,
          borderRadius: "65px",
          marginBottom: 2,
        }}
      >
        <Box>
          <FormControl size="small" sx={{ minWidth: 220 }}>
            <InputLabel>All Selcted folder</InputLabel>
            <Select
              size="small"
              name="phase"
              //value={filters.phase}
              //onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Phase 1">Phase 1</MenuItem>
              <MenuItem value="Phase 2">Phase 2</MenuItem>
              <MenuItem value="Phase 3">Phase 3</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Search Name" size="small" name="name" />
        </Box>

        <Box>
          <TextField label="Search Age" size="small" name="age" type="number" />
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Phase</InputLabel>
            <Select name="phase">
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Phase 1">Phase 1</MenuItem>
              <MenuItem value="Phase 2">Phase 2</MenuItem>
              <MenuItem value="Phase 3">Phase 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Status</InputLabel>
            <Select name="status">
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Table Container */}
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell /> {/* Empty cell for the expand/collapse icon */}
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Phase</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Document</TableCell>
              <TableCell>Responsible Party</TableCell>
              <TableCell>Update Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <React.Fragment key={row.id}>
                {/* Main Row */}
                <TableRow>
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => handleToggleRow(row.id)}
                    >
                      {openRows[row.id] ? (
                        <KeyboardArrowUp />
                      ) : (
                        <KeyboardArrowDown />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.phase}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor:
                          row.status === "Completed"
                            ? "green"
                            : row.status === "In Progress"
                            ? "orange"
                            : "red",
                        color: "white",
                        "&:hover": {
                          backgroundColor:
                            row.status === "Completed"
                              ? "darkgreen"
                              : row.status === "In Progress"
                              ? "darkorange"
                              : "darkred",
                        },
                      }}
                    >
                      {row.status}
                    </Button>
                  </TableCell>
                  <TableCell>{row.document}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "inline-block",
                        backgroundColor: "#f5f5f5", // Light gray background
                        borderRadius: "12px", // Rounded corners
                        padding: "4px 8px", // Padding around the text
                      }}
                    >
                      {row.responsibleParty}
                    </Box>
                  </TableCell>
                  <TableCell>{row.updateDate}</TableCell>
                </TableRow>

                {/* Collapsible Row */}
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={9}
                  >
                    <Collapse
                      in={openRows[row.id]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Box margin={1}>
                        <div>
                          <strong>Details:</strong> {row.details}
                        </div>
                        <div>
                          <strong>Phase:</strong> {row.phase}
                        </div>
                        <div>
                          <strong>Status:</strong> {row.status}
                        </div>
                        <div>
                          <strong>Document:</strong> {row.document}
                        </div>
                        <div>
                          <strong>Responsible Party:</strong>{" "}
                          {row.responsibleParty}
                        </div>
                        <div>
                          <strong>Update Date:</strong> {row.updateDate}
                        </div>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ContentSection;
