const net = new brain.NeuralNetwork();

const trainingData = [
  {
    input: { r: 0, g: 0, b: 0 },
    output: [1],
  },
  {
    input: { r: 1, g: 1, b: 1 },
    output: [0],
  },
];

net.train(trainingData);

const colorElement = document.getElementById("color");
const guessElement = document.getElementById("guess");
const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const printButton = document.getElementById("print-button");
const trainButton = document.getElementById("train-button");

whiteButton.addEventListener("click", () => {
  chooseColor(1);
});

blackButton.addEventListener("click", () => {
  chooseColor(0);
});

trainButton.addEventListener("click", () => {
  net.train(trainingData);
});

printButton.addEventListener("click", print);

setRandomColor();

function chooseColor(value) {
  trainingData.push({
    input: color,
    output: [value],
  });

  setRandomColor();
}

function print() {
  console.log(trainingData);
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };

  const guess = net.run(color)[0];

  guessElement.style.color = guess > 0.5 ? "#FFF" : "#000";

  colorElement.style.backgroundColor = `rgba(${color.r * 255}, ${
    color.g * 255
  }, ${color.b * 255})`;
}
