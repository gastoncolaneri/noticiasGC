import React from 'react';
import { generalStyles } from './Contact.styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';

export default function Contact() {
  const classes = generalStyles();

  return (
    <>
      <Box className={classes.container}>
        <Container maxWidth="xl" sx={{ padding: 5 }}>
          <Grid container justifyContent="center" xs={12}>
            <Grid
              item
              xs={12}
              sm={10}
              md={9}
              lg={7}
              textAlign="center"
              className={classes.contactCard}
            >
              <Typography variant="h4" sx={{ marginBottom: 3 }}>
                Contactate con nosotros!
              </Typography>
              <Grid container xs={12} spacing={2} justifyContent="center">
                <Grid item xs={12} md={4}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Nombre"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Apellido"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Correo electrónico"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-required"
                    label="Cod.Area"
                    variant="outlined"
                    color="secondary"
                    type="number"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-required"
                    label="Teléfono"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-required"
                    label="Celular"
                    variant="outlined"
                    color="secondary"
                    type="number"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-textarea"
                    label="Ingrese su consulta"
                    color="secondary"
                    maxRows={6}
                    rows={3}
                    multiline
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button color="secondary" variant="contained">
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
