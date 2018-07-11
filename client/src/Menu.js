import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Scrollspy from 'react-scrollspy';


export default class MenuExampleVerticalSecondary extends Component {
  state = { activeItem: '【ツ】' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical className='main-menu'>
        <Scrollspy items={ ['one', 'two', 'three'] } currentClassName="active">
          <Menu.Item
            href='#one'
            name='【ツ】'
            onClick={this.handleItemClick} />
          <Menu.Item
            href='#two'
            name='projects'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            href='#three'
            name='contact'
            onClick={this.handleItemClick}
          />
        </Scrollspy>
      </Menu>
    )
  }
}
