import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import * as React from "react";
import {
  Route, Routes,
} from "react-router-dom";

import Switch from 'react-bootstrap/Switch';
import { Helmet } from 'react-helmet';

import RenderNavbar from './components/navbar';
import Render0 from './components/page1';

const TITLE = 'Lab-06-01';

function App() {
  
  return (
    <div>

      <Helmet>
      <title>{ TITLE }</title>
      </Helmet>

      <RenderNavbar />

      <div>
        <Switch className='mb-2'> 

        <form className='container2'>

        </form >
          <div id='saveBody'>
          <Routes>
    
            <Route exact path="/page1" element={<Render0 />}></Route>

          </Routes>
          </div>

        </Switch>

      </div>

    </div>
  );
}

export default App;
