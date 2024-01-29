import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ConverRmdHome from "./routes/conversation_recommend/ConverRmdHome";
import Romantic from "./routes/conversation_recommend/Romantic";
import Relationship from "./routes/conversation_recommend/Relationship";
import Icebreaking from "./routes/conversation_recommend/Icebreaking";

function App() {
  return (
    <div id="conversationRecommand">
      <Router>
        <Routes>
          <Route path="/category" element={<ConverRmdHome />}></Route>
          <Route path="/category/romantic" element={<Romantic />}></Route>
          <Route
            path="/cateegory/relationship"
            element={<Relationship />}
          ></Route>
          <Route path="/category/icebreaking" element={<Icebreaking />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
