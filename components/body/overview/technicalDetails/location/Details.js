import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import { location } from "@/utils/siteConfig";

export default function Details() {
  return (
    <Box>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ backgroundColor: "#1C6658" }}
      >
        <Table>
          <TableBody>
            {location.apartmentDetails.map((row, index) => (
              <TableRow key={index} sx={{ borderColor: "#1C6658" }}>
                <TableCell sx={{ color: "white" }}>{row.label}</TableCell>
                <TableCell sx={{ color: "white" }}>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
