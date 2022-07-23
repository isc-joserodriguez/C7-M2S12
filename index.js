import { validarForm } from "./utils/index.js";
import { iniciarSesionEvento, getUserInfo } from "./eventos/index.js";

const correoLoginInput = document.getElementById("correo-login");
const passLoginInput = document.getElementById("pass-login");
const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", iniciarSesionEvento);

correoLoginInput.addEventListener("keyup", validarForm);
passLoginInput.addEventListener("keyup", validarForm);

getUserInfo();
