import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const quizeTopic = useLoaderData();

    return (
        <div>
            <img src='../../../public/exam.png' alt='' />
            <div className='flex flex-col lg:flex-row w-full'>

                {
                    quizeTopic.data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div >
        </div>
    );
};

export default Topics;