import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='font-bold text-xl mt-5'>Question & Answer</h2>
            <div className='mx-10  rounded p-10'>
                <div className='my-5 bg-sky-100 border border-red-300 p-8'>
                    <h2 className='font-bold text-lg mb-5'>Question 1:  What is the purpose of react router?</h2>
                    <p><strong>Answer: </strong> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
                <div className='my-5 bg-sky-100 border border-red-300 p-8'>
                    <h2 className='font-bold text-lg mb-5'>Question 2:  How does context API work?</h2>
                    <p><strong>Answer: </strong> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div className='my-5 bg-sky-100 border border-red-300 p-8'>
                    <h2 className='font-bold text-lg mb-5'>Question 3:  What is useRef hook in react?</h2>
                    <p><strong>Answer: </strong> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;