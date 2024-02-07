/**
 * File: UserInput.jsx
 * Author: Joseph Koh
 * Description: Component for displaying text field for user input
 */

import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const UserInput = ({ placeholder, value, onChange, sx }) => {
  return (
    <TextField
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      sx={sx}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
