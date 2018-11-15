import React, {PureComponent} from 'react'
import { cn } from '@bem-react/classname'
import './events.styl'
import data from '../../events.json'
import Event from './Event'

const cnEvents = cn('events')

const Events = (props:any) => {
  return (
    <div className={cnEvents()}>
      <h1 className={cnEvents('title')}>Лента событий</h1>
      <div className={cnEvents('wrapper')}>
        {data.events.map((event: any, id: number) => 
          <Event {...event} key={id}/>
        )}
      </div>
  </div>
  )
}

export default Events
