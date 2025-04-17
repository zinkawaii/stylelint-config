import { all } from "known-css-properties";
import config from "../src/lib/order";

const logical = /(?:block|inline)-(?:start|end)/;

const filtered = all.filter((name) => {
    return !name.startsWith("-") && !logical.test(name);
});

const flattened = config["order/properties-order"].flatMap((group) => {
    return typeof group === "object" ? group.properties : group;
});

const missings = filtered.filter((prop) => !flattened.includes(prop));
const mistakens = flattened.filter((prop) => !filtered.includes(prop));

if (missings.length) {
    console.log("missings:");
    console.table(missings);
}
if (mistakens.length) {
    console.log("mistakens:");
    console.table(mistakens);
}