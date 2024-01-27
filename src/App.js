import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaConTopic from "./routes/basic/BaConTopic";
import Romantic from "./routes/basic/Romantic";
import Relationship from "./routes/basic/Relationship";
import Icebreaking from "./routes/basic/Icebreaking";

function App() {
  return (
    <div id="conversation">
      <Router>
        <Routes>
          <Route path="/" element={<BaConTopic />}></Route>
          <Route path="/romantic" element={<Romantic />}></Route>
          <Route path="/relationship" element={<Relationship />}></Route>
          <Route path="/icebreaking" element={<Icebreaking />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
