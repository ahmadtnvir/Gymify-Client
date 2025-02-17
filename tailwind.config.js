const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require("flowbite/plugin"),
    flowbite.plugin(),
    require("daisyui"),
  ],
  // daisyui: {
  //   themes: ["light", "dark"],
  // },
};
