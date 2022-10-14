import React from 'react';
import {useState} from 'react'
import { Header } from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import './index.css';
import { format } from 'date-fns';
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import SearchItem from '../../Components/SearchItem/SearchItem';
import Footer from '../../Components/Footer/Footer';
import MailList from '../../Components/MailList/MailList';
import useFetch from '../../hooks/useFetch';
const ListHotel = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, SetMin] = useState('undefined');
  const [max, SetMax] = useState('undefined');
  const { data, loading, error, reFetch } = useFetch(`hotel?cities=${destination}&min=${min || 0}&max=${max || 999}`);
  const handleClick = () => {
      reFetch();
  }
  return (
    <div><Navbar />
      <Header type="list" />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className='lsItem'>
              <label>Check-in Date</label>
                <span onClick={()=>setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (<DateRange onChange={(item) => setDate([item.selection])} ranges={date} minDate={new Date()}/>)}
            </div>
            <div className='lsItem'>
              <label>Options</label>
              <div className='lsOptions'>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>Minumum Price <small>(per night)</small></span>
                <input onChange={e=>SetMin(e.target.value)} type='number' className='lsOptionInput'/>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>Maximum Price <small>(per night)</small></span>
                <input onChange={e=>SetMax(e.target.value)} type='number' className='lsOptionInput'/>
              </div>
                <div className='lsOptionItem'>
                <span className='lsOptionText'>Adult</span>
                <input min={ 1 } placeholder={options.adult} type='number' className='lsOptionInput'/>
              </div>
                <div className='lsOptionItem'>
                <span className='lsOptionText'>Children</span>
                <input min={ 0 } placeholder={options.children} type='number' className='lsOptionInput'/>
              </div>
                <div className='lsOptionItem'>
                <span className='lsOptionText'>Room</span>
                <input min={ 1 } placeholder={options.room} type='number' className='lsOptionInput'/>
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className='listResult'>
            {loading ? ("loading") : <>{data.map((item) => ( <SearchItem item={item} key={ item._id } />))} </>}
          </div>
        </div>  
      </div>
      <MailList/>
      <Footer/>
    </div>
  )
}

export default ListHotel