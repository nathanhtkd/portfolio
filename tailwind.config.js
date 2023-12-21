/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,html}', // includes both JavaScript and JSX files
        // You can also include HTML or other template files if necessary
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
