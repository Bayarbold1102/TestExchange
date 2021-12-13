import axios from "axios";
let base_url = "http://192.168.1.103:8080/api/gam/v1/auth/";
let url = base_url;

class Services {
  login = (data) => {
    return new Promise(function (resolve, reject) {
      axios
        .get(`${url}signin`, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  signup = (data) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${url}signup`, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  verify = (data) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${url}signup/check`, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  changePassword = (data) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${url}change/password`, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  refreshToken = (data) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${url}refresh/token`, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  resetPasswordCheck = (data) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${url}reset/password/check`, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  resetPassword = (data) => {
    return new Promise(function (resolve, reject) {
      axios
        .post(`${url}reset/password`, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  changePassword = (data) => {
    return new Promise(function (resolve, reject) {
      axios
        .get(`${url}signup/mail/otp/resend`, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  changePassword = (data) => {
    return new Promise(function (resolve, reject) {
      axios
        .get(`${url}signup/sms/otp/resend`, data)
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