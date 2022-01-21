import React from 'react';
import { Box, Container, Grid, Tooltip, Typography } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { generalStyles } from './CardArchivedNews.style';

export default function CardArchivedNews() {
  const classes = generalStyles();

  return (
    <Box className={classes.container}>
      <Container maxWidth="xl" sx={{ padding: 2 }}>
        <Grid container justifyContent="flex-start">
          <Grid xs={12} className={classes.card}>
            <Box maxWidth="xl">
              <Typography variant="h4" sx={{ display: 'inline' }}>
                Título
              </Typography>
              <Tooltip title="Eliminar noticia">
                <DeleteForeverOutlinedIcon color="secondary" />
              </Tooltip>
              <Typography variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Box textAlign="right">
                <Typography variant="subtitle1">
                  Autor: Felipe Gonzalez
                </Typography>
                <Typography variant="subtitle2">Creada: 21/01/2022</Typography>
                <Typography variant="subtitle2">
                  Archivada: 21/01/2022
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} className={classes.card}>
            <Box maxWidth="xl">
              <Typography variant="h4" sx={{ display: 'inline' }}>
                Título
              </Typography>
              <Tooltip title="Eliminar noticia">
                <DeleteForeverOutlinedIcon color="secondary" />
              </Tooltip>
              <Typography variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Box textAlign="right">
                <Typography variant="subtitle1">
                  Autor: Felipe Gonzalez
                </Typography>
                <Typography variant="subtitle2">Creada: 21/01/2022</Typography>
                <Typography variant="subtitle2">
                  Archivada: 21/01/2022
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} className={classes.card}>
            <Box maxWidth="xl">
              <Typography variant="h4" sx={{ display: 'inline' }}>
                Título
              </Typography>
              <Tooltip title="Eliminar noticia">
                <DeleteForeverOutlinedIcon color="secondary" />
              </Tooltip>
              <Typography variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Box textAlign="right">
                <Typography variant="subtitle1">
                  Autor: Felipe Gonzalez
                </Typography>
                <Typography variant="subtitle2">Creada: 21/01/2022</Typography>
                <Typography variant="subtitle2">
                  Archivada: 21/01/2022
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} className={classes.card}>
            <Box maxWidth="xl">
              <Typography variant="h4" sx={{ display: 'inline' }}>
                Título
              </Typography>
              <Tooltip title="Eliminar noticia">
                <DeleteForeverOutlinedIcon color="secondary" />
              </Tooltip>
              <Typography variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Box textAlign="right">
                <Typography variant="subtitle1">
                  Autor: Felipe Gonzalez
                </Typography>
                <Typography variant="subtitle2">Creada: 21/01/2022</Typography>
                <Typography variant="subtitle2">
                  Archivada: 21/01/2022
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
