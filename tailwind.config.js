const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    purge: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
    ],

    darkMode: "class",

    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "IBM Plex Sans",
                    "Nunito",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            primary: colors.indigo,
            secondary: colors.orange,
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                md: "0",
            },
        },
    },

    variants: {
        extend: {
            opacity: ["disabled"],
        },
    },

    // plugins: [require("@tailwindcss/forms")],
};
