import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Collections_card from '../components/Collections_card/Collections_card';
import Sidebar from '../components/Sidebar/Sidebar';

const Collections = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div style={{ backgroundColor: '#f0ece8' }}>
            <Header />
            <div style={{ display: 'flex', padding: '15px' }}>
                <Sidebar onCategoryChange={handleCategoryChange} />
                <div style={{ maxWidth: '1400px' }}>
                    <Collections_card selectedCategory={selectedCategory} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Collections