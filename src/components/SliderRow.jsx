import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderRow = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="slider-container z-50 ">
                <Slider { ...settings }>
                    <div>
                        <h3 className='text-[40px]'  >1</h3>
                    </div>
                    <div>
                        <h3 className='text-[40px]'  >2</h3>
                    </div>
                    <div>
                        <h3 className='text-[40px]'  >3</h3>
                    </div>
                    <div>
                        <h3 className='text-[40px]'  >4</h3>
                    </div>
                    <div>
                        <h3 className='text-[40px]'  >5</h3>
                    </div>
                    <div>
                        <h3 className='text-[40px]'  >6</h3>
                    </div>
                    <div>
                        <h3 className='text-[40px]'  >7</h3>
                    </div>
                    <div>
                        <h3 className='text-[40px]'  >8</h3>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default SliderRow