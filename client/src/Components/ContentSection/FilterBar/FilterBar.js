import React from "react";

import {
  Box,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
  InputLabel,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FilterBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px",
        marginBottom: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <FormControl size="small" sx={{ minWidth: 220 }}>
          <Select
            size="small"
            name="phase"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            }}
            defaultValue="All Selected Folder"
            startAdornment={
              <InputAdornment position="start">
                <img
                  src="/folder.svg"
                  alt="Folder Icon"
                  style={{ width: 20, height: 20 }}
                />
              </InputAdornment>
            }
          >
            <MenuItem value="All Selected Folder" disabled>
              (All) Selected Folder
            </MenuItem>
            <MenuItem value="Phase 1">Phase 1</MenuItem>
            <MenuItem value="Phase 2">Phase 2</MenuItem>
            <MenuItem value="Phase 3">Phase 3</MenuItem>
          </Select>
        </FormControl>

        {/* Vertical Divider */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "black", height: 40 }}
        />

        <TextField
          sx={{
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            minWidth: 320,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <img
                  src="microphone.svg"
                  alt="Search Icon"
                  style={{ width: 20, height: 20 }}
                />
              </InputAdornment>
            ),
          }}
          size="small"
          name="name"
        />
      </Box>

      <Box
        sx={{
          padding: 1,
          backgroundColor: "#ffffff", // Light gray background
        }}
      >
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
  );
};

export default FilterBar;
