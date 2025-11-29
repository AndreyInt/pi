const alphabet = [
    'А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'
];

export const letterNumber: Record<string, number> = {};
// Создадим структуру с буквами по номерам в алфавите
alphabet.forEach((letter, index) => {
    letterNumber[letter] = index + 1; // номера с 1
});

// Посчитаем сумму букв
export function sumOfLetters(text: string) {
    let sum = 0;
    // переводим в верхний регистр, чтобы не различать А/а
    const upperText = text.toUpperCase();
    //
    for (const char of upperText) {
        if (letterNumber[char]) {
            sum += letterNumber[char];
        }
    }
    //
    return sum;
}