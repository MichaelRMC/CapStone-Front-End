import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";

function App() {
  

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<Index />} />
            <Route path="/videos/:id" element={<Show />} />
            <Route path="/videos/edit" element={<Edit />} />
            <Route path="/videos/new" element={<New />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;