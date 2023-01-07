import React from 'react';
import { Global } from './global_style';
import {Layout} from "./layout";
import {FilmsList} from "./components/FilmsList";
import {Route, Routes} from "react-router-dom";
import {FilmsListSelected} from "./components/FilmListSeleted";
import {NotFound} from "./components/ErrorNotFound";
import {SignIn} from "./components/Forms/SignIn";
import {SignUpForm} from "./components/Forms/SignUp";

function App() {
  return (
    <>
      <Global />
      <div className="App">
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
    </>
  );
}

export default App;
