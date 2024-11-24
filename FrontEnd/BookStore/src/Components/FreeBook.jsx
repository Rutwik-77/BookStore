/** @format */

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useEffect, useState } from "react";
const FreeBook = () => {
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      try {
        const response = await axios.get("http://localhost:5000/book");
        console.log(response.data);
        setbook(response.data.filter((book) => book.price === 0));
      } catch (error) {
        console.log(error);
      }
    };
    getbook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div>
          <h1 className='text-xl font-bold pb-2'>Free Books</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
            inventore enim excepturi aspernatur repellendus dolorem nostrum sit
            illum consequuntur laboriosam! Laudantium tempore, quisqu
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((book) => (
              <Cards key={book.id} book={book} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
