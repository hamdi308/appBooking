import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { useNavigate } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import './index.css';

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error, reFetch } = useFetch(`/hotel/room/${hotelId}`);
  console.log(data);
  const { dates } = useContext(SearchContext);
  const navigate = useNavigate();

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };
  const ReservedDays = getDatesInRange(dates[0].startDate, dates[0].endDate);
  const isNotAvailable = (RoomNumber) => {
    const isFound = RoomNumber.unavailableDates.some((date) => ReservedDays.includes(new Date(date).getTime()));
    return isFound;
  }
  const handleSelect = (e) => {
    const selected = e.target.checked;
    const RoomNumber = e.target.value;
    setSelectedRooms(selected ? [...selectedRooms, RoomNumber] : selectedRooms.filter((item) => item !== RoomNumber));
    console.log(selectedRooms);
  }
  const handleClick = async () => {
    try {
      await Promise.all(selectedRooms.map((roomId) => {
        const res = axios.put(`rooms/update/availability/${roomId}`, { dates: ReservedDays });
        return res.data;
        
      }));
      setOpen(false);
      navigate("/");
    } catch (err) {
      
    }
  };
  return (
    <div className='reserve'>
      <div className='rContainer'>
        <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={() => setOpen(false)} />
        <span>Select Your rooms : </span>
        {data.map(room => (
          <><div className='rItem'>
            <div className='rInfo'>
              <div className='rTitle'>{room.title}</div>
              <div className='rDesc'>{room.desc}</div>
              <div className='rMax'>Max People: <b>{room.maxPeople}</b></div>
              <div className='rPrice'>{ room.price }</div>
            </div>
            {room.roomNumbers.map(roomNumber => (
              <div className='room'>
              <label>{roomNumber.number}</label>
                <input type='checkbox' value={ roomNumber._id } onChange={handleSelect} disabled={!isNotAvailable(roomNumber)} />
           </div> )) }
          </div></>
        ))}
        <button className='rButton' onClick={handleClick}>Book</button>
      </div>
    </div>
  )
}

export default Reserve