import React, { useState } from "react";
import "./styles.css";
import { FaQuoteRight } from "react-icons/fa";

const profiles = [
  {
    id: 1,
    name: "Susan Smith",
    job: "web developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Anna Johnson",
    job: "web designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Peter Jones",
    job: "intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "the boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const App = () => {
  const [currentProfile, setCurrentProfile] = useState(0);

  const handlePrevious = () => {
    setCurrentProfile((currentProfile - 1 + profiles.length) % profiles.length);
  };

  const handleNext = () => {
    setCurrentProfile((currentProfile + 1) % profiles.length);
  };

  const handleSurprise = () => {
    const randomProfile = Math.floor(Math.random() * profiles.length);
    setCurrentProfile(randomProfile);
  };

  return (
    <div className="App">
      <div className="header">Our Reviews</div>
      <div className="main-container">
        <div className="profile-container">
          <div className="braces">
            <FaQuoteRight size={25} style={{ fill: "white" }} />
          </div>

          <img
            className="profile-image"
            src={profiles[currentProfile].image}
            alt={profiles[currentProfile].name}
          />
          <h1 className="profile-name">{profiles[currentProfile].name}</h1>
          <h2 className="profile-job">{profiles[currentProfile].job}</h2>
          <p className="profile-text">{profiles[currentProfile].text}</p>
          <div className="arrows">
            <button className="arrow-btn" onClick={handlePrevious}>
              &#60;
            </button>
            <button className="arrow-btn" onClick={handleNext}>
              &#62;
            </button>
          </div>
          <button className="surprise-btn" onClick={handleSurprise}>
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
