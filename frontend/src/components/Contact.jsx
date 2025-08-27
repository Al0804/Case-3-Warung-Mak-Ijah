import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/contact/', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="fw-bold">Hubungi Kami</h2>
            <p className="lead text-muted">Kami siap melayani Anda dengan sepenuh hati</p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-4">
                <h4 className="mb-4">Informasi Kontak</h4>
                
                <div className="mb-3">
                  <h6><i className="text-warning">📍</i> Alamat</h6>
                  <p className="text-muted">Jl. Merdeka No. 123, Jakarta Pusat</p>
                </div>
                
                <div className="mb-3">
                  <h6><i className="text-warning">📞</i> Telepon</h6>
                  <p className="text-muted">021-12345678</p>
                </div>
                
                <div className="mb-3">
                  <h6><i className="text-warning">⏰</i> Jam Operasional</h6>
                  <p className="text-muted">
                    Senin - Sabtu: 07:00 - 22:00<br/>
                    Minggu: 08:00 - 21:00
                  </p>
                </div>
                
                <div className="mb-3">
                  <h6><i className="text-warning">💳</i> Metode Pembayaran</h6>
                  <p className="text-muted">Tunai, Transfer Bank, E-wallet</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h4 className="mb-4">Kirim Pesan</h4>
                
                {submitStatus === 'success' && (
                  <div className="alert alert-success">
                    Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="alert alert-danger">
                    Terjadi kesalahan. Silakan coba lagi nanti.
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nama</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Pesan</label>
                    <textarea 
                      className="form-control" 
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-lg w-100">
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;