const correoLoginInput = document.getElementById("correo-login");
const passLoginInput = document.getElementById("pass-login");
const btnLogin = document.getElementById("btn-login");

export const getLoginInfo = () => ({
  email: correoLoginInput.value,
  password: passLoginInput.value,
});

export const getLoginInfo2 = () => {
  return {
    email: correoLoginInput.value,
    password: passLoginInput.value,
  };
};

export const validarForm = () => {
  if (
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(correoLoginInput.value) /* &&
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
        passLoginInput.value
      ) */
  ) {
    //deshabilita botón
    btnLogin.disabled = false;
  } else {
    //habilita botón
    btnLogin.disabled = true;
  }
};
