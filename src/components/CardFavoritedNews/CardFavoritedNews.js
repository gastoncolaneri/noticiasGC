import React, { useContext, useState } from "react";
import { Box, Container, Grid, Tooltip, Typography } from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { generalStyles } from "./CardFavoritedNews.style";
import Loader from "../Loader/Loader.component";
import NewsContext from "../../context/news/NewsContext";
import { getFavoritedNewsLS } from "../../utils/localStorage";
import CustomSnackbar from "../Snackbar/CustomSnackbar.component";

export default function CardFavoritedNews() {
  const [open, setOpen] = useState(false);
  const newsContext = useContext(NewsContext);
  const { isLoading, deleteNews } = newsContext;
  const classes = generalStyles();
  const favoritedNews = getFavoritedNewsLS();

  return (
    <>
      <Box className={classes.container}>
        <Container maxWidth="xl" sx={{ padding: 2 }}>
          <Grid container justifyContent="flex-start">
            {favoritedNews.length ? (
              favoritedNews.map((item, index) => {
                return (
                  <Grid xs={12} className={classes.card} key={index} item>
                    <Box>
                      <Tooltip title="Eliminar noticia">
                        <DeleteForeverOutlinedIcon
                          color="secondary"
                          sx={{ marginRight: 2 }}
                          onClick={() => {
                            deleteNews(item);
                            setOpen(true);
                          }}
                        />
                      </Tooltip>
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
              })
            ) : (
              <div>No hay noticias en la sección de favoritos</div>
            )}
          </Grid>
        </Container>
      </Box>
      <CustomSnackbar
        isOpen={open}
        setIsOpen={setOpen}
        messageAlert="La noticia se eliminó de la sección de favoritos"
        typeAlert="success"
        hideTime={2000}
      />
      <Loader open={isLoading} />
    </>
  );
}
