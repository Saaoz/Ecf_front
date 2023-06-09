import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import SingleJob from './components/single/SingleJob';
import './css/App.css';
import './css/reset.css';
import './css/helpers.css';
import Formulaire from './pages/Formulaire';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* if link doesn't work free back to home  */}
				<Route path="*" element={<Home />} />

				<Route path="/admin" element={<Admin />} />

				<Route path="/admin/formulaire" element={<Formulaire />} />

				{/* Ajouter la route pour SingleJob */}
				<Route path="/single-job/:id" element={<SingleJob />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;