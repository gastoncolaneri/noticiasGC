import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/Home/Home.view';
import News from '../views/News/News.view';
import ArchivedNews from '../views/ArchivedNews/ArchivedNews.view';
import Register from '../views/Register/Register.view';
import Login from '../views/Login/Login.view';
import AddNews from '../views/AddNews/AddNews.view';
import NavBar from '../components/NavBar/NavBar.component';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../utils/Firebase';

import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from '../utils/customTheme';
import Footer from '../components/Footer/Footer.component';

export function Navigation() {
  const auth = getAuth(app);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setTimeout(() => {
        user ? setUserLogin(true) : setUserLogin(false);
      }, 2000);
    });
  }, [userLogin]);

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Router>
          <NavBar />
          {userLogin ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="news" element={<News />} />
              <Route path="archivedNews" element={<ArchivedNews />} />
              <Route path="addNews" element={<AddNews />} />
              <Route path="*" element={<Home />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="news" element={<News />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Home />} />
            </Routes>
          )}
        </Router>
        <Footer />
      </ThemeProvider>
    </>
  );
}
