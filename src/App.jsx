import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Erreur from './components/Erreur';
import Page from './page';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/:id" element={<Page />} />
          <Route path="*" element={<Erreur />} />

        </Routes>
      </Router>
    </React.StrictMode>
  );
}
export default App;
