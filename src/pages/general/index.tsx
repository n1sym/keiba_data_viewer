import {
  Text,
  Stack,HStack
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import Link from "next/link";
import {GeneralTable} from "../../components/GeneralIndexTable"
import Head from "next/head";

function Index() {
  return (
    <Layout>
      <Head>
      <title>{"競馬予想AI Minerva"}</title>
        <meta
          property="og:image"
          content={`https://firebasestorage.googleapis.com/v0/b/hukurouo.appspot.com/o/image%2Fwh.png?alt=media&token=5adfeea7-d45b-463e-b2f4-edceae1ab06e`}
        />
        <meta name="og:title" content={"競馬予想AI : Minerva"} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Stack p={4}>
        <HStack>
          <Text pt={4}>
            自作の競馬予想AI
          </Text>
          <a href="https://github.com/hukurouo/Minerva" target="_blank" rel="noopener noreferrer"><Text color="teal.500" fontWeight="semibold" pt={4}>Minerva</Text></a>
          <Text pt={4}>
            の公開予想置き場
          </Text>
        </HStack>
        
        <HStack>
        <Text pt={4}>
          つくった人：
        </Text>
          <Link href="https://twitter.com/hukurouo_code" >
          <a target="_blank" rel="noopener noreferrer"><Text color="teal.500" pt={4}> @hukurouo_code</Text></a>
          </Link>
        </HStack>
      <GeneralTable result={result}></GeneralTable>
    </Stack>
    </Layout>
  );
}

const result =[
  {
    "date": "2021/08/07",
    "dirName": "2021/20210807",
    "venue": "新潟5日目-函館11日目",
    "total": -1240,
    "count": 21,
    "hit_count": 3
  },
  {
    "date": "2021/08/08",
    "dirName": "2021/20210808",
    "venue": "新潟6日目-函館12日目",
    "total": 600,
    "count": 19,
    "hit_count": 4
  }
].reverse()

export default Index;
