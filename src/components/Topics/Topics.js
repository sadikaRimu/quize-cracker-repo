import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const quizeTopic = useLoaderData();
    return (
        <div>
            {
                quizeTopic.data.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
        </div >
    );
};

export default Topics;