import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
   <>
<div className="bak">
   <div className="container">
    <h2 className='footer_title'>Форма заказа билета в будущее</h2>
    <div className="form">
      <input type="text" name='name' placeholder='имя' required />
      <input type="email" name='email' placeholder='E-mail' required />
      <input type="tel" name='phone' placeholder='телефон' required />
      <input type="text" name='travel' placeholder='куда я полечу в ближайшее время?' required />

    <button className='btn-1'>Двигаться к мечте!</button>
    </div>
   </div>
   </div>

   <div className="blue">
    <p className='blue_text'>© Все мои мечты защищены моим трудолюбием</p>
   </div>
   
   </>
  )
}

export default Footer