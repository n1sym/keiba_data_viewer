import { Wrap, Text, Stack, Heading, Box } from "@chakra-ui/react";
import prisma from "../../../lib/prisma";
import { GetStaticProps } from "next";
import RaceData from "../../../@types/RaceData";
import { FrameNumBar } from "../../components/FrameNumBar";
import { ScatterChart } from "../../components/ScatterChart";
import Layout from "../../components/Layout";
import Link from "next/link";

function Index({
  raceData,
  raceData3,
  horseWeightDiffData,
}: {
  raceData: RaceData[];
  raceData3: RaceData[];
  horseWeightDiffData: RaceData[];
}) {
  return (
    <Layout>
      <Stack p={4}>
        <Heading size="md" my={4}>NHKマイルカップ</Heading>
        <Text color="blue.500">
        <Link href="/race/nhkmile">
              <a>NHKマイルカップ(G1)　過去20年のレースデータ</a>
            </Link></Text>
        <Text>↑のデータからグラフを作って傾向を読む。</Text>
        
        <Wrap spacing="20px" p={4}>
          <FrameNumBar raceData={raceData} title="1着馬の枠番号" />
          <FrameNumBar raceData={raceData3} title="1~3着馬の枠番号" />
        </Wrap>

        <Box w={800} p={4}>
          <ScatterChart raceData={horseWeightDiffData} title="体重差分と着順"/>
        </Box>

      </Stack>
    </Layout>
  );
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const raceData3 = await prisma.result.findMany({
    where: {
      rank: { in: [1, 2, 3] },
    },
  });
  const raceData = await prisma.result.findMany({
    where: {
      rank: 1,
    },
  });
  const horseWeightDiffData = await prisma.result.findMany({
    where: {
      year: { gte: 2010}
    }
  })
  return { props: { raceData, raceData3, horseWeightDiffData } };
};
