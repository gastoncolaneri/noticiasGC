import React from 'react';
import { generalStyles } from './AddNews.styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, TextField, Typography } from '@mui/material';

export default function Register() {
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
                Subí tu noticia
              </Typography>
              <Grid container xs={12} spacing={2} justifyContent="center">
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Título"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Categoría"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="outlined-textarea"
                    label="Descripción"
                    color="secondary"
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
