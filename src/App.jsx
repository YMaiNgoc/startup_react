
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Events from './pages/Events';
// import Speakers from './pages/Speakers';
// import EventDetail from './pages/EventDetail';
// import Projects from './pages/Projects';
// import ChatBox from './pages/ChatBox';
// import Dashboard from './pages/admin/dashboard';
// function App() {
  // return (
    // <BrowserRouter>
      {/* <Header /> */}
{/* // */}
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/events" element={<Events />} /> */}
        {/* <Route path="/speakers" element={<Speakers />} /> */}
        {/* <Route path="/events/:eventId" element={<EventDetail />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/chat" element={<ChatBox />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        // Bạn có thể thêm các route khác ở đây
{/* // */}
      {/* </Routes> */}
{/* // */}
      {/* <Footer /> */}
    {/* </BrowserRouter> */}
  // );
// }

// export default App;

import React from "react";
import AdminLayout from "./layouts/admin.layout";
import Dashboard from "./pages/admin/Dashboards";
// import CrawlerEventMenu from "./pages/admin/CrawlerMenu"
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from "react";
import Event from "./components/admin/Event";
import axios from "axios";

function App() {
  // const [event, setEvent] = useState();
  // const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8800/api/crawler/surfdanang');
  //       setEvent(response.data.title);
  //     } catch (error) {
  //       console.error('Error fetching speakers:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   init();
  // }, []);

  // if (loading) return <div className="container mt-5">Đang tải sự kiện...</div>;

  return (
    <AdminLayout/>
    // <Dashboard/>
    // <CrawlerEventMenu />
    // <Event event={event}/>
  );
}

export default App;
