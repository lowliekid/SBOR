import React from 'react'
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.Header}>
            <div className={s.HeaderLogo}>
                <a href='###'>
                    <img width='30px' height='30px' src='https://www.svgrepo.com/show/500333/box-packed.svg' />
                    <p>СБОР</p>
                </a>
            </div>
            <div className={s.HeaderSearch}>
                <input type='search' placeholder='Ваш город' />
            </div>
        </div>
    )
}

export default Header