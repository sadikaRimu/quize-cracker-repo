import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topic = ({ topic }) => {
    console.log(topic);
    const { id, name, logo, total } = topic;
    console.log(topic);
    const navigate = useNavigate();
    const handleQuiz = () => {
        navigate(`/quizQuestion/${id}`);
    }
    return (
        <div className='w-full m-10 bg-slate-100 p-5 rounded lg:w-1/4'>
            <img className='' src={logo} alt='' />
            <h3 className='font-bold'>{name}</h3>
            <p className='font-bold'>Total question: {total}</p>
            <button onClick={handleQuiz} className='bg-orange-300 px-5 py-2 rounded font-bold'>Start Quiz</button>
        </div>
    );
};

export default Topic;