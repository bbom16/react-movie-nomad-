import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

//버전 변경 후 switch 대신 routes로 변경됨. 수정 필요
//:id 로 작성해야 우리가 정한 id로 보냄. 아님 movie/id로 보냄.
function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/movie/:id" element={<Detail />}> 
        </Route>
        <Route path="/react-movie-nomad-" element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
