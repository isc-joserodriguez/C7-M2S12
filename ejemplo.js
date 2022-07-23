/* axios
  .get(
    "https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=616629f9acdc3b22b8b09553e632e5da"
  )
  .then((respuesta) => {
    console.log(respuesta);
    console.log("hola");
  }); */

const getWeather = async () => {
  const respuesta = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=616629f9acdc3b22b8b09553e632e5da"/* ,
    {
      headers: {
        Authorization: "Bearer " + "asfihaskljfhaskfhaklshflksdfh",
      },
    } */
  );
  console.log(respuesta);
};

getWeather();

//const { data: users } = await axios.get("url");
