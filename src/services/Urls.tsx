const production = 'https://mhosting.ipv64.net/groopieApi';
const development = 'http://192.168.0.107:8000/groopieApi';

const production_front = 'https://mhosting.ipv64.net/groopie';
const development_front = 'http://192.168.0.107:5173/groopie';

const production_ws = 'wss://mhosting.ipv64.net/groopieWs/';
const development_ws = 'ws://192.168.0.107:8000/groopieWs/';

export const ApiUrl = process.env.NODE_ENV === 'development' ? development : production;
export const FrontendUrl = process.env.NODE_ENV === 'development' ? development_front : production_front;
export const WsUrl = process.env.NODE_ENV === 'development' ? development_ws : production_ws;