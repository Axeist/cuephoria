
import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const VisitorStats = () => {
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [todayVisitors, setTodayVisitors] = useState(0);
  const [bookings, setBookings] = useState(0);
  
  useEffect(() => {
    // Initialize with random data or fetch from localStorage
    const storedTotalVisitors = localStorage.getItem('total_visitors');
    const storedTodayDate = localStorage.getItem('today_date');
    const storedTodayVisitors = localStorage.getItem('today_visitors');
    const storedBookings = localStorage.getItem('total_bookings');
    
    const today = new Date().toDateString();
    
    // Generate random numbers for initial display if not in localStorage
    const initialTotal = storedTotalVisitors ? parseInt(storedTotalVisitors) : Math.floor(Math.random() * 5000) + 2000;
    const isNewDay = storedTodayDate !== today;
    const initialToday = isNewDay ? Math.floor(Math.random() * 30) + 10 : (storedTodayVisitors ? parseInt(storedTodayVisitors) : Math.floor(Math.random() * 30) + 10);
    const initialBookings = storedBookings ? parseInt(storedBookings) : Math.floor(initialTotal * 0.1); // ~10% conversion rate
    
    // Set current visitor as a new visitor
    const newTotalVisitors = initialTotal + 1;
    const newTodayVisitors = initialToday + 1;
    
    setTotalVisitors(newTotalVisitors);
    setTodayVisitors(newTodayVisitors);
    setBookings(initialBookings);
    
    // Store in localStorage
    localStorage.setItem('total_visitors', newTotalVisitors.toString());
    localStorage.setItem('today_date', today);
    localStorage.setItem('today_visitors', newTodayVisitors.toString());
    localStorage.setItem('total_bookings', initialBookings.toString());
    
    // Simulate real-time updates with random increments
    const visitorInterval = setInterval(() => {
      setTotalVisitors(prev => {
        const newValue = prev + 1;
        localStorage.setItem('total_visitors', newValue.toString());
        return newValue;
      });
      
      setTodayVisitors(prev => {
        const newValue = prev + 1;
        localStorage.setItem('today_visitors', newValue.toString());
        return newValue;
      });
      
      // Occasionally add bookings (roughly 15% conversion rate)
      if (Math.random() < 0.15) {
        setBookings(prev => {
          const newValue = prev + 1;
          localStorage.setItem('total_bookings', newValue.toString());
          return newValue;
        });
      }
    }, 20000); // Update every 20 seconds
    
    return () => clearInterval(visitorInterval);
  }, []);
  
  return (
    <div className="glass-card p-3 rounded-lg border border-neon-blue/20 flex items-center justify-around">
      <div className="text-center px-2">
        <div className="flex items-center justify-center mb-1">
          <Users size={16} className="mr-1 text-neon-blue" />
          <span className="text-xs text-gray-400">Total</span>
        </div>
        <div className="text-lg font-bold text-white">{totalVisitors.toLocaleString()}</div>
      </div>
      
      <div className="text-center px-2 border-x border-gray-700">
        <div className="flex items-center justify-center mb-1">
          <Users size={16} className="mr-1 text-neon-pink" />
          <span className="text-xs text-gray-400">Today</span>
        </div>
        <div className="text-lg font-bold text-white">{todayVisitors.toLocaleString()}</div>
      </div>
      
      <div className="text-center px-2">
        <div className="flex items-center justify-center mb-1">
          <svg 
            className="w-4 h-4 mr-1 text-green-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs text-gray-400">Bookings</span>
        </div>
        <div className="text-lg font-bold text-white">{bookings.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default VisitorStats;
