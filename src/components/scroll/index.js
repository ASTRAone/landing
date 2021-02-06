import React from 'react';
import './style.scss';

import arrow from '../../images/arrow.png';

const Scroll = (props) => {
    return (
        <div className="scroll">
            <p className="scroll__text">
                {props.text}
            </p>
            <img className="scroll__img" src={arrow} />
        </div>
    );
};

export default Scroll;