import React from 'react';

const Rating = () => {
  return (
    <div className="rating">
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
         />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked/>
    </div>
  );
};

export default Rating;