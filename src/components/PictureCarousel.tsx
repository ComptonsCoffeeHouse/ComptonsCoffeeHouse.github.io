import React from 'react';
import cupOfComptons from './cup_of_comptons.jpg'
import './PictureCarousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function PictureCarousel(){
    return <section id='PictureCarousel'>
        <Carousel 
            showIndicators={false}
            showStatus={false}
            showThumbs={false}

        >
            {[<Item key={1}/>]}
        </Carousel>
    </section>
}

function Item(props: any){

    return(
        <section key={props.key}>
            <img src={cupOfComptons} className="HeroImage" alt="Coffee Shop" />
            <div className='HeroTextContainer'>
                {/* <h1 className='HeroTitle'>{"Compton's\nCoffee\nHouse"}</h1> */}
                {/* <div className='Opening'>Opening 02.05.2021</div> */}
            </div>
        </section>  
    )
}

export default PictureCarousel;