import { AxiosRequestConfig } from 'axios';
import axiosService from './axiosService';

export enum QueryKeys {
  OFFERS = 'OFFERS',
}

export const API = {
  async get<T>(url: string, config: AxiosRequestConfig = {}) {
    return axiosService.instance.get<T>(url, config);
  },
};
