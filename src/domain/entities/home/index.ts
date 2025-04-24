export interface WeatherEntity {
  city: string;
  temperature: number;
  condition: string;
  icon: string;
}

export interface WeatherApiSuccessResponse {
  success?: true;

  request: any;
  location: {
    name: string;
    [key: string]: any;
  };
  current: {
    temperature: number;
    weather_descriptions: string[];
    weather_icons: string[];
    [key: string]: any;
  };
}

export interface WeatherApiErrorResponse {
  success: false;
  error: {
    code: number;
    type: string;
    info: string;
  };
}

export type WeatherApiResponse =
  | WeatherApiSuccessResponse
  | WeatherApiErrorResponse;
