import { useContext } from 'react'
import './index.css';
import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHotel, faPlane, faCar, faBed, faTaxi, faCalendarDays, faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";
import { SearchContext } from '../../context/SearchContext';
export const Header = ({type}) => {
    const [openDate, SetOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, SetOptions] = useState({
        adult: 1,
        children: 1,
        room: 1
    });
    const [destination, setDestination] = useState('');
    const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
    ]);
    const handleOption = (name, operation) => {
    SetOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "d" ? options[name] - 1 : options[name] + 1,
      };
    });
    };
    const navigate = useNavigate();
    const { dispatch } = useContext(SearchContext);
    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH",payload:{destination,dates,options} });
        navigate('/hotels', { state: { destination, dates, options } });
    }
  return (
      <div className='header'>
         <div className={type==='list' ? "headerContainer listMode": "headerContainer"}>
            <div className='headerList'>
              <div className='headerListItem active'>
                  <FontAwesomeIcon icon={faHotel} />
                      <span>Hotels</span>
              </div>
              <div className="headerListItem">
                  <FontAwesomeIcon icon={faPlane} />
                      <span>Flights</span>
              </div>
              <div className="headerListItem">
                  <FontAwesomeIcon icon={faCar} />
                      <span>Car rentals</span>
              </div>
              <div className="headerListItem">
                  <FontAwesomeIcon icon={faBed} />
                      <span>Attractions</span>
              </div>
              <div className="headerListItem">
                  <FontAwesomeIcon icon={faTaxi} />
                      <span>Airport taxis</span>
              </div>
              </div>
            { type!=='list' && <>  <h1 className="headerTitle">Discounts? It's Great.</h1>
                <p className="headerDesc">
                            Get rewarded for your travels – unlock instant savings of 50% with a free T-booking account
              </p>
              <button className='headerBtn'>Sign in / Registre</button>
              <div className='headerSearch'>
                  <div className='headerSearchItem'>
                      <FontAwesomeIcon className="headerIcon" icon={faBed} />
                      <input type="text" placeholder='Put Your Destination' className='headerSearchInput' name='destination' onChange={(e)=>setDestination(e.target.value)}/>
                  </div>
                  <div className='headerSearchItem'>
                      <FontAwesomeIcon className="headerIcon" icon={faCalendarDays} />
                      <span onClick={()=>SetOpenDate(!openDate)} name='date' className='headerSearchText'>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate,"MM/dd/yyyy")}`}</span>
                       { openDate && <DateRange className='date' editableDateInputs={true} onChange={(item) => setDates([item.selection])} moveRangeOnFirstSelection={false} ranges={dates} minDate={new Date()}/>}</div>
                  <div className='headerSearchItem'>
                      <FontAwesomeIcon className="headerIcon" icon={faPersonCircleQuestion} />
                      <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
{   openOptions &&                   <div className='options'>
                        <div className='optionsItem'>
                              <span className='optionText'>Adult</span>
                              <div className='optionCounter'>
                              <button className='optionCounterButton' onClick={()=>handleOption('adult','d')} disabled={options.adult<=0} >-</button>
                                  <span className='optionCounterButtonValue'>{ options.adult }</span>
                              <button className='optionCounterButton' onClick={()=>handleOption('adult','i')} >+</button>
                              </div>
                          </div>
                          <div className='optionsItem'>
                              <span className='optionText'>Children</span>
                              <div className='optionCounter'>
                              <button className='optionCounterButton' onClick={()=>handleOption('children','d')} disabled={options.children<=0}>-</button>
                                  <span className='optionCounterButtonValue'>{ options.children }</span>
                              <button className='optionCounterButton' onClick={()=>handleOption('children','i')} >+</button>
                              </div>
                          </div>
                          <div className='optionsItem'>
                              <span className='optionText'>Room</span>
                              <div className='optionCounter'>
                              <button className='optionCounterButton' onClick={()=>handleOption('room','d')} disabled={options.room<=0}>-</button>
                                  <span className='optionCounterButtonValue' name=''>{ options.room }</span>
                              <button className='optionCounterButton' onClick={()=>handleOption('room','i')} >+</button>
                              </div>
                         </div>
                      </div>}
                  </div>
                  <div className='headerSearchItem'>
                      <button className='headerBtn' onClick={handleSearch}>Search</button>
                  </div>
              </div></>}
         </div>    
    </div>
  )
}
