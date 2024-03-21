import order from "./lib/order.js";
import standard from "./lib/standard.js";
import stylistic from "./lib/stylistic.js";

export default function() {
    return {
        extends: [
            "stylelint-config-standard-scss",
            "stylelint-config-html/vue"
        ],
        plugins: [
            "stylelint-order",
            "@stylistic/stylelint-plugin"
        ],
        rules: {
            ...order,
            ...standard,
            ...stylistic
        }
    };
};