import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import personalImg from "../assets/images/personalimg.jpeg";
import DiamondIcon from '@mui/icons-material/Diamond';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



////////////////////// ///////////// /////////// ///// //// //
import "../styles/Navbar.css"
import { Link } from 'react-router-dom';
import useProductDetails from '../context/Detailscontext';

////////////////////// ///////////// /////////// ///// //// //
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}



export default function Navbar() {

    const [mobileOpen, setMobileOpen] = useState(false);
    const [tabValue, setTabValue] = useState(0);
    const {proId,setProId} = useProductDetails()



    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const HandleTabs = (event, newValue) => {
        setTabValue(newValue)
    }


    return (
        <>
            <Box sx={{ flexGrow: 1  }}>
                <AppBar position="sticky"
                color="primary"
                elevation={3}
                    

                >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{}}
                        >
                            <DiamondIcon sx={{ fontSize: "45px", color: "rgba(255, 247, 0, 1)" }} />
                        </IconButton>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            New Fashion
                        </Typography>
                        <Box sx={{
                            width: "300px",
                            display: {md:"flex",sm:"none"},
                            gap: "30px",
                            

                        }} >
                            <IconButton size="large" color="inherit">
                                <ShoppingCartIcon sx={{ fontSize: "35px" }} />
                            </IconButton>
                            <IconButton size='large' color="inherit">
                                <NotificationsIcon sx={{ fontSize: "35px" }} />
                            </IconButton>
                            <IconButton>
                                <Avatar sx={{ width: "50px", height: "50px" }} src={personalImg}>

                                </Avatar>
                            </IconButton>
                        </Box  >

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="men"
                            onClick={handleDrawerToggle}
                            sx={{ ml: 2, display: { md: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        < Drawer
                            anchor='left'
                            open={mobileOpen}
                            onClick={handleDrawerToggle}
                        >
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                New Fashon
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                New Fashon
                            </Typography>
                        </ Drawer>
                    </Toolbar>
                    <Toolbar>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: "space-evenly",gap:"20px" }}>
                            <Link to="/" className='navbar-tabs'> Home</Link>
                            <Link to="/shop" className='navbar-tabs'> Shop</Link>
                            <Link to="/card" className='navbar-tabs'> Card</Link>
                            <Link to="/contact" className='navbar-tabs'> Contact</Link>

                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    )
}