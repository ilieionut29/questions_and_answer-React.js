import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const expandQuestion = () => {
    if (showInfo) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={expandQuestion}>
          {showInfo ? <FaPlus /> : <FaMinus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
