import React, { useEffect, useState } from 'react';
import '../css/Rating.css';

const Ratings = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        try {
            const userData = JSON.parse(localStorage.getItem('userData')) || [];
            userData.sort((a, b) => b.score - a.score);
            setUsers(userData);
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    }, []);

    return (
        <div className='rating-body'>
            <div className="rating">
                <h2 className="rating__title">Ratings</h2>
                <ul className="rating__list">
                    {users.map((user, index) => (
                        <li
                            key={index}
                            className={`rating__item ${index === 0 ? 'rating__item--gold' : index === 1 ? 'rating__item--silver' : index === 2 ? 'rating__item--bronze' : ''}`}
                        >
                            <span className="rating__item-name">{user.name}</span>
                            <span className="rating__item-score">{user.score}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Ratings;
