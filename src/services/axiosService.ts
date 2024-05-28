import axios, { AxiosInstance } from 'axios';

const API_URL = 'https://moojo-app.free.beeceptor.com';

class Axios {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: API_URL,
    });
  }
}

export default new Axios();
