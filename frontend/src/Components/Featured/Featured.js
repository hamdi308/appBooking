import './index.css';
import React from 'react';
import tunis from '../../tunisieImages/tunis.webp';
import bizerte from '../../tunisieImages/bizerte.webp';
import Carthage from '../../tunisieImages/carthage.webp';
import Djerba from '../../tunisieImages/djerba.jfif';
import Dougga from '../../tunisieImages/dougga.webp';
import Douz from '../../tunisieImages/douz.webp';
import elJem from '../../tunisieImages/eljem.webp';
import Hammamet from '../../tunisieImages/hammamet.jfif';
import kairouan from '../../tunisieImages/kairouan.jfif';
import Karknah from '../../tunisieImages/karknah.webp';
import Mahdia from '../../tunisieImages/mahdia.jfif';
import Monastir from '../../tunisieImages/monastir.webp';
import Nabeul from '../../tunisieImages/nabeul.jfif';
import Sbeitla from '../../tunisieImages/sbeitla.webp';
import Sfax from '../../tunisieImages/sfax.jfif';
import SidiBousaid from '../../tunisieImages/sidibousaid.webp';
import Sousse from '../../tunisieImages/sousse.jfif';
import Tataouine from '../../tunisieImages/tataouine.webp';
import useFetch from '../../hooks/useFetch';

const Featured = () => {
  const { data, loading, error, reFetch }=useFetch('hotel/countByCity?cities=tunis,bizerte,carthage,djerba,dougga,douz,el jem,hammamet,kairouan,karknah,mahdia,monastir,nabeul,sbeitla,sfax,sidibousaid,sousse,tataouine')
  return (
      <div className='featured'>
         {loading ? ("Please Wait"):(<><div className='featuredItem'>
            <img src={tunis} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>Tunis</h1>
             <h2>{ data[0] } properties</h2>
          </div>
          </div>
          <div className='featuredItem'>
            <img src={bizerte} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>Bizerte</h1>
                  <h2>{ data[1] } properties</h2>
          </div>
          </div>
          <div className='featuredItem'>
            <img src={Carthage} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>Carthage</h1>
                  <h2>{ data[2] } properties</h2>
          </div>
          </div>
          <div className='featuredItem'>
            <img src={Djerba} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>Djerba</h1>
                  <h2>{ data[3] } properties</h2>
          </div>
          </div>
          <div className='featuredItem'>
            <img src={Dougga} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>Dougga</h1>
                  <h2>{ data[4] } properties</h2>
          </div>
          </div>
          <div className='featuredItem'>
            <img src={Douz} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>Douz</h1>
                  <h2>{ data[5] } properties</h2>
          </div>
          </div>
          <div className='featuredItem'>
            <img src={elJem} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>El Jem</h1>
                  <h2>{ data[6] } properties</h2>
          </div>
          </div>
          <div className='featuredItem'>
            <img src={Hammamet} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>Hammamet</h1>
                  <h2>{ data[7] } properties</h2>
          </div>
          </div>
          <div className='featuredItem'>
            <img src={kairouan} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>kairouan</h1>
                  <h2>{ data[8] } properties</h2>
          </div>
      </div>
       <div className='featuredItem'>
            <img src={Karknah} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>Karknah</h1>
                  <h2>{ data[9] } properties</h2>
          </div>
      </div>
       <div className='featuredItem'>
            <img src={Mahdia} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>Mahdia</h1>
                  <h2>{ data[10] } properties</h2>
          </div>
      </div>
       <div className='featuredItem'>
            <img src={Monastir} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>Monastir</h1>
                  <h2>{ data[11] } properties</h2>
          </div>
      </div>
       <div className='featuredItem'>
            <img src={Nabeul} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>Nabeul</h1>
                  <h2>{ data[12] } properties</h2>
          </div>
      </div>
      <div className='featuredItem'>
            <img src={Sbeitla} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>Sbeitla</h1>
                  <h2>{ data[13] } properties</h2>
          </div>
      </div>
      <div className='featuredItem'>
            <img src={Sfax} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>Sfax</h1>
                  <h2>{ data[14] } properties</h2>
          </div>
      </div>
      <div className='featuredItem'>
            <img src={SidiBousaid} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>SidiBousaid</h1>
                  <h2>{ data[15] } properties</h2>
          </div>
      </div>
      <div className='featuredItem'>
            <img src={Sousse} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>Sousse</h1>
                  <h2>{ data[16] } properties</h2>
          </div>
      </div>
      <div className='featuredItem'>
            <img src={Tataouine} className='faturedImg' alt=""/>
          <div className='featuredTitles'>
                  <h1>Tataouine</h1>
                  <h2>{ data[17] } properties</h2>
          </div>
      </div></> )}
    </div>
  )
}

export default Featured