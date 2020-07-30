import axios from 'axios';

const withAuth = () => {
  return {
    "headers":{
      "Authorization":localStorage.getItem("Token")
    }
  }
}


export const tstAPI = {
  getTST: () => {
    return axios.get("api/tst");
  }
}

export const Authentication = {
  enter: (form) => {
    return axios.post("api/enter",form)
  },
  auth: () => {
    return axios.get("api/enter/itsMe",withAuth())
  },
  exit: () => {
    return axios.get("api/enter/exit",withAuth())
  }
}

export const Registration = {
  register: (form) => {
    return axios.post("api/registration/data",form)
  },
  updateData: (form) => {
    return axios.post("api/registration/update",withAuth())
  },
  updatePassword: (form) => {
    return axios.post("api/registration/updatepassword",withAuth())
  },
  deleteMe: () => {
    return axios.get("api/registration/deleteMe",withAuth())
  }
}

export const ordersAPI = {
  add: (form) => {
    return axios.post("api/orders/add",form,withAuth())
  },
  update: (id,form) => {
    return axios.put("api/orders/update/"+id,form,withAuth())
  },
  delete: (id) => {
    return axios.delete("api/orders/delete/"+id,withAuth())
  },
  getOne: (id) => {
    return axios.get("api/orders/get/"+id,withAuth())
  },
  getAll: () => {
    return axios.get("api/orders/getAll",withAuth())
  }
}