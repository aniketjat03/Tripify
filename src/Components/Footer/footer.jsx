import React,{useEffect} from 'react';
import './footer.css';
import video2 from '../../assets/video2.mp4'
import {FiSend} from 'react-icons/fi' 
import {SiYourtraveldottv} from 'react-icons/si' 
import {AiOutlineTwitter} from 'react-icons/ai' 
import {AiFillYoutube} from 'react-icons/ai' 
import {AiFillInstagram} from 'react-icons/ai' 
import {FaTripadvisor} from 'react-icons/fa' 
import {FiChevronRight} from 'react-icons/fi' 

import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    // Hook to create scroll animation
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} autoPlay loop muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with Us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            SEND <FiSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="" className='logo flex'>
                                <SiYourtraveldottv className="icon"/> Tripify
                            </a>
                        </div>
                        
                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo officiis eum molestias delectus voluptatum at, accusamus ullam quaerat. Ut consectetur totam excepturi itaque, officia vel vitae eligendi accusantium at suscipit ab. Sunt illum rerum voluptatem expedita deleniti quas aliquid.
                        </div>

                        <div data-aos="fade-up" className="footerSocials">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                        </div>
                    </div>
                    <div className="footerLinks grid">
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Payment
                            </li>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Rent Cars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Hostel World
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                TripAdvisor
                            </li>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Indonesia
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                Boston
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon"/> 
                                India
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small> TRAVEL WEBSITE THEME </small>
                        <small> COPYRIGHT RESERVED - ANIKET 2023</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;