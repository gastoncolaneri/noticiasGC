import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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
import { Alert, Divider, Snackbar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { app } from '../../utils/Firebase';

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Loader from '../Loader/Loader.component';

export default function NavBar() {
  const classes = generalStyles();
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [userLogin, setUserLogin] = useState(null);
  const [open, setOpen] = useState(false);
  const [openLoader, setOpenLoader] = useState(false);
  const [typeAlert, setTypeAlert] = useState('success');
  const [messageAlert, setMessageAlert] = useState('');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const LinkButton = (props) => {
    return (
      <Button
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
        component={NavLink}
        style={({ isActive }) =>
          isActive
            ? {
                color: colors.COLOR_SECUNDARIO,
                backgroundColor: colors.COLOR_PRINCIPAL,
              }
            : {}
        }
        {...props}
      ></Button>
    );
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setTypeAlert('success');
        setMessageAlert('Ha cerrado sesión correctamente');
        setOpen(true);
        setOpenLoader(true);
        setTimeout(() => {
          setOpenLoader(false);
          navigate('/');
        }, 2000);
      })
      .catch(() => {
        setOpen(true);
        setTypeAlert('error');
        setMessageAlert('Ha ocurrido un error, por favor vuelva a intentarlo');
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setUserLogin(true) : setUserLogin(false);
    });
  }, [userLogin]);

  return (
    <>
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
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
              }}
            >
              <NavLink to="/">
                <Avatar alt="Logo" src={Logo} className={classes.logo} />
              </NavLink>
              <LinkButton to="/">Inicio</LinkButton>
              <LinkButton to="/news">Noticias</LinkButton>
            </Box>
            {userLogin ? (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <LinkButton
                    to="/addNews"
                    sx={{ color: colors.COLOR_SECUNDARIO, display: 'block' }}
                    onClick={handleClose}
                  >
                    Agregar noticia
                  </LinkButton>
                  <Divider />

                  <LinkButton
                    to="/archivedNews"
                    sx={{ color: colors.COLOR_SECUNDARIO, display: 'block' }}
                    onClick={handleClose}
                  >
                    Noticias archivada
                  </LinkButton>
                  <Divider />

                  <LinkButton
                    to="/"
                    sx={{ color: colors.COLOR_SECUNDARIO, display: 'block' }}
                    onClick={logOut}
                  >
                    Cerrar sesión
                  </LinkButton>
                </Menu>
              </div>
            ) : (
              <LinkButton to="/login">Iniciar Sesión</LinkButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={typeAlert}
          sx={{ width: '100%' }}
        >
          {messageAlert}
        </Alert>
      </Snackbar>
      <Loader open={openLoader} />
    </>
  );
}
