/** @format */

const Banner = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex justify-between flex-col md:flex-row mb-5 my-10 '>
        <div className='w-full md:w-1/2 mt-8 md:mt-32 md:order-1 order-2'>
          <div className='space-y-7'>
            <h1 className='font-bold text-4xl'>
              Hello, welcome here to learn something{" "}
              <span className='text-pink-500'>new everyday</span>!!!
            </h1>
            <p className='text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              dolor aperiam ipsum facilis sit quisquam debitis eveniet
              provident, esse impedit voluptates quasi rem nobis eligendi
              sapiente? Quibusdam nihil hic voluptatem!
            </p>

            <label className='input input-bordered flex items-center gap-2  dark:bg-slate-900 dark:text-white '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='h-4 w-4 opacity-70'
              >
                <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
                <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
              </svg>
              <input type='text' className='grow' placeholder='Enter your Email' />
            </label>
            <button className='btn btn-secondary'>Submit</button>
          </div>
        </div>
        <div className='order-1 w-full md:w-1/2 mt-7'>
          <img src='\public\Banner-Books.jpeg' alt='' className='h-85 w-85 rounded-3xl' />
        </div>
      </div>
    </>
  );
};

export default Banner;
