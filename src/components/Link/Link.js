import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12'><a className='hover:text-orange-300' href={route.path}>{route.name}</a> </li>
    );
};

export default Link;