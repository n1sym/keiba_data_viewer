import { Wrap, Text, Stack, Heading, Box } from "@chakra-ui/react";
import prisma from "../../../lib/prisma";
import { GetStaticProps } from "next";
import RaceData from "../../../@types/RaceData";
import { FrameNumBar } from "../../components/FrameNumBar";
import { ScatterChart } from "../../components/ScatterChart";
import Layout from "../../components/Layout";
import Link from "next/link";

function Index({
  rank1results,
  rank123results,
  years10results,
}: {
  rank1results: RaceData[];
  rank123results: RaceData[];
  years10results: RaceData[];
}) {
  return (
    <Layout>
      <Stack p={4}>
        <Heading size="md" my={4}>ヴィクトリアマイル</Heading>
        <Text color="blue.500">
        <Link href="/race/nhkmile">
              <a>過去20年のレースデータ</a>
            </Link></Text>

        
        <Wrap spacing="20px" p={4}>
          <FrameNumBar raceData={rank1results} title="1着馬の枠番号" />
          <FrameNumBar raceData={rank123results} title="1~3着馬の枠番号" />
        </Wrap>

        <Box w={800} p={4}>
          <ScatterChart raceData={years10results} title="体重差分と着順"/>
        </Box>
        <Text>前哨戦と本戦の着順の関連性</Text>
        
      </Stack>
      
    </Layout>
  );
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const rank123results = await prisma.result.findMany({
    where: {
      AND: [
        {rank: { in: [1, 2, 3] }},
        {raceName: {
          contains: 'ヴィクトリア',
        }}
      ]
      
    },
  });
  const rank1results = await prisma.result.findMany({
    where: {
      AND: [
        {rank: 1},
        {raceName: {
          contains: 'ヴィクトリア',
        }}
      ]
    },
  });
  const years10results = await prisma.result.findMany({
    where: {
      AND: [
        {year: { gte: 2000}},
        {raceName: {
          contains: 'ヴィクトリア',
        }}
      ]
      
    }
  })
  return { props: { rank1results, rank123results, years10results } };
};
