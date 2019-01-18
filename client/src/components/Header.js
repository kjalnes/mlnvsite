import React from 'react';
import { Image } from 'semantic-ui-react'
import mlnv from './../mlnv.png';

const Header = () => (
    <div className='background-image'>
        <header className="App-header">
            <Image className='logo' src={mlnv} />
        </header>
    </div>
);

export default Header;
