import {
  Button,Wrap
} from '@chakra-ui/react'
import prisma from '../../lib/prisma'
import { GetStaticProps } from "next";
import raceData from '../../data/nhkmile'
import {RaceResultTable} from '../components/RaceResultTable'
import {FrameNumBar} from '../components/FrameNumBar'
import RaceData from '../../@types/RaceData'

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

const Index = ({raceData, raceData3}:{raceData: RaceData[], raceData3: RaceData[]}) => (
  <div>
    <Wrap spacing="20px" p="8px">
      <FrameNumBar raceData={raceData} title="過去20年の1位の枠番"/>
      <FrameNumBar raceData={raceData3} title="過去20年の1~3位の枠番"/>
    </Wrap>
    <RaceResultTable raceData={raceData}></RaceResultTable>
    <Button mt={24} onClick={()=>{main()}}>exe</Button>
  </div>
)

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const raceData3 = await prisma.result.findMany({
    where: { 
      rank: { in: [1,2,3]} 
    },
  })
  const raceData = await prisma.result.findMany({
    where: { 
      rank: 1,
      //jockeyName: {contains: '武豊',}
    },
    orderBy: {
      year: 'desc',
    },
  })
  return { props: { raceData, raceData3 } }
}