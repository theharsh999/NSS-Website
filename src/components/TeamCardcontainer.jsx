import React from "react";
import "../styles/team/cardcontainer.css";
// import Images from "../assets/team";
import newImages from "../assets/team2025-2026";

const CardContainer = () => {
  const cardContents = [
    {
      name: "Gandharvi Kalyankar",
      testament:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo molestias officia voluptas natus numquam recusandae laboriosam mollitia cum nam",
      image: `${newImages.Gandharvi}`,
      position: "Asst. Admin Head",
      quote: "Collective efforts yield triumph, unity prevails.",
    },
    {
      name: "Ashutosh Pandey",
      testament:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo molestias officia voluptas natus numquam recusandae laboriosam mollitia cum nam",
      image: `${newImages.Ashutosh}`,
      position: "Asst. Admin Head",
      quote:
        "Enthusiastic spirit, navigating challenges with helpful guidance.",
    },
    {
      name: "Dev Dubey",
      testament:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo molestias officia voluptas natus numquam recusandae laboriosam mollitia cum nam",
      image: `${newImages.Dev}`,
      position: "Public Relation",
      quote: "Approaching changes with eager, proactive enthusiasm.",
    },
    {
      name: "Sejal Gupta",
      testament:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo molestias officia voluptas natus numquam recusandae laboriosam mollitia cum nam",
      image: `${newImages.sejal}`,
      position: "Website Manager",
      quote: "Helpful mindset and enthusiasm pave collective journeys",
    },
  ];

  return (
    <div id="junior-council" className="jc-card-container">
      <h2 id="jc-container-header">Junior Councils</h2>
      <p id="jc-container-info">
        At the forefront of assistance, our Junior Councils stand out as
        essential contributors, supporting and enhancing the endeavors of our
        broader councils, epitomizing the values of unity and collaboration.
      </p>
      <div className="junior-counil-card-wrapper">
        {cardContents.map((jc_card_container, index) => (
          <Card
            key={index}
            name={jc_card_container.name}
            quote={jc_card_container.quote}
            image={jc_card_container.image}
            position={jc_card_container.position}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ name, quote, image, position }) => {
  return (
    <div className="jc-card-wrapper">
      <div className="jc-card">
        <img src={image} alt={name} className="jc-image" />
        <div className="jc-detail">
          <h2 className="jc-name">{name}</h2>
          <p className="jc-position">{position}</p>
        </div>
        <p className="jc-quote">{quote}</p>
      </div>
    </div>
  );
};

export default CardContainer;
