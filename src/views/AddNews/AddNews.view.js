import React, { useContext, useState } from "react";
import moment from "moment";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {
  Button,
  FormControl,
  FormHelperText,
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasEmptyInput = Object.values(formData).some((item) => !item);

  const setInputData = (data) => {
    setFormData({ ...formData, ...data });
  };

  const onSubmit = () => {
    setIsSubmitting(true);
    if (!hasEmptyInput) {
      const tmpNews = {
        title: formData.title,
        description: formData.description,
        author: formData.author,
        publishedAt: moment().format("LLL"),
        type: formData.type,
        country: formData.country,
      };
      setOpen(true);
      setIsSubmitting(false);
      addNews(tmpNews);
      setFormData({
        title: "",
        author: "",
        description: "",
        type: "",
        country: "",
      });
    }
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
                      onChange={(e) => setInputData({ title: e.target.value })}
                      error={isSubmitting && !formData.title}
                      helperText={
                        isSubmitting &&
                        !formData.title &&
                        "Por favor, ingrese un título"
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
                      onChange={(e) => setInputData({ author: e.target.value })}
                      error={isSubmitting && !formData.author}
                      helperText={
                        isSubmitting &&
                        !formData.author &&
                        "Por favor, ingrese un autor"
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
                      error={isSubmitting && !formData.type}
                    >
                      <InputLabel id="type-select-label">Tipo</InputLabel>
                      <Select
                        labelId="type-select-label"
                        id="type-select"
                        value={formData.type}
                        label="Tipo"
                        onChange={(e) => setInputData({ type: e.target.value })}
                      >
                        <MenuItem value="business">Negocios</MenuItem>
                        <MenuItem value="sports">Deportes</MenuItem>
                        <MenuItem value="health">Salud</MenuItem>
                      </Select>
                      {isSubmitting && !formData.country && (
                        <FormHelperText>
                          Por favor, ingrese el tipo de noticia
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      fullWidth
                      required
                      color="secondary"
                      sx={{ textAlign: "left" }}
                      error={isSubmitting && !formData.country}
                    >
                      <InputLabel id="country-select-label">País</InputLabel>
                      <Select
                        labelId="country-select-label"
                        id="country-select"
                        value={formData.country}
                        label="País"
                        onChange={(e) =>
                          setInputData({ country: e.target.value })
                        }
                      >
                        <MenuItem value="ar">Argentina</MenuItem>
                        <MenuItem value="mx">México</MenuItem>
                        <MenuItem value="us">Estados Unidos</MenuItem>
                      </Select>
                      {isSubmitting && !formData.country && (
                        <FormHelperText>
                          Por favor, ingrese el país de la noticia
                        </FormHelperText>
                      )}
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
                        setInputData({ description: e.target.value })
                      }
                      error={isSubmitting && !formData.description}
                      helperText={
                        isSubmitting &&
                        !formData.description &&
                        "Por favor, ingrese una descripción"
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
