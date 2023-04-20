
import { Card } from "react-bootstrap";
import './card4.css';
import { motion } from "framer-motion";
import Section from "../pages/home/Section";

const Card4 = ({photo}) => {


  return (
    <Section>
      <div class="container4 bg-light border d-pflex text-center" style={{width: '16rem', height: '16rem'}}>
        <div className="">
          <motion.img
            whileHover={{
              scale: 1.1
            }}
         src={photo} alt="Avatar" class="image4 " />
        </div>
        <div class="overlay4 text-center">
          <h4 class="text-light">Full Name</h4>
          <p class="text-muted text-center">Designation</p>
        </div>
      </div>
    </Section>
    
  );
}

export default Card4;