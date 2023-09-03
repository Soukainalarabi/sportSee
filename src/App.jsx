import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './page';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/:id" element={<Page />} />

        </Routes>
      </Router>
    </React.StrictMode>
  );
}
export default App;
