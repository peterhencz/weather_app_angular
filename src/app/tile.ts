export class Tile {
  city: string;
  location: string;
  weather: object[] = [];

  constructor(city: string, location: string) {
    this.city = city;
    this.location = location;
  }

  createWeather(temp: number, icon: string, message: string) {
    this.weather.push({
      temp: temp,
      icon: icon,
      message: message
    })
  }
}

export class Forecast {
  city: string;
  weather: object[] = [];
  

  constructor(city: string) {
    this.city = city;
  }

  createForecast(temp: number, date: string, icon: string, description: string) {
    this.weather.push({
      temp: temp,
      date: date.split(' ')[1].split(':')[0].split('')[0] === '0' ? date.split(' ')[1].split(':')[0].slice(1, 2) : date.split(' ')[1].split(':')[0],
      icon: icon,
      description: description
    })
  }
}


