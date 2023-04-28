import React, { useState } from 'react';
import AdminHeader from '../components/admin/A_Header';
import '../css/home.css'

import SearchBar from '../components/commun/SearchBar';
import AdminCard from '../components/admin/A_Card';
import axios from 'axios';

function Home() {
    const [results, setResults] = useState([]);

    const handleSearch = async (keyword, location, isFullTime) => {
        try {
            const response = await axios.get(`/api/search?position=${keyword}&location=${location}&isFullTime=${isFullTime}`);
            setResults(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <AdminHeader/>
            <div className='searched'>
                <SearchBar search={handleSearch} />
            </div>

            <section>
                <AdminCard cards={results} />
            </section>
        </>
    );
}

export default Home;