import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import {RaceForecastTableG3tan} from "../../../../components/RaceForecastTableG3tan"
import Link from "next/link";
import Head from "next/head";

const title = "第69回 トヨタ賞中京記念(G3)"
const result_url = ""

function Index() {
  return (
    <Layout>
      <Head>
        <meta
          property="og:image"
          content={`https://firebasestorage.googleapis.com/v0/b/hukurouo.appspot.com/o/image%2Fwh.png?alt=media&token=5adfeea7-d45b-463e-b2f4-edceae1ab06e`}
        />
        <meta name="og:title" content={"Minerva / " + title} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Stack p={4}>
        <Heading size="lg">{title}</Heading>
        <Text fontWeight="bold" pt={8}>レース結果</Text>
        <Link href={result_url}>
            <a><Text color="blue.400">{result_url}</Text></a>
          </Link>
          <Text fontWeight="bold" pt={8}>各券種で1000円賭けた場合</Text>
        <ForecastResultTable result={result}></ForecastResultTable>
        <Text fontWeight="bold" pt={8}>単勝予想</Text>
        <RaceForecastTableG3tan forecastData={top_forecast_data} type="top"></RaceForecastTableG3tan>
        <Text fontWeight="bold" pt={8}>ワイド予想</Text>
        <RaceForecastTable forecastData={wide_forecast_data} type="wide"></RaceForecastTable>
      </Stack>
    </Layout>
  );
}

const result = [
  {

  }
]
const wide_forecast_data = [
  {
    "horseNumber": 9,
    "horseName": "ボッケリーニ",
    "jockeyName": "浜中",
    "totalPoint": 17.04,
    "horsePoint": 4.84,
    "jockeyPoint": 3.38,
    "framePoint": 1.84,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 11,
    "horseName": "クラヴェル",
    "jockeyName": "横山典",
    "totalPoint": 16.88,
    "horsePoint": 5,
    "jockeyPoint": 3.14,
    "framePoint": 5,
    "timePoint": 2.92,
    "racePoint": 2.87,
    "roubdTotalPoint": 4.95
  },
  {
    "horseNumber": 3,
    "horseName": "アンドラステ",
    "jockeyName": "川田",
    "totalPoint": 16.65,
    "horsePoint": 1.47,
    "jockeyPoint": 5,
    "framePoint": 5,
    "timePoint": 3.85,
    "racePoint": 2.75,
    "roubdTotalPoint": 4.89
  },
  {
    "horseNumber": 8,
    "horseName": "カテドラル",
    "jockeyName": "福永",
    "totalPoint": 15.49,
    "horsePoint": 2.05,
    "jockeyPoint": 4.4,
    "framePoint": 2.37,
    "timePoint": 4.65,
    "racePoint": 4.15,
    "roubdTotalPoint": 4.55
  },
  {
    "horseNumber": 12,
    "horseName": "アバルラータ",
    "jockeyName": "西村淳",
    "totalPoint": 15.07,
    "horsePoint": 1.99,
    "jockeyPoint": 3.49,
    "framePoint": 5,
    "timePoint": 3.4,
    "racePoint": 3.68,
    "roubdTotalPoint": 4.42
  },
  {
    "horseNumber": 2,
    "horseName": "ダノンチェイサー",
    "jockeyName": "岩田望",
    "totalPoint": 13.01,
    "horsePoint": 2.48,
    "jockeyPoint": 3.44,
    "framePoint": 2.37,
    "timePoint": 3.3,
    "racePoint": 2.95,
    "roubdTotalPoint": 3.82
  },
  {
    "horseNumber": 6,
    "horseName": "メイケイダイハード",
    "jockeyName": "酒井",
    "totalPoint": 11.87,
    "horsePoint": 1.78,
    "jockeyPoint": 3.25,
    "framePoint": 1.32,
    "timePoint": 3.72,
    "racePoint": 3.76,
    "roubdTotalPoint": 3.48
  },
  {
    "horseNumber": 4,
    "horseName": "ドリームソルジャー",
    "jockeyName": "鮫島駿",
    "totalPoint": 11.83,
    "horsePoint": 2.4,
    "jockeyPoint": 2.36,
    "framePoint": 4.21,
    "timePoint": 2.19,
    "racePoint": 2.52,
    "roubdTotalPoint": 3.47
  },
  {
    "horseNumber": 10,
    "horseName": "ディアンドル",
    "jockeyName": "団野",
    "totalPoint": 11.6,
    "horsePoint": 1.38,
    "jockeyPoint": 3.14,
    "framePoint": 1.84,
    "timePoint": 3.96,
    "racePoint": 2.95,
    "roubdTotalPoint": 3.4
  },
  {
    "horseNumber": 1,
    "horseName": "ミスニューヨーク",
    "jockeyName": "加藤",
    "totalPoint": 11.52,
    "horsePoint": 3.16,
    "jockeyPoint": 1.32,
    "framePoint": 4.21,
    "timePoint": 2.71,
    "racePoint": 2.44,
    "roubdTotalPoint": 3.38
  },
  {
    "horseNumber": 7,
    "horseName": "アメリカズカップ",
    "jockeyName": "松若",
    "totalPoint": 10.55,
    "horsePoint": 2.32,
    "jockeyPoint": 2.81,
    "framePoint": 2.37,
    "timePoint": 1.74,
    "racePoint": 2.52,
    "roubdTotalPoint": 3.1
  },
  {
    "horseNumber": 5,
    "horseName": "○外ロータスランド",
    "jockeyName": "藤岡康",
    "totalPoint": 10.09,
    "horsePoint": 2.41,
    "jockeyPoint": 2.59,
    "framePoint": 1.32,
    "timePoint": 2.78,
    "racePoint": 1.94,
    "roubdTotalPoint": 2.96
  }
]
const top_forecast_data = [
  {
    "horseNumber": 3,
    "horseName": "アンドラステ",
    "jockeyName": "川田",
    "totalPoint": 12.09,
    "horsePoint": 2.77,
    "jockeyPoint": 4.9,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 7,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 5,
    "horseName": "○外ロータスランド",
    "jockeyName": "藤岡康",
    "totalPoint": 11.63,
    "horsePoint": 5,
    "jockeyPoint": 1.98,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 7.5,
    "roubdTotalPoint": 4.81
  },
  {
    "horseNumber": 6,
    "horseName": "メイケイダイハード",
    "jockeyName": "酒井",
    "totalPoint": 9.84,
    "horsePoint": 4.49,
    "jockeyPoint": 4.2,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 4.07
  },
  {
    "horseNumber": 8,
    "horseName": "カテドラル",
    "jockeyName": "福永",
    "totalPoint": 9.73,
    "horsePoint": 1.82,
    "jockeyPoint": 5,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 4.02
  },
  {
    "horseNumber": 2,
    "horseName": "ダノンチェイサー",
    "jockeyName": "岩田望",
    "totalPoint": 9.06,
    "horsePoint": 2,
    "jockeyPoint": 2.51,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 7.5,
    "roubdTotalPoint": 3.75
  },
  {
    "horseNumber": 1,
    "horseName": "ミスニューヨーク",
    "jockeyName": "加藤",
    "totalPoint": 8.91,
    "horsePoint": 1.84,
    "jockeyPoint": 0.77,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 7.5,
    "roubdTotalPoint": 3.68
  },
  {
    "horseNumber": 12,
    "horseName": "アバルラータ",
    "jockeyName": "西村淳",
    "totalPoint": 7.29,
    "horsePoint": 1.89,
    "jockeyPoint": 2.86,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 7,
    "roubdTotalPoint": 3.01
  },
  {
    "horseNumber": 10,
    "horseName": "ディアンドル",
    "jockeyName": "団野",
    "totalPoint": 7.03,
    "horsePoint": 1.28,
    "jockeyPoint": 2.43,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2,
    "roubdTotalPoint": 2.91
  },
  {
    "horseNumber": 9,
    "horseName": "ボッケリーニ",
    "jockeyName": "浜中",
    "totalPoint": 6.92,
    "horsePoint": 1.65,
    "jockeyPoint": 3.55,
    "oikiriPoint": 0,
    "stablePoint": 4,
    "timePoint": 0,
    "roubdTotalPoint": 2.86
  },
  {
    "horseNumber": 4,
    "horseName": "ドリームソルジャー",
    "jockeyName": "鮫島駿",
    "totalPoint": 6.59,
    "horsePoint": 3.25,
    "jockeyPoint": 1.91,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 2.73
  },
  {
    "horseNumber": 11,
    "horseName": "クラヴェル",
    "jockeyName": "横山典",
    "totalPoint": 5.75,
    "horsePoint": 0.37,
    "jockeyPoint": 2.17,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 2.38
  },
  {
    "horseNumber": 7,
    "horseName": "アメリカズカップ",
    "jockeyName": "松若",
    "totalPoint": 4.35,
    "horsePoint": 1.74,
    "jockeyPoint": 2.17,
    "oikiriPoint": 0,
    "stablePoint": 0,
    "timePoint": 3.5,
    "roubdTotalPoint": 1.8
  }
]

export default Index;

