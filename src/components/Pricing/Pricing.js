import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const pricingOptions = [
    { id: 1, name: 'free', price: 0 },
    { id: 2, name: 'medium', price: 9.99 },
    { id: 3, name: 'premium', price: 19.99 },
]

const Pricing = () => {
    return (
        <div>
            <h2 className='mt-5 text-white font-bold bg-indigo-300 p-12 text-5xl'>Best Deal of the town</h2> 
            <div className='grid grid-cols-3 gap-3'>
                {
                    pricingOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}></PriceOption>)
                }
          </div>
        </div>
    );
};

export default Pricing;