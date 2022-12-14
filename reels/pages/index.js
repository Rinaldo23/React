import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Feed from '../Components/Feed'
import { AuthContext } from '../Context/auth'
import { useContext } from 'react'
import { useRouter } from 'next/router'

export default function Home() {

  const { user } = useContext(AuthContext)
  const router = useRouter()

  const Redirect = () => {
    router.push("/login")
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Instagram Reels</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        user?.uid ? <Feed/> : <Redirect/>
      }
    </div>
  )
}
