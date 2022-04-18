import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import BottomNavigation from '../BottomNavigation';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import LaptopWindowsOutlinedIcon from '@mui/icons-material/LaptopWindowsOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import ElectricalServicesOutlinedIcon from '@mui/icons-material/ElectricalServicesOutlined';
import Items from '../Items/Items'
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function PersistentDrawerLeft(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);


    const dt = ["Camares", ""]
    const setItem = (type) => {
        localStorage.setItem('type', type)
    }
    let navigate = useNavigate();
    const [title, setTitle] = React.useState()
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} >
                <Toolbar style={{
                    backgroundColor: '#8080ff'
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon  style={{
                            color:'black'
                        }}/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" style={{
                        color:'black'
                    }}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>

                    <ListItem button onClick={() => {
                        setTitle('Cameras Category')
                        setItem(1)
                        navigate('/Category')

                    }}>
                        <ListItemIcon>
                            <CameraAltOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cameras" />
                    </ListItem>

                    <ListItem button onClick={() => {
                        setTitle('Headphones Category')
                        setItem(2)
                        navigate('/Category')

                    }}>
                        <ListItemIcon>
                            <HeadphonesOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Headphones" />
                    </ListItem>

                    <ListItem button onClick={() => {
                        setTitle('Laptops & Computers  Category')
                        setItem(3)
                        navigate('/Category')
                    }}>
                        <ListItemIcon>
                            <LaptopWindowsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Laptops & Computers " />
                    </ListItem>

                    <ListItem button onClick={() => {
                        setTitle('Phones Category')
                        setItem(4)
                        navigate('/Category')
                    }}>
                        <ListItemIcon>
                            <PhoneIphoneOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Phones" />
                    </ListItem>

                    <ListItem button onClick={() => {
                        setTitle('Watches Category')
                        setItem(5)
                        navigate('/Category')
                    }}>
                        <ListItemIcon>
                            <DevicesOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Watches " />
                    </ListItem>

                    <ListItem button onClick={() => {
                        setTitle('Charegers Category')
                        setItem(6)
                        navigate('/Category')
                    }}>
                        <ListItemIcon>
                            <ElectricalServicesOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Charegers" />
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Items />
            </Main>
        </Box>
    );
}


export default () => {
    return (<BottomNavigation value={2}>
        <PersistentDrawerLeft />
    </BottomNavigation>)
}