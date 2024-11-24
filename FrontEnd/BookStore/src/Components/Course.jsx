/** @format */
import { Link } from "react-router-dom";
// import List from "../../public/List.json";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import axios from "axios";
const Course = () => {
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      try {
        const response = await axios.get("http://localhost:5000/book");
        console.log(response.data);
        setbook(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getbook();
  }, []);
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  '>
        <div className='mt-28 items-center justify-center text-center '>
          <h1 className='text-3xl font-semibold  md:text-4xl '>
            We are delighted to have you{" "}
            <span className='text-pink-500'>here</span>! :)
          </h1>
          <p className='mt-12 md:text-center text-left '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            similique! Maiores quam doloremque porro iusto vero eveniet
            aspernatur quae hic velit quas, consequatur dolore amet autem
            consectetur nesciunt soluta esse consequuntur quisquam vitae est quo
            officia eligendi. Est omnis molestias minima animi, odio,
            consequuntur sequi voluptate sit laudantium ullam repudiandae!ur
            quae hic velit quas, consequatur dolore amet autem consectetur
            nesciunt soluta esse consequuntur quisquam vit
          </p>

          <Link to='/'>
            <button className='bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-700 duration-300 ease-in-out mt-5'>
              Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4'>
          {book.map((book) => (
            <Cards key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
