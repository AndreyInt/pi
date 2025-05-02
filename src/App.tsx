import {useState} from 'react'

import piDigits from './assets/pi.txt?raw';

import './App.css';
import {TextField} from "@mui/material";

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
    const [index, setIndex] = useState<number>(null);
    const [sum, setSum] = useState<number>(0);
    const [input, setInput] = useState("");
    const [hasError, setHasError] = useState(false);

    const calculate = () => {
        const idx = (piDigits as string).indexOf(input);
        //
        if(idx >= 0) {
            setHasError(false);
            setIndex(idx);
            setSum(sumDigitsUntilIndex(idx));

        } else {
            setHasError(true);
        }
    }

    const renderIndex = () => {
        if(hasError) return <span style={{color: "red"}}>Ошибка, последовательность не найдена</span>
        //
        return <span style={{color: "green"}}>{index + 1}</span>;
    }

    const renderSum = () => {
        if(hasError) return <span style={{color: "red"}}>Ошибка, последовательность не найдена</span>
        //
        return <span style={{color: "green"}}>{sum}</span>;
    }

    return (
        <div className="pi">
          <h1 className='caption'>Число ПИ</h1>
            <div className="content">
              <TextField
                placeholder={'Введите последовательность'}
                value={input}
                color={"secondary"}
                variant={'outlined'}
                onChange={(e) => setInput(e.target.value)}
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
