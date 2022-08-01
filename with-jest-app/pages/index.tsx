import Head from 'next/head'
import styles from '@/pages/index.module.css'
import { CONSTANTS } from './_constants'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{CONSTANTS.HEADING}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>{CONSTANTS.HEADING}</h2>
      </main>

    </div>
  )
}
