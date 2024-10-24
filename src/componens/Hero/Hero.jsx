import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <>
    <div className="container">
<h2 className='hero_title'>Что меня ждет впереди</h2>
    <div className="cards">
      <div className="card">
        <img src="/icon1.png" alt="" className="card__img" width={50} height={50}/>
        <h4>Свободное время</h4>
        <p>Мне нужно свободное время на семью <br /> и самое настоящее</p>
      </div>
      <div className="card">
        <img src="/icon2.png" alt="" className="card__img" width={50} height={50}/>
        <h4>Яркие путешествия</h4>
        <p>Работать откуда угодно - что может <br /> быть лучше?</p>
      </div>
      <div className="card">
        <img src="/icon3.png" alt="" className="card__img" width={50} height={50}/>
        <h4>Создание ценности</h4>
        <p>Нет ничего сильнее, чем жить не просто <br /> так, создавая ценность</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Hero