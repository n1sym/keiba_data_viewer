import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第13回 レパードステークス(G3)"
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
        <RaceForecastTable forecastData={top_forecast_data} type="top"></RaceForecastTable>
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
    "horseName": "ハンディーズピーク",
    "jockeyName": "福永",
    "totalPoint": 18.55,
    "horsePoint": 4.22,
    "jockeyPoint": 4.75,
    "framePoint": 5,
    "timePoint": 2.91,
    "racePoint": 3.38,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 4,
    "horseName": "ホッコーハナミチ",
    "jockeyName": "浜中",
    "totalPoint": 17.17,
    "horsePoint": 2.7,
    "jockeyPoint": 4.99,
    "framePoint": 3.95,
    "timePoint": 4.31,
    "racePoint": 2.18,
    "roubdTotalPoint": 4.63
  },
  {
    "horseNumber": 5,
    "horseName": "オセアダイナスティ",
    "jockeyName": "川田",
    "totalPoint": 16.01,
    "horsePoint": 1.59,
    "jockeyPoint": 5,
    "framePoint": 3.95,
    "timePoint": 3.5,
    "racePoint": 3.66,
    "roubdTotalPoint": 4.32
  },
  {
    "horseNumber": 7,
    "horseName": "ロードシュトローム",
    "jockeyName": "木幡巧",
    "totalPoint": 15.24,
    "horsePoint": 2.56,
    "jockeyPoint": 3.44,
    "framePoint": 5,
    "timePoint": 3.27,
    "racePoint": 3.13,
    "roubdTotalPoint": 4.11
  },
  {
    "horseNumber": 11,
    "horseName": "ノースザワールド",
    "jockeyName": "松山",
    "totalPoint": 15.2,
    "horsePoint": 3.01,
    "jockeyPoint": 3.25,
    "framePoint": 3.95,
    "timePoint": 3.87,
    "racePoint": 3.46,
    "roubdTotalPoint": 4.1
  },
  {
    "horseNumber": 10,
    "horseName": "ルコルセール",
    "jockeyName": "石橋脩",
    "totalPoint": 15.05,
    "horsePoint": 2.02,
    "jockeyPoint": 3.86,
    "framePoint": 3.95,
    "timePoint": 3.79,
    "racePoint": 3.59,
    "roubdTotalPoint": 4.06
  },
  {
    "horseNumber": 13,
    "horseName": "タイセイアゲイン",
    "jockeyName": "松若",
    "totalPoint": 15.05,
    "horsePoint": 3.3,
    "jockeyPoint": 3.73,
    "framePoint": 3.95,
    "timePoint": 2.63,
    "racePoint": 3.17,
    "roubdTotalPoint": 4.06
  },
  {
    "horseNumber": 12,
    "horseName": "トモジャリア",
    "jockeyName": "三浦",
    "totalPoint": 14.94,
    "horsePoint": 1.94,
    "jockeyPoint": 4.05,
    "framePoint": 3.95,
    "timePoint": 2.83,
    "racePoint": 4.76,
    "roubdTotalPoint": 4.03
  },
  {
    "horseNumber": 15,
    "horseName": "メイショウムラクモ",
    "jockeyName": "柴田善",
    "totalPoint": 14.65,
    "horsePoint": 5,
    "jockeyPoint": 2.24,
    "framePoint": 1.84,
    "timePoint": 5,
    "racePoint": 2.6,
    "roubdTotalPoint": 3.95
  },
  {
    "horseNumber": 8,
    "horseName": "テイエムマジック",
    "jockeyName": "藤懸",
    "totalPoint": 13.92,
    "horsePoint": 1.34,
    "jockeyPoint": 3.12,
    "framePoint": 5,
    "timePoint": 3.58,
    "racePoint": 3.38,
    "roubdTotalPoint": 3.75
  },
  {
    "horseNumber": 14,
    "horseName": "スウィープザボード",
    "jockeyName": "津村",
    "totalPoint": 12.64,
    "horsePoint": 2.57,
    "jockeyPoint": 3.57,
    "framePoint": 1.84,
    "timePoint": 3.15,
    "racePoint": 2.69,
    "roubdTotalPoint": 3.41
  },
  {
    "horseNumber": 2,
    "horseName": "レプンカムイ",
    "jockeyName": "鮫島駿",
    "totalPoint": 12.55,
    "horsePoint": 0.96,
    "jockeyPoint": 3.99,
    "framePoint": 1.84,
    "timePoint": 3.93,
    "racePoint": 3.47,
    "roubdTotalPoint": 3.38
  },
  {
    "horseNumber": 6,
    "horseName": "スマートパルフェ",
    "jockeyName": "西村淳",
    "totalPoint": 12.16,
    "horsePoint": 1.35,
    "jockeyPoint": 3.64,
    "framePoint": 5,
    "timePoint": 1.45,
    "racePoint": 1.38,
    "roubdTotalPoint": 3.28
  },
  {
    "horseNumber": 3,
    "horseName": "タマモブトウカイ",
    "jockeyName": "永野",
    "totalPoint": 10.81,
    "horsePoint": 1.35,
    "jockeyPoint": 1.92,
    "framePoint": 1.84,
    "timePoint": 4.13,
    "racePoint": 5,
    "roubdTotalPoint": 2.91
  },
  {
    "horseNumber": 1,
    "horseName": "ラヴォラーレ",
    "jockeyName": "菅原明",
    "totalPoint": 10.11,
    "horsePoint": 2.21,
    "jockeyPoint": 3.03,
    "framePoint": 1.05,
    "timePoint": 1.65,
    "racePoint": 3.75,
    "roubdTotalPoint": 2.73
  }
]
const top_forecast_data = [
  {
    "horseNumber": 9,
    "horseName": "ハンディーズピーク",
    "jockeyName": "福永",
    "totalPoint": 12,
    "horsePoint": 5,
    "jockeyPoint": 5,
    "framePoint": 3.33,
    "timePoint": 2.91,
    "racePoint": 3.38,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 15,
    "horseName": "メイショウムラクモ",
    "jockeyName": "柴田善",
    "totalPoint": 8.15,
    "horsePoint": 4.38,
    "jockeyPoint": 2.69,
    "framePoint": 0,
    "timePoint": 5,
    "racePoint": 2.6,
    "roubdTotalPoint": 3.4
  },
  {
    "horseNumber": 7,
    "horseName": "ロードシュトローム",
    "jockeyName": "木幡巧",
    "totalPoint": 7.69,
    "horsePoint": 2.52,
    "jockeyPoint": 3.69,
    "framePoint": 5,
    "timePoint": 3.27,
    "racePoint": 3.13,
    "roubdTotalPoint": 3.2
  },
  {
    "horseNumber": 11,
    "horseName": "ノースザワールド",
    "jockeyName": "松山",
    "totalPoint": 7.29,
    "horsePoint": 2.33,
    "jockeyPoint": 3.54,
    "framePoint": 0,
    "timePoint": 3.87,
    "racePoint": 3.46,
    "roubdTotalPoint": 3.04
  },
  {
    "horseNumber": 10,
    "horseName": "ルコルセール",
    "jockeyName": "石橋脩",
    "totalPoint": 7.17,
    "horsePoint": 2.03,
    "jockeyPoint": 3.67,
    "framePoint": 0,
    "timePoint": 3.79,
    "racePoint": 3.59,
    "roubdTotalPoint": 2.99
  },
  {
    "horseNumber": 6,
    "horseName": "スマートパルフェ",
    "jockeyName": "西村淳",
    "totalPoint": 6.71,
    "horsePoint": 0.83,
    "jockeyPoint": 4.2,
    "framePoint": 5,
    "timePoint": 1.45,
    "racePoint": 1.38,
    "roubdTotalPoint": 2.8
  },
  {
    "horseNumber": 8,
    "horseName": "テイエムマジック",
    "jockeyName": "藤懸",
    "totalPoint": 6.71,
    "horsePoint": 1.59,
    "jockeyPoint": 3.66,
    "framePoint": 3.33,
    "timePoint": 3.58,
    "racePoint": 3.38,
    "roubdTotalPoint": 2.8
  },
  {
    "horseNumber": 5,
    "horseName": "オセアダイナスティ",
    "jockeyName": "川田",
    "totalPoint": 6.56,
    "horsePoint": 1.56,
    "jockeyPoint": 3.57,
    "framePoint": 1.67,
    "timePoint": 3.5,
    "racePoint": 3.66,
    "roubdTotalPoint": 2.73
  },
  {
    "horseNumber": 14,
    "horseName": "スウィープザボード",
    "jockeyName": "津村",
    "totalPoint": 5.95,
    "horsePoint": 1.68,
    "jockeyPoint": 3.05,
    "framePoint": 0,
    "timePoint": 3.15,
    "racePoint": 2.69,
    "roubdTotalPoint": 2.48
  },
  {
    "horseNumber": 4,
    "horseName": "ホッコーハナミチ",
    "jockeyName": "浜中",
    "totalPoint": 5.85,
    "horsePoint": 2.59,
    "jockeyPoint": 2.33,
    "framePoint": 1.67,
    "timePoint": 4.31,
    "racePoint": 2.18,
    "roubdTotalPoint": 2.44
  },
  {
    "horseNumber": 3,
    "horseName": "タマモブトウカイ",
    "jockeyName": "永野",
    "totalPoint": 5.84,
    "horsePoint": 0.84,
    "jockeyPoint": 3.57,
    "framePoint": 1.67,
    "timePoint": 4.13,
    "racePoint": 5,
    "roubdTotalPoint": 2.43
  },
  {
    "horseNumber": 12,
    "horseName": "トモジャリア",
    "jockeyName": "三浦",
    "totalPoint": 5.78,
    "horsePoint": 1.94,
    "jockeyPoint": 2.74,
    "framePoint": 3.33,
    "timePoint": 2.83,
    "racePoint": 4.76,
    "roubdTotalPoint": 2.41
  },
  {
    "horseNumber": 2,
    "horseName": "レプンカムイ",
    "jockeyName": "鮫島駿",
    "totalPoint": 5,
    "horsePoint": 0,
    "jockeyPoint": 3.57,
    "framePoint": 1.67,
    "timePoint": 3.93,
    "racePoint": 3.47,
    "roubdTotalPoint": 2.08
  },
  {
    "horseNumber": 13,
    "horseName": "タイセイアゲイン",
    "jockeyName": "松若",
    "totalPoint": 4.96,
    "horsePoint": 1.47,
    "jockeyPoint": 2.49,
    "framePoint": 3.33,
    "timePoint": 2.63,
    "racePoint": 3.17,
    "roubdTotalPoint": 2.07
  },
  {
    "horseNumber": 1,
    "horseName": "ラヴォラーレ",
    "jockeyName": "菅原明",
    "totalPoint": 4.01,
    "horsePoint": 1.94,
    "jockeyPoint": 1.48,
    "framePoint": 0,
    "timePoint": 1.65,
    "racePoint": 3.75,
    "roubdTotalPoint": 1.67
  }
]

export default Index;

