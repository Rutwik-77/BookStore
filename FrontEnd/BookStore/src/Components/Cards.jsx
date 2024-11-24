/** @format */

function Cards({book}) {
  return (
    <div className="mt-4">
      <div className='card bg-base-800 w-90 shadow-xl hover:scale-105 duration-200 dark:border'>
        <figure>
          <img
            src={book.image}
            alt='Shoes'
          />
        </figure>
        <div className='card-body max-h-48 '>
          <h2 className='card-title'>
            {book.name}
            <div className='badge badge-secondary'>{book.category}</div>
          </h2>
          <p>{book.description}</p>
          <div className='card-actions flex justify-between mt-2'>
            <div className='badge badge-outline'>Price: ₹{book.price}</div>
            <div className='badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer duration-200 px-3 py-2 '>Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
