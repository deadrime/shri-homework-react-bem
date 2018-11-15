import React, { PureComponent } from 'react';
import { cn } from '@bem-react/classname'
import { Link } from 'react-router-dom'
import '../../static/css/header.css'

const cnHeader = cn('Header')
const cnNav = cn(cnHeader('nav'))

const Header = ({ className }: any) => {
  return (
    <header className={className}>
      <div className={cnHeader('logo')} />
      <nav className={cnNav()}>
        <a href='/' className={cnNav('item', { active: true })}>Сводка</a>
        <a href='/' className={cnNav('item', { active: false })}>Устройства</a>
        <a href='/' className={cnNav('item', { active: false })}>Сценарии</a>
      </nav>
    </header>
  )
}

export default Header
