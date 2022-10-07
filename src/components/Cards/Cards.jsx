import React from "react";
import { CardsData } from "../../utils/DummyData";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        {CardsData.map((card) => (
          <div className={card.class}>
            <img
              className="w-20 mx-auto mt-[-3em] bg-white"
              src={card.image}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              {card.title}
            </h2>
            <p className="text-center text-4xl font-bold">{card.price}</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">{card.storage}</p>
              <p className="py-2 border-b mx-8">{card.user}</p>
              <p className="py-2 border-b mx-8">{card.send}</p>
            </div>
            <button className={card.btnclass}>{card.button}</button>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Cards;
