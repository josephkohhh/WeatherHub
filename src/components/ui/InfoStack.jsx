/**
 * File: InfoStack.jsx
 * Author: Joseph Koh
 * Description: Component for displaying stacked information
 */

import { Stack } from "@mui/material";

export const InfoStack = ({ children }) => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"} px={1} py={1}>
      {children}
    </Stack>
  );
};
