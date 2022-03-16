import axios from "axios";

class Api {
  getApiUrl(endPoint: string) {
    return `https://localhost:3000/${endPoint}`;
  }

  getData(endPoint: string) {
    return axios
      .get(this.getApiUrl(endPoint))
      .then((response) => response.data)
      .catch((error) => {
        if (error.response.status === 404) {
          throw new Error(`${error.config.url} not found`);
        }
        throw error;
      });
  }

  async loadSomething(param: string) {
    return this.getData(`${param}`);
  }
}

export default Api;
