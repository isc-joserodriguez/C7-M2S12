import { iniciarSesion, getInfo } from "../peticiones/usuarios.js";

const nombreUsuario = document.getElementById("nomnbre-usuario");

export const getUserInfo = async () => {
  if (localStorage.getItem("token")) {
    const {
      data: {
        detail: { firstName, lastName },
      },
    } = await getInfo();
    nombreUsuario.innerHTML = `${firstName} ${lastName}`;
  }
};

export const iniciarSesionEvento = async (e) => {
  const {
    data: {
      detail: { token },
    },
  } = await iniciarSesion();

  localStorage.setItem("token", token);
  getUserInfo();
};
