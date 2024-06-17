// src/widgets/Cards/Cards.js
import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

function Cards({ title, description, imageSrc }) {
    return (
        <div className="max-w-full rounded-lg overflow-hidden shadow-lg bg-black text-white">
            <div className="py-20 px-16 grid grid-cols-12 gap-12">
                <div className='leftCard col-span-7 pb-4'> 
                    <Link to="/works" className='linkWorks'>
                    <h4 className='text-xl mb-2 card-title '>{title}</h4>
                    </Link>
                    <Link to="/works" className='linkWorks'>
                    <p className="text-8xl card-desc">
                        {description}
                    </p>
                    </Link>
                </div>
                <div className='col-span-3 place-content-center justify-items-end'>
                    <Link to="/works" className='linkWorks'>
                    <img className="w-full imageCard pl-16 pt-3" src={imageSrc} alt="Card" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cards;
