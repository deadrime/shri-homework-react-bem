import React, {PureComponent} from 'react';
import { cn } from '@bem-react/classname'
import { Link } from 'react-router-dom'
import '../../static/css/header.css'

const cnBurger = cn('burger')

const Burger = (props:any) => {
  const {active, onClick} = props
  return (
    <div 
      className={cnBurger({active})} 
      onClick = {onClick}>
      <div className={cnBurger('menu')}/>
    </div>
  )
}

const cnHeader = cn('Header')
const cnNav = cn(cnHeader('nav'))

class Header extends PureComponent {
  state = {
    active: false,
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    const { active } = this.state
    return(
      <header className={cnHeader()}>
        <div className={cnHeader('logo')}/>
        <nav className={cnNav({active})}>
          <a href='/' className={cnNav('item', {active: true})}>Сводка</a>
          <a href='/' className={cnNav('item', {active: false})}>Устройства</a>
          <a href='/' className={cnNav('item', {active: false})}>Сценарии</a>
        </nav>
        <Burger active={active} onClick={this.toggleActive}/>
      </header>
    );
  }
}

export default Header
