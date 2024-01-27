import BaConTopic from "./routes/BaConTopic";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Romantic from "./routes/romantic/Romantic";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<BaConTopic />}></Route>
          <Route path="/romantic" element={<Romantic />}></Route>
          <Route path="/relationship"></Route>
          <Route path="/icebreaking"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
