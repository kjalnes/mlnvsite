import React from 'react';
import { Menu } from 'semantic-ui-react';
import Scrollspy from 'react-scrollspy';

export default function MainMenu() {

    return (
        <Menu
            pointing
            secondary
            vertical
            className='full-width main-menu'>
            <div className='full-width'>
                <Scrollspy
                    className='nav'
                    items={ ['about', 'projects', 'contact'] }
                    currentClassName='active-menu-item'>
                    <Menu.Item href='#about' name='【ツ】'/>
                    <Menu.Item href='#projects' name='projects' />
                    <Menu.Item href='#contact' name='contact' />
                </Scrollspy>
            </div>
        </Menu>
    );
}
