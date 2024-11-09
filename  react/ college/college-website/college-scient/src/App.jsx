// src/App.jsx
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Courses from './components/Courses';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Courses />
            <Footer />
        </div>
    );
};

export default App;