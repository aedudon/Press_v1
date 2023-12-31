import { io } from 'socket.io-client';
import config from '../../../../../sites/common_site_config.json';

let host = window.location.hostname;
let port = window.location.port ? `:${config.socketio_port}` : '';
let protocol = port ? 'http' : 'https';
let url = `${protocol}://${host}${port}`;
let socket = io(`${url}/${window.press_site_name}`, {
	withCredentials: true
});

export default socket;
