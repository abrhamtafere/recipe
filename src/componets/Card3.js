import { Card } from "react-bootstrap";
// import './info.css';
import { motion } from "framer-motion";
import Section from "../pages/home/Section";

const Card3 = ({img, title, content, price}) => {


  return (
    <Section>
      <div className='d-flex row'>
        <Card style={{ width: '7rem' }} className='card2 border-none justify-content-center'>
          <Card.Img variant="top" src={img} alt='Icon'/>
        </Card>

      <div className='col-6'>
        <p className='fw-bold d-flex card3p'><span className="me-5 ">{title}</span> <span className="price">{price}</span></p>
        <hr/>
        <p className='text-muted'>{content}</p>
      </div>
      </div>
      
    </Section>
    
  );
}

export default Card3;