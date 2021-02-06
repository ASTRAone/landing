import React, {useState} from 'react';
import './style.scss';

const MenuMobile = (props) => {

    const [visibleMenu, setVisibleMenu] = useState(false);

    return (
        <div className="menu-mobile">
            <div 
                onClick={() => setVisibleMenu(true)}
                className="menu-mobile__header">
                <i 
                    className="fas fa-infinity menu-mobile__icon">
                </i>
                <p className="menu-mobile__text">
                    menu
                </p>
            </div>
            <div className={`mobile-items ${visibleMenu === true ? 'visible' : ''}`}>
                <i
                    className="far fa-times-circle mobile-items__icon"
                    onClick={() => setVisibleMenu(false)}    >
                </i>
                <div className="mobile-items__item">
                    <a href="#">home</a>
                    <a href="#">about me</a>
                    <a href="#">portfolio</a>
                    <a href="#">contact</a>
                </div>
            </div>
        </div>
    );
};

export default MenuMobile;