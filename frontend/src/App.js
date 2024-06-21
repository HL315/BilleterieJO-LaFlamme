import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import SportsList from './components/sportsList';
import SportDetails from './components/sportDetails';
import EventDetails from './components/eventDetails';
import Dashboard from './components/dashboard';
import TicketPurchase from './components/ticketPurchase';
import OrderHistory from './components/orderHistory';
import Login from './components/login';
import Signup from './components/signup';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sport-list" element={<SportsList />} />
          <Route path="/sports/:sportId" element={<SportDetails />} />
          <Route path="/events/:eventId" element={<EventDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ticket-purchase" element={<TicketPurchase />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
