import { all } from "known-css-properties";
import { expect, it } from "vitest";
import config from "../src/lib/order";

it("check props", () => {
    const logical = /(?:block|inline)-(?:start|end)/;

    const filtered = all.filter((name) => {
        return !name.startsWith("-") && !logical.test(name);
    });

    const flattened = config["order/properties-order"].flatMap((group) => {
        return typeof group === "object" ? group.properties : group;
    });

    const missings = filtered.filter((prop) => !flattened.includes(prop));
    const mistakens = flattened.filter((prop) => !filtered.includes(prop));

    expect(missings).matchSnapshot("missings");
    expect(mistakens).matchSnapshot("mistakens");
});
