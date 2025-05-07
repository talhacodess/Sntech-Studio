// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";
// import '../../styles/Team.css';

// import team1 from '../../assets/team1.png';
// import team2 from '../../assets/team2.png';
// import team3 from '../../assets/team3.png';
// import team4 from '../../assets/team4.png';
// import team5 from '../../assets/team5.png';
// import team6 from '../../assets/team6.png';
// import team7 from '../../assets/team7.png';
// import team8 from '../../assets/team8.png';
// import team9 from '../../assets/team9.png';

// const Team = () => {
//   return (
//     <div className="bg-neutral-800">
//       <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll down
//         </span>
//       </div>
//       <HorizontalScrollCarousel />
//       <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll up
//         </span>
//       </div>
//     </div>
//   );
// };

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

//   return (
//     <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <motion.div style={{ x }} className="flex gap-6 px-10">
//           {cards.map((card) => (
//             <Card card={card} key={card.id} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Card = ({ card }) => {
//     return (
//       <div className="team-card group">
//         <img
//           src={card.url}
//           alt={card.name}
//           className="team-card-image"
//         />
//         <div className="team-card-gradient"></div>
//         <div className="team-card-text">
//           <h2>{card.name}</h2>
//           <p>{card.role}</p>
//         </div>
//         <div className="team-card-border"></div>
//       </div>
//     );
//   };
  

// export default Team;

// const cards = [
//   {
//     url: team1,
//     name: "Noor Fatima",
//     role: "Brand Manager",
//     id: 1,
//   },
//   {
//     url: team2,
//     name: "Hasnat Mirza",
//     role: "Marketing & Ops Head",
//     id: 2,
//   },
//   {
//     url: team3,
//     name: "Alishba Komal",
//     role: "Creative Writer",
//     id: 3,
//   },
//   {
//     url: team4,
//     name: "Sarmad Mirza",
//     role: "Associate Art Director",
//     id: 4,
//   },
//   {
//     url: team5,
//     name: "Member 5",
//     role: "Role 5",
//     id: 5,
//   },
//   {
//     url: team6,
//     name: "Member 6",
//     role: "Role 6",
//     id: 6,
//   },
//   {
//     url: team7,
//     name: "Member 7",
//     role: "Role 7",
//     id: 7,
//   },
//   {
//     url: team8,
//     name: "Member 8",
//     role: "Role 8",
//     id: 8,
//   },
//   {
//     url: team9,
//     name: "Member 9",
//     role: "Role 9",
//     id: 9,
//   },
// ];
