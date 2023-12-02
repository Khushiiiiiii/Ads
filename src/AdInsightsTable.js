import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, Typography, Box } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const AdInsightsTable = () => {
  const initialData = [
    { campaign: 'Cosmetics', clicks: 712, cost: 'USD 4,272', conversions: 8, revenue: 'USD 16,568' },
    { campaign: 'Serums', clicks: 3961, cost: 'USD 27,331', conversions: 115, revenue: 'USD 362,526' },
    { campaign: 'Facewash', clicks: 9462, cost: 'USD 76,831', conversions: 123, revenue: 'USD 266,800' },
    { campaign: 'Shampoos', clicks: 439, cost: 'USD 2,151', conversions: 5, revenue: 'USD 11,029' },
    { campaign: 'Conditioners', clicks: 1680, cost: 'USD 3,864', conversions: 49, revenue: 'USD 175,245' },
    { campaign: 'Facewash 2', clicks: 4978, cost: 'USD 29,370', conversions: 189, revenue: 'USD 623,106' },
    { campaign: 'Total', clicks: 26510, cost: 'USD 143,819', conversions: 489, revenue: 'USD 1,573,563' },
  ];

  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (property) => {
    let direction = 'asc';
    if (sortConfig.key === property && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key: property, direction });
  
    const sortedData = [...data].slice(0, -1).sort((a, b) => {
      if (property === 'campaign') {
        return direction === 'asc' ? a[property].localeCompare(b[property]) : b[property].localeCompare(a[property]);
      }
  
      const valueA = property === 'cost' ? parseFloat(a[property].replace('USD ', '').replace(',', '')) : a[property];
      const valueB = property === 'cost' ? parseFloat(b[property].replace('USD ', '').replace(',', '')) : b[property];
  
      return direction === 'asc' ? valueA - valueB : valueB - valueA;
    });
  
    const totalCostRow = data.slice(-1); // Extract the "Total Cost" row
    setData([...sortedData, ...totalCostRow]);
  };
  

  const SortableTableCell = ({ property, label }) => (
    <TableCell>
      <TableSortLabel
        active={sortConfig.key === property}
        direction={sortConfig.key === property ? sortConfig.direction : 'asc'}
        onClick={() => handleSort(property)}
      >
        {label}
      </TableSortLabel>
    </TableCell>
  );

  const TableHeader = () => (
    <TableRow>
      <TableCell colSpan={4}>
        <Typography variant="h6" fontWeight="bold">Ad Insights</Typography>
      </TableCell>
      <TableCell align="right">
        <HelpOutlineIcon />
      </TableCell>
    </TableRow>
  );

  const TotalCostRow = () => (
    <TableRow key={data.length - 1}>
      <TableCell>{initialData[initialData.length - 1].campaign}</TableCell>
      <TableCell>{initialData[initialData.length - 1].clicks}</TableCell>
      <TableCell>{initialData[initialData.length - 1].cost}</TableCell>
      <TableCell>{initialData[initialData.length - 1].conversions}</TableCell>
      <TableCell>{initialData[initialData.length - 1].revenue}</TableCell>
    </TableRow>
  );

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableHeader />
            <TableRow>
              <SortableTableCell property="campaign" label={<Typography variant="subtitle1" fontWeight="bold">Companies</Typography>} />
              <SortableTableCell property="clicks" label={<Typography variant="subtitle1" fontWeight="bold">Clicks</Typography>} />
              <SortableTableCell property="cost" label={<Typography variant="subtitle1" fontWeight="bold">Cost</Typography>} />
              <SortableTableCell property="conversions" label={<Typography variant="subtitle1" fontWeight="bold">Conversions</Typography>} />
              <TableCell><Typography variant="subtitle1" fontWeight="bold">Revenue</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(0, -1).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.campaign}</TableCell>
                <TableCell>{row.clicks}</TableCell>
                <TableCell>{row.cost}</TableCell>
                <TableCell>{row.conversions}</TableCell>
                <TableCell>{row.revenue}</TableCell>
              </TableRow>
            ))}
            <TotalCostRow />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AdInsightsTable;
