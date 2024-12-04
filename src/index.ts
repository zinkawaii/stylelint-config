import type { Config } from "stylelint";
import order from "./lib/order";
import standard from "./lib/standard";
import stylistic from "./lib/stylistic";

export default function(config: Config = {}): Config {
    return {
        ...config,
        extends: [
            "stylelint-config-standard-scss",
            "stylelint-config-html",
            ...config.extends ?? []
        ],
        plugins: [
            "stylelint-order",
            "@stylistic/stylelint-plugin",
            ...config.plugins
                ? Array.isArray(config.plugins)
                    ? config.plugins
                    : [config.plugins]
                : []
        ],
        rules: {
            ...order,
            ...standard,
            ...stylistic,
            ...config.rules ?? {}
        }
    };
}