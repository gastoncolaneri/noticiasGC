import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from '@mui/material';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { generalStyles } from './CardNews.style';
import Loader from '../Loader/Loader.component';

export default function CarNews() {
  const classes = generalStyles();
  const [news, setNews] = useState([]);
  const [openLoader, setOpenLoader] = useState(false);
  const [paramUrl, setparamUrl] = useState('business');
  const [paramUrl2, setparamUrl2] = useState('ar');
  const [urlGetNews, setUrlGetNews] = useState(
    `https://newsapi.org/v2/top-headlines?country=${paramUrl2}&category=${paramUrl}&apiKey=e3b5b11d4944459fac8192812ab214c4&sortBy=publishedAt`
  );

  const handleChange = (event, newparamUrl) => {
    setparamUrl(newparamUrl);
  };

  const handleChange2 = (event, newparamUrl) => {
    setparamUrl2(newparamUrl);
  };

  async function newsService() {
    let apiRequest = await fetch(urlGetNews);
    let response = await apiRequest.json();
    return response;
  }

  useEffect(() => {
    setUrlGetNews(
      `https://newsapi.org/v2/top-headlines?country=${paramUrl2}&category=${paramUrl}&apiKey=e3b5b11d4944459fac8192812ab214c4&sortBy=publishedAt`
    );
  }, [paramUrl, paramUrl2]);

  useEffect(() => {
    setOpenLoader(true);
    newsService().then((response) => {
      setNews(response.articles);
      setOpenLoader(false);
    });
  }, [urlGetNews]);

  return (
    <>
      <Box className={classes.container}>
        <Container maxWidth="xl" sx={{ padding: 4 }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: '600',
              }}
            >
              ETIQUETAS
            </Typography>
            <Stack direction="row">
              <ToggleButtonGroup
                color="secondary"
                value={paramUrl}
                exclusive
                onChange={handleChange}
                sx={{ marginBottom: 2, marginRight: 2 }}
              >
                <ToggleButton value="business">Negocios</ToggleButton>
                <ToggleButton value="sports">Deportes</ToggleButton>
                <ToggleButton value="health">Salud</ToggleButton>
              </ToggleButtonGroup>
              <ToggleButtonGroup
                color="secondary"
                value={paramUrl2}
                exclusive
                onChange={handleChange2}
                sx={{ marginBottom: 2, marginRight: 2 }}
              >
                <ToggleButton value="ar">Argentina</ToggleButton>
                <ToggleButton value="mx">México</ToggleButton>
                <ToggleButton value="us">Estados Unidos</ToggleButton>
              </ToggleButtonGroup>
            </Stack>
            {news.map((item, index) => {
              return (
                <Grid xs={12} className={classes.card}>
                  <Box>
                    <Tooltip title="Archivar noticia">
                      <ArchiveOutlinedIcon
                        color="secondary"
                        sx={{ marginRight: 2 }}
                      />
                    </Tooltip>
                    <Typography
                      variant="h5"
                      sx={{
                        display: 'inline',
                        fontWeight: '600',
                        marginBottom: 10,
                      }}
                    >
                      {item.title ? item.title : 'Sin título'}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        marginTop: 2,
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Box textAlign="right">
                      <Typography variant="subtitle1">
                        Autor: {item.author ? item.author : 'Anónimo'}
                      </Typography>
                      <Typography variant="subtitle2">
                        Creada: {item.publishedAt.slice(0, 10)}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      <Loader open={openLoader} />
    </>
  );
}
