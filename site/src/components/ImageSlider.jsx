import data from '../data/data.json'
import {useState, useEffect} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ImageSlider = () => {
    const [items, setItems] = useState([])
    const [slideIndex, setSlideIndex] = useState(0)

    useEffect(() => {
        const getItems = async () => {
            setItems(data.data)
        }
        getItems()
    },[])

    const settings = {
        infinite: true,
        lazyLoad: true,
        slideToShow: 3, 
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setSlideIndex(next),
        arrows: false,
        adaptiveHeight: true
    }
    
  return (
    <div className="container-flex item-container text-center mx-auto">
        <Slider {...settings}>
            {items.map((item, index) => (
                <div key={item.id} className={`${index === slideIndex ? "item activeItem" : "item"}`}>
                    <p>{item.name}</p>
                    <img src={`./public/assets/${item.image}`} alt={item.name} />
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default ImageSlider