import {
  Button
} from '@chakra-ui/react'
import Link from 'next/link'
import Layout from "../components/Layout";


async function  test(){
//  try {
//    const body = []
//    await fetch('/api/horse_record', {
//      method: 'POST',
//      headers: { 'Content-Type': 'application/json' },
//      body: JSON.stringify(body),
//    })
//  } catch (error) {
//    console.error(error)
//  }
}

function Index(){
  return (
    <Layout>
      <ul>
      <li>
      <Link href="/race/nhkmile">
          <a>NHKマイルカップ</a>
      </Link>
      </li>
      <li>
      <Link href="/graph/nhkmile">
          <a>グラフ</a>
        </Link>
      </li>
    </ul>
      
     
    <Button onClick={()=>{test()}}>exe</Button>
  </Layout>
  )
}

export default Index