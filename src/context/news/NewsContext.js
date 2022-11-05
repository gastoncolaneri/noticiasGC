import { createContext } from "react";
import { newsInitialState } from "./newsReducer";

const NewsContext = createContext(newsInitialState);

export default NewsContext;
