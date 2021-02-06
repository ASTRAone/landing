import React from 'react';
import './style.scss';
import './media.scss';

import Menu from '../../components/menu/index';
import Scroll from '../../components/scroll/index';
import AboutMe from '../../components/aboutMe/index';
import MenuMobile from '../../components/menuMobile/index';

const PageInfo = (props) => {
    return (
        <div className="page-blog">
            <div className="blog-header">
                <div className="container-header">
                    <div className="blog-header__menu desktop">
                        <Menu 
                            links={[
                                { text: 'home', path: '#' },
                                { text: 'about me', path: '#' },
                                { text: 'portfolio', path: '#' },
                                { text: 'contact', path: '#' },
                            ]}
                            classMenu='border-bottom-white header-menu'
                            classItem="color-white header-item" />
                    </div>
                    <div className="blog-header__menu mobile">
                        <MenuMobile />
                    </div>
                    <div className="blog-header__scroll">
                        <Scroll 
                            text='scroll down to see more' />
                    </div>                
                </div>
            </div>
            <div className="blog-footer">
                <div className="container-footer">
                    <div className="blog-footer__menu"> 
                        <Menu 
                            links={[
                                { text: 'home', path: '#' },
                                { text: 'about me', path: '#' },
                                { text: 'portfolio', path: '#' },
                                { text: 'contact', path: '#' },
                            ]}
                            classMenu='border-bottom-gray footer-menu'
                            classItem="color-gray footer-item" />
                    </div>
                    <div className="blog-footer__about">
                        <AboutMe />
                    </div>
                    <div className="blog-footer__scroll">
                        <Scroll 
                            text='keep scrolling, there is still more to come.' />
                    </div>
                </div>
            </div>               
        </div>  
    );
};

export default PageInfo;