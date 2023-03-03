import Head from 'next/head'
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>CrossFit Diary - Workouts</title>
        <meta name="description" content="CrossFit Diary - Workouts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <button className="btn btn-primary m-3">Button Primary</button>
      Here should be the list of workouts

      <ul>
        <li><Link href="/workout">Workout 1</Link></li>
        <li><Link href="/workout">Workout 2</Link></li>
        <li><Link href="/workout">Workout 3</Link></li>
      </ul>
    </>
  )
}
