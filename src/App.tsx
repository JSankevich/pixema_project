import React, {createContext, useState} from 'react';
import { Global } from './global_style';
import {Layout} from "./layout";
import {FilmsList} from "./components/FilmsList";
import {Route, Routes} from "react-router-dom";
import {FilmsListSelected} from "./components/FilmListSeleted";
import {NotFound} from "./components/ErrorNotFound";
import {SignIn} from "./components/Forms/SignIn";
import {SignUpForm} from "./components/Forms/SignUp";
import ReactSwitch from "react-switch";
import {Theme} from "./components/ThemeContext";

export const ThemeContext = createContext ("dark");

function App() {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((theme) => (theme === "dark" ? "light" : "dark"))
    }

    return (
    <>
    <ThemeContext.Provider value={theme}>
      <Global />
      <div className="App" id={theme}>

          <ReactSwitch
              checked={theme === "light"}
              onChange={toggleTheme}
              checkedIcon={false}
              uncheckedIcon={false}
          />
          <Layout>
              <Routes>
              <Route path="/" element={<FilmsList />} />
              <Route path="/film/:id" element={<FilmsListSelected />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/SignUp" element={<SignUpForm />}  />
              <Route path="/*" element={<NotFound />} />
              </Routes>
          </Layout>
      </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
