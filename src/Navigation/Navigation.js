import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/Home/Home.view';
import News from '../views/News/News.view';
import ArchivedNews from '../views/ArchivedNews/ArchivedNews.view';
import Contact from '../views/Contact/Contact.view';
import NotFound from '../views/NotFound/NotFound.view';
import NavBar from '../components/NavBar/NavBar.component';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from '../utils/customTheme';
import Footer from '../components/Footer/Footer.component';

export function Navigation() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="archivedNews" element={<ArchivedNews />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Footer />
      </ThemeProvider>
    </>
  );
}
