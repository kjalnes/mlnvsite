import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Scrollspy from 'react-scrollspy';

class MainMenu extends Component {
    state = {
        active: '【ツ】'
    }

    handleItemClick = (e, { name }) => {
        this.setState({ active: name })
    }

    render() {
        const { active } = this.state;
        return (
            <Menu
                pointing
                secondary
                vertical
                className='full-width main-menu'
            >
                <div className='full-width'>
                    <Scrollspy
                        items={ ['one', 'two', 'three'] }
                        currentClassName="active"
                        onUpdate={ console.log('this', this) }

                    >
                        <Menu.Item
                            href='#one'
                            name='【ツ】'
                            active={active === '【ツ】'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            href='#two'
                            name='projects'
                            active={ active === 'projects' }
                            onClick={this.handleItemClick}

                        />
                        <Menu.Item
                            href='#three'
                            name='contact'
                            active={ active === 'contact' }
                            onClick={this.handleItemClick}

                        />
                    </Scrollspy>
                </div>
            </Menu>
        );
    }
}

export default MainMenu;
