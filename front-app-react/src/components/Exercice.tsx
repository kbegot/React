import React, { useState, useEffect, useReducer, useCallback } from 'react';

export default function Exercice() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Vous avez cliqué ${count} fois`;
    });


    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state: { count: number }, action: { type: string }) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }

    const [countHandle, setHandleCount] = useState(0);
    const handleClick = useCallback(() => {
        setHandleCount(countHandle + 1);
    }, [countHandle])
    return (
        <>
            <div>
                <h1 className='font-semibold'>useReducer Hook:</h1>
                <button className='ml-10 bg-red-400 hover:bg-red-600 text-white font-bold py-1 px-2 rounded mr-4' onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <button className='bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded' onClick={() => dispatch({ type: 'increment' })}>+</button><br />
                <p className='mt-2 ml-10 text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200'>Total : {state.count}</p>
            </div><br />
            <div>
                <h1 className='font-semibold'>useEffect & useState Hooks:</h1>
                <p className='mt-2 ml-10 text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200'>
                    Vous avez cliqué {count} fois</p><br />
                <button className='ml-16 mt-2 bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded'
                    onClick={() => setCount(count + 1)}>
                    Increment
                </button>
            </div><br />
            <div>
                <h1 className='font-semibold'>useCallback Hooks:</h1>
                <p className='mt-2 ml-10 text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200'>
                    Vous avez cliqué {countHandle} fois</p><br />
                <button className='ml-[100px] mt-2 bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-1 px-2 rounded'
                    onClick={handleClick}>+</button>
            </div>
        </>)
}