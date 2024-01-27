import { useState } from "react";
import { Link } from "react-router-dom";

const Topic = [
  "함께하고 싶은 취미는?",
  "선호하는 데이트 스타일은?",
  "기념일은 어떻게 챙겼으면 좋겠어?",
];

let variable = 0;

function Romantic() {
  const [topic, setTopic] = useState(Topic[variable]);
  const beforeBtn = () => {
    if (variable > 0) variable = variable - 1;
    setTopic(Topic[variable]);
    console.log(variable);
  };
  const nextBtn = () => {
    if (variable < Topic.length - 1) variable = variable + 1;
    setTopic(Topic[variable]);
    console.log(variable);
  };
  const reset = () => {
    variable = 0;
    setTopic(Topic[variable]);
  };
  return (
    <div>
      <button onClick={beforeBtn}>before</button>
      <p>{topic}</p>
      <button onClick={nextBtn}>next</button>
      <button onClick={reset}>reset</button>
      <p>
        <Link to="/">To Home</Link>
      </p>
    </div>
  );
}

export default Romantic;
