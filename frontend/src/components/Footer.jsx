import React from 'react';

const Footer = ({ warungInfo }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5>🍜 Warung Mak Ijah</h5>
            <p className="text-light">
              Warung tradisional dengan cita rasa autentik Indonesia yang telah 
              melayani sejak 2023.
            </p>
          </div>
          
          <div className="col-lg-4 mb-4">
            <h5>Kontak</h5>
            <p className="text-light mb-1">📍 {warungInfo?.address}</p>
            <p className="text-light mb-1">📞 {warungInfo?.phone}</p>
            <p className="text-light">⏰ {warungInfo?.hours}</p>
          </div>
          
          <div className="col-lg-4 mb-4">
            <h5>Ikuti Kami</h5>
            <div>
              <a href="#" className="text-light me-3">📘 Facebook</a>
              <a href="#" className="text-light me-3">📷 Instagram</a>
              <a href="#" className="text-light">🐦 Twitter</a>
            </div>
          </div>
        </div>
        
        <hr className="text-light"/>
        
        <div className="row">
          <div className="col-lg-12 text-center">
            <p className="text-light mb-0">
              © 2025 Warung Mak Ijah. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
