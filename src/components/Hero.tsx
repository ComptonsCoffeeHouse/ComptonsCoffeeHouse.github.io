import React from 'react';
import pic from './IMG_9601.jpg'
import './Hero.css'

function Hero(){
    return <section id='Hero'>
        <img src={pic} className="HeroImage" alt="Coffee Shop" />
        <div className='HeroTextContainer'>
            <h1 className='HeroTitle'>{"Compton's\nCoffee\nHouse"}</h1>
            <div className='Opening'>Opening 02.06.2021</div>
        </div>
    </section>
}

export default Hero;