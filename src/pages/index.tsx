import {
  Text,
  Stack,HStack
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Link from "next/link";
import {IndexTable} from "../components/indexTable"

function Index() {
  return (
    <Layout>
      <Stack p={4}>
        
        <Text pt={4}>
          競馬予想置き場　
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
    "date":"2021/05/22",
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
    "date":"2021/05/23",
    "dirName": "2021/G1/oaks",
    "raceName": "優駿牝馬(G1)",
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
