export function getRandomColor() {
  const colors = [
    "#4CC0DE",
    "#009878",
    "#F08621",
    "#AF1856",
    "#6C56A1",
    "#482778",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export const colors = [
  "customBlue900",
  "customGreen900",
  "customYellow900",
  "customRed900",
  "customPurpple900",
];

export const colorsExadecimal = [
  "#4EB8A7",
  "#6C559F",
  "#E9527A",
  "#6C559F",
  "#4ABFDD",
  "#F7B152",
];
