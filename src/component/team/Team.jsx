import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import '../../styles/Team.css';

import team1 from '../../assets/team1.png';
import team2 from '../../assets/team2.png';
import team3 from '../../assets/team3.png';
import team4 from '../../assets/team4.png';
import team5 from '../../assets/team5.png';
import team6 from '../../assets/team6.png';
import team7 from '../../assets/team7.png';
import team8 from '../../assets/team8.png';
import team9 from '../../assets/team9.png';
import team10 from '../../assets/team10.png';


const Team = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="team-section">
      <div className="team-scroll-container">
        <motion.div style={{ x }} className="team-cards-wrapper">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="team-card">
      <img
        src={card.url}
        alt={card.name}
        className="team-card-image"
      />
     
    
        <h2>{card.name}</h2>
        <p>{card.role}</p>

      
    </div>
  );
};

export default Team;

const cards = [
  { url: team1, name: "Bilal Ahmad", role: "Manager/Sales", id: 1 },
  { url: team2, name: "Muhammad Kaleem", role: "HR Manager", id: 2 },
  { url: team3, name: "Talha Bashir", role: "Web Developer", id: 3 },
  { url: team4, name: "Qadeer Abbas", role: "Product Designer", id: 4 },
  { url: team5, name: "Zeeshan", role: "Marketing Head", id: 5 },
  { url: team6, name: "Sabir Ishtiaq", role: "Manager/IT", id: 6 },
  { url: team7, name: "Muhammad Mudasir", role: "Graphic Designer", id: 7 },
  { url: team8, name: "Dilshad Khan", role: "SEO Specialist", id: 8 },
  { url: team9, name: "Ghulam Mustafa", role: "Full Stack Web developer", id: 9 },
  { url: team10, name: "Ubaid-ul-Rehman", role: "Sales Executive", id: 10 },

];
