import { Link } from "react-router-dom";

function Balance() {
  return (
    <div>
      <h1>F3P</h1>
      <h3>관심가는 주제를 골라보세요</h3>
      <div>
        <Link to="/balance/romantic">연애</Link>
      </div>
    </div>
  );
}

export default Balance;
