import { Card } from "react-bootstrap";
import './info.css';
import { motion } from "framer-motion";
import Section from "../pages/home/Section";

const InfoCard = ({title, content, icon}) => {


  return (
    <Section>
      <Card style={{ width: '16rem' }} className='card1 '>
        {/* <Card.Img variant="top" src="./assets/images/hero.js" alt='Icon'/> */}
        <div className='fs-1'>{icon}</div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className=''>{content}</Card.Text>
        </Card.Body>
      </Card>
    </Section>
    
  );
}

export default InfoCard;