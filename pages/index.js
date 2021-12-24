import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />

  return (
    <div className="">
      <Head>
        <title>Metaverse JK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome To The App</h1>
    </div>
  )
}
