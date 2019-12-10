import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                   {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
                    <Link to='/'>
                        <img src="/android-chrome-512x512.png" alt='store' className='navbar-brand'/>
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to='/' className="nav-link">
                                rishat store
                            </Link>
                        </li>
                        <li className="nav-item ml-5">
                            
                            <a href='https://t.me/reshreshus' className="nav-link">
                                <i class="fab fa-telegram fa-2x" />
                            </a>
                            Telegram me
                        </li>
                    </ul>


                    <Link to='/cart' className='ml-auto'>
                        <ButtonContainer>
                            <span className='mr-2'>
                                <i className="fas fa-bus"/>
                            </span>
                            Your trippy bus
                        </ButtonContainer>
                    </Link>
                </NavWrapper>
            </div> 
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainDark) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`
