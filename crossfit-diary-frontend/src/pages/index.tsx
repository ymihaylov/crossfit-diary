import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>CrossFit Diary - Workouts</title>
        <meta name="description" content="CrossFit Diary - Workouts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#"><strong>CrossFit<span><sup>®</sup></span> <span className="text-green">Diary</span></strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {[
                ['Workouts', '/'],
                ['Last workout', 'last-workout'],
                ['Add new workout', '/new-workout'],
              ].map(([title, url]) => (
                <li key={title} className="nav-item">
                  <Link className={`nav-link text-white ${router.pathname === url ? "active" : ""}`} aria-current="page" href={url}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* <ul>
        <li><Link href="/workout">Workout 1</Link></li>
        <li><Link href="/workout">Workout 2</Link></li>
        <li><Link href="/workout">Workout 3</Link></li>
      </ul> */}
    </>
  )
}
