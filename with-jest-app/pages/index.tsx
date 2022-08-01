import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Integer To Roman Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>Integer To Roman Calculator</h2>
      </main>

    </div>
  )
}
