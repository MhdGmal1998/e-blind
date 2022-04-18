import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import LoginIcon from '@mui/icons-material/Login';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';

export default (props) => {
    let navigate = useNavigate();

    let { children, value } = props
    return (
        <Box sx={{ pb: 7 }}>
           
            <CssBaseline />
            <Box>
                {
                    children
                }
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
                <BottomNavigation
                    showLabels
                    value={value}>

                    <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />}
                        onClick={() => {
                            navigate("/")
                        }}
                    />
                    {/* <BottomNavigationAction label="Login" icon={<LoginIcon />} /> */}
                    <BottomNavigationAction label="My Card" icon={<AddShoppingCartOutlinedIcon />}
                        onClick={() => {
                            navigate("/Card")
                        }}

                    />
                    <BottomNavigationAction label="Category" icon={<CategoryOutlinedIcon />}
                        onClick={() => {
                            navigate("/Category")
                        }}
                    />
                    <BottomNavigationAction label="Contact us" icon={<ContactPhoneOutlinedIcon />}
                        onClick={() => {
                            navigate("/Contact-us")
                        }}
                    />
                    <BottomNavigationAction label="About us" icon={<InfoOutlinedIcon />}
                        onClick={() => {
                            navigate("/About-us")

                        }}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    )
}