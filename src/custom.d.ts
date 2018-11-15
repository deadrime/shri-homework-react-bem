declare module '*.svg' {
  const value: any;
  export default value;
}

interface TemperatureData {
  temperature: number,
  humidity: number,
}
interface GraphData {
  type: string,
  values: {
    [type: string]: (string | number)[]
  }[],
}
interface PlayerData {
  albumcover: string,
  artist: string,
  track: {
    name: string,
    length: string
  },
  volume: number,
}

interface MyEvent {
  type: 'info' | 'critical',
  size: 'm' | 's' | 'l',
  title: string,
  source: string,
  time: string,
  description: string | null,
  icon: string,
  data?: TemperatureData | GraphData | PlayerData
}

declare module '*events.json' {
  const value: {
    events: MyEvent[]
  }
  export default value
}