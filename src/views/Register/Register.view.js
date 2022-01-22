import React, { useState } from 'react';
import { generalStyles } from './Register.styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material';
import { app } from '../../utils/Firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { emailValidation } from '../../utils/validations';
import { isEmpty, size } from 'lodash';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader.component';

export default function Register() {
  const classes = generalStyles();
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [openLoader, setOpenLoader] = useState(false);
  const [typeAlert, setTypeAlert] = useState('success');
  const [messageAlert, setMessageAlert] = useState('');

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
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
    if (
      isEmpty(formData.nombre) ||
      isEmpty(formData.apellido) ||
      isEmpty(formData.email) ||
      isEmpty(formData.password)
    ) {
      setTypeAlert('error');
      setMessageAlert('Todos los campos son obligatorios');
      setOpen(true);
    } else if (!emailValidation(formData.email)) {
      setTypeAlert('error');
      setMessageAlert('Por favor ingrese un correo válido');
      setOpen(true);
    } else if (size(formData.password) < 8) {
      setTypeAlert('error');
      setMessageAlert('La contraseña debe contener al menos 8 caracteres');
      setOpen(true);
    } else {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          setTypeAlert('success');
          setMessageAlert('Su cuenta ha sido creada exitosamente');
          setOpen(true);
          setOpenLoader(true);
          setTimeout(() => {
            setOpenLoader(false);
            navigate('/addNews');
          }, 2000);
        })
        .catch(() => {
          setTypeAlert('error');
          setMessageAlert('El correo ingresado ya se encuentra en uso');
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
          <Grid container justifyContent="center" xs={12}>
            <Grid
              item
              xs={12}
              sm={8}
              md={7}
              lg={5}
              textAlign="center"
              className={classes.contactCard}
            >
              <Typography variant="h4" sx={{ marginBottom: 3 }}>
                Completá los campos para crear tu cuenta
              </Typography>
              <form action="">
                <Grid container xs={12} spacing={2} justifyContent="center">
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Nombre"
                      variant="outlined"
                      color="secondary"
                      onChange={(e) => onChange(e, 'nombre')}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Apellido"
                      variant="outlined"
                      color="secondary"
                      onChange={(e) => onChange(e, 'apellido')}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      id="outlined-required"
                      label="Correo electrónico"
                      variant="outlined"
                      color="secondary"
                      onChange={(e) => onChange(e, 'email')}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-required"
                      label="Contraseña"
                      variant="outlined"
                      color="secondary"
                      type="password"
                      onChange={(e) => onChange(e, 'password')}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={onSubmit}
                    >
                      Registrarse
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
