import {
  Button,
} from '@chakra-ui/react'
import prisma from '../../lib/prisma'
import { GetStaticProps } from "next";
import raceData from '../../data/nhkmile'
import {RaceResultTable} from '../components/RaceResultTable'

type RaceData = {
  raceName: string;
  rank: number;
  frameNumber: number;
  horseNumber: number;
  horseName: string;
  sexualAge: string;
  weight: number;
  jockeyName: string;
  time: string;
  passingOrder: string;
  time3f: number;
  oddsNum: number,
  oddsRank: number,
  horseWeight: number,
  horseWeightDiff: number,
  trainerName: string
}

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

//{userData}:{userData: {id: number, title: string, content: string}[]}

const Index = ({raceData}:{raceData: RaceData[]}) => (
  <div>
    <Button onClick={()=>{main()}}>exe</Button>
    <RaceResultTable raceData={raceData}></RaceResultTable>
  </div>
)

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const raceData = await prisma.result.findMany({
    where: { rank: 1 },
  })
  console.log(raceData)
  return { props: { raceData } }
}