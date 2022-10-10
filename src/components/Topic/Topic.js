import React from 'react';

const Topic = ({ topic }) => {
    const { name, logo, total } = topic;
    console.log(topic);
    return (
        <div className='w-1/4 m-10'>
            <img className='' src={logo} alt='' />
            <h3 className='font-bold'>{name}</h3>
            <p className='font-bold'>Total question: {total}</p>
            <button className='bg-orange-300 px-5 py-2 rounded font-bold'>Start Quiz</button>
        </div>
    );
};

export default Topic;