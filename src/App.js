import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ConverRmdHome from "./routes/conversation_recommend/ConverRmdHome";
import Romantic from "./routes/conversation_recommend/Romantic";
import Friend from "./routes/conversation_recommend/Friend";
import Icebreaking from "./routes/conversation_recommend/Icebreaking";

import Profile from "./routes/profile/Profile";
import Write from "./routes/addprofile/Add";
import Mainpage from "./routes/mainpage/Mainpage";

import Test from "./test";

function App() {
  return (
    <div id="converRmd">
      <Router>
        <Routes>
          <Route path="/category" element={<ConverRmdHome />}></Route>
          <Route path="/category/romantic" element={<Romantic />}></Route>
          <Route path="/category/friend" element={<Friend />}></Route>
          <Route path="/category/icebreaking" element={<Icebreaking />}></Route>
        </Routes>
        <Routes>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Routes>
          <Route path="/addprofile/:happy" element={<Write />}></Route>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/test/aaa/bbbb" element={<Test />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
