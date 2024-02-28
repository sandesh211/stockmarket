import { Box, Divider, Stack } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';

// new 
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RightMenu = () => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const logOutExit = () => {
        let data = JSON.stringify({
            clientcode: JSON.parse(localStorage.getItem('user_detail')),
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/api/user-logout',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('user_jwt_token'))
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                // console.log(JSON.stringify(response.data.data.jwtToken));
                localStorage.removeItem("user_detail")
                localStorage.removeItem("user_jwt_token")
                navigate("/Login")
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            {/* <Box textAlign={`center`} className={`md:flex  gap-2  lg:gap-5 text-[16px] items-center hidden `}  >
                <NavLink className={`main-link `}  >Login</NavLink>
                <Divider orientation="vertical" flexItem />
                <NavLink className={`main-link`}  >Sign up</NavLink>
                <NavLink className={`main-link active-link `}  > <SearchIcon /> </NavLink>
                <button onClick={() => { logOutExit() }} className='basic-button rounded-3xl text-sm'  >
                    Log Out
                </button>
            </Box > */}
            <Box className='hidden md:flex items-baseline justify-end px-10 ' >
                <Box>
                    <Stack direction="row" spacing={2}>
                        <NavLink onClick={() => { logOutExit() }} className={`main-link active-link`}  >Log Out</NavLink>

                    </Stack>
                </Box>
            </Box>

            <Box className="md:hidden  text-end  "  >
                <Tooltip title="More">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <MoreVertIcon />
                    </IconButton>
                </Tooltip>

                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClose}>
                        Search
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        Catalog
                    </MenuItem>
                    {/* <MenuItem onClick={handleClose}>
                        For You
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        More
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        Login
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        Signup
                    </MenuItem> */}
                    {/* <Divider /> */}
                    <MenuItem onClick={() => { logOutExit() }}>
                        Log Out
                    </MenuItem>
                </Menu>

            </Box>
        </>
    )
}

export default RightMenu