/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,html}', // includes both JavaScript, JSX, and HTML files
    ],
    theme: {
        extend: {
            backgroundImage: {
                'heroImage': "url('/src/images/gray-abstract-bg.png')",
                'heroImageMobile': "url('/src/images/gray-abstract-mobile.png')",
            },
        },
    },
    plugins: [],
};
