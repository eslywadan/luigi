import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/home.js';
import Dataexploration from './views/data_exploration.js';
import Sample2 from './views/sample2.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router basename="microfrontend">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dataexploration" element={<Dataexploration />} />
        <Route path="/sample22" element={<Sample2 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
