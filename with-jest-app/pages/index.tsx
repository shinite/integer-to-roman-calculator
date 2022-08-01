import Head from 'next/head'
import styles from '@/pages/index.module.css'
import { ChangeEvent, useState } from 'react'
import { CONSTANTS } from './_constants';

export default function Home() {
  const [integerValue, setIntegerValue] = useState('');

  /**
   * handleClick function is triggered when 
   * the user clicks on the Convert button
   */
  const handleClick = () => {
    // TODO: Call convertIntegerToRoman function
  }


  /**
   * handleChange function sets the state of integerValue
   * everytime a user changes the value on input field
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIntegerValue(event.target.value);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{CONSTANTS.HEADING}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>{CONSTANTS.HEADING}</h2>
        <div className={styles.inputContainer}>
          <input className={styles.input} type="text" onChange={handleChange} value={integerValue} placeholder={CONSTANTS.INPUT_PLACEHOLDER} data-testid="integer-input" />
          <button className={styles.button} onClick={handleClick} data-testid="convert-button">{CONSTANTS.CONVERT}</button>
        </div>
      </main>
    </div>
  )
}
