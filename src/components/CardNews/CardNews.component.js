import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { generalStyles } from "./CardNews.style";
import { app } from "../../utils/Firebase";

import Loader from "../Loader/Loader.component";
import NewsContext from "../../context/news/NewsContext";

export default function CarNews() {
  const newsContext = useContext(NewsContext);
  const {
    getNews,
    allNews,
    changeTypeNews,
    changeCountryNews,
    typeNews,
    countryNews,
    isLoading,
    archiveNews,
  } = newsContext;
  const auth = getAuth(app);
  const classes = generalStyles();
  const [userLogin, setUserLogin] = useState(null);
  const [news, setNews] = useState([]);

  const changeType = (event, newparamUrl) => {
    changeTypeNews(newparamUrl);
  };

  const changeCountry = (event, newparamUrl) => {
    changeCountryNews(newparamUrl);
  };

  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, [typeNews, countryNews]);

  useEffect(() => {
    if (allNews?.length) {
      setNews(allNews);
    }
  }, [allNews]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setUserLogin(true) : setUserLogin(false);
    });
  }, [auth, userLogin]);

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
                fontWeight: "600",
              }}
            >
              ETIQUETAS
            </Typography>
            <Stack direction="row">
              <ToggleButtonGroup
                color="secondary"
                exclusive
                onChange={changeType}
                sx={{ marginBottom: 2, marginRight: 2 }}
              >
                <ToggleButton value="business">Negocios</ToggleButton>
                <ToggleButton value="sports">Deportes</ToggleButton>
                <ToggleButton value="health">Salud</ToggleButton>
              </ToggleButtonGroup>
              <ToggleButtonGroup
                color="secondary"
                exclusive
                onChange={changeCountry}
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
                    {userLogin && (
                      <Tooltip title="Archivar noticia">
                        <ArchiveOutlinedIcon
                          color="secondary"
                          sx={{ marginRight: 2 }}
                          onClick={() => {
                            archiveNews(item);
                          }}
                        />
                      </Tooltip>
                    )}
                    <Typography
                      variant="h5"
                      sx={{
                        display: "inline",
                        fontWeight: "600",
                        marginBottom: 10,
                      }}
                    >
                      {item.title ? item.title : "Sin título"}
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
                        Autor: {item.author ? item.author : "Anónimo"}
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
      <Loader open={isLoading} />
    </>
  );
}
