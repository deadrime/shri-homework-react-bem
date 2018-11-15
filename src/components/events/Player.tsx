import React, {PureComponent} from 'react'
import { cn } from '@bem-react/classname'
import './player.styl'
// import { ReactComponent as PrevNextIcon } from '../../static/assets/player/Prev.svg?jsx'
import SVG from 'react-svg'
import PrevNextIconUrl from '../../static/assets/player/Prev.svg'

const cnPlayer = cn('Player')
const cnTimeSlider = cn(cnPlayer('timeSlider'))
const cnVolumeSlider = cn(cnPlayer('volumeSlider'))

const Player = (props: any) => {
  const {song} = props
  if (!song) return null

  const songName = song.artist + ' - ' + song.track.name
  
  return (
    <div className={cnPlayer()}>
      <div className={cnPlayer('songArea')}>
        <img 
          src={song.albumcover}
          alt="" 
          className={cnPlayer('albumcover')}/>
        <div className={cnPlayer('topControl')}>
          <span className={cnPlayer('songTitle')}>{ songName }</span>
          <div className={cnTimeSlider('wrapper')}>
            <div className={cnTimeSlider()}>
              <div className={cnTimeSlider('line')}/>
              <div className={cnTimeSlider('controller')}/>
            </div>
            <span className={cnTimeSlider('time')}>{ song.track.length }</span>
          </div>
        </div>
      </div>
      <div className={cnPlayer('bottom')}>
        <div className={cnPlayer('prevNext')}>
          <SVG src={PrevNextIconUrl} className="icon-songNext"/>
          <SVG src={PrevNextIconUrl} className="icon-songPrev"/>
        </div>
        <div className={cnVolumeSlider()}>
          <div className={cnVolumeSlider('line')}/>
          <div className={cnVolumeSlider('controller')}/>
        </div>
        <div className={cnVolumeSlider('volume')}>80%</div>
      </div>
    </div>
  )
}

export default Player