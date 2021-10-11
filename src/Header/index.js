import React from 'react'
import './styles.scss'
import Logo from '../Assets/movie+.svg'
import User from '../Assets/user.png'

export default function Header( {scroll} ) {
    
    return (
        <header className={scroll ? 'scroll': ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src={User} />
                </a>
            </div>
        </header>
    )
}
