import React, { PureComponent } from 'react'
import { cn } from '@bem-react/classname'
import './event.styl'
import SVG from 'react-svg'
import NextIcon from '../../static/assets/icons/next.svg'
import CloseIcon from '../../static/assets/icons/cross.svg'
import Player from './Player'
import Button from '../button/'

const cnEvent = cn('event')

const isCritical = (type: string) => type === 'critical'

interface InterfaceIcons {
  normal: {
    [a: string]: string;
  };
  critical: {
    [a: string]: string;
  };
}

const icons: InterfaceIcons = {
  normal: {
    stats: require('../../static/assets/icons/stats.svg'),
    key: require('../../static/assets/icons/key.svg'),
    'robot-cleaner': require('../../static/assets/icons/robot-cleaner.svg'),
    router: require('../../static/assets/icons/router.svg'),
    music: require('../../static/assets/icons/music.svg'),
    cross: require('../../static/assets/icons/cross.svg'),
    thermal: require('../../static/assets/icons/thermal.svg'),
    fridge: require('../../static/assets/icons/fridge.svg'),
    battery: require('../../static/assets/icons/battery.svg'),
    kettle: require('../../static/assets/icons/kettle.svg')
  },
  critical: {
    cam: require('../../static/assets/icons/cam-white.svg'),
    ac: require('../../static/assets/icons/ac-white.svg')
  }
}

const eventIconSrc = (icon: string, type: string) => {
  return type === 'critical'
    ? icons.critical[icon]
    : icons.normal[icon]
}

const cnInfo = cn(cnEvent('info'))

const EventInfo = (props: any) => {
  const { temperature, humidity } = props

  if (!temperature && !humidity) return null

  return (
    <div
      className={cnInfo()}>
      <span
        className={cnInfo('temperature')}>
        Температура: <span className={cnInfo('value')}>{temperature}C</span>
      </span>
      <span
        className="event__info-humidity">
        Влажность: <span className={cnInfo('value')}>{humidity}%</span>
      </span>
    </div>
  )
}

const EventsButtons = (props: any) => {
  const buttons = props.data
  if (!buttons) return null
  return (
    <div
      className={cnEvent('buttons')}>
      {buttons.map((item: string) =>
        <Button key={item} text={item} type="link" theme="danger"/>
      )}
    </div>
  )
}

const Event = (props: any) => {
  const {
    icon,
    size,
    type,
    title,
    source,
    time,
    description,
    data,
  } = props

  return (
    <article className={cnEvent({ size, critical: isCritical(type) })}>
      <header className={cnEvent('header')}>
        <div className={cnEvent('headline')}>
          <img
            src={eventIconSrc(icon, type)}
            className={cnEvent('icon')} />
          <h1 className={cnEvent('title')}>{title}</h1>
        </div>
        <div className={cnEvent('subheading')}>
          <span className={cnEvent('source')}>{source}</span>
          <span className={cnEvent('time')}>{time}</span>
        </div>
      </header>
      {size !== 's' ?
        <div className={cnEvent('body')}>
          <p className={cnEvent('description')}>{description}</p>
          <EventInfo data={data} />
          {data && data.buttons
            ? <EventsButtons data={data.buttons} />
            : null
          }
          {data && data.image
            ? <img src={data.image} className={cnEvent('image')} />
            : null
          }
          {data && data.track ? <Player song={data} /> : null}
        </div> : null}
        <SVG src={CloseIcon} className={cnEvent('iconClose')}/>
        <SVG src={NextIcon} className={cnEvent('iconNext')}/>
    </article>
  )
}

export default Event