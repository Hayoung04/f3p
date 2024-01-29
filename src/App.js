import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ConverRmdHome from "./routes/conversation_recommend/ConverRmdHome";
import Romantic from "./routes/conversation_recommend/Romantic";
import Friend from "./routes/conversation_recommend/Friend";
import Icebreaking from "./routes/conversation_recommend/Icebreaking";

function App() {
  return (
    <div id="converRmd">
      <Router>
        <Routes>
          <Route path="/category" element={<ConverRmdHome />}></Route>
          <Route path="/category/romantic" element={<Romantic />}></Route>
          <Route path="/cateegory/friend" element={<Friend />}></Route>
          <Route path="/category/icebreaking" element={<Icebreaking />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
