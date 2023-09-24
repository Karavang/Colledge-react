import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % people.length);
    }, 5000);
    return () => clearInterval(sliderInterval);
  }, [index, people.length]);

  const prevCard = () => {
    setIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
  };

  const nextCard = () => {
    setIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";

          if (personIndex === index) {
            position = "activeSlide";
          } else if (
            personIndex === (index - 1 + people.length) % people.length ||
            (personIndex === 0 && index === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={prevCard}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextCard}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
