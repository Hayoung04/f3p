import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BaConTopic from "./routes/conver_function1/BaConTopic";
import Romantic from "./routes/conver_function1/Romantic";
import Relationship from "./routes/conver_function1/Relationship";
import Icebreaking from "./routes/conver_function1/Icebreaking";

import BalanceGame from "./routes/conver_function2/BalanceGame";
import RomanticGame from "./routes/conver_function2/RomanticGame";

function App() {
  return (
    <div id="conversationRecommand">
      <Router>
        <Routes>
          <Route path="/basic" element={<BaConTopic />}></Route>
          <Route path="/basic/romantic" element={<Romantic />}></Route>
          <Route path="/basic/relationship" element={<Relationship />}></Route>
          <Route path="/basic/icebreaking" element={<Icebreaking />}></Route>
        </Routes>
        <Routes>
          <Route path="/balance" element={<BalanceGame />}></Route>
          <Route path="/balance/romantic" element={<RomanticGame />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
