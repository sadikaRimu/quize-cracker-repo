import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ questions }) => {
    const { id, question, options, correctAnswer } = questions;
    // console.log(questions);
    const handleRightWrong = (option, id) => {
        const correctAns = questions.options.find(question => question.id === id);
        let correctCount = 0;
        if (option !== correctAns) {
            console.log('correct', correctAns);


            toast.warning('incorrect');





        }
        else {
            toast.success("correct");
            correctCount = correctCount + 1;
            toast.success(correctCount, ' correct answer');
        }

    }
    const displayCorrectAns = (correctAnswer) => {
        alert(correctAnswer);
    }
    return (
        <div className=''>

            <div className='width-12 bg-slate-200 m-10 p-10 rounded'>
                <div>
                    <ToastContainer />
                    <EyeIcon onClick={() => displayCorrectAns(correctAnswer)} className="h-6 w-6 text-blue-500" />
                    <h2 className='font-bold mb-5 text-xl'>Question:{question}</h2>

                </div>
                <div className='grid grid-cols-2 gap-2 text-lg'>

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