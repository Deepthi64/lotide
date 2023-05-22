const { takeUntil } = require('../takeUntil');

const weather = [ "rainy" , " snow" , "sunny", "chilly"];
  const todayWeather = takeUntil(weather, x => x === "chilly");
  console.log("today weather is ",todayWeather);
