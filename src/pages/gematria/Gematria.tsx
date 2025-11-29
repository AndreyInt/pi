import {memo, useEffect, useState} from "react";

import classNames from "classnames";
import {TextField} from "@mui/material";

import {sumOfLetters} from "./utils.ts";

import styles from "./Gematria.module.sass";

// Страница с гематрией
export const Gematria = memo(() => {
    const [sum, setSum] = useState<number>();
    const [input, setInput] = useState<string>("");
    //
    const calculate = () => {
        setSum(sumOfLetters(input));
    }
    //
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        //
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    })
    //
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            calculate();
        }
    };
    //
    return (
        <div className={styles['gematria']}>
            <h1 className={styles["gematria__caption"]}>Гематрия</h1>
            <div className={styles["gematria__content"]}>
                <TextField
                    label="Введите текст"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    color="secondary"
                    variant="outlined"
                    multiline
                    slotProps={{
                        input: {
                            inputProps: { min: 0, max: 5000 },
                        },
                    }}
                />
                <button
                    disabled={!input}
                    className={classNames(!input && styles["pi__disabled"])}
                    onClick={calculate}
                >
                    Посчитать
                </button>
                <div className={styles['gematria__info-item']}>Сумма числовых значений букв в тексте: {sum}</div>
            </div>
        </div>
   );
});