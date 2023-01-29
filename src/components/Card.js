import { useState, useEffect } from 'react';
import './Card.css';
import Button from './Button';

function Card() {
  const [title, setTitle] = useState();
  const [advice, setAdvice] = useState();

  const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        const { id, advice } = data.slip;
        setTitle(id);
        setAdvice(advice);
      });
  };

  // runs the api get function immediately, not just on click
  useEffect(getAdvice, []);

  return (
    <article className="card container">
      <h3 id="advice-title">{`Advice #${title}`}</h3>
      <p id="advice-text">{`"${advice}"`}</p>

      <div className="divider">
        <img src="./images/pattern-divider-desktop.svg" alt="" />
      </div>

      <Button handleClick={getAdvice}>
        <img src="./images/icon-dice.svg" alt="" />
      </Button>
    </article>
  );
}

export default Card;
