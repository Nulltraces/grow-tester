/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lg-heart": "rgba(254, 246, 244, 0.12)",
        primary: "#4483eb",

        "dark-700": "#22242f",
        "dark-800": "#1b1e27",
        "dark-850": "#171921",
        "couch-grey": "#666",
        // body: "var(--background-color)",
        body: "#15171e",
      },
      gridTemplateColumns: {
        gamesGrid: "repeat(auto-fit, minmax(220px, 1fr))",
        gamesGridSm: "repeat(auto-fit, minmax(150px, 1fr))",
      },
    },
  },
  plugins: [],
};
