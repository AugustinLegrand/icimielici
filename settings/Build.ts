// Build Configuration: https://go.nuxtjs.dev/config-build
const path = require("path")

export default {
    postcss: {
        plugins: {
            "postcss-import": {},
            tailwindcss: path.resolve(__dirname, "./tailwind.config.js"),
            "postcss-nested": {}
        }
    }
}
