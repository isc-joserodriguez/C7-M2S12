const correoLoginInput = document.getElementById("correo-login");
const passLoginInput = document.getElementById("pass-login");
const btnLogin = document.getElementById("btn-login");
const nombreUsuario = document.getElementById("nomnbre-usuario");

const getLoginInfo = () => ({
  email: correoLoginInput.value,
  password: passLoginInput.value,
});

const getLoginInfo2 = () => {
  return {
    email: correoLoginInput.value,
    password: passLoginInput.value,
  };
};

const validarForm = () => {
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

const getUserInfo = async () => {
  if (localStorage.getItem("token")) {
    const {
      data: {
        detail: { firstName, lastName },
      },
    } = await axios.get("https://todo-app-bs.herokuapp.com/v1/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    nombreUsuario.innerHTML = `${firstName} ${lastName}`;
  }
};

btnLogin.addEventListener("click", async (e) => {
  const {
    data: {
      detail: { token },
    },
  } = await axios.post(
    "https://todo-app-bs.herokuapp.com/v1/user/login",
    getLoginInfo()
  );

  localStorage.setItem("token", token);
  getUserInfo();
});

correoLoginInput.addEventListener("keyup", validarForm);
passLoginInput.addEventListener("keyup", validarForm);

getUserInfo();
