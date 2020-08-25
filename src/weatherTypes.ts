export interface HourlyWeatherList {
    summary: string;
    icon: string;
    data: Weather[];
}

export interface Weather {
    time: number;
    summary: string;
    icon: string;
    precipProbability: number;
    precipType: string;
    temperature: number;
}

export interface DailyWeather {
    summary: string;
    data: DayWeather[];
}

export interface DayWeather {
    time: number;
    summary: string;
    icon: string;
    precipIntensity: number;
    precipProbability: number;
    precipType: string;
    apparentTemperatureHigh: number;
    apparentTemperatureLow: number;
}

export interface WeatherData {
    currently: Weather;
    hourly: HourlyWeatherList;
    daily: DailyWeather;
}

export interface APIResponse {
    data: WeatherData;
}