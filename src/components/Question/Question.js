import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ questions }) => {
    const { id, question, options, correctAnswer } = questions;
    // console.log(questions);
    const handleRightWrong = (option, id) => {
        const correctAns = questions.options.find(question => question.id === id);
        if (option === correctAns) {
            alert('correct Answer');
        }
        else {
            alert('incorrect Answer');
        }
        // console.log(correctAns);
    }
    const displayCorrectAns = (correctAnswer) => {
        alert(correctAnswer);
    }
    return (
        <div className=''>

            <div className='width-12 bg-slate-200 m-10 p-10 rounded'>
                <div>
                    <EyeIcon onClick={() => displayCorrectAns(correctAnswer)} className="h-6 w-6 text-blue-500" />
                    <h2 className='font-bold mb-5 text-xl'>Question:{question}</h2>

                </div>
                <div className='grid grid-cols-2 gap-2 text-lg' onClick={() => handleRightWrong(id)}>

                    {
                        options.map(option => <p className='border border-sky-800 rounded p-8'>
                            <input onClick={() => handleRightWrong(option)} className='mx-1' type="radio" name="radio" />
                            {option}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Question;