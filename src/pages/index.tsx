import {
  Text,
  Heading,
  Stack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Link from "next/link";
import Layout from "../components/Layout";

function Index() {
  return (
    <Layout>
      <Stack p={4}>
        <Heading size="lg">keiba data okiba 🐎</Heading>
        <Text pt={4}>
          競馬データ置き場。つくった人：@hukurouo_code        
        </Text>
        <Heading size="md" pt={4}>
          過去20年のレース傾向
        </Heading>
        <UnorderedList pl={6}>
          <ListItem>
            <Link href="/race/nhkmile">
              <a>NHKマイルカップ(G1)</a>
            </Link>
          </ListItem>
        </UnorderedList>
        <Heading size="md" pt={4}>
          グラフで見る
        </Heading>
        <UnorderedList pl={6}>
          <ListItem>
            <Link href="/graph/nhkmile">
              <a>NHKマイルカップ(G1)</a>
            </Link>
          </ListItem>
        </UnorderedList>
      </Stack>
    </Layout>
  );
}

export default Index;
