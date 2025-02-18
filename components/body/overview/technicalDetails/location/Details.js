import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

export default function Details() {
  const apartmentData = [
    { label: "Unit Types", value: "1, 2, 3 & 4 Bedrooms" },
    { label: "Area Range", value: "690 - 1,331 sq.ft" },
    { label: "Handover Date", value: "Q2 2029" },
    { label: "Ownership", value: "Freehold" },
    { label: "Payment Plan", value: "70/30" },
    { label: "Deposit Required", value: "20%" },
  ];

  return (
    <Box>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ backgroundColor: "#1C6658" }}
      >
        <Table>
          <TableBody>
            {apartmentData.map((row, index) => (
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
