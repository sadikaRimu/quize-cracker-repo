import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Options from '../Options/Options';
import Question from '../Question/Question';

const QuizeQuestion = () => {
    const quizeQuestion = useLoaderData();
    console.log(quizeQuestion.data);
    return (
        <div className='text-sky-900'>
            <h2 className='font-bold text-2xl my-10'>Quiz of {quizeQuestion.data.name}</h2>
            <div>
                {
                    quizeQuestion.data.questions.map(questions => <Question
                        key={questions.id}
                        questions={questions}
                    ></Question>)
                }

            </div>
        </div>
    );
};

export default QuizeQuestion;