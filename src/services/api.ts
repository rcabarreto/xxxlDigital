import axios from 'axios';
import { ProductType } from '../types';

class Api {
  getApiUrl(endPoint: string) {
    return `http://localhost:3000/api/v1${endPoint}`;
  }

  async getData(endPoint: string) {
    return axios
      .get(this.getApiUrl(endPoint))
      .then((response) => response.data)
      .then((responseJson) => responseJson.payload)
      .catch((error) => Promise.reject(error.response));
  }

  async loadProducts(): Promise<ProductType[]> {
    return this.getData('/products');
  }
}

export default Api;
