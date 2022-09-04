const API_KEY = "c221f15c0b15ddd4e2e35e75238d7f79";

const loadTemperature = async () => {
  const searchField = document.querySelector(
    "#search-field"
  ) as HTMLInputElement;
  const city = searchField.value;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    displayTemperature(data);
  } catch (error) {
    console.log(error);
  }
};

const displayTemperature = (data: any) => {
  const cityName = document.querySelector("#city-name") as HTMLHeadingElement;
  const temperature = document.querySelector("#temperature") as HTMLSpanElement;
  const weather = document.querySelector("#weather") as HTMLHeadingElement;

  cityName.textContent = "";
  temperature.textContent = "";
  weather.textContent = "";

  cityName.innerText = data.name;
  temperature.innerText = data.main.temp;
  weather.innerText = data.weather[0].main;
};
