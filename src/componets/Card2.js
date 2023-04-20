import { Card } from "react-bootstrap";
// import './info.css';
import { motion } from "framer-motion";
import Section from "../pages/home/Section";

const Card2 = ({photo}) => {


  return (
    <Section>
      <Card style={{ width: '16rem' }} className='card2 border-none'>
        <Card.Img variant="top" src={photo} alt='Icon'/>
      </Card>
    </Section>
    
  );
}

export default Card2;