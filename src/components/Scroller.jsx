import { motion, useTransform, useScroll, easeInOut } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import "../styles/team/scroller.css";
import Modal from "../components/TeamModal";
import Linkedin from "../assets/static_images/linkedin.svg";
import Facebook from "../assets/static_images/facebook.svg";
import Instagram from "../assets/static_images/instagram.svg";
// import Images from "../assets/team/index";
import newImages from "../assets/team2025-2026/index";

const cards = [
  {
    url: `${newImages.Pragati}`,
    quote: "Listen with curiosity. Speak with honesty. Act with integrity",
    details: {
      name: "Pragati Jha",
      desi: "Student Leader",
      social: {
        instagram:
          "https://www.instagram.com/_ppragatiii?igsh=ZW9oYXE4d2p5Ym8z.",
        linkedin:
          "https://www.linkedin.com/in/pragati-jha-b62626322?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        twitter: "",
      },
      about:
        "Ms. Pragati Jha embodies leadership through her hard work, sharp intellect, and remarkable ability to communicate with clarity and confidence. A natural motivator, she consistently encourages her peers to pursue the right path and become better versions of themselves. Her honesty shines through in the way she corrects and guides others, ensuring growth while maintaining warmth and understanding. Though firm when needed, her sweet and approachable nature makes everyone feel valued and supported. With her balance of kindness, strength, and responsibility, Pragati continues to uplift and positively influence the team.",
    },
    id: 1,
  },
  {
    url: `${newImages.Raj}`,
    quote:
      "Leadership is not about being in charge. It's about taking care of those in your charge.",

    details: {
      name: "Rajkumar Yadav",
      desi: "Student Leader",
      social: {
        instagram:
          "https://www.instagram.com/rajyadav_05?igsh=MW5wdWdxdHh3MDloNA==",
        linkedin:
          "https://www.linkedin.com/in/rajkumar-yadav-03a465316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "",
      },
      about:
        "Mr. Rajkumar Yadav is known for his gentle nature, supportive attitude, and sincere commitment to every task he takes up. He never scolds without reason, and if someone from another council reprimands his team, he is the first to step in, guide, and calm the situation with maturity. His creativity shines through in every activity he contributes to, and his talent in dance and acting adds a lively spark to the team. With dedication, patience, and a positive spirit, Rajkumar continues to inspire those around him and lead with grace and confidence.",
    },
    id: 2,
  },
  {
    url: `${newImages.Shweta}`,
    quote:
      "A great person attracts great people and knows how to hold them together",
    details: {
      name: "Shweta Yadav",
      desi: "Student Leader",
      social: {
        instagram: "https://www.instagram.com/cantfindrae/",
        linkedin: "",
        twitter: "",
      },
      about:
        "Ms. Shweta Yadav is known for her supportive nature, strong commitment, and ability to motivate every volunteer with positivity. She always encourages the team to give their best and adds fun moments that make the journey enjoyable for everyone. Whether it’s explaining tasks with clarity or guiding volunteers patiently, she ensures no one feels left behind. Her seriousness toward NSS reflects her sense of responsibility and dedication, making her a reliable and inspiring presence within the unit.",
    },
    id: 3,
  },

  {
    url: `${newImages.Adarsh}`,
    quote:
      "If your actions inspire others to dream more, learn more, do more and becomemore, you are a leader",

    details: {
      name: "Adarsh Singh",
      desi: "Admin Head",
      social: {
        instagram:
          "https://www.instagram.com/adarsh_041?igsh=MWV0cm1yMzFsd3FmeQ==",
        linkedin:
          "https://www.linkedin.com/in/adarsh-singh-41b223321?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        twitter: "",
      },
      about:
        "Mr. Adarsh Singh stands out for his composed nature, sharp focus, and unwavering commitment to perfection. His warm smile creates a positive atmosphere, yet his firm approach ensures that no mistakes are overlooked. With a strong sense of responsibility, he guides the team with clarity and discipline, making sure every task is carried out with precision. His ability to balance kindness with firmness brings stability and direction to the unit, helping everyone grow and perform their best.",
    },
    id: 4,
  },
  {
    url: `${newImages.Krishna}`,
    quote: "We come nearest to the great when we are great in humility.",

    details: {
      name: "Krishna Kulkarni",
      desi: "Admin Head",
      social: {
        instagram: "https://www.instagram.com/krishnakulkarnii/",
        linkedin: "https://www.linkedin.com/in/krishnakulkarni28",
        twitter: "",
      },
      about:
        "Mr. Krishna Kulkarni is known for his strict, focused, and no-nonsense approach toward responsibility. Deeply serious about NSS, he ensures that every task is completed with accuracy and dedication. If there is even the slightest mistake, he does not hesitate to point it out, pushing everyone to maintain high standards. His firm guidance, sharp attention to detail, and unwavering discipline create a strong foundation for the team. Through his seriousness and commitment, Krishna motivates everyone to stay alert, improve constantly, and give their absolute best.",
    },
    id: 5,
  },
  {
    url: `${newImages.Omwardhan}`,
    quote:
      "Leadership is not just about making decisions; it's about making the right decisions strategically",

    details: {
      name: "Omwardhan Jha",
      desi: "Admin Head",
      social: {
        instagram:
          "https://www.instagram.com/nowayom?igsh=MTRwMTdxZXRxNTVweg==",
        linkedin:
          "https://www.linkedin.com/in/omwardhanjha?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        twitter: "",
      },
      about:
        "Mr. Omwardhan Jha brings a unique blend of creativity, confidence, and sharp administrative skills to the team. Known for his excellent acting abilities and strong presence, he uses his expressive nature to communicate clearly and effectively. Whether setting up NSS dramas or coordinating tasks, he ensures everything is done with precision and order. His tall, commanding personality helps him lead with confidence, while his attention to detail ensures there is no room for mistakes. Dedicated, disciplined, and dependable, Omwardhan plays a key role in maintaining structure and smooth functioning within the unit.",
    },
    id: 6,
  },
  {
    url: `${newImages.Kshitij}`,
    quote:
      "Life is a collection of moments; don't just count them, make them count",

    details: {
      name: "Kshitij Dubey",
      desi: "Project Head",
      social: {
        instagram:
          "https://www.instagram.com/kshitijj__20?igsh=OTlyamI3Y2RyYXo0",
        linkedin:
          "https://www.linkedin.com/in/kshitij-dubey-283531291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "",
      },
      about:
        "Mr. Kshitij Dubey is known for his quiet confidence, composed nature, and thoughtful approach to handling responsibilities. He speaks less, but whenever he does, it carries clarity and purpose. His steady presence during projects brings balance to the team, ensuring tasks move smoothly without unnecessary chaos. Kshitij prefers working sincerely behind the scenes, supporting the unit with reliability, focus, and a calm mindset that keeps everyone grounded.",
    },
    id: 7,
  },
  {
    url: `${newImages.Mangilal}`,
    quote:
      "It's not about the resources you have available. It's about the resourcefulness you have within you.",

    details: {
      name: "Mangilal Choudhary",
      desi: "Project Head",
      social: {
        instagram:
          "https://www.instagram.com/mangi_bhai01?igsh=MXF4YnliZ2syeXQ2ZA==",
        linkedin:
          "https://www.linkedin.com/in/mangilalchoudhary?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        twitter: "",
      },
      about:
        "Mr. Mangilal Choudhary is known for his humble presence, cheerful nature, and dependable spirit. Though he may appear fun-loving at first, he maintains complete professionalism with the team. His caring attitude shines through in the way he often steps in to shield volunteers from unnecessary scolding, ensuring they feel supported and confident. With his calm approach and quiet strength, he contributes to the smooth execution of projects while fostering a positive, safe environment for everyone involved.",
    },
    id: 8,
  },
  {
    url: `${newImages.Prashanth}`,
    quote:
      "It's not about the resources you have available. It's about the resourcefulness you have within you.",

    details: {
      name: "Prashanth Swamy",
      desi: "Finance Head",
      social: {
        instagram:
          "https://www.instagram.com/x_.prashanth?igsh=MWR3N205cHh4MG5zNA==",
        linkedin:
          "https://www.linkedin.com/in/prashanth-swamy-b69698339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "",
      },
      about:
        "Mr. Prashanth Swamy excels in managing the finances of our NSS Unit with remarkable precision and control. Known for his strong management skills, he ensures every resource is used wisely and every plan is executed smoothly. While his fun-loving nature and humour bring light-hearted moments to the team, he becomes exceptionally focused when it comes to work. His ability to guide juniors firmly—correcting mistakes and ensuring discipline—strengthens the team’s efficiency and accountability. With a perfect blend of seriousness, leadership, and approachability, Prashant plays a key role in maintaining the financial stability and smooth functioning of our unit.",
    },
    id: 9,
  },
];

const Scroller = () => {
  const [show, setShow] = useState(false);
  const [selectedCardDetails, setSelectedCardDetails] = useState(null);

  const handleCardClick = (card) => {
    setShow(true);
    setSelectedCardDetails(card);
  };

  return (
    <div id="council">
      <Modal
        show={show}
        onClose={() => {
          setShow(false);
          setSelectedCardDetails(null);
        }}
      >
        {selectedCardDetails && (
          <div className="modal_div">
            <h1>About</h1>
            <p className="council_about">{selectedCardDetails.details.about}</p>
            <h4>Contact</h4>
            <div className="contact">
              <div
                onClick={() =>
                  window.open(selectedCardDetails.details.social.instagram)
                }
                className="link"
                style={{ cursor: "pointer" }}
              >
                <img src={Instagram} alt="instagram" />
              </div>

              <div
                onClick={() =>
                  window.open(selectedCardDetails.details.social.linkedin)
                }
                className="link"
                style={{ cursor: "pointer" }}
              >
                <img src={Linkedin} alt="linkedin" />
              </div>
              <div
                onClick={() =>
                  window.open(selectedCardDetails.details.social.twitter)
                }
                className="link"
                style={{ cursor: "pointer" }}
              >
                <img src={Facebook} alt="facebook" />
              </div>
            </div>
          </div>
        )}
      </Modal>
      <HorizontalScrollCarousel handleCardClick={handleCardClick} />
    </div>
  );
};

const HorizontalScrollCarousel = ({ handleCardClick }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [xValue, setXValue] = useState(["40%", "-84%"]);

  useEffect(() => {
    const updateXValue = () => {
      if (window.innerWidth < 300) {
        setXValue(["45%", "-134.5%"]);
      } else if (window.innerWidth <= 425) {
        setXValue(["46%", "-136%"]);
      } else if (window.innerWidth > 425 && window.innerWidth < 768) {
        setXValue(["44%", "-132%"]);
      } else if (window.innerWidth <= 768 && window.innerHeight > 1024) {
        setXValue(["45%", "-132%"]);
      } else if (window.innerWidth <= 768 && window.innerHeight < 400) {
        setXValue(["25%", "-75%"]);
      } else if (window.innerWidth <= 768) {
        setXValue(["38%", "-114%"]);
      } else if (window.innerWidth <= 1024) {
        setXValue(["38%", "-114%"]);
      } else {
        setXValue(["32%", "-96%"]);
      }
    };

    updateXValue();
    window.addEventListener("resize", updateXValue);

    return () => {
      window.removeEventListener("resize", updateXValue);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 2], xValue);

  return (
    <section ref={targetRef} className="carousel-section">
      <div className="sticky-container">
        <div className="colors">
          <div className="shape1"></div>
          <div className="shape2"></div>
          <div className="shape3"></div>
        </div>
        <h1 className="heading">Councils</h1>
        <p className="council_head">
          Our committed Councils, like steadfast pillars, ensure the seamless
          execution of every TCET NSS project. Their dedication transforms each
          initiative into a testament of collective commitment, highlighting the
          unit's cohesive and impactful approach to community service.
        </p>
        <motion.div
          style={{ x }}
          transition={{ stagger: 5, scrub: 1, ease: easeInOut }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="card-container"
        >
          {cards.map((card, index) => (
            <Card
              card={card}
              key={card.id}
              index={index}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, onClick, index }) => {
  const backgroundColors = index % 2 === 0 ? "#D0BFFF" : "#ffe4e1";

  return (
    <div
      className="card"
      key={card.id}
      onClick={onClick}
      style={{ backgroundColor: backgroundColors }}
    >
      <div className="card-image">
        <img src={card.url} alt="hello" />
      </div>
      <p className="council_quote">{card.quote}</p>
      <div className="card-overlay">
        <p className="council_name">{card.details.name}</p>
        <p className="council_post">{card.details.desi}</p>
      </div>
    </div>
  );
};

export default Scroller;
