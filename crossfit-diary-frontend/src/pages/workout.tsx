import Head from 'next/head'
import Link from 'next/link';

export default function Workout() {
  return (
    <>
      <Head>
        <title>CrossFit Diary - Workout - 28.02.2023</title>
        <meta name="description" content="CrossFit Diary - Workout - 28.02.2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      Here should be workout info and exercises.

	  <Link href="/">Back to home</Link>
    </>
  )
}
