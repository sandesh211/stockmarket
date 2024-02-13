import { Box, Divider } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';

const RightMenu = () => {
    const [ anchorEl, setAnchorEl ] = React.useState( null );
    const open = Boolean( anchorEl );
    const handleClick = ( event ) => {
        setAnchorEl( event.currentTarget );
    };
    const handleClose = () => {
        setAnchorEl( null );
    };
    return (
        <>
            <Box textAlign={ `center` } className={ `md:flex  gap-2  lg:gap-5 text-[16px] items-center hidden ` }  >
                <NavLink className={ `main-link ` }  >Login</NavLink>
                <Divider orientation="vertical" flexItem />
                <NavLink className={ `main-link` }  >Sign up</NavLink>
                <NavLink className={ `main-link active-link ` }  > <SearchIcon /> </NavLink>
                <button className='basic-button rounded-3xl text-sm'  >
                    Work With Us
                </button>
            </Box >

            <Box className="md:hidden  text-end  "  >
                <Tooltip title="More">
                    <IconButton
                        onClick={ handleClick }
                        size="small"
                        sx={ { ml: 2 } }
                        aria-controls={ open ? 'account-menu' : undefined }
                        aria-haspopup="true"
                        aria-expanded={ open ? 'true' : undefined }
                    >
                        <MoreVertIcon />
                    </IconButton>
                </Tooltip>

                <Menu
                    anchorEl={ anchorEl }
                    id="account-menu"
                    open={ open }
                    onClose={ handleClose }
                    onClick={ handleClose }
                    PaperProps={ {
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
                    } }
                    transformOrigin={ { horizontal: 'right', vertical: 'top' } }
                    anchorOrigin={ { horizontal: 'right', vertical: 'bottom' } }
                >
                    <MenuItem onClick={ handleClose }>
                        Search
                    </MenuItem>
                    <MenuItem onClick={ handleClose }>
                        Catalog
                    </MenuItem>
                    <MenuItem onClick={ handleClose }>
                        For You
                    </MenuItem>
                    <MenuItem onClick={ handleClose }>
                        More
                    </MenuItem>
                    <MenuItem onClick={ handleClose }>
                        Login
                    </MenuItem>
                    <MenuItem onClick={ handleClose }>
                        Signup
                    </MenuItem>
                    {/* <Divider /> */ }
                    <MenuItem onClick={ handleClose }>
                        Work With Us
                    </MenuItem>
                </Menu>

            </Box>
        </>
    )
}

export default RightMenu