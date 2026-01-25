import { all } from "known-css-properties";
import { expect, it } from "vitest";
import config from "../src/rules/order";

it("check props", () => {
    const filtered = all.filter((name) => {
        return !name.startsWith("-");
    });

    const flattened = config["order/properties-order"].flatMap((group) => {
        return typeof group === "object" ? group.properties : group;
    });

    const missings = filtered.filter((prop) => !flattened.includes(prop));
    const mistakens = flattened.filter((prop) => !filtered.includes(prop));

    expect(missings).matchSnapshot("missings");
    expect(mistakens).matchSnapshot("mistakens");
});
