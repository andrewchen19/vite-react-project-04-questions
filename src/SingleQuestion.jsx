import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
  // state
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
