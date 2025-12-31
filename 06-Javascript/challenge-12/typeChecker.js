const typeOf = (value) => {
    if (value === null) return 'null';

    if (typeof value === 'number' && Number.isNaN(value)) return 'nan';

    const type = typeof value;
    if (type !== 'object') return type;

    const typeTag = Object.prototype.toString.call(value);
    return typeTag.slice(8, -1).toLowerCase();
};

const testValues = [
    null,
    undefined,
    42,
    NaN,
    'hello',
    true,
    Symbol(),
    [],
    {},
    () => {},
    new Date(),
    new Map(),
    new Set(),
    /regex/,
    new Error(),
    Promise.resolve()
];

testValues.map(value => {
    console.log(`Value: ${String(value)} → Type: ${typeOf(value)}`);
});
