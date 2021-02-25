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
            dynamicHeight={false}
        >
            {[1,2,3].map(n => <Item key={n}/>)}
        </Carousel>
    </section>
}

function Item(props: any){

    return(
        <div key={props.key}>
            <div className="ImageContainer">
                <img src={cupOfComptons} className="HeroImage" alt="Coffee Shop" />
            </div>
        </div>  
    )
}

export default PictureCarousel;