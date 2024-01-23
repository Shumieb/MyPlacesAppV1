import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import LayoutPage from './Pages/LayoutPage';
import HomePage from "./Pages/HomePage"
import PlacesPage from './Pages/PlacesPage';
import PlacePage from './Pages/PlacePage';
import AddNewPlace from './Pages/AddNewPlace';
import EditPlacePage from './Pages/EditPlacePage';
import AboutPage from "./Pages/AboutPage";
import NoPage from "./Pages/NoPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="places" element={<PlacesPage />} >
            <Route path=":placeId" element={<PlacePage />} />
            <Route path="new" element={<AddNewPlace />} />
            <Route path="edit" element={<EditPlacePage />} />
          </Route>
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


