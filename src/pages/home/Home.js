import {Button, Image, Form } from 'react-bootstrap'
import './home.css';
import heroimg from './../../images2/hero.png';
import {motion,useInView} from 'framer-motion';
import { useRef } from 'react';
import InfoCard from '../../componets/InfoCard';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Info, photos, menu1, menu2, People } from './Info';
import Card2 from '../../componets/Card2';
import App from '../../componets/Counter';
import Counter from '../../componets/Counter';
import Card3 from '../../componets/Card3';
import Card4 from '../../componets/Card4';
import FormField from '../../componets/FormField';
import Card5 from '../../componets/Card5';
import Footer from '../../componets/Footer';

const Home = () => {

  const boxVariant = {
    visible: { y:0, transition: {duration: 1.5} },
    hidden: { y: 150},
  }

  const photo = "./assets/images/hero.png";

  

  return (
    <>
    <div className='home container row m-auto '>
      <div className='col-lg-5 col-sm-12 m-2'>
        <motion.div className=' text-white mt-5 pt-5 text-sm-center text-lg-start column1'
        initial={{x: -100, transition: {duration: 50}}}
        animate={{x: 0}}
        >
          <div className='box'></div>
          <h3 className='display-3 fw-bold'>Enjoy Our <br/>Delicious Meal</h3>
          <p className=''>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <Button className='w-auto  border-none'>BOOK A TABLE</Button>{' '}
        </motion.div>
      </div>
      <div className='col-lg-5 col-sm-12 mt-5 p-5 text-center m-2' >
      {/* <img src='./assets/images/bg-hero.jpg' alt='meal' className='' rounded /> */}
      <img src={heroimg} alt='meal' className='spinnerImag' />
      </div>
    </div>
    <div className='bg-light py-5 border'>
      <div className='row container m-auto'>
        { Info.map((element, i) =>(
          
          <motion.div className='col-lg-3 col-md-6 col-sm-12 mx-auto'
            key={element.id}
            initial={{x: -400, y: 400, translateX: -50, translateY: 50, opacity: 0}}
            animate={{x: 0, y: 0, translateX: 0, translateY: 0, opacity: 1}}
            transition={{
              duration: 1, delay: 0.5*i
            }}
          >
          <InfoCard title={Info[i].title} content={Info[i].content} icon={Info[i].icon} />
        </motion.div> 
        ))}    
      </div>
      <div className='row'>
        <div className='col-12 col-sm-12 col-lg-6 row'>
        {/* <div className='col-6'> */}
        {
          photos.map((photo, i) => (
            <motion.div 
            className='col-6 col-sm-5 col-lg-5 mb-5 ms-4'
            key={photo.id}
            initial={{scale: 0, opacity: 0}}
            animate={{ scale: (i===1||i===2) ? 0.7 : 1.1, opacity: 1}}
            transition={{duration: 3}}
          >
              <Card2 photo={photo.name}/>
            </motion.div>
          ))
        }
        {/* </div> */}
                    
            
        </div>
        
        <div className=' col-12 col-sm-12 col-lg-6 text-center'>
            <h1 className='font-monospace'>About Us</h1>
            <p className='text-center'>
              <h1 className='display-5 m-2'>Welcome to Restorant</h1>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam<br/> amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.<br/><br/>

              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam<br/> amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita<br/> duo justo magna dolore erat amet
            </p>
            <div className='row text-center'>
              <div className='col-md-6 col-sm-12 d-flex text-center'>
                <h1 className='counter fw-bold d-flex '>|<Counter from={0} to={15} /></h1><p className='text-muted fs-6'>Years of<p className=' fs-3 text-dark fw-bold'>Experiance</p></p>
              </div>
              <div className='col-md-6 col-sm-12 d-flex text-center'>
                <h1 className='counter fw-bold'><Counter from={0} to={50} /></h1><p className='text-muted fs-4'>Popular<p className=' fs-3 text-dark fw-bold'>Master Chief</p></p>
              </div>
              <div className='row'>
                <button className='ms-3 p-2 btn w-sm-100 w-lg-25 '><h4>Read More...</h4></button>
              </div>
            </div>
        </div>
        
      </div>
      <div className='row container m-auto'>
        <p className='display-6 text-center title' >___Food Menu___</p>
        <p className='display-6 fw-bold  text-center' >Most Popular Items</p>
        <div className='col-md-6 col-sm-12'>
          {
            menu1.map((el, i)=>(
              <Card3 title={el.title} content={el.content} price={el.price} img={el.img}/>
            ))
          }
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          {
            menu2.map((el, i)=>(
              <Card3 title={el.title} content={el.content} price={el.price} img={el.img}/>
            ))
          }
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 col-lg-6  me-0 col-sm-12'>
        <div class="ratio ratio-16x9 h-100  me-0">
          <iframe src="https://www.youtube.com/embed/jGIBvENjjFs" title="YouTube video" allowfullscreen></iframe>
        </div>
        </div>
        <div className='col-md-12 col-lg-6 form ms-0 col-sm-12'>
          <FormField />
        </div>
      </div>
      <div className='row container m-auto'>
        <p className='display-6 text-center title' >___Team Members___</p>
        <p className='display-6 fw-bold  text-center' >Our Master Chefss</p>
      </div>
      <div className='row container m-auto'>
      <div className='col-lg-3 col-md-6 col-sm-12'>
          <Card4 photo={People[0].img}/>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <Card4 photo={People[1].img}/>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <Card4 photo={People[2].img}/>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <Card4 photo={People[3].img}/>
        </div>
      </div>
      <div className='row container m-auto mt-3'>
        <p className='display-6 text-center title' >___Testimonial___</p>
        <p className='display-6 fw-bold  text-center' >Our Clients Say!!!</p>
      </div>
      <div className='row px-4 m-auto'>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <Card5 /> 
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <Card5 /> 
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <Card5 /> 
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <Card5 /> 
          </div>
      </div>
      
    </div>
    <footer className='row footer'>
      <Footer />
      <hr/>
      <div className='row d-flex flex-row justify-content-space-between'>
        <p className='col-12 col-sm-6' >© Mystery Code | All Right Reserved.</p>
        <p className='col-12 col-sm-6 text-end' >
        <a href='#'> Home </a> | <a href='#'> Service </a> | <a href='#'> Contact </a> | <a href='#'> About </a> 
        </p>
      </div>
    </footer>
    </>
  );
}

export default Home;


