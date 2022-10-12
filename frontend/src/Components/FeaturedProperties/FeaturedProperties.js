import React from 'react';
import useFetch from '../../hooks/useFetch';
import './index.css';

const FeaturedProperties = () => {
    const { data, loading, error, reFetch } = useFetch('hotel?featured=true');
  return (<div className='fp'>
      {loading ? ("Loading") : (<>
          {data.map((item) => (
              <div className='fpItem'>
          <img src={item.photos[0]} alt="" className='fpImg' />
                  <span className='fpName'>{ item.name }</span>
                  <span className='fpCity'>{ item.city }</span>
          <span className='fpName'>Sandra beach</span>
          <span className='fpPrice'>Starting from {item.cheapestPrice} DT</span>
          {item.rating && <div className='fpRating'>
                      <button type="">{ item.rating }</button>
              <span>Excellent</span>
          </div>}
          <div className='fpItem'>
            
          </div>
      </div>))}
</>)}
      </div>
  )
}

export default FeaturedProperties