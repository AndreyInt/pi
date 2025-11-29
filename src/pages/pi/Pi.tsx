import React, {memo, useState} from "react";

import classNames from "classnames";
import {TextField} from "@mui/material";

import {sumDigitsUntilIndex} from "./utils.ts";
import piDigits from './assets/pi.txt?raw';

import styles from "./Pi.module.sass";

export const Pi = memo(() => {
    const [index, setIndex] = useState<number>();
    const [sum, setSum] = useState<number>();
    const [input, setInput] = useState<string>("");
    const [hasError, setHasError] = useState<boolean>(false);

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
            setSum(sumDigitsUntilIndex(idx, piDigits));

        } else {
            setHasError(true);
        }
    };

    const renderIndex = () => {
        if(hasError) return <span style={{color: "red"}}>Ошибка, последовательность не найдена</span>
        //
        if(!index) return null;
        //
        return <span style={{color: "green"}}>{index}</span>;
    };

    const renderSum = () => {
        if(!index) return null;
        //
        return <span style={{color: "green"}}>{sum}</span>;
    };

    const renderContent = (): React.JSX.Element => {
        if (hasError) return <span style={{color: "red"}}>Ошибка, последовательность не найдена</span>
        //
        return (
            <>
                <div className={styles['pi__info-item']}>Сумма цифр до заданной последовательности: {renderSum()}</div>
                <div className={styles['pi__info-item']}>Порядковый номер цифры начала последовательности: {renderIndex()}</div>
            </>
        );
    };

    return (
        <div className={styles["pi"]}>
            <h1 className={styles["pi__caption"]}>Число ПИ</h1>
            <div className={styles["pi__content"]}>
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
                    className={classNames(!input && styles["pi__disabled"])}
                >
                    Посчитать
                </button>
                {renderContent()}
            </div>
        </div>
    );
});
