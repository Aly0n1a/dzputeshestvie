import React from 'react'
import './Header.css'


const Header = () => {
  return (
   <>
  <header className='header'>
    <div className="container">
        <div className="header__wrapper">
            <div className="header__box">
                <h1>С помощью верстки <br />
                я создам ту жизнь, о которой <br /> <span>мечтаю!</span></h1>
                <p>Мои стремления + настойчивость позволят мне достичь чего угодно. Я не верю в это. Я знаю это на 100%. Меня не остановить!</p>
                <button>Двигаться к мечте</button>
            </div>
            <img src="https://abbos29.github.io/dream/img/main.png" alt="" className="header__img" />
        </div>
    </div>
  </header>
   
   </>
  )
}

export default Header