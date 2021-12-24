import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />

  return (
    <div className="">
      <Head>
        <title>Metaverse JK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome To The App</h1>
      <button onClick={logout}>로그아웃</button>
    </div>
  )
}
