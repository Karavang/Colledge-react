import React, { useState, useEffect } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const [randomIndex, setRandomIndex] = useState(0);
  const { name, job, image, text } = people[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setRandomIndex((prevRandomIndex) => {
        let newRandomIndex;
        do {
          newRandomIndex = Math.floor(Math.random() * people.length);
        } while (newRandomIndex === prevRandomIndex);

        return newRandomIndex;
      });
    }, 5000); 

    return () => clearInterval(timer);
  }, [randomIndex]);

  const prevCard = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? people.length - 1 : prevIndex - 1
    );
  };

  const nextCard = () => {
    setIndex((prevIndex) =>
      prevIndex === people.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevCard} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextCard} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
