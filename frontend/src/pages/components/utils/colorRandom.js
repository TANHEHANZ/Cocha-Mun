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