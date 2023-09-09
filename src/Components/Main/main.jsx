import React,{useEffect} from 'react';
import './main.css';
import img from '../../assets/img.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos';
import 'aos/dist/aos.css';

const Data=[
    {
        id:1,
        imgsrc: img,
        destTitle: 'Bora Bora', 
        location: 'New Zealand', 
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id:2,
        imgsrc: img2,
        destTitle: 'Machu Picchu', 
        location: 'Peru', 
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
    },
    {
        id:3,
        imgsrc: img3,
        destTitle: 'Great Barrier Reaf', 
        location: 'Australia', 
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the worlds largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc.'
    },
    {
        id:4,
        imgsrc: img4,
        destTitle: 'Cappadocia', 
        location: 'Turkey', 
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Cappadocia is an area in Central Anatolia in Turkey best known for its unique moon-like landscape, underground cities, cave churches and houses carved in the rocks.'
    },
    {
        id:5,
        imgsrc: img5,
        destTitle: 'Guanajuato', 
        location: 'Mexico', 
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Guanajuato, city, capital of Guanajuato estado (state), central Mexico. Situated on the Mesa Central, it is spread over steep hillsides at the junction of three ravines at an average elevation of about 6,725 feet (2,050 metres) above sea level.'
    },
    {
        id:6,
        imgsrc: img6,
        destTitle: 'Maldives', 
        location: 'India', 
        grade: 'BEACHES RELAX',
        fees: '$700',
        description: 'The Maldives is a republic lies south-west of the Indian sub-continent. It is made up of a chain of nearly 1,200 islands, most of them uninhabited. None of the coral islands stand more than 1.8 metres (six feet) above sea level.'
    },
    {
        id:7,
        imgsrc: img7,
        destTitle: 'Ooty', 
        location: 'India', 
        grade: 'HILLS RELAX',
        fees: '$700',
        description: 'Ooty is a gorgeous hill station in Tamil Nadu, and is considered a haven for nature lovers from all the country. Ensconced in the lap of nature, this town is surrounded on all sides by the towering Nilgiris, evergreen fir trees and of course, lakes small and large.'
    },
    {
        id:8,
        imgsrc: img8,
        destTitle: 'Kashmir', 
        location: 'India', 
        grade: 'MOUNTAINS RELAX',
        fees: '$700',
        description: 'Kashmir is the northern most geographical region of the Indian subcontinent. Kashmirs blissful aura can never be expressed in words, Snowy glaciers, pristine lakes, picturesque mountains, dense forests, green meadow, gushing rivers everything about Kashmir is supremely beautiful.'
    },
    {
        id:9,
        imgsrc: img9,
        destTitle: 'Shimla', 
        location: 'India', 
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Shimla is the Capital Town of Himachal Pradesh. It was formerly the summer capital during the British Rule. The town of Shimla is built over several hills and connecting ridges.'
    },

]

const Main = () => {
    // Hook to create scroll animation
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most Visited Destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                Data.map(({id,imgsrc,destTitle,location,grade,fees,description})=>{
                    return(
                        <div data-aos="fade-up" key={id} className="singleDestination">
                            <div className="imageDiv">
                                <img src={imgsrc} alt={destTitle} />
                            </div>

                            <div className="cardInfo">
                                <h4 className="destTitle">{destTitle}</h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className='icon'/>
                                    <span className="name">{location}</span>
                                </span>

                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                <button className="btn flex">
                                    DETAILS<HiOutlineClipboardCheck className="icon"/>
                                </button>
                            </div>
                        </div>
                        
                        
                    )
                })
                }
            </div>
        </section>
    )
}

export default Main;