import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { generalStyles } from './Footer.styles';

export default function NavBar() {
  const classes = generalStyles();

  return (
    <Box className={classes.containerFooter}>
      <Grid container justifyContent="center" sx={{ marginBottom: 1 }}>
        <Grid item className={classes.grid}>
          <FacebookIcon color="primary" sx={{ fontSize: 30 }} />
        </Grid>
        <Grid item className={classes.grid}>
          <WhatsAppIcon color="primary" sx={{ fontSize: 30 }} />
        </Grid>
        <Grid item className={classes.grid}>
          <TwitterIcon color="primary" sx={{ fontSize: 30 }} />
        </Grid>
        <Grid item className={classes.grid}>
          <InstagramIcon color="primary" sx={{ fontSize: 30 }} />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={12} className={classes.grid}>
          <Typography variant="subtitle" color="primary">
            © 2022 Gaston Colaneri
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
