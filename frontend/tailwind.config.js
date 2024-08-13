  /** @type {import('tailwindcss').Config} */

  const withMT = require("@material-tailwind/react/utils/withMT");

  export default withMT({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          customBlue100: "#4CC0DE",
          customBlue900: "#00ACD9",
          customGreen900: "#009878",
          customGreen100: "#67C1B1",
          customYellow100: "#F8B155",
          customYellow900: "#F08621",
          customRed100: "#EA547B",
          customRed900: "#AF1856",  
          customPurpple100: "#6C56A1",
          customPurpple900: "#482778",
          customPurpple900T: "rgb(35 6 81 / 62%)",
          customPurppleTransparent: "rgb(225 224 231)",
          transparent900: "rgba(255, 255, 255, 0.5)",
          transparent900Black: "#0008",
          customSelec: "rgb(96 112 204 / 45%)",
        },
        fontFamily: {
          sans: ["Poppins", "sans-serif"],
        },
        boxShadow: {
          "top-bottom":
            "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        },
        
      },
    },
    plugins: [],
  });
