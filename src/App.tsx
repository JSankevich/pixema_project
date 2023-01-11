import React, {createContext, useState} from 'react';
import { Global } from './global_style';
import {Layout} from "./layout";
import {FilmsList} from "./components/FilmsList";
import {Route, Routes} from "react-router-dom";
import {FilmsListSelected} from "./components/FilmListSeleted";
import {NotFound} from "./components/ErrorNotFound";
import {SignUpForm} from "./components/Forms/SignUp";
import {SearchList} from "./components/FilmsListSearch";
import {SignInPage} from "./pages/SignIn";

function App() {

    return (
    <>
      <Global />
      <div className="App">
          <Layout>
              <Routes>
              <Route path="/" element={<FilmsList />} />
              <Route path="/Search" element={<SearchList />} />
              <Route path="/film/:id" element={<FilmsListSelected />} />
              <Route path="/SignIn" element={<SignInPage />} />
              <Route path="/SignUp" element={<SignUpForm />}  />
              <Route path="/*" element={<NotFound />} />
              </Routes>
          </Layout>
      </div>
    </>
  );
}

export default App;
