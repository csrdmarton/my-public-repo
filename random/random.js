// Celsius --> Fahrenheit
const temperatureInput = document.getElementById("temperatureInput");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const resultTemp = document.getElementById("resultTemp");

function convert() {
  let temp = Number(temperatureInput.value);
  if (toFahrenheit.checked) {
    resultTemp.textContent = ((temp * 9) / 5 + 32).toFixed(1) + "°F";
  } else if (toCelsius.checked) {
    resultTemp.textContent = (((temp - 32) * 5) / 9).toFixed(1) + "°C";
  } else {
    resultTemp.textContent = "Select a unit!";
  }
}

// House edge
const oddsInput1 = document.getElementById("oddsInput1");
const oddsInput2 = document.getElementById("oddsInput2");
const oddsInput3 = document.getElementById("oddsInput3");
const resultHouse = document.getElementById("resultHouse");

function calculate() {
  let odds1 = Number(oddsInput1.value);
  let odds2 = Number(oddsInput2.value);
  let odds3 = Number(oddsInput3.value);

  resultHouse.textContent =
    ((1 / odds1 + 1 / odds2 + 1 / odds3 - 1) * 100).toFixed(2) + "%";
}

calculate();

// Dice Roller
function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImg = document.getElementById("diceImg");
  const values = [];
  const img = [];

  let sum = 0;

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    img.push(`<img src="images/dice${value}.svg" alt="Dice ${value}">`);
    sum += value;
  }
  diceResult.textContent = `dice: ${values.join(" + ")} = ${sum}`;
  diceImg.innerHTML = img.join("");
  //audio
  const audioDice = new Audio("./audio/diceRollSound.mp3");
  audioDice.volume = 0.5;
  audioDice.play();
}

// Color Changer
const bodyBg = document.getElementsByTagName("body")[0];
function darkMode(name) {
  bodyBg.style.backgroundColor = name;
}
function lightMode(name) {
  bodyBg.style.backgroundColor = name;
}

// Free Bet Hedge calculator

function freeBetHedgeCalculator() {
  const freeBet = Number(document.getElementById("freeBet").value);
  const highOdds = Number(document.getElementById("highOdds").value);
  const shortOdds = Number(document.getElementById("shortOdds").value);

  const netProfit = freeBet * (highOdds - 1);
  const yourBet = netProfit / shortOdds;

  document.getElementById("yourBet").textContent = yourBet.toFixed(2);
  document.getElementById("netProfit").textContent = (
    netProfit - yourBet
  ).toFixed(2);

  houseEdge.textContent =
    ((1 / highOdds + 1 / shortOdds - 1) * 100).toFixed(2) + "%";
}

//Upload picture
let uploadedImg = document.getElementById("uploadedImg");
let uploadImgInput = document.getElementById("uploadImgInput");

uploadImgInput.onchange = function () {
  let file = uploadImgInput.files[0];
  uploadedImg.src = URL.createObjectURL(file);
  // uploadedImg.src = URL.createObjectURL(uploadImgInput.files[0]);
};

//PokéApi

async function fetchData() {
  event.preventDefault();

  const pokemonName = document
    .getElementById("pokemonName")
    .value.toLowerCase();

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch Pokemon");
    }

    const data = await response.json();
    const pokemonImg = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonImg");

    imgElement.src = pokemonImg;
    imgElement.style.display = "block";
  } catch (err) {
    console.error(err);
  }
}

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Could not fetch Pokemon");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
