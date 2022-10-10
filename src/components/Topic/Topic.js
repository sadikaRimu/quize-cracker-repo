import React from 'react';

const Topic = ({ topic }) => {
    const { name, logo, total } = topic;
    console.log(topic);
    return (
        <div>
            <img src={logo} alt='' />
            <h3>{name}</h3>
            <p>Total question: {total}</p>
            <button>Start Quiz</button>
        </div>
    );
};

export default Topic;