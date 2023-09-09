import React,{useEffect} from 'react';
import './home.css';
import coastline from '../../assets/coastline.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    // Hook to create scroll animation
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <section className='home'>
            <div className="overlay"></div>
            <video src={coastline} autoPlay muted loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Our Packages
                    </span>
                    <h1 data-aos="fade-up" className='homeTitle'>
                        Search Your Holiday
                    </h1>
                </div>
                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destiantionInput">
                        <label htmlFor="city">Search Your Destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder='Place Name...'/>
                            <GrLocation className="icon"/>
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="date">Set Date:</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max Price:</label>
                            <h3 className='total'>₹ 100000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="100000" min="5000"/>
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <HiFilter className='icon'/>
                        <span>MORE FILTERS</span>
                    </div>

                </div>
                <div  className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FaTripadvisor className="icon"/>
                        <BiLogoFacebook className="icon"/>
                        <AiFillInstagram className="icon"/>
                    </div>
                    <div className="leftIcons">
                        <AiOutlineUnorderedList className="icon"/>
                        <TbApps className="icon"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;