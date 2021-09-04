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
      <IndexTable result={result}></IndexTable>
    </Stack>
    </Layout>
  );
}

const result =[
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
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "10-5-6"
  },
  {
    "date": "2021/06/19",
    "dirName": "2021/G3/unicorn",
    "raceName": "ユニコーンS(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "7-14-3"
  },
  {
    "date": "2021/06/27",
    "dirName": "2021/G1/takara",
    "raceName": "宝塚記念(G1)",
    "tan": -1000,
    "tan2": -100,
    "huku": -1000,
    "wide3box": -340,
    "wide5box": -800,
    "3huku5box": -1000,
    "1-2-3oddsRank": "1-7-2"
  },
  {
    "date": "2021/07/04",
    "dirName": "2021/G3/cbc",
    "raceName": "CBC賞(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": 70,
    "3huku5box": -1000,
    "1-2-3oddsRank": "8-2-6"
  },
  {
    "date": "2021/07/04",
    "dirName": "2021/G3/radio",
    "raceName": "ラジオNIKKEI賞(G3)",
    "tan": -1000,
    "tan2": 2900,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "4-11-7"
  },
  {
    "date": "2021/07/11",
    "dirName": "2021/G3/tanabata",
    "raceName": "七夕賞(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "2-7-9"
  },
  {
    "date": "2021/07/11",
    "dirName": "2021/G3/procyon",
    "raceName": "プロキオンS(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "9-14-12"
  },
  {
    "date": "2021/07/17",
    "dirName": "2021/G3/hakodate2",
    "raceName": "函館2歳S(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": 1100,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "3-2-10"
  },
  {
    "date": "2021/07/18",
    "dirName": "2021/G3/hakodate",
    "raceName": "函館記念(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": 690,
    "3huku5box": -1000,
    "1-2-3oddsRank": "2-14-12"
  },
  {
    "date": "2021/07/18",
    "dirName": "2021/G3/toyota",
    "raceName": "トヨタ賞中京記念(G3)",
    "tan": 3400,
    "tan2": 1200,
    "huku": 900,
    "wide3box": 881,
    "wide5box": 1780,
    "3huku5box": 4020,
    "1-2-3oddsRank": "1-6-5"
  },
  {
    "date": "2021/07/25",
    "dirName": "2021/G3/isd",
    "raceName": "アイビスサマーD(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -510,
    "3huku5box": -1000,
    "1-2-3oddsRank": "1-2-14"
  },
  {
    "date": "2021/08/01",
    "dirName": "2021/G3/queen",
    "raceName": "クイーンS(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -670,
    "3huku5box": -1000,
    "1-2-3oddsRank": "3-1-8"
  },
  {
    "date": "2021/08/08",
    "dirName": "2021/G3/leopard",
    "raceName": "レパードS(G3)",
    "tan": -1000,
    "tan2": 400,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "1-10-6"
  },
  {
    "date": "2021/08/08",
    "dirName": "2021/G3/elm",
    "raceName": "エルムS(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "4-7-11"
  },
  {
    "date": "2021/08/15",
    "dirName": "2021/G3/sekiya",
    "raceName": "関屋記念(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": 200,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "4-6-1"
  },
  {
    "date": "2021/08/15",
    "dirName": "2021/G3/ogura",
    "raceName": "小倉記念(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": 490,
    "3huku5box": -1000,
    "1-2-3oddsRank": "6-5-8"
  },
  {
    "date": "2021/08/22",
    "dirName": "2021/G2/sapporo",
    "raceName": "札幌記念(G2)",
    "tan": -1000,
    "tan2": -1000,
    "huku": 100,
    "wide3box": -1000,
    "wide5box": -750,
    "3huku5box": -1000,
    "1-2-3oddsRank": "2-1-8"
  },
  {
    "date": "2021/08/22",
    "dirName": "2021/G3/kitakyu",
    "raceName": "TV西日本北九州記念(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": 200,
    "3huku5box": -1000,
    "1-2-3oddsRank": "5-4-2"
  },
  {
    "date": "2021/08/29",
    "dirName": "2021/G3/niigata2",
    "raceName": "新潟2歳S(G3)",
    "tan": 3500,
    "tan2": 1250,
    "huku": 300,
    "wide3box": -241,
    "wide5box": -770,
    "3huku5box": -1000,
    "1-2-3oddsRank": "3-1-2"
  },
  {
    "date": "2021/08/29",
    "dirName": "2021/G3/keene",
    "raceName": "キーンランドC(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "3-7-10"
  },
  {
    "date": "2021/09/04",
    "dirName": "2021/G3/sapporo2",
    "raceName": "札幌2歳S(G3)",
    "tan": -1000,
    "tan2": 50,
    "huku": -1000,
    "wide3box": 155,
    "wide5box": -650,
    "3huku5box": -1000,
    "1-2-3oddsRank": "1-4-5"
  },
  {
    "date": "2021/09/05",
    "dirName": "2021/G3/niigata",
    "raceName": "新潟記念(G3)",
    "tan": "",
    "tan2": "",
    "huku": "",
    "wide3box": "",
    "wide5box": "",
    "3huku5box": "",
    "1-2-3oddsRank": ""
  },
  {
    "date": "2021/09/05",
    "dirName": "2021/G3/ogura2",
    "raceName": "小倉2歳S(G3)",
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
