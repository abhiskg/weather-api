const API_KEY = "c221f15c0b15ddd4e2e35e75238d7f79";

const loadTemperature = async () => {
  const searchField = document.querySelector(
    "#search-field"
  ) as HTMLInputElement;
  const city = searchField.value;
  console.log(city);
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
