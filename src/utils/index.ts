export function prefixary(prefix: string, obj: Record<string, unknown>) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => {
        return [`${prefix}/${key}`, value];
    }));
}
