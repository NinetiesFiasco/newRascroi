import axios from 'axios';

export const tstAPI = {
  getTST: () => {
    return axios.get("api/tst");
  }
}

export const Authentication = {
  enter: (form) => {
    return axios.post("api/enter",form);
  },
  auth: () => {
    return axios.get("api/enter/itsMe")
  }
}