import React, {useState} from 'react';

import {TextField} from "@mui/material";

import piDigits from './assets/pi.txt?raw';

import './App.css';

function sumDigitsUntilIndex(endIndex: number): number {
    if (endIndex < 0 || endIndex > piDigits.length) {
        throw new RangeError('Индекс вне допустимого диапазона');
    }
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

function App() {
    const [index, setIndex] = useState<number>();
    const [sum, setSum] = useState<number>();
    const [input, setInput] = useState("");
    const [hasError, setHasError] = useState(false);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            calculate();
        }
    };

    const calculate = () => {
        const idx = (piDigits as string).indexOf(input);
        //
        if(idx >= 0) {
            setHasError(false);
            setIndex(idx + 1);
            setSum(sumDigitsUntilIndex(idx));

        } else {
            setHasError(true);
        }
    }

    const renderIndex = () => {
        if(hasError) return <span style={{color: "red"}}>Ошибка, последовательность не найдена</span>
        //
        if(!index) return null;
        //
        return <span style={{color: "green"}}>{index}</span>;
    }

    const renderSum = () => {
        if(hasError) return <span style={{color: "red"}}>Ошибка, последовательность не найдена</span>
        //
        if(!index) return null;
        //
        return <span style={{color: "green"}}>{sum}</span>;
    }

    return (
        <div className="pi">
          <h1 className='caption'>Число ПИ</h1>
            <div className="content">
              <TextField
                label="Введите последовательность"
                type="number"
                value={input}
                color={"secondary"}
                variant={'outlined'}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                  onClick={calculate}
                  disabled={!input}
                  className={!input ? 'disabled' : ''}
              >
                  Посчитать
              </button>
              <div>Сумма цифр до заданной последовательности: {renderSum()}</div>
              <div>Порядковый номер цифры начала последовательности: {renderIndex()}</div>
            </div>
        </div>
    );
}

export default App;
