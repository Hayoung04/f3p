import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Romantic from "./routes/conversation_recommend/Romantic";
import Friend from "./routes/conversation_recommend/Friend";
import Icebreaking from "./routes/conversation_recommend/Icebreaking";
import Balance from "./routes/conversation_recommend/Balance";
import If from "./routes/conversation_recommend/If";
import Serious from "./routes/conversation_recommend/SeriousConver";

import Profile from "./routes/profile/Profile";
import Write from "./routes/addprofile/Add";
import Mainpage from "./routes/mainpage/Mainpage";

import Test from "./test";

function App() {
  return (
    <div id="converRmd">
      <Router>
        <Routes>
          <Route path="/romantic" element={<Romantic />}></Route>
          <Route path="/friend" element={<Friend />}></Route>
          <Route path="/icebreaking" element={<Icebreaking />}></Route>
          <Route path="/seriousconversation" element={<Serious />}></Route>
          <Route path="/balancegame" element={<Balance />}></Route>
          <Route path="/if" element={<If />}></Route>
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
