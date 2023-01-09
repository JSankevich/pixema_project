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
import {Search} from "./components/Header/Search";
import {SearchList} from "./components/FilmsListSearch";
import {SignInPage} from "./pages/SignIn";


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


          <Layout>
              <Routes>
              <Route path="/" element={<FilmsList />} />
              <Route path="/film/:id" element={<FilmsListSelected />} />
              <Route path="/SignIn" element={<SignInPage />} />
              <Route path="/SignUp" element={<SignUpForm />}  />
              <Route path="/*" element={<NotFound />} />
              </Routes>
          </Layout>
      </div>
        <ReactSwitch
            checked={theme === "light"}
            onChange={toggleTheme}
            checkedIcon={false}
            uncheckedIcon={false}
        />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
