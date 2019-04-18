// @flow
import axios from 'axios';

import { DEFAULT_API_CONFIG } from './config';
import store from '../../store';

export class BaseApi {
  client: axios;

  constructor(config: Object = {}) {
    this.client = axios.create({
      ...DEFAULT_API_CONFIG,
      ...config,
    });
  }
}

const HEADER_FORM_DATA_CONFIG = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data',
  },
};

export const API = new BaseApi();
export const APIFormData = new BaseApi(HEADER_FORM_DATA_CONFIG);
