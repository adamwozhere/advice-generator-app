import { useState, useEffect } from 'react';
import './Card.css';

function Card() {
  const [title, setTitle] = useState();
  const [advice, setAdvice] = useState();

  const getAdvice = () => {
    fetch('http://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        const { id, advice } = data.slip;
        setTitle(id);
        setAdvice(advice);
      });
  };

  useEffect(getAdvice, []);

  return (
    <article className="card container">
      <h3 id="advice-title">{`Advice #${title}`}</h3>
      <p id="advice-text">{`"${advice}"`}</p>

      <div className="divider">
        <img src="./images/pattern-divider-desktop.svg" alt="" />
      </div>

      <button id="advice-btn" className="container" onClick={getAdvice}>
        <img src="./images/icon-dice.svg" alt="" />
      </button>
    </article>
  );
}

export default Card;
