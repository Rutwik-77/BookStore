/** @format */

import Navbar from "../Components/Navbar";
import Course from "../Components/Course";
import Footer from "../Components/Footer";

const Courses = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='min-h-screen'>
        <Course></Course>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Courses;
