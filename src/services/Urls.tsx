const production = 'https://groopie.ipv64.net/groopieApi';
const development = 'http://192.168.0.107:8000/groopieApi';

const production_front = 'https://groopie.ipv64.net/';
const development_front = 'http://192.168.0.107:5173/';

const production_ws = 'wss://groopie.ipv64.net/groopieWs/';
const development_ws = 'ws://192.168.0.107:8000/groopieWs/';

export const ApiUrl = process.env.NODE_ENV === 'development' ? development : production;
export const FrontendUrl = process.env.NODE_ENV === 'development' ? development_front : production_front;
export const WsUrl = process.env.NODE_ENV === 'development' ? development_ws : production_ws;