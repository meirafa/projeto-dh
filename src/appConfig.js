const environment = process.env.NODE_ENV;

const isDev = environment === 'development';

const prodUrl = 'https://digitalbooking-cars.herokuapp.com'; //FIXME

const devUrl = 'https://digitalbooking-cars.herokuapp.com';

export const appConfig = {
    apiUrl: isDev ? devUrl : prodUrl
};