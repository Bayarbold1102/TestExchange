import { instance as axios } from "../AxiosInterceptor";
// import axios from "axios";
let base_url = "/api/gam/v1/user/";
let url = base_url;

class Services {
  changeBankInfo = (data) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${url}change/bank/info`, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  changeUserInfo = (data) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${url}change/info`, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  saveIdInfo = (data) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${url}save/id`, data)
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
