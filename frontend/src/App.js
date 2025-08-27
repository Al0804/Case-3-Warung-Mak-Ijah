import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

function App() {
  const [warungInfo, setWarungInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [infoResponse, menuResponse] = await Promise.all([
          axios.get(`${API_BASE_URL}/info/`),
          axios.get(`${API_BASE_URL}/menu/`)
        ]);
        
        setWarungInfo(infoResponse.data);
        setMenuItems(menuResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Hero warungInfo={warungInfo} />
      <About warungInfo={warungInfo} />
      <Menu menuItems={menuItems} />
      <Contact />
      <Footer warungInfo={warungInfo} />
    </div>
  );
}

export default App;