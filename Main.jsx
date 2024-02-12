import React,{useEffect} from 'react'
import './main.css'
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data =  [
  {
  id:1,
  imgSrc: img,
  destTitle: 'Bora Bora',
  location:'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description:'The Bora Bora island is one of the most popular islands in The Islands of Tahiti. One of nine islands within the Society Islands, Bora Bora was formed over seven million years ago by a volcano.'
},

 {
  id:2,
  imgSrc: img2,
  destTitle: 'Machu Picchu',
  location:'Peru',
  grade:'CULTURAL RELAX',
  fees:'$600',
  description:'In the Quechua Indian language, “Machu Picchu” means “Old Peak” or “Old Mountain.” 9. Machu Picchu is made up of more than 150 buildings ranging from baths and houses to temples and sanctuaries.'
},


{
  id:3,
  imgSrc: img3,
  destTitle: 'Great Barrier Reef',
  location:'Australia',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description:'The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the world largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc.'
},

{
  id:4,
  imgSrc: img4,
  destTitle: 'Cappadocia',
  location:'Turkey',
  grade:'CULTURAL RELAX',
  fees:'$800',
  description:'Cappadocia is a unique historical region in landlocked Central Anatolia. It is most distinguished for the extraordinary spectacular rock formations and eroded volcanic rock tuff landscape that was formed millions of years ago.'
},

{
  id:5,
  imgSrc: img5,
  destTitle: 'Gunajuato',
  location:'Mexico',
  grade:'CULTURAL RELAX',
  fees:'$1100',
  description:'Guanajuato, city, capital of Guanajuato estado (state), central Mexico. Situated on the Mesa Central, it is spread over steep hillsides at the junction of three ravines at an average elevation of about 6,725 feet (2,050 metres) above sea level.'
},

{
  id:6,
  imgSrc: img6,
  destTitle: 'Cinque Terre',
  location:'Italy',
  grade:'CULTURAL RELAX',
  fees:'$1100',
  description:'Cinque Terre is a steep seaside landscape that humans have transformed with stone walled terraces for growing grape vines and olive trees. Agriculture and tourism drive the economy.'
},

{
  id:7,
  imgSrc: img7,
  destTitle: 'Angkor Wat',
  location:'Cambodia',
  grade:'CULTURAL RELAX',
  fees:'$790',
  description:'Angkor Wat is an enormous Buddhist temple complex located in northern Cambodia. It was originally built in the first half of the 12th century as a Hindu temple. Spread across more than 400 acres.'
},

{
  id:8,
  imgSrc: img8,
  destTitle: 'Taj Mahal',
  location:'India',
  grade:'CULTURAL RELAX',
  fees:'$900',
  description:'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan.'
},

{
  id:9,
  imgSrc: img9,
  destTitle: 'Bali Island',
  location:'Indonesia',
  grade:'CULTURAL RELAX',
  fees:'$500',
  description:'Bali Indonesia. Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers paradise!'
}, 

]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
   },[])








  return (
    <section className="main container section">
        <div className="secTitle">
    <h3 data-aos="fade-up" className="title">
    Most visited Destination</h3>
</div>


<div className="secContent grid">
{
  Data.map(({id, imgSrc,destTitle,location,grade,fees,description})=>{
    return(
      <div key={id}
      data-aos="fade-up"
      className="singleDestination">
        <div className="imageDiv">
          <img  src={imgSrc} alt={destTitle}></img>
        </div>

        <div className="cardInfo">
          <h4 className="destTitle">
            {destTitle}
          </h4>
          <span className="continent flex">
          <HiOutlineLocationMarker/>
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
            DETAILS <HiOutlineClipboardCheck className="icon"/>
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

export default Main
