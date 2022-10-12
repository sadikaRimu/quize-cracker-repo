import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ questions }) => {
    const { id, question, options, correctAnswer } = questions;
    //console.log(questions);
    const handleRightWrong = (option, id) => {
        //const correctAns = questions.options.find(question => question.id === id);
        const matchedOption = questions.options.forEach(qs => {
            // const getOption = qs.options.find(x => option === x);
            // return getOption;

        });
        // console.log(matchedOption);
        questions.options.map(qs => {
            if (option === qs.correctAnswer) {
                toast.success('correct');
            }
            else {
                toast.warning("incorrect");
            }
            return 0;
        })
        for (const i in questions) {
            console.log(i[questions]);
        }
        // if (option === correctAns) {
        //     console.log('correct', correctAns);


        //     toast.success('correct');

        // }
        // else {
        //     toast.warning("incorrect");
        // }

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