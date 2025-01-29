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
        SliderBg_Color: "var(--SliderBg_Color)",
        Footer_Color: "var(--Footer_Color)",
        Text_Color: "var(--Text_Color)",
        Text_ColorTwo: "var(--Text_ColorTwo)",
      },
      boxShadow: {
        ArrivalShadow : "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};