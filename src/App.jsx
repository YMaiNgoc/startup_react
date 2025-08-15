
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import EventDetail from './pages/EventDetail';
import Projects from './pages/Projects';
import ChatBox from './pages/ChatBox';
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/events/:eventId" element={<EventDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/chat" element={<ChatBox/>} />
        {/* Bạn có thể thêm các route khác ở đây */}
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
