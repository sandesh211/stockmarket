import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import SportsComponent from '../components/SportsComponent'

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import CandleStickChart from '../components/CandleStickChart'

Chart.register(CategoryScale);

const DrawerHeader = styled('div')(({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
}));
const Sports = () => {
      const data = [
            { date: "2024-01-01", open: 100, high: 120, low: 90, close: 110 },
            { date: "2024-01-02", open: 110, high: 130, low: 100, close: 120 },
            { date: "2024-01-03", open: 120, high: 140, low: 110, close: 130 },
            // Add more data here as needed
      ];
      const [chartData, setChartData] = useState(
            data
      );



      return (


            <Box sx={{ display: 'flex' }}  >
                  <Header />
                  <Sidebar />
                  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <DrawerHeader />
                        {/* <SportsComponent chartData={chartData} /> */}
                        <div>
                              <h2>Candlestick Chart Example</h2>
                              <CandleStickChart />
                        </div>
                  </Box>
            </Box>
      )
}

export default Sports

