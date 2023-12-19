import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home.view";
import News from "../views/News/News.view";
import Register from "../views/Register/Register.view";
import Login from "../views/Login/Login.view";
import AddNews from "../views/AddNews/AddNews.view";
import NavBar from "../components/NavBar/NavBar.component";
import UserContext from "../context/user/UserContext";
import FavoritedNews from "../views/FavoritedNews/FavoritedNews";

export function Navigation() {
  const userContext = useContext(UserContext);
  const { isUserLogged } = userContext;

  return (
    <Router>
      <NavBar />
      {isUserLogged ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="favoritedNews" element={<FavoritedNews />} />
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
  );
}
