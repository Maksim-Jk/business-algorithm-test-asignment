import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import {MouseEvent, useState} from "react";
import {NavLink} from "react-router-dom";

const pages = [{
    name: 'Сотрудники',
    path: '/employees'
},
    {
        name: 'Список работ',
        path: '/work-list'
    },
    {
        name: 'Календарь',
        path: '/calendar'
    }];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu} sx={{
                                    'a': {
                                        display: 'block',
                                        textDecoration: 'none',
                                        color: '#000000'
                                    },
                                    '&:has(.active)': {background: '#2182e7', color: '#ffffff'},
                                    '&:has(.active) a': {color: '#ffffff'},
                                }}>
                                    <NavLink to={page.path}>{page.name}</NavLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <MenuItem
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    borderRadius: '6px',
                                    display: 'block',
                                    'a': {
                                        color: 'white',
                                        display: 'block',
                                        textDecoration: 'none',
                                    },
                                    '&:has(.active)': {background: '#2182e7'},
                                }}
                            >
                                <NavLink
                                    key={page.name}
                                    to={page.path}
                                    onClick={handleCloseNavMenu}
                                >
                                    {page.name}
                                </NavLink>
                            </MenuItem>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;