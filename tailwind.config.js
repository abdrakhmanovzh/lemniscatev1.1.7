/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                autoMinMax: "repeat(auto-fit, minmax(180px, 1fr))",
            },
        },
    },
    plugins: [],
};
