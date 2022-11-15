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
import { useForm } from "react-hook-form";
import CustomSnackbar from "../../components/Snackbar/CustomSnackbar.component";

export default function Register() {
  const { handleSubmit } = useForm();
  const newsContext = useContext(NewsContext);
  const { addNews } = newsContext;
  const classes = generalStyles();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    type: "",
    country: "",
  });
  const [open, setOpen] = useState(false);

  const onSubmit = () => {
    const tmpNews = {
      title: formData.title,
      description: formData.description,
      author: formData.author,
      publishedAt: moment().format("LLL"),
      type: formData.type,
      country: formData.country,
    };
    setOpen(true);
    addNews(tmpNews);
    setFormData({
      title: "",
      author: "",
      description: "",
      type: "",
      country: "",
    });
  };

  return (
    <>
      <Box className={classes.container} component="form" noValidate={false}>
        <Container maxWidth="xl" sx={{ padding: 5 }}>
          <form>
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
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      id="outlined-required"
                      name="author"
                      label="Autor"
                      variant="outlined"
                      color="secondary"
                      value={formData.author}
                      onChange={(e) =>
                        setFormData({ ...formData, author: e.target.value })
                      }
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
                        value={formData.type}
                        label="Tipo"
                        onChange={(e) =>
                          setFormData({ ...formData, type: e.target.value })
                        }
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
                        value={formData.country}
                        label="País"
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
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
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      rows={3}
                      multiline
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Enviar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
      <CustomSnackbar
        isOpen={open}
        setIsOpen={setOpen}
        messageAlert="La noticia se ha subido correctamente"
        typeAlert="success"
      />
    </>
  );
}
