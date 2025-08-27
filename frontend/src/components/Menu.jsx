import React, { useState } from 'react';

const Menu = ({ menuItems }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    paymentMethod: '',
    notes: ''
  });

  const categories = [...new Set(menuItems.map(item => item.category))];

  const addToCart = (menuItem) => {
    const existingItem = cart.find(item => item.id === menuItem.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === menuItem.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...menuItem, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      setCart(cart.map(item => 
        item.id === itemId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = async () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.paymentMethod) {
      alert('Mohon lengkapi semua field yang diperlukan');
      return;
    }

    const orderData = {
      customer_name: customerInfo.name,
      customer_phone: customerInfo.phone,
      customer_email: customerInfo.email,
      payment_method: customerInfo.paymentMethod,
      total_amount: getTotalPrice(),
      notes: customerInfo.notes,
      items: cart.map(item => ({
        menu_item_id: item.id,
        quantity: item.quantity,
        price: item.price
      }))
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/orders/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      if (response.ok) {
        const order = await response.json();
        
        // Handle different payment methods
        if (customerInfo.paymentMethod === 'CASH') {
          alert(`Pesanan berhasil dibuat! Nomor pesanan: #${order.id}\n\nSilakan datang ke kasir untuk pembayaran tunai.`);
        } else if (customerInfo.paymentMethod.startsWith('BANK_')) {
          const bankName = customerInfo.paymentMethod.split('_')[1];
          alert(`Pesanan berhasil dibuat! Nomor pesanan: #${order.id}\n\nSilakan transfer ke rekening ${bankName}:\nNo. Rek: 1234567890\nA/n: Warung Makan`);
        } else if (customerInfo.paymentMethod.startsWith('EWALLET_')) {
          const walletName = customerInfo.paymentMethod.split('_')[1];
          alert(`Pesanan berhasil dibuat! Nomor pesanan: #${order.id}\n\nSilakan bayar melalui ${walletName}: 081234567890`);
        }

        // Reset form and cart
        setCart([]);
        setShowCart(false);
        setShowCheckout(false);
        setCustomerInfo({
          name: '',
          phone: '',
          email: '',
          paymentMethod: '',
          notes: ''
        });
      } else {
        alert('Terjadi kesalahan saat membuat pesanan');
      }
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Terjadi kesalahan saat membuat pesanan');
    }
  };

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="fw-bold">Menu Kami</h2>
            <p className="lead text-muted">Pilihan hidangan lezat dengan cita rasa autentik</p>
            
            {/* Cart Button */}
            <button 
              className="btn btn-warning position-relative"
              onClick={() => setShowCart(true)}
            >
              🛒 Keranjang
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-5">
            <h3 className="text-center mb-4 text-warning">{category}</h3>
            <div className="row">
              {menuItems
                .filter(item => item.category === category && item.is_available)
                .map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div className="card menu-card h-100">
                    <img 
                      src={item.image || `https://via.placeholder.com/300x200/ff6b35/ffffff?text=${encodeURIComponent(item.name)}`}
                      className="card-img-top" 
                      alt={item.name}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text text-muted flex-grow-1">{item.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="price-badge">
                          Rp {parseInt(item.price).toLocaleString('id-ID')}
                        </span>
                        <button 
                          className="btn btn-warning btn-sm"
                          onClick={() => addToCart(item)}
                        >
                          + Keranjang
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {menuItems.length === 0 && (
          <div className="text-center">
            <p className="text-muted">Menu sedang diperbarui. Silakan hubungi kami untuk informasi menu terbaru.</p>
          </div>
        )}
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Keranjang Belanja</h5>
                <button 
                  type="button" 
                  className="btn-close"
                  onClick={() => setShowCart(false)}
                ></button>
              </div>
              <div className="modal-body">
                {cart.length === 0 ? (
                  <p className="text-center text-muted">Keranjang kosong</p>
                ) : (
                  <div>
                    {cart.map((item, index) => (
                      <div key={index} className="d-flex justify-content-between align-items-center mb-3 p-3 border rounded">
                        <div>
                          <h6 className="mb-1">{item.name}</h6>
                          <small className="text-muted">Rp {parseInt(item.price).toLocaleString('id-ID')}</small>
                        </div>
                        <div className="d-flex align-items-center">
                          <button 
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="mx-3">{item.quantity}</span>
                          <button 
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                          <button 
                            className="btn btn-sm btn-danger ms-3"
                            onClick={() => removeFromCart(item.id)}
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    ))}
                    <hr />
                    <div className="d-flex justify-content-between">
                      <strong>Total: Rp {getTotalPrice().toLocaleString('id-ID')}</strong>
                    </div>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setShowCart(false)}
                >
                  Tutup
                </button>
                {cart.length > 0 && (
                  <button 
                    type="button" 
                    className="btn btn-warning"
                    onClick={() => {
                      setShowCart(false);
                      setShowCheckout(true);
                    }}
                  >
                    Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Checkout Pesanan</h5>
                <button 
                  type="button" 
                  className="btn-close"
                  onClick={() => setShowCheckout(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <h6>Informasi Pelanggan</h6>
                    <div className="mb-3">
                      <label className="form-label">Nama *</label>
                      <input 
                        type="text" 
                        className="form-control"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">No. Telepon *</label>
                      <input 
                        type="tel" 
                        className="form-control"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-control"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      />
                    </div>
                    
                    <h6>Metode Pembayaran *</h6>
                    <div className="mb-3">
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name="paymentMethod" 
                          value="CASH"
                          checked={customerInfo.paymentMethod === 'CASH'}
                          onChange={(e) => setCustomerInfo({...customerInfo, paymentMethod: e.target.value})}
                        />
                        <label className="form-check-label">💰 Tunai (Bayar di Kasir)</label>
                      </div>
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name="paymentMethod" 
                          value="BANK_BCA"
                          checked={customerInfo.paymentMethod === 'BANK_BCA'}
                          onChange={(e) => setCustomerInfo({...customerInfo, paymentMethod: e.target.value})}
                        />
                        <label className="form-check-label">🏦 Transfer Bank BCA</label>
                      </div>
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name="paymentMethod" 
                          value="BANK_BRI"
                          checked={customerInfo.paymentMethod === 'BANK_BRI'}
                          onChange={(e) => setCustomerInfo({...customerInfo, paymentMethod: e.target.value})}
                        />
                        <label className="form-check-label">🏦 Transfer Bank BRI</label>
                      </div>
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name="paymentMethod" 
                          value="BANK_BSI"
                          checked={customerInfo.paymentMethod === 'BANK_BSI'}
                          onChange={(e) => setCustomerInfo({...customerInfo, paymentMethod: e.target.value})}
                        />
                        <label className="form-check-label">🏦 Transfer Bank BSI</label>
                      </div>
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name="paymentMethod" 
                          value="EWALLET_GOPAY"
                          checked={customerInfo.paymentMethod === 'EWALLET_GOPAY'}
                          onChange={(e) => setCustomerInfo({...customerInfo, paymentMethod: e.target.value})}
                        />
                        <label className="form-check-label">📱 GoPay</label>
                      </div>
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name="paymentMethod" 
                          value="EWALLET_DANA"
                          checked={customerInfo.paymentMethod === 'EWALLET_DANA'}
                          onChange={(e) => setCustomerInfo({...customerInfo, paymentMethod: e.target.value})}
                        />
                        <label className="form-check-label">📱 DANA</label>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label className="form-label">Catatan</label>
                      <textarea 
                        className="form-control"
                        rows="3"
                        value={customerInfo.notes}
                        onChange={(e) => setCustomerInfo({...customerInfo, notes: e.target.value})}
                        placeholder="Catatan khusus untuk pesanan..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <h6>Ringkasan Pesanan</h6>
                    <div className="border rounded p-3">
                      {cart.map((item, index) => (
                        <div key={index} className="d-flex justify-content-between mb-2">
                          <span>{item.quantity}x {item.name}</span>
                          <span>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</span>
                        </div>
                      ))}
                      <hr />
                      <div className="d-flex justify-content-between">
                        <strong>Total: Rp {getTotalPrice().toLocaleString('id-ID')}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setShowCheckout(false)}
                >
                  Kembali
                </button>
                <button 
                  type="button" 
                  className="btn btn-success"
                  onClick={handleCheckout}
                >
                  Buat Pesanan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;