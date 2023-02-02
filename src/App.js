import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import MutualUnderstanding from './pages/MutualUnderstanding';
import Lyric from './pages/Lyric';
import Lips from './pages/Lips';
import GoldBrain from './pages/GoldBrain';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="mutual_understanding" element={<MutualUnderstanding />} />
              <Route path="lips" element={<Lips />} />
              <Route path="i_know_this_song" element={<Lyric />} />
              <Route path="gold_brain" element={<GoldBrain />} />
              <Route path="/*" element={<Error />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
