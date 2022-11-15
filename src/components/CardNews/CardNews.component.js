import React, { useContext, useEffect, useState } from "react";
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
import { generalStyles } from "./CardNews.style";
import Loader from "../Loader/Loader.component";
import NewsContext from "../../context/news/NewsContext";
import CustomSnackbar from "../Snackbar/CustomSnackbar.component";
import UserContext from "../../context/user/UserContext";
import { getArchivedNewsLS } from "../../utils/localStorage";

const CardNews = () => {
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
  const userContext = useContext(UserContext);
  const { isUserLogged } = userContext;
  const classes = generalStyles();
  const [news, setNews] = useState([]);
  const [open, setOpen] = useState(false);

  const archivedNews = getArchivedNewsLS();

  const isArchived = (news) => {
    return archivedNews?.find((item) => item?.url === news?.url);
  };

  const isTypeSelected = (value) => {
    return value === typeNews;
  };

  const isCountrySelected = (value) => {
    return value === countryNews;
  };
  const handleClick = (news) => {
    if (isArchived(news)) {
      return;
    }
    archiveNews(news);
    setOpen(true);
  };

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

  return (
    <Box className={classes.container}>
      <Container sx={{ padding: 2 }}>
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
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "flex-start", sm: "center" },
              width: "100%",
            }}
          >
            <ToggleButtonGroup
              color="secondary"
              exclusive
              onChange={changeType}
              sx={{ marginBottom: 2, marginRight: 2 }}
            >
              <ToggleButton
                value="business"
                selected={isTypeSelected("business")}
                sx={{ flex: 1 }}
              >
                Negocios
              </ToggleButton>
              <ToggleButton
                value="sports"
                selected={isTypeSelected("sports")}
                sx={{ flex: 1 }}
              >
                Deportes
              </ToggleButton>
              <ToggleButton
                value="health"
                selected={isTypeSelected("health")}
                sx={{ flex: 1 }}
              >
                Salud
              </ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              color="secondary"
              exclusive
              onChange={changeCountry}
              sx={{ marginBottom: 2, marginRight: 2 }}
            >
              <ToggleButton
                value="ar"
                selected={isCountrySelected("ar")}
                sx={{ flex: 1 }}
              >
                Argentina
              </ToggleButton>
              <ToggleButton
                value="mx"
                selected={isCountrySelected("mx")}
                sx={{ flex: 1 }}
              >
                México
              </ToggleButton>
              <ToggleButton
                value="us"
                selected={isCountrySelected("us")}
                sx={{ flex: 3 }}
              >
                Estados Unidos
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>
          {news.map((item) => {
            return (
              <Grid xs={12} className={classes.card} key={item?.url} item>
                <Box>
                  {isUserLogged && (
                    <Tooltip
                      title={
                        isArchived(item)
                          ? "Noticia ya archivada"
                          : "Archivar noticia"
                      }
                    >
                      <ArchiveOutlinedIcon
                        color={isArchived(item) ? "disabled" : "secondary"}
                        sx={{ marginRight: 2 }}
                        onClick={() => {
                          handleClick(item);
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
                    {item?.description || ""}
                  </Typography>
                  <Box textAlign="right">
                    <Typography variant="subtitle1">
                      Autor: {item.author ? item.author : "Anónimo"}
                    </Typography>
                    <Typography variant="subtitle2">
                      Creada: {item?.publishedAt}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <CustomSnackbar
        isOpen={open}
        setIsOpen={setOpen}
        messageAlert="La noticia se agregó a la sección de noticias archivadas"
        typeAlert="success"
        hideTime={3000}
      />
      <Loader open={isLoading} />
    </Box>
  );
};

export default CardNews;
