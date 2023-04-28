import React, { useState } from 'react';
import Header from '../components/commun/Header';
import '../css/Home.css'

import SearchBar from '../components/commun/SearchBar';
import Card from '../components/home/Card';
import axios from 'axios';

function Home() {
    const [results, setResults] = useState([]);

    const handleSearch = async (keyword, location, isFullTime) => {
        try {
            const response = await axios.get(`/api/search?position=${keyword}
            &location=${location}&isFullTime=${isFullTime}`);
            setResults(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Header />
            <div className='searched'>
                <SearchBar search={handleSearch} />
            </div>

            <section>
                <Card cards={results} />
            </section>
        </>
    );
}

export default Home;