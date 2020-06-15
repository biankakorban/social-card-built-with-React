import React from "react";

import Headline from "./socialCardComponents/Headline";
import Message from "./socialCardComponents/Message";
import Image from "./socialCardComponents/Image";

import image from "../assets/profile_img.jpg";
import image_Sydney from "../assets/Sydney.jpg";

const socialCard = () => {
  const socialCard = {
    title:
      "Learning React? Yes! Start small and progress into more advanced projects!!",
    description: "Learning React? Start Small.",
    description_cd:
      "The best advice to learn programming in 2020 is follow the project-based learning approach.",
    link: "https://github.com/biankakorban",
    img: image_Sydney,
  };

  return (
    <div className="social-card">
      <Headline img={socialCard.img} title={socialCard.title} />
      <Image image={image} />
      <Message
        desc={socialCard.description}
        desc_cd={socialCard.description_cd}
        link={socialCard.link}
      />
    </div>
  );
};

export default socialCard;
