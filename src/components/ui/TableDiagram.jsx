/**
 * File: TableDiagram.jsx
 * Author: Joseph Koh
 * Description: Component for rendering a table diagram using Material-UI
 */

import { tableData } from "../../data/constants";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export const TableDiagram = () => {
  return (
    <>
      {/* Container for the table */}
      <TableContainer component={Paper} style={{ overflowX: "auto" }}>
        {/* Table component */}
        <Table>
          {/* Table header */}
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  border: "1px solid #ddd",
                }}
              >
                Feature
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  border: "1px solid #ddd",
                }}
              >
                Description
              </TableCell>
            </TableRow>
          </TableHead>

          {/* Table body */}
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index} sx={{ border: "1px solid #ddd" }}>
                <TableCell sx={{ border: "1px solid #ddd" }}>
                  {row.feature}
                </TableCell>
                <TableCell sx={{ border: "1px solid #ddd" }}>
                  {row.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
