import React from 'react';

const Options = (props) => {
    console.log('option page', props.options);
    console.log('correct ans', props.correctAnswer);

    return (
        <div>
            {
                props.options.map(option => <p className='border border-sky-800 rounded p-8'>
                    <input className='mx-1' type="radio" name="radio" />
                    {option}</p>)
            }
        </div>
    );
};

export default Options;