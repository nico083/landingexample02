import env from '../core/config/env/';
import axios from 'axios';

const instance = axios.create({
  baseURL: `${env.server.protocol}//${env.server.host}:${env.server.port}`
});

export const aGet = (key, params) => instance.get(env.routes[key], { params });

export const aPost = (key, body) => instance.post(env.routes[key], body);
