// ////////////          p 1            ///////

// let p1 = new Promise(function (resolve, reject) {
//   if (value()) {
//     setTimeout(() => {
//       let pmsg = "Succefull Solved P-1 after 2 seconds";
//       resolve(pmsg);
//     }, 1000);
//   } else {
//     const err = new Error("here is error catch in p-1");
//     return reject(err.message);
//   }
// });

// /////////////here is use of .then() and .catch() method of promise object in p-1 /////////

// // p1.then((pval1) => {
// //   console.log(pval1);
// //   return "after solved p1 .thne() = 1";
// // })
// //   .then((pval2) => {
// //     console.log(pval2);
// //     return "after solved p1 .then() = 2";
// //   })
// //   .then((pval3) => {
// //     console.log(pval3);
// //     return;
// //   })
// //   .catch((error) => {
// //     return console.log(error);
// //   });
// ////////////          p 2            ///////
// let p2 = new Promise(function (resolve, reject) {
//   if (value()) {
//     setTimeout(() => {
//       let p2msg = "Succefull Solved P-2 after 5 seconds";
//       resolve(p2msg);
//     }, 5000);
//   } else {
//     const err = new Error("here is error catch in P-2");
//     reject(err.message);
//   }
//   return;
// });

// p2.then((result1) => {
//   console.log(result1);
//   return "after solved p2 .thne() = 1";
// })
//   .then((result2) => {
//     console.log(result2);
//     return "after solved p2 .then() = 2";
//   })
//   .then((result3) => {
//     console.log(result3);
//     return () => {
//       for (let i = 1 ; i <= 10 ; i++){
//         console.log(`love you ${i}` + " times");
//       }
//     }
//   }).then((result4) => {
//     result4();
//     return;
//   })
//   .catch((error) => {
//     return console.log(error);
//   });

// let newp = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const newpromisedata = "here is new promise data loaded in 8 seconds";
//     resolve(newpromisedata);
//     return;
//   }, 8000);
// });
// let newp1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const newpromisedata = "here is new promise 2 data loaded in 5 seconds";
//     resolve(newpromisedata);
//     return;
//   }, 5000);
// });

// async function functionofasync(result) {
//   const recive = await newp;
//   console.log(recive);
//   const recive2 = await newp1;
//   console.log(recive2);
// }

// functionofasync();

// function value() {
//   return true;
// }
// // console.log(p);
// // console.log(p2);
// console.log(newp);
// console.log(newp1);

// async function apifeatch() {
//   const url = 'https://www.metaweather.com/api/location/search/?query=Islamabad';
//   const response = await fetch(url);
//   const data = await response.json();

//   console.log( "location");
//   console.log(data);
// }
// apifeatch();

// async function getWeatherData() {
//   // const apiKey = "1aaff2e4eacc060b61ebe6fe6631b267"; // Replace with your OpenWeatherMap API key
//   const city = "hyderabad"; // Replace with your desired city
//   // name1 = "pakistan";
//   // const apiUrl = `http://api.weatherapi.com/v1/current.json?key=3ba69b4cafcc48c0aca75139250301&q=hyderabad&aqi=yes`;
//   const apiKey = "3ba69b4cafcc48c0aca75139250301";
//   const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
//   const response = await fetch(url);
//   const data = await response.json();
  
//   // let c = data.location.country.name1;
//   console.log(data);
// }
// getWeatherData();

// Fetch weather data
// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);

//     // Extract weather information
//     const temperature = data.main.temp;
//     const weatherDescription = data.weather[0].description;
//     const cityName = data.name;

//     // Display weather info
//     console.log(`Weather in ${cityName}:`);
//     console.log(`Temperature: ${temperature}°C`);
//     console.log(`Description: ${weatherDescription}`);
//   })
//   .catch(error => {
//     console.error("Error fetching weather data:", error);
//   });

// const pakistanCities = [
//   "Karachi",
//   "Lahore",
//   "Islamabad",
//   "Peshawar",
//   "Quetta",
//   "Hyderabad",
//   "Rawalpindi",
//   "Faisalabad",
//   "Multan",
//   "Sialkot",
// ];

// const fetchWeatherData = async (city) => {
//   // Validate if the city is in Pakistan
//   if (!pakistanCities.includes(city)) {
//     console.error("Error: This city is not in Pakistan.");
//     return;
//   }

//   const apiKey = "3ba69b4cafcc48c0aca75139250301";
//   const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     console.log("Weather Data for", city, ":", data);
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//   }
// };

// // Example Usage
// const city = "Hyderabad"; // Change this to test other cities
// fetchWeatherData(city);


// {
//   "location": {
//     "name": "Hyderabad",
//     "region": "Sindh",
//     "country": "Pakistan",
//     "lat": 25.396,
//     "lon": 68.377,
//     "tz_id": "Asia/Karachi",
//     "localtime": "2025-01-04 18:30"
//   },
//   "current": {
//     "temp_c": 30,
//     "temp_f": 86,
//     "is_day": 1,
//     "condition": {
//       "text": "Sunny",
//       "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
//       "code": 1000
//     },
//     "wind_kph": 15,
//     "humidity": 50
//   }
// }
// const pakistanCities = [
//   "Karachi",
//   "Lahore",
//   "Islamabad",
//   "Peshawar",
//   "Quetta",
//   "Hyderabad",
//   "Rawalpindi",
//   "Faisalabad",
//   "Multan",
//   "Sialkot",
// ];

// const fetchWeatherData = async (city) => {
  // Ensure the city is in Pakistan
  // if (!pakistanCities.includes(city)) {
  //   console.error("Error: This city is not in Pakistan.");
  //   return;
  // }

//   const apiKey = "3ba69b4cafcc48c0aca75139250301";
//   const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city},Pakistan&aqi=yes`;

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     // Check if the returned country is Pakistan
//     if (data.location.country !== "Pakistan") {
//       console.error("Error: The API returned data for a city outside Pakistan.");
//       return;
//     }

//     console.log(`Weather Data for ${city}, Pakistan:`, data);
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//   }
// };

// // Example Usage
// const city = "Hyderabad"; // Change this to test other cities
// fetchWeatherData(city);

async function getWeatherData() {
const apiKey = "3ba69b4cafcc48c0aca75139250301";
const city = "sargodha";
const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city},Pakistan&aqi=yes`;
const response = await fetch(url);
const data = await response.json();
console.log(data);
}
getWeatherData();
