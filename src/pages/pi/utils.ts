// Сумма простых чисел до определенного индекса
export function sumDigitsUntilIndex(endIndex: number, piDigits: string): number {
    if (endIndex < 0 || endIndex > piDigits.length) {
        throw new RangeError('Индекс вне допустимого диапазона');
    }
    console.log('piDigits', piDigits)
    //
    let sum = 0;
    //
    for (let i = 0; i < endIndex; i++) {
        const digit = parseInt(piDigits[i], 10);
        if (!isNaN(digit)) {
            sum += digit;
        }
    }
    return sum;
}