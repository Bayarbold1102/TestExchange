import { instance as axios } from "../AxiosInterceptor";
// import axios from "axios";
let base_url = "/api/gam/v1/util/";
let url = base_url;

class Services {
  bankList = () => {
    return new Promise(function (resolve, reject) {
      axios
        .get(`${url}bank`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

const instance = new Services();
export default instance;
