export function prefixary(prefix: string, obj: Record<string, any>) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => {
        return [`${prefix}/${key}`, value];
    }));
}
