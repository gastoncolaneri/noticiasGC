import React from 'react';
import { generalStyles } from './Home.styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Banner from '../../assets/Banner.png';
import { Button, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const classes = generalStyles();
  const LinkButton = (props) => {
    return (
      <Button
        color="secondary"
        variant="contained"
        component={NavLink}
        {...props}
      ></Button>
    );
  };

  return (
    <>
      <img src={Banner} alt="portada" className={classes.banner} />
      <Box className={classes.container}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={6} textAlign="center">
              <Typography variant="h3">Bienvenido a Noticias GC!</Typography>
              <Typography variant="h6">
                En este portal vas a encontrar las últimas noticias del mundo,
                teniendo la posibilidad de archivar aquellas que no son de tu
                interés.
              </Typography>
              <Grid item xs={12} sx={{ marginTop: 3, marginBottom: 30 }}>
                <Stack spacing={5} direction="row" justifyContent="center">
                  <LinkButton to="/news">Noticias nuevas</LinkButton>
                  <LinkButton to="/archivedNews">
                    Noticias archivadas
                  </LinkButton>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
