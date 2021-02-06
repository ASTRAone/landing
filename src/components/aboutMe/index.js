import React from 'react';
import './style.scss';
import './media.scss';

import man from '../../images/man.png';
import manMobile from '../../images/man_mobile.png';
import manTablet from '../../images/man_tablet.png';

import {Picture} from 'react-responsive-picture';

const AboutMe = (props) => {
    return (
        <div className="about-me">
            <Picture
                className="about-me__img"
                alt="Man"
                sources = {[
                    {
                        srcSet: `${manMobile}`,
                        media: "(max-width: 420px)",
                    },
                    {
                        srcSet: `${manTablet}`,
                        media: "(max-width: 768px)",
                    },
                    {
                        srcSet: `${man}`,
                    }
                ]} />
            <div className="about-me__our">
                <h1 className="about-me__title">
                    About Me
                </h1>
                <p className="about-me__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat.  
                </p>
                <p className="about-me__text about-me__text_last">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur.
                </p>
                <h3 className="about-me__title-bottom">
                    Jason Wood
                </h3>
            </div>
        </div>
    );
};

export default AboutMe;