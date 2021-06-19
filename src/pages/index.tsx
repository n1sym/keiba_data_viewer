import {
  Text,
  Stack,HStack
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Link from "next/link";
import {IndexTable} from "../components/indexTable"
import Head from "next/head";

function Index() {
  return (
    <Layout>
      <Head>
        <meta
          property="og:image"
          content={`https://firebasestorage.googleapis.com/v0/b/hukurouo.appspot.com/o/image%2Fwh.png?alt=media&token=5adfeea7-d45b-463e-b2f4-edceae1ab06e`}
        />
        <meta name="og:title" content={"競馬予想AI : Minerva"} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Stack p={4}>
        
        <Text pt={4}>
        <a href="https://github.com/hukurouo/Minerva" target="_blank" rel="noopener noreferrer">Minerva</a>に算出させた、競馬予想置き場　
        </Text>
        <HStack>
        <Text pt={4}>
          つくった人：
        </Text>
          <Link href="https://twitter.com/hukurouo_code" >
          <a target="_blank" rel="noopener noreferrer"><Text color="teal.500" pt={4}> @hukurouo_code</Text></a>
          </Link>
          </HStack>
      <IndexTable result={result}></IndexTable>
    </Stack>
    </Layout>
  );
}

const result = [
  {
    "date": "2021/06/13",
    "dirName": "2021/G3/hakodates",
    "raceName": "函館スプリントS(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": 220,
    "3huku5box": -1000,
    "1-2-3oddsRank": "5-1-4"
  },
  {
    "date": "2021/05/16",
    "dirName": "2021/G1/victoria",
    "raceName": "ヴィクトリアマイル(G1)",
    "tan": 300,
    "tan2": -350,
    "huku": 100,
    "wide3box": 89,
    "wide5box": -670,
    "3huku5box": -1000,
    "1-2-3oddsRank": "1-10-5"
  },
  {
    "date": "2021/05/22",
    "dirName": "2021/G3/heian",
    "raceName": "平安S(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": 300,
    "wide3box": -1000,
    "wide5box": 290,
    "3huku5box": 490,
    "1-2-3oddsRank": "2-1-3"
  },
  {
    "date": "2021/05/23",
    "dirName": "2021/G1/oaks",
    "raceName": "優駿牝馬(G1)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -300,
    "3huku5box": -1000,
    "1-2-3oddsRank": "3-2-16"
  },
  {
    "date": "2021/05/30",
    "dirName": "2021/G1/derby",
    "raceName": "東京優駿(G1)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "4-1-9"
  },
  {
    "date": "2021/05/30",
    "dirName": "2021/G2/meguro",
    "raceName": "目黒記念(G2)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": 110,
    "3huku5box": -1000,
    "1-2-3oddsRank": "8-2-15"
  },
  {
    "date": "2021/06/05",
    "dirName": "2021/G3/naruo",
    "raceName": "鳴尾記念(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "8-9-5"
  },
  {
    "date": "2021/06/06",
    "dirName": "2021/G1/yasuda",
    "raceName": "安田記念(G1)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": 320,
    "wide5box": 6020,
    "3huku5box": 7860,
    "1-2-3oddsRank": "8-1-4"
  },
  {
    "date": "2021/06/13",
    "dirName": "2021/G3/epsom",
    "raceName": "エプソムC(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": 5600,
    "wide5box": 3630,
    "3huku5box": 12090,
    "1-2-3oddsRank": "3-6-2"
  },
  {
    "date": "2021/06/13",
    "dirName": "2021/G3/hakodates",
    "raceName": "函館スプリントS(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": 220,
    "3huku5box": -1000,
    "1-2-3oddsRank": "5-1-4"
  },
  {
    "date": "2021/06/19",
    "dirName": "2021/G3/mermaid",
    "raceName": "マーメイドS(G3)",
    "tan": "",
    "tan2": "",
    "huku": "",
    "wide3box": "",
    "wide5box": "",
    "3huku5box": "",
    "1-2-3oddsRank": ""
  },
  {
    "date": "2021/06/19",
    "dirName": "2021/G3/unicorn",
    "raceName": "ユニコーンS(G3)",
    "tan": "",
    "tan2": "",
    "huku": "",
    "wide3box": "",
    "wide5box": "",
    "3huku5box": "",
    "1-2-3oddsRank": ""
  }
].reverse()

export default Index;
