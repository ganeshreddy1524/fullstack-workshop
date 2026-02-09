function logMessage(message: string): void {
    console.log(`[LOG]: ${message}`);
}

function throwError(message: string): never {
    throw new Error(message);
}

function processItems(items: string[]): void {
    items.forEach(item => console.log(item));
}

function infiniteLoop(): never {
    while (true) {
        // Process indefinitely
    }
}

function getLength(text: string): number {
    return text.length;
}
