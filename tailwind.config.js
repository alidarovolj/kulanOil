/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        borderColor: "#E0E0E0",
        secondaryColor: "#583899",
        buttonBg: "#EF363C",
        sectionBg: "#F6F6F6",
        inputBorder: "#CBCBCB",
      },
      width: {
        third: "32%",
        fourth: "24%",
        half: "48%",
      },
    },
  },
  plugins: [],
};
