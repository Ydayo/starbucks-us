import React from "react";
import "../assets/main.css";

const BucksMain = () => {
  const starDiv = [
    {
      title: "Find your adventure",
      detail:
        "Starbucks Summer Game is here! Play for your chance to win-morethan 10 million prizes are up for grabs!",
      src: "./img/star1.jpeg",
      button: "Play now",
    },
    {
      title: "For the top Pop in your life",
      detail:
        "This Father’s Day, show your appreciation for all he does with a thoughtful Starbucks eGift.",
      src: "./img/star2.jpeg",
      button: "Send an eGift",
    },
    {
      title: "Cinnamon caramel smooth",
      detail:
        "Our new Cinnamon Caramel Cream Nitro Cold Brew is ready on tap and topped with silky cold foam.",
      src: "./img/star3.webp",
      button: "Order now",
    },
    {
      title: "Get there satisfied",
      detail:
        "Fill up on the way with a Spinach, Feta & Egg White Wrap or Bacon, Sausage & Egg Wrap.",
      src: "./img/star4.jpeg",
      button: "Order now",
    },
  ];

  return (
    <>
      <section>
        <div className="starItem">
          <div className="itemLeft">
            <h1>{starDiv[0].title}</h1>
            <p>{starDiv[0].detail}</p>
            <button className="starBtn">{starDiv[0].button}</button>
          </div>
          <div className="itemRight">
            <img src={starDiv[0].src} alt="" />
          </div>
        </div>
        <div className="starItem">
          <div className="itemLeft">
            <h1>{starDiv[1].title}</h1>
            <p>{starDiv[1].detail}</p>
            <button className="starBtn">{starDiv[1].button}</button>
          </div>
          <div className="itemRight">
            <img src={starDiv[1].src} alt="" />
          </div>
        </div>
        <div className="starItem">
          <div className="itemLeft">
            <h1>{starDiv[2].title}</h1>
            <p>{starDiv[2].detail}</p>
            <button className="starBtn">{starDiv[2].button}</button>
          </div>
          <div className="itemRight">
            <img src={starDiv[2].src} alt="" />
          </div>
        </div>
        <div className="starItem">
          <div className="itemLeft">
            <h1>{starDiv[3].title}</h1>
            <p>{starDiv[3].detail}</p>
            <button className="starBtn">{starDiv[3].button}</button>
          </div>
          <div className="itemRight">
            <img src={starDiv[3].src} alt="" />
          </div>
        </div>

        <div className="mainBottom">
          <p>
            *NO PURCHASE NECESSARY. Participating stores only. Starbucks
            Partners (employees) are not eligible to win prizes. Ends 6/18/23.
            To play and for Official Rules visit starbuckssummergame.com.
            Entrants can receive a maximum of 2 plays per day, plus, bonus
            opportunities to earn additional plays.
          </p>
        </div>
      </section>
      <hr />
    </>
  );
};

export default BucksMain;
