import {
  Button
} from '@chakra-ui/react'
import raceData from '../../data/nhkmile'
import Link from 'next/link'
import Layout from "../components/Layout";

async function  test(data: any){
  try {
    const body = data
    await fetch('/api/result', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch (error) {
    console.error(error)
  }
}

function main(){
  raceData.forEach((data)=>{
    test(data)
  })
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
      
     
    <Button onClick={()=>{main()}}>exe</Button>
  </Layout>
  )
}

export default Index