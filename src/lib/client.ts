import Axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from './constants';
import { getAuthToken } from './utils/getAuthToken';

const axios = Axios.create({
  baseURL: `${BASE_URL}/apis`,
});

const client = {
  async get(url: string, config?: AxiosRequestConfig) {
    const response = await axios.get(url, {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });

    return response.data;
  },

  async post(url: string, body: any, config?: AxiosRequestConfig) {
    const response = await axios.post(url, body, {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });

    return response.data;
  },

  async put(url: string, body: any, config?: AxiosRequestConfig) {
    const response = await axios.put(url, body, {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });

    return response.data;
  },

  async patch(url: string, body: any, config?: AxiosRequestConfig) {
    const response = await axios.patch(url, body, {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });

    return response.data;
  },

  async delete(url: string, config?: AxiosRequestConfig) {
    const response = await axios.delete(url, {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });

    return response.data;
  },
};

export default client;
