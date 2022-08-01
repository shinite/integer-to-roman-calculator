import Head from "next/head";
import styles from "@/pages/index.module.css";
import { ChangeEvent, useState } from "react";
import { CONSTANTS } from "./_constants";
import { convertIntegerToRoman, validateInput } from "./_helper";

export default function Home() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * handleClick function is triggered when
   * the user clicks on the Convert button.
   * It calls the convertIntegerToRoman method and
   * sets the value to result variable
   */
  const handleClick = () => {
    let isValid = validateInput(value);
    if (isValid) {
      let result = convertIntegerToRoman(parseInt(value));
      setResult(result);
      setError(null);
    } else {
      setError(CONSTANTS.ERROR_TEXT);
      setResult(null);
    }
  };

  /**
   * handleChange function sets the state of value
   * everytime a user changes the value in input field
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  /**
   * displayResult function renders the result
   * variable that stores a roman numeral
   */
  const displayResult = () => (
    <div>{`${CONSTANTS.ROMAN_NUMERAL} : ${result}`}</div>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>{CONSTANTS.HEADING}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>{CONSTANTS.HEADING}</h2>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            onChange={handleChange}
            value={value}
            placeholder={CONSTANTS.INPUT_PLACEHOLDER}
            data-testid="integer-input"
          />
          <button
            className={styles.button}
            onClick={handleClick}
            data-testid="convert-button"
          >
            {CONSTANTS.CONVERT}
          </button>
        </div>
        <div className={styles.resultContainer} data-testid="result-container">
          {result && displayResult()}
          {error && <div className={styles.error}>{error}</div>}
        </div>
      </main>
    </div>
  );
}
