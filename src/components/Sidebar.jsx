import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import topstories from "../assets/top-stories.svg"
import business from "../assets/business.svg"
import sports from "../assets/sports.svg"
import opinion from "../assets/opinion.svg"
import entertainment from "../assets/entmt.svg"
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from './Header';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
    {
        label: "Orders",
        path: "/",
        icon: <img src={topstories} />,
    },
    {
        label: "Stock Graph",
        path: "/sports",
        icon: <img src={sports} />,
    },
    // {
    //     label: "Business",
    //     path: "/",
    //     icon: <img src={business} />,
    // },
    // {
    //     label: "Entertainment",
    //     path: "/",
    //     icon: <img src={entertainment} />,
    // },
    // {
    //     label: "Opinion",
    //     path: "/",
    //     icon: <img src={opinion} />,
    // },
]
const navItems2 = [
    {
        label: "Top Stories",
        path: "/",
        icon: <img src={topstories} />,
    },
    {
        label: "Sports",
        path: "/Sports",
        icon: <img src={sports} />,
    },
    {
        label: "Business",
        path: "/",
        icon: <img src={business} />,
    },
    {
        label: "Entertainment",
        path: "/",
        icon: <img src={entertainment} />,
    },
    {
        label: "Opinion",
        path: "/",
        icon: <img src={opinion} />,
    },
]
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

// const AppBar = styled( MuiAppBar, {
//     shouldForwardProp: ( prop ) => prop !== 'open',
// } )( ( { theme, open } ) => ( {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create( [ 'width', 'margin' ], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     } ),
//     ...( {
//         marginLeft: drawerWidth,
//         backgroundColor: "#FFFFFF",
//         width: `100%`,
//         // width: `calc(100% - ${ drawerWidth }px)`,
//         transition: theme.transitions.create( [ 'width', 'margin' ], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         } ),
//     } ),
// } ) );

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Sidebar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);


    React.useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 600) {
                setOpen(false)
            } else {
                setOpen(true)
            }
        })


    }, [])


    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    // const handleDrawerClose = () => {
    //     setOpen( false );
    // };

    return (
        <>
            <CssBaseline />

            <Drawer variant="permanent" open={open} className='z-10'  >
                <DrawerHeader>
                    {/* <IconButton onClick={ handleDrawerOpen }>
                        { !open ? <ChevronRightIcon /> : <ChevronLeftIcon /> }
                    </IconButton> */}
                </DrawerHeader>
                <Divider />
                <Box className={`py-8 px-6`} >
                    {open && <Typography variant="subtitle1" className='flex flex-col' gutterBottom fontWeight={700} >
                        User Profile
                        {/* <span className='text-xs text-neutral-500 '>
                            India (English)
                        </span> */}
                    </Typography>}
                </Box>
                <Divider />
                <Typography variant='h6' fontWeight={700} display={`flex`} justifyContent={`space-between`} alignItems={`center`}
                    className='py-3 ps-4 pe-3'
                >
                    {open ? <>
                        For You
                        <ExpandMoreIcon />
                    </> : <ExpandMoreIcon />}
                </Typography>
                <List  >
                    {open && <ListItemText
                        primary="INDIA (ENGLISH)"
                        primaryTypographyProps={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            lineHeight: '20px',
                            ml: '14px',
                            color: '#9E9C9C'
                        }}

                    />}
                    {navItems?.map((el, index) => (
                        <Link to={el.path} style={{ textDecoration: 'none' }}>
                            <ListItem key={el.label} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {el.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={el.label} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                {/* <List  >
                    { open && <ListItemText
                        primary="INDIA (HINDI)"
                        primaryTypographyProps={ {
                            fontSize: 12,
                            fontWeight: 'bold',
                            lineHeight: '20px',
                            ml: '14px',
                            color: '#9E9C9C'
                        } }

                    /> }
                    { navItems2?.map( ( el, index ) => (
                        <ListItem key={ el.label } disablePadding sx={ { display: 'block' } }>
                            <ListItemButton
                                sx={ {
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                } }
                            >
                                <ListItemIcon
                                    sx={ {
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    } }
                                >
                                    { el.icon }
                                </ListItemIcon>
                                <ListItemText primary={ el.label } sx={ { opacity: open ? 1 : 0 } } />
                            </ListItemButton>
                        </ListItem>
                    ) ) }
                </List> */}
            </Drawer>
        </>
    );
}