import React, { useState, useEffect } from 'react';
import './Apod.css';

const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;

const Apod = () => {
    const [apodData, setApodData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchApod();
    }, []);

    const fetchApod = () => {
        fetch(APOD_URL)
            .then(response => response.json())
            .then(data => {
                console.log(`Data from API`, data);
                console.log(`URL:`, data.url);
                setApodData(data);
                setLoading(false);
            })
            .catch(err => console.error('Error fetching APOD:', err));
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="apod--container">
            <h2>Astronomy Picture of the Day</h2>
            {apodData && (
                <>
                    <h3>{apodData.title}</h3>
                    <p>{apodData.date}</p>
                    <img 
                        className="apod--image"
                        src={apodData.url} 
                        alt={apodData.title} 
                    />
                    <p>{apodData.explanation}</p>
                </>
            )}
        </div>
    );
};

export default Apod;
