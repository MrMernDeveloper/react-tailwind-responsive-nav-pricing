import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const pricingOptions = [
    {
        id: 1, name: 'free', price: 0, features: [
            'Awesome Feature',
            'Extra Feature',
            'unnecessary Feature',
            'Hudai feature',
            'ajaira feature'
    ] },
    {
        id: 2, name: 'medium', price: 9.99, features: [
            'Awesome Feature',
            'Extra Feature',
            'unnecessary Feature',
            'Hudai feature',
            'ajaira feature'
        ]
},
    {
        id: 3, name: 'premium', price: 19.99, features: [
            'Awesome Feature',
            'Extra Feature',
            'unnecessary Feature',
            'Hudai feature',
            'ajaira feature'
        ] },
]

const Pricing = () => {
    return (
        <div>
            <h2 className='mt-5 text-white font-bold bg-indigo-300 p-12 text-5xl my-5'>Best Deal of the town</h2> 
            <div className='grid md:grid-cols-3 gap-3 pb-10'>
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