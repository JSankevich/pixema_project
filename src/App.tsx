import React from 'react';
import { Global } from './global_style';
import {Layout} from "./layout";
import {Route, Routes} from "react-router-dom";
import {SignInPage} from "./pages/SignIn";
import {SignUnPage} from "./pages/SignUp";
import {NotFoundPage} from "./pages/NotFound";
import {SearchPage} from "./pages/Search";
import {MainPage} from "./pages/Main";
import {FilmPage} from "./pages/SeletedFilm";

function App() {

    return (
    <>
        <Global />
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/Search" element={<SearchPage />} />
                    <Route path="/film/:id" element={<FilmPage />} />
                    <Route path="/SignIn" element={<SignInPage />} />
                    <Route path="/SignUp" element={<SignUnPage />}  />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </Layout>
        </div>
    </>
  );
}

export default App;
