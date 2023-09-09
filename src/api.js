import axios from "./axiosCustomer";

export const callLogin = (email, password) => {
  return axios.post("/users/login", { email, password });
};

export const getMe = () => {
  return axios.get("/users/me");
};
