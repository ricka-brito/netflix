import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { slide as Menu } from 'react-burger-menu'

export default function Header() {
  return (
    <nav className="header">
        <h1 id="titulo">NETFLIX</h1>
        <ul className="menu">
            <li className="item">HOME</li>
            <li className="item">MOVIES</li>
            <li className="item">TV SHOWS</li>
            <li className="item">HOLLYWOOD</li>
            <li className="item">HORROR</li>
        </ul>
        <form className="searchform">
            <input
                className="pesquisa"
                placeholder="Search"
            />
            <SearchIcon
                className="icone"
            />
        </form>
        <Menu disableOverlayClick width={"60%"} noOverlay >
        <form className="searchform">
            <input
                id="pesquisa"
                className="pesquisa"
                placeholder="Search"
            />
            <SearchIcon
                className="icone"
                id="icone"
            />
        </form>
        <div id="linha"></div>

            <a className="menu-item" href="/">Home</a>
            <a className="menu-item" href="/about">MOVIES</a>
            <a className="menu-item" href="/contact">TV SHOWS</a>
            <a className="menu-item" href="/contact">HOLLYWOOD</a>
            <a className="menu-item" href="/contact">HORROR</a>
        </Menu>
    </nav>
  )
}
