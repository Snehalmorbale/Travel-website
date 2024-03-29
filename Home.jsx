import React, {useEffect} from 'react'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'

import { FiFacebook } from 'react-icons/fi'
import {SiTripadvisor} from 'react-icons/si'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
   useEffect(()=>{
    Aos.init({duration:2000})
   },[])

  return (
    <section className='home'>
      <div className="yes"></div>
       

      <div className="homeContent container">
        <div className="textDiv">

        <span data-aos="fade-up"
        className="smallText">
        Our Packages
        </span>

        <h1 data-aos="fade-up"
         className="homeTitle">
        Search your Holiday
        </h1>

     </div>

    <div data-aos="fade-up"
    className="cardDiv grid">
      <div className="destinationInput">
        <label htmlFor="city">Search your Destination:</label>
        <div className="input flex">
        <input type="text" placeholder="Enter name here....."></input>
          <GrLocation classname="icon"/>
        </div>
      </div>

      <div className="dateInput">
        <label htmlFor="city">Search your Date:</label>
        <div className="input flex">
        <input type="date"></input>
        </div>
      </div>

      <div className="priceInput">
        <div className="label_total flex">
        <label htmlFor="price">Max price:</label>
        <h3 className="total">100000</h3>
        </div>
        <div className="input flex">
          <input type="range" max="100000" min="10000"></input>
        </div>
      </div>


      <div className="searchOptions flex">
        <HiFilter className="icon"/>
        <span>MORE FILTERS</span>
      </div>


    </div>

 <div data-aos="fade-up"
 className="homeFooterIcons flex">
  <div className="rightIcons">
  <FiFacebook className="icon"/>
  <AiOutlineInstagram className="icon"/>
  <SiTripadvisor className="icon"/>
  </div>
  <div className="leftIcons">
    <BsListTask className="icon"/>
    <TbApps className="icon"/>
  </div>
 </div>

   </div>
 </section>
  )
}

export default Home
