import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableSortLabel,
    Typography,
    Box,
    ToggleButton,
    ToggleButtonGroup,
    TableFooter,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import {
    HelpOutline as HelpOutlineIcon,
    PieChart as PieChartIcon,
    BarChart as BarChartIcon,
} from '@mui/icons-material';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';
// import { BarChart,, Tooltip, Legend } from 'recharts';


const Dashgraph = () => {
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
    const [sortConfig, setSortConfig] = useState({ key: 'clicks', direction: 'asc' });
    // const [sortConfig, setSortConfig] = useState({ key: 'campaign', direction: 'asc' });
    const [chartType, setChartType] = useState('pie');

    // const handleSort = (property) => {
    //     let direction = 'asc';
    //     if (sortConfig.key === property && sortConfig.direction === 'asc') {
    //         direction = 'desc';
    //     }
    //     setSortConfig({ key: property, direction });

    //     const sortedData = [...data].slice(0, -1).sort((a, b) => {
    //         if (property === 'campaign') {
    //             return direction === 'asc' ? a[property].localeCompare(b[property]) : b[property].localeCompare(a[property]);
    //         }

    //         const valueA = property === 'cost' ? parseFloat(a[property].replace('USD ', '').replace(',', '')) : a[property];
    //         const valueB = property === 'cost' ? parseFloat(b[property].replace('USD ', '').replace(',', '')) : b[property];

    //         return direction === 'asc' ? valueA - valueB : valueB - valueA;
    //     });

    //     const totalCostRow = data.slice(-1); // Extract the "Total Cost" row
    //     setData([...sortedData, ...totalCostRow]);
    // };

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


    const handleChartTypeChange = (event, newChartType) => {
        if (newChartType !== null) {
            setChartType(newChartType);
        }
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
                <Typography variant="h6" fontWeight="bold">
                    Ad Insights
                </Typography>
            </TableCell>
            <TableCell align="right">
                <FormControl sx={{marginRight:1}}>
                    <Select
                        value={sortConfig.key}
                        onChange={(event) => handleSort(event.target.value)}
                    >
                        <MenuItem value="clicks">Clicks</MenuItem>
                        <MenuItem value="conversions">Conversions</MenuItem>
                    </Select>
                </FormControl>
                <HelpOutlineIcon />
            </TableCell>
        </TableRow>
    );

    const TableFootData = () => (
        <TableRow>
            <TableCell colSpan={4}>&nbsp;</TableCell>
            <TableCell align="right">
                <ToggleButtonGroup value={chartType} exclusive onChange={handleChartTypeChange} aria-label="chart type">
                    <ToggleButton value="pie" aria-label="pie chart">
                        <PieChartIcon />
                    </ToggleButton>
                    <ToggleButton value="bar" aria-label="bar chart">
                        <BarChartIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
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

    console.log(data, 'data67545')

    const renderChart = () => {
        if (chartType === 'pie') {
            const totalClicks = data.reduce((acc, row) => acc + row.clicks, 0);
            return (
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart >
                        <Pie
                            data={data.slice(0, -1)}
                            dataKey={sortConfig.key}
                            nameKey="campaign"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            //   label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            // label={({ percent }) => `${(percent * 100).toFixed(0)}%`} // Removed the arrow-like labels
                            labelLine={false} // Removed the lines connecting labels to the chart
                        >

                            {console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`, '767687687', data)}
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" align="right" verticalAlign="middle" />

                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            );
        } else if (chartType === 'bar') {
            return (
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={data.slice(0, -1)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="campaign" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="clicks" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            );
        }
    };

    return (
        <Paper className="dashgraph-container" >
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableHeader />
                    </TableHead>
                </Table>
            </TableContainer>
            {renderChart()}
            <TableContainer>
                <Table>
                    <TableFooter>
                        <TableFootData />
                    </TableFooter>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default Dashgraph;
