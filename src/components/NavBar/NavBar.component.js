import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Logo from '../../assets/NoticiasGC2.png';
import { generalStyles } from './NavBar.styles';
import colors from '../../utils/colors';
import { Divider } from '@mui/material';

export default function NavBar() {
  const classes = generalStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const LinkButton = (props) => {
    return (
      <Button
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
        component={NavLink}
        {...props}
      ></Button>
    );
  };

  return (
    <AppBar position="sticky" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              <LinkButton
                to="/"
                sx={{ color: colors.COLOR_SECUNDARIO, display: 'block' }}
              >
                Inicio
              </LinkButton>
              <Divider />

              <LinkButton
                to="/news"
                sx={{ color: colors.COLOR_SECUNDARIO, display: 'block' }}
              >
                Noticias
              </LinkButton>
              <Divider />

              <LinkButton
                to="/archivedNews"
                sx={{ color: colors.COLOR_SECUNDARIO, display: 'block' }}
              >
                Noticias archivadas
              </LinkButton>
              <Divider />

              <LinkButton
                to="/contact"
                sx={{ color: colors.COLOR_SECUNDARIO, display: 'block' }}
              >
                Contacto
              </LinkButton>
            </Menu>
          </Box>
          <NavLink to="/">
            <Avatar alt="Logo" src={Logo} className={classes.logo} />
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <LinkButton to="/">Inicio</LinkButton>
            <LinkButton to="/news">Noticias</LinkButton>
            <LinkButton to="/archivedNews">Noticias archivadas</LinkButton>
            <LinkButton to="/contact">Contacto</LinkButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
