import React, {PureComponent} from 'react'
import { cn } from '@bem-react/classname'
import '../../static/css/footer.css'

const cnFooter = cn('Footer')
const cnNav = cn(cnFooter('nav'))

const Footer = () => {
  return (
    <footer className={cnFooter()}>
      <nav className={cnNav()}>
        <a className={cnNav('item')} href="#">Помощь</a>
        <a className={cnNav('item')} href="#">Обратная связь</a>
        <a className={cnNav('item')} href="#">Разработчикам</a>
        <a className={cnNav('item')} href="#">Условия использования</a>
      </nav>
      <span className={cnFooter('copyright')}>© 2001–2017  ООО «Яндекс»</span>
    </footer>
  )
}

export default Footer