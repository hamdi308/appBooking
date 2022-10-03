import React from 'react';
import './index.css';
import Appartment from '../../propertiesimgs/appartments.jpg';
import Cabins from '../../propertiesimgs/cabins.jpg';
import Hotels from '../../propertiesimgs/Hotels.webp';
import Resorts from '../../propertiesimgs/resorts.jpg';
import Villas from '../../propertiesimgs/villas.jpg';
const PropertyList = () => {
  return (
      <div className='pList'>
          <div className='pListItem'>
              <img className='pListImg' src={Appartment} alt="" />
              <div className='pListTitles'>
                  <h1>Appartment</h1>
                  <h2>78 Appartments</h2>
              </div>
          </div>
          <div className='pListItem'>
              <img className='pListImg' src={Cabins} alt="" />
              <div className='pListTitles'>
                  <h1>Cabine</h1>
                  <h2>78 Cabins</h2>
              </div>
          </div>
          <div className='pListItem'>
              <img className='pListImg' src={Hotels} alt="" />
              <div className='pListTitles'>
                  <h1>Hotel</h1>
                  <h2>78 Hotels</h2>
              </div>
          </div>
          <div className='pListItem'>
              <img className='pListImg' src={Resorts} alt="" />
              <div className='pListTitles'>
                  <h1>Resort</h1>
                  <h2>78 Resorts</h2>
              </div>
          </div>
          <div className='pListItem'>
              <img className='pListImg' src={Villas} alt="" />
              <div className='pListTitles'>
                  <h1>Villa</h1>
                  <h2>78 Villas</h2>
              </div>
          </div>
    </div>
  )
}

export default PropertyList