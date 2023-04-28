import React, { useState } from 'react';
import Header from '../components/commun/Header';
import '../css/home.css';

import SearchBar from '../components/commun/SearchBar';
import Card from '../components/home/Card';
import axios from 'axios';

function Home() {
    const [results, setResults] = useState([]);
    const [limit, setLimit] = useState(12);

    const handleSearch = async (keyword, location, isFullTime) => {
        try {
            const response = await axios.get(`/api/search?position=${keyword}&location=${location}&isFullTime=${isFullTime}`);
            setResults(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLoadMore = () => {
        setLimit(limit + 12);
    };

    return (
        <>
            <Header />
            <div className='searched'>
                <SearchBar search={handleSearch} />
            </div>

            <section>
                <Card cards={results.slice(0, limit)} />
                {results.length <= limit ? (
                    <p className='no-more'>Can't load more</p>
                ) : (
                    <div className='load-more'>
                        <button onClick={handleLoadMore}>Load more</button>
                    </div>
                )}
            </section>
        </>
    );
}

export default Home;