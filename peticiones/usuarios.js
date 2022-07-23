import { getLoginInfo } from "../utils/index.js";
const baseUrl = "https://todo-app-bs.herokuapp.com/v1/user";

export const iniciarSesion = async () => {
  return await axios.post(baseUrl + "/login", getLoginInfo());
};

export const getInfo = async () => {
  return await axios.get(baseUrl, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
