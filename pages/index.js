import Head from 'next/head'
import Login from '../components/Login'
import Header from '../components/Header'
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

      <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <Header />
          {/* Message */}
        </div>
      </div>


      {/* Footer */}
      <button onClick={logout}>로그아웃</button>
    </div>
  )
}
