import React, { useState } from 'react';
import Questions from '../components/Questions.js';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import '../css/Home.css';

const UserForm = ({ onSubmit }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
            />
            <button type="submit">Start Test</button>
        </form>
    );
};

const Home = () => {
    const [user, setUser] = useState(null);
    const [score, setScore] = useState(0);

    const handleUserSubmit = (name) => {
        const existingUser = getUserData(name);
        if (existingUser) {
            alert('This user already exists.');
            setUser(existingUser);
        } else {
            setUser({ name, score: 0 });
        }
    };

    const handleTestCompletion = (score) => {
        const updatedUser = { ...user, score };
        setUser(updatedUser);
        saveUserData(updatedUser);
    };

    const saveUserData = (userData) => {
        try {
            const existingData = JSON.parse(localStorage.getItem('userData')) || [];
            const userIndex = existingData.findIndex(user => user.name === userData.name);
            if (userIndex !== -1) {
                existingData[userIndex] = userData;
            } else {
                existingData.push(userData);
            }
            localStorage.setItem('userData', JSON.stringify(existingData));
        } catch (error) {
            alert('Error saving user data.');
        }
    };

    const getUserData = (name) => {
        try {
            const existingData = JSON.parse(localStorage.getItem('userData')) || [];
            return existingData.find(user => user.name === name) || null;
        } catch (error) {
            alert('Error retrieving user data.');
            return null;
        }
    };

    return (
        <div className='home'>
            <NavBar />
            <div className='home__questions'>
                {!user ? (
                    <UserForm onSubmit={handleUserSubmit} />
                ) : (
                    <Questions userName={user.name} onComplete={handleTestCompletion} />
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
