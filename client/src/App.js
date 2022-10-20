
import Layout from './Layout/Layout'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Maintanance from "./Maintanance/Maintanance";
import BookDrone from "./BookDrone/BookDrone";
import Profile from "./Profile/Profile";
import ServiceReport from "./ServiceReport/ServiceReport"
import Home from "./Home/Home"
import MyBookings from "./MyBookings/MyBookings"
import AdminLayout from './Admin/AdminLayout/AdminLayout';
import AdminHome from './Admin/AdminHome/Adminhome';
import DroneFleet from './Admin/DroneFleetTracking/dronefleetTracking';

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
        <Route path = "/adminhome" element = {<AdminLayout/>} >
          <Route index element = {<AdminHome/>} />
          <Route path = "dronecatalog"  />
          <Route path = "dronemngt" />
          <Route path = "dronebook" />
          <Route path = "dronefleet" element = {<DroneFleet/>} />
          <Route path = "droneservice" />
          <Route path = "dronedata" />
          <Route path = "droneAI" />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
