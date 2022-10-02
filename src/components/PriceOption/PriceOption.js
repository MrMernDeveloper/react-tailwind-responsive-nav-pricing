import React from 'react';

const PriceOption = ({option}) => {
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <h3> <span className='text-6xl font-bold text-white'>{option.price}</span>
                <span className='text-2xl text-gray-200'>/mon</span>
            </h3>
            <p>{option.name}</p>
        </div>
    );
};

export default PriceOption;