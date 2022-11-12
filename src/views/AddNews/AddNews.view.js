import React, { useContext, useState } from "react";
import moment from "moment";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import NewsContext from "../../context/news/NewsContext";

import { generalStyles } from "./AddNews.styles";

export default function Register() {
  const newsContext = useContext(NewsContext);
  const { addNews } = newsContext;
  const classes = generalStyles();
  const [titleInput, setTitleInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [typeNews, setTypeNews] = useState("");
  const [countryNews, setCountryNews] = useState("");

  const onSubmit = () => {
    const tmpNews = {
      title: titleInput,
      description: descriptionInput,
      author: authorInput,
      publishedAt: moment().format("LLL"),
      type: typeNews,
      country: countryNews,
    };
    addNews(tmpNews);
  };

  return (
    <>
      <Box className={classes.container} component="form" noValidate={false}>
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
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Autor"
                    variant="outlined"
                    color="secondary"
                    value={authorInput}
                    onChange={(e) => setAuthorInput(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl
                    fullWidth
                    required
                    color="secondary"
                    sx={{ textAlign: "left" }}
                  >
                    <InputLabel id="type-select-label">Tipo</InputLabel>
                    <Select
                      labelId="type-select-label"
                      id="type-select"
                      value={typeNews}
                      label="Tipo"
                      onChange={(e) => setTypeNews(e.target.value)}
                    >
                      <MenuItem value="business">Negocios</MenuItem>
                      <MenuItem value="sports">Deportes</MenuItem>
                      <MenuItem value="health">Salud</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl
                    fullWidth
                    required
                    color="secondary"
                    sx={{ textAlign: "left" }}
                  >
                    <InputLabel id="country-select-label">País</InputLabel>
                    <Select
                      labelId="country-select-label"
                      id="country-select"
                      value={countryNews}
                      label="País"
                      onChange={(e) => setCountryNews(e.target.value)}
                    >
                      <MenuItem value="ar">Argentina</MenuItem>
                      <MenuItem value="mx">México</MenuItem>
                      <MenuItem value="us">Estados Unidos</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="outlined-textarea"
                    label="Descripción"
                    color="secondary"
                    value={descriptionInput}
                    onChange={(e) => setDescriptionInput(e.target.value)}
                    rows={3}
                    multiline
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={onSubmit}
                  >
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
