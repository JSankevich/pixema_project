import React from 'react';
import { Global } from './global_style';
import {Layout} from "./layout";
import {LittleCard} from "./components/littleCardRreview";
import {FilmsList} from "./components/FilmsList";


function App() {
  return (
    <>
      <Global />
      <div className="App">
          <Layout>
                <FilmsList />
          </Layout>
      </div>
    </>
  );
}

export default App;
