import { Navigation } from "./Navigation/Navigation";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./utils/customTheme";
import UserState from "./context/user/UserState";
import NewsState from "./context/news/NewsState";
import Footer from "./components/Footer/Footer.component";
import { generalStyles } from "./App.styles";

function App() {
  const classes = generalStyles();

  return (
    <ThemeProvider theme={customTheme}>
      <UserState>
        <NewsState>
          <div className={classes.mainContainer}>
            <Navigation />
            <Footer />
          </div>
        </NewsState>
      </UserState>
    </ThemeProvider>
  );
}

export default App;
