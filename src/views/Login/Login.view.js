import React, { useState } from 'react';
import { generalStyles } from './Login.styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {
  Alert,
  Button,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { app } from '../../utils/Firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AccountCircle } from '@mui/icons-material';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { emailValidation } from '../../utils/validations';
import { isEmpty } from 'lodash';
import Loader from '../../components/Loader/Loader.component';

export default function Login() {
  const classes = generalStyles();
  const auth = getAuth(app);
  const [open, setOpen] = useState(false);
  const [openLoader, setOpenLoader] = useState(false);
  const [typeAlert, setTypeAlert] = useState('success');
  const [messageAlert, setMessageAlert] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const onSubmit = () => {
    if (isEmpty(formData.email) || isEmpty(formData.password)) {
      setTypeAlert('error');
      setMessageAlert('Todos los datos son requeridos');
      setOpen(true);
    } else if (!emailValidation(formData.email)) {
      setTypeAlert('error');
      setMessageAlert('Por favor ingrese un correo válido');
      setOpen(true);
    } else {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          setTypeAlert('success');
          setMessageAlert('Se inició sesión correctamente');
          setOpen(true);
          setOpenLoader(true);
          setTimeout(() => {
            setOpenLoader(false);
          }, 2000);
        })
        .catch(() => {
          setTypeAlert('error');
          setMessageAlert('Correo o contraseña inválidos');
          setOpen(true);
        });
    }
  };

  const onChange = (event, type) => {
    setFormData({ ...formData, [type]: event.target.value });
  };

  return (
    <>
      <Box className={classes.container}>
        <Container maxWidth="xl" sx={{ padding: 5 }}>
          <Grid container justifyContent="center">
            <Grid
              item
              xs={12}
              sm={9}
              md={7}
              lg={5}
              xl={4}
              textAlign="center"
              className={classes.card}
            >
              <Typography variant="h4" sx={{ marginBottom: 3 }}>
                Iniciar sesión
              </Typography>
              <form action="">
                <Grid container xs={12} spacing={2} justifyContent="center">
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Correo electrónico"
                      type="email"
                      variant="outlined"
                      color="secondary"
                      onChange={(e) => onChange(e, 'email')}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle color="secondary" />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Contraseña"
                      variant="outlined"
                      color="secondary"
                      type="password"
                      onChange={(e) => onChange(e, 'password')}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockRoundedIcon color="secondary" />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={onSubmit}
                    >
                      Ingresar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Alert
          onClose={handleClose}
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
