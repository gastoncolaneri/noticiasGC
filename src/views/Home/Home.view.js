import React, { useContext } from "react";
import { generalStyles } from "./Home.styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Banner from "../../assets/Banner.png";
import { Button, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import UserContext from "../../context/user/UserContext";

export default function Home() {
  const userContext = useContext(UserContext);
  const { isUserLogged } = userContext;
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
            <Grid
              item
              xs={12}
              sm={8}
              textAlign="center"
              className={classes.card}
            >
              <Typography variant="h3">Bienvenido a Noticias GC!</Typography>
              <Typography variant="h6">
                En este portal vas a encontrar las últimas noticias del mundo,
                teniendo la posibilidad de archivar aquellas que no son de tu
                interés.
              </Typography>
              <Grid item xs={12} sx={{ marginTop: 2, marginBottom: 4 }}>
                <LinkButton to="/news">Noticias nuevas</LinkButton>
              </Grid>

              {!isUserLogged && (
                <>
                  <Typography variant="h6">
                    Primero vas a tener que iniciar sesión, o registrarte en
                    caso de no tener un usuario creado.
                  </Typography>
                  <Grid item xs={12} sx={{ marginTop: 2, marginBottom: 4 }}>
                    <Stack spacing={2} direction="row" justifyContent="center">
                      <LinkButton to="/register">Registrarse</LinkButton>
                      <LinkButton to="/login">Iniciar sesión</LinkButton>
                    </Stack>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
