// src/components/Courses.jsx
import React from 'react';
import './Courses.css';

const Courses = () => {
    return (
        <section id="courses" className="courses">
            <h2>Our Courses</h2>
            <ul>
                <li>Computer Science</li>
                <li>Business Administration</li>
                <li>Graphic Design</li>
                <li>Psychology</li>
            </ul>
        </section>
    );
};

export default Courses;