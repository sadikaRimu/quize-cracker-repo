import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Options from '../Options/Options';
import { Label } from 'recharts';

const Question = ({ questions }) => {
    const { id, question, options, correctAnswer } = questions;
    console.log(questions);
    const handleRightWrong = (option) => {

        for (const i in questions) {
            const correctValues = Object.values(questions);
            //  console.log(correctValues);


            if (option === correctValues[3]) {
                return toast.success('correct ans');

            }
            else {
                return toast.warning('not correct');

            }

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
                <div className='sm:flex flex-row my-2 lg:grid grid-cols-2 gap-2 text-lg'>

                    {
                        options.map(option => <p className='border border-sky-800 rounded p-8'>
                            <input onClick={() => handleRightWrong(option)} className='mx-1' type="radio" name={options} />
                            {option}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Question;