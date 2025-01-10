/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      DM_Sans: "var(--DM_Sans)",
      Lato: "var(--Lato)",
    },
    extend: {
      colors: {
        Common_Color: "var(--Common_Color)",
        Menu_Color: "var(--Menu_Color)",
        Btn_Color: "var(--Btn_Color)",
        Header_text_Color: "var(--Headet_text_Color)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};