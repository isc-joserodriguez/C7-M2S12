const ctx = document.getElementById("myChart").getContext("2d");
const ciudades = ["Tepic", "Cancun", "Mexico", "Guerrero", 'Spain', 'England'];

const datasets = [
  {
    label: "Temperatura",
    data: [],
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
    ],
    borderColor: [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
    ],
    borderWidth: 1,
  },
  {
    label: "Indice mortalidad",
    data: [150, 200, 50, 0],
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(255, 159, 64, 0.2)",
    ],
    borderColor: [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
    ],
    borderWidth: 1,
  },
];

//

const getTemp = async () => {
  const valores = await Promise.all(
    ciudades.map(async (ciudad) => {
      const {
        data: {
          main: { temp },
        },
      } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=616629f9acdc3b22b8b09553e632e5da`
      );
      return temp - 273.15;
    })
  );

  datasets[0].data = valores;
  myChart.update();
};

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ciudades,
    datasets,
  },
});

getTemp();
