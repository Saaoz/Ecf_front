import React, { useState } from 'react';
import Header from '../components/commun/Header';
import '../css/home.css'

import SearchBar from '../components/commun/SearchBar';
import Card from '../components/home/Card';



function Home() {
    const [results, setResults] = useState([]);

    const handleSearch = (keyword, location, isFullTime) => {
      // Effectuer une recherche avec les paramètres passés
      // Mettre les résultats dans l'état du composant
      setResults(results);
    }
    

    return (
        <>
            <Header/>

            <div className='searched'>
                <SearchBar search={handleSearch}/>
            </div>

            <section>
                <Card/>
            </section>
        </>
    );
}

export default Home;