
import Layout from './Layout/Layout'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Maintanance from "./Maintanance/Maintanance";
import BookDrone from "./BookDrone/BookDrone";
import Profile from "./Profile/Profile";
import ServiceReport from "./ServiceReport/ServiceReport"
import Home from "./Home/Home"
import MyBookings from "./MyBookings/MyBookings"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route index element={<Home />} />
          <Route path="mybookings" element={<MyBookings />} />
          <Route path="service" element={<ServiceReport/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="bookdrone" element={<BookDrone />} />
          <Route path="maintanance" element={<Maintanance />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
