import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import About from './components/About';
import List from './components/List';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
          <Route path="/" element={<List />} />
          <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
