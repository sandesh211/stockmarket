import React from 'react'
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import RightMenu from './RightMenu';


const Header = () => {
    return (
        <MuiAppBar position="fixed" className='z-40 ' sx={ {
            backgroundColor: "white",
            color: "black"
        } }  >
            <Toolbar >
                <Box className='hidden md:flex items-baseline justify-between px-10 ' >
                    <Box>
                        <Stack direction="row" spacing={ 2 }>
                            <NavLink className={ `main-link active-link` }  >Catalog</NavLink>
                            <NavLink className={ `main-link` }  >For You</NavLink>
                            <NavLink className={ `main-link` }  >More</NavLink>
                        </Stack>
                    </Box>
                </Box>
                <Typography variant="h6" noWrap component="div" color={ `#000000` } textAlign={ `center` } className='col-span-2 md:col-span-1'  >
                    NN Network
                </Typography>
                <RightMenu />
            </Toolbar>

        </MuiAppBar>
    )
}

export default Header