const environment = process.env.NODE_ENV;

const isDev = environment === 'development';

const prodUrl = ''; //FIXME

const devUrl = 'http://localhost:8080';

export const appConfig = {
    apiUrl: isDev ? devUrl : prodUrl
};