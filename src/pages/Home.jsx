import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import Sports from './Sports'
import Header from '../components/Header'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
const Home = () => {
    return (


        <Box sx={{ display: 'flex' }}  >
            <Header />
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Dashboard />
            </Box>
        </Box>
    )
}

export default Home