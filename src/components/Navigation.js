import React from 'react';
import '../styles/navigation.scss';
import instagramLogo from '../images/instagramLogo.png'
import searchIcon from '../images/searchIcon.png'
import Menu from './Menu';

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='container'>
                <img className='logo' src={instagramLogo} alt='Instagram logo' />
                <div className='search'>
                    <img className='searchIcon' src={searchIcon} alt='Search icon' />
                    <span className='searchText'>Search</span>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Navigation;