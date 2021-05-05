import { Wrap} from "@chakra-ui/react";
import prisma from "../../../lib/prisma";
import { GetStaticProps } from "next";
import RaceData from "../../../@types/RaceData";
import {FrameNumBar} from '../../components/FrameNumBar'
import Layout from "../../components/Layout";

function Index({raceData, raceData3}:{raceData: RaceData[], raceData3: RaceData[]}){
  return (
    <Layout>
    <Wrap spacing="20px" p={4}>
      <FrameNumBar raceData={raceData} title="過去20年の1位の枠番"/>
      <FrameNumBar raceData={raceData3} title="過去20年の1~3位の枠番"/>
    </Wrap>
    </Layout>
  )
}

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
    },
  })
  return { props: { raceData, raceData3 } }
}