import React from 'react';
import Marquee from "react-fast-marquee";
import './slider.css'

const Slider = () => {
    return (
        <div className='my-5 px-4'>
            <h1 className='fw-bold mb-5 text-center'>We Serve The Best Food</h1>
            <Marquee className='marquee'>
                <img src="/src/assets/images/christmas-sweets-platter.jpg" alt="" />
                <img src="/src/assets/images/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table.jpg" alt="" />
                <img src="/src/assets/images/kebab-platter-with-lamb-chicken-lula-tikka-kebabs-grilled-vegetables-with-red-onion-salad.jpg" alt="" />
                <img src="/src/assets/images/meat-barbecue-with-grilled-vegetables-variety-sauces-wooden-platter.jpg" alt="" />
                <img src="/src/assets/images/top-view-mix-meat-snacks-with-french-fries-grilled-vegetables-salad-sauces-board.jpg" alt="" />
            </Marquee>
        </div>
    );
};

export default Slider;