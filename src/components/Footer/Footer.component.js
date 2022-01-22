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
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FacebookIcon color="primary" sx={{ fontSize: 30 }} />
          </a>
        </Grid>
        <Grid item className={classes.grid}>
          <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
            <WhatsAppIcon color="primary" sx={{ fontSize: 30 }} />
          </a>
        </Grid>
        <Grid item className={classes.grid}>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <TwitterIcon color="primary" sx={{ fontSize: 30 }} />
          </a>
        </Grid>
        <Grid item className={classes.grid}>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <InstagramIcon color="primary" sx={{ fontSize: 30 }} />
          </a>
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
