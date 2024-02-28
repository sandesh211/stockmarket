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
      const data = {
            labels: ['Red', 'Orange', 'Blue', 'purpel', 'yellow', 'Red', 'Orange', 'Blue', 'purpel', 'yellow'],
            // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
            datasets: [{
                  label: 'My First Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1
            }]
      }
      const [chartData, setChartData] = useState(
            data
      );



      return (


            <Box sx={{ display: 'flex' }}  >
                  <Header />
                  <Sidebar />
                  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <DrawerHeader />
                        <SportsComponent chartData={chartData} />
                  </Box>
            </Box>
      )
}

export default Sports

