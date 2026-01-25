import type { Config } from "stylelint";
import order from "./rules/order";
import standard from "./rules/standard";
import stylistic from "./rules/stylistic";

export default function(config: Config = {}): Config {
    return {
        ...config,
        extends: [
            "stylelint-config-standard-scss",
            "stylelint-config-html",
            ...config.extends ?? [],
        ],
        plugins: [
            "stylelint-order",
            "@stylistic/stylelint-plugin",
            ...config.plugins
                ? Array.isArray(config.plugins)
                    ? config.plugins
                    : [config.plugins]
                : [],
        ],
        rules: {
            ...order,
            ...standard,
            ...stylistic,
            ...config.rules,
        },
    };
}
