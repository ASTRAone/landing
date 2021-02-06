import React from 'react';
import './style.scss';
import './media.scss';

const Menu = (props) => {
    return (
        <nav className={`menu ${props.classMenu ? props.classMenu : ''}`}>
            {props.links ? 
                props.links.map((item, index) => {
                    return (
                        <a 
                            key={index}
                            className={`menu__item ${props.classItem ? props.classItem : ''}`}
                            href={item.path}>
                                {item.text}
                        </a>
                    );
                }) : null}
        </nav>
    );
};

export default Menu;