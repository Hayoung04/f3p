import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaConTopic from "./routes/conver_function1/BaConTopic";
import Romantic from "./routes/conver_function1/Romantic";
import Relationship from "./routes/conver_function1/Relationship";
import Icebreaking from "./routes/conver_function1/Icebreaking";

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
