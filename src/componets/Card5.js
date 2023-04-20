
import { Card } from "react-bootstrap";
// import './card4.css';
import { motion } from "framer-motion";
import Section from "../pages/home/Section";

const Card5 = ({photo}) => {


  return (
    <Section>
      <Card className='border-white card5c' style={{ width: '18rem' }}>
      <Card.Img className="img p-2" style={{ width: '5rem' }} src="./assets/images/quote.jfif" />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <div className="d-flex">
        <Card.Img className="img p-2"  style={{ width: '5rem' }} src="./assets/images/abrham.jpg" />
        <Card.Title className='justify-content-center'>Card Title</Card.Title>
      </div>
     </Card>
    </Section>
    
  );
}

export default Card5;