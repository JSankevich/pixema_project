import React from 'react';
import { Global } from './global_style';
import {Layout} from "./layout";
import {LittleCard} from "./components/littleCardRreview";
import {FilmsList} from "./components/FilmsList";
import {Route, Routes} from "react-router-dom";
import {SelectedCard} from "./components/SelectedCard";
import {FilmsListSelected} from "./components/FilmListSeleted";


function App() {
  return (
    <>
      <Global />
      <div className="App">
          <Layout>
              <Routes>
              <Route path="/" element={<FilmsList />} />
              <Route path="/film/:id" element={<FilmsListSelected />} />
              </Routes>
          </Layout>
      </div>
    </>
  );
}

export default App;
