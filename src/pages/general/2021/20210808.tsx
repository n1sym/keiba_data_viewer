import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../components/Layout";
import {RaceForecastTable} from "../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第57回 CBC賞(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202110030211"

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
            <a><Text color="blue.400">{}</Text></a>
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
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 5,
    "horseName": "○外クーファウェヌス",
    "jockeyName": "酒井",
    "totalPoint": 18.84,
    "horsePoint": 5,
    "jockeyPoint": 3.42,
    "framePoint": 5,
    "timePoint": 4.15,
    "racePoint": 4.34,
    "roubdTotalPoint": 5,
    "oddsRank": 9,
    "rank": 7
  },
  {
    "horseNumber": 1,
    "horseName": "タイセイビジョン",
    "jockeyName": "川田",
    "totalPoint": 18.24,
    "horsePoint": 4.18,
    "jockeyPoint": 5,
    "framePoint": 1.84,
    "timePoint": 4.77,
    "racePoint": 4.44,
    "roubdTotalPoint": 4.84,
    "oddsRank": 4,
    "rank": 4
  },
  {
    "horseNumber": 9,
    "horseName": "ヨカヨカ",
    "jockeyName": "和田竜",
    "totalPoint": 17.2,
    "horsePoint": 3.94,
    "jockeyPoint": 3.56,
    "framePoint": 4.21,
    "timePoint": 4.15,
    "racePoint": 3.97,
    "roubdTotalPoint": 4.56,
    "oddsRank": 1,
    "rank": 5
  },
  {
    "horseNumber": 10,
    "horseName": "アウィルアウェイ",
    "jockeyName": "松山",
    "totalPoint": 16.27,
    "horsePoint": 2.91,
    "jockeyPoint": 3.42,
    "framePoint": 3.68,
    "timePoint": 4.53,
    "racePoint": 5,
    "roubdTotalPoint": 4.32,
    "oddsRank": 6,
    "rank": 3
  },
  {
    "horseNumber": 11,
    "horseName": "ピクシーナイト",
    "jockeyName": "福永",
    "totalPoint": 16.14,
    "horsePoint": 1.41,
    "jockeyPoint": 4.69,
    "framePoint": 3.68,
    "timePoint": 4.2,
    "racePoint": 4.65,
    "roubdTotalPoint": 4.28,
    "oddsRank": 2,
    "rank": 2
  },
  {
    "horseNumber": 4,
    "horseName": "○地クリノアリエル",
    "jockeyName": "富田",
    "totalPoint": 16.07,
    "horsePoint": 3.02,
    "jockeyPoint": 2.67,
    "framePoint": 5,
    "timePoint": 4.43,
    "racePoint": 4.41,
    "roubdTotalPoint": 4.26,
    "oddsRank": 7,
    "rank": 9
  },
  {
    "horseNumber": 8,
    "horseName": "メイショウチタン",
    "jockeyName": "松若",
    "totalPoint": 15.91,
    "horsePoint": 2.05,
    "jockeyPoint": 3.24,
    "framePoint": 4.21,
    "timePoint": 5,
    "racePoint": 4.9,
    "roubdTotalPoint": 4.22,
    "oddsRank": 5,
    "rank": 12
  },
  {
    "horseNumber": 3,
    "horseName": "○地ファストフォース",
    "jockeyName": "鮫島駿",
    "totalPoint": 15.67,
    "horsePoint": 2.99,
    "jockeyPoint": 3.01,
    "framePoint": 5,
    "timePoint": 3.71,
    "racePoint": 3.75,
    "roubdTotalPoint": 4.16,
    "oddsRank": 8,
    "rank": 1
  },
  {
    "horseNumber": 12,
    "horseName": "メイショウカリン",
    "jockeyName": "秋山真",
    "totalPoint": 15.34,
    "horsePoint": 1.63,
    "jockeyPoint": 4.09,
    "framePoint": 3.68,
    "timePoint": 4.04,
    "racePoint": 4.53,
    "roubdTotalPoint": 4.07,
    "oddsRank": 10,
    "rank": 10
  },
  {
    "horseNumber": 13,
    "horseName": "ノーワン",
    "jockeyName": "荻野極",
    "totalPoint": 13.47,
    "horsePoint": 3.48,
    "jockeyPoint": 2.14,
    "framePoint": 3.68,
    "timePoint": 2.72,
    "racePoint": 4.69,
    "roubdTotalPoint": 3.57,
    "oddsRank": 12,
    "rank": 6
  },
  {
    "horseNumber": 6,
    "horseName": "ビオグラフィー",
    "jockeyName": "藤岡康",
    "totalPoint": 11.8,
    "horsePoint": 0.76,
    "jockeyPoint": 3.35,
    "framePoint": 1.84,
    "timePoint": 4.3,
    "racePoint": 3.59,
    "roubdTotalPoint": 3.13,
    "oddsRank": 3,
    "rank": 11
  },
  {
    "horseNumber": 2,
    "horseName": "メイショウケイメイ",
    "jockeyName": "藤懸",
    "totalPoint": 11.6,
    "horsePoint": 1.94,
    "jockeyPoint": 2.52,
    "framePoint": 1.32,
    "timePoint": 4.28,
    "racePoint": 4.14,
    "roubdTotalPoint": 3.08,
    "oddsRank": 13,
    "rank": 8
  },
  {
    "horseNumber": 7,
    "horseName": "プリカジュール",
    "jockeyName": "角田",
    "totalPoint": 6.08,
    "horsePoint": 1.95,
    "jockeyPoint": 1.19,
    "framePoint": 1.84,
    "timePoint": 0.81,
    "racePoint": 0.85,
    "roubdTotalPoint": 1.61,
    "oddsRank": 11,
    "rank": 13
  }
]
const top_forecast_data = [
  {
    "horseNumber": 8,
    "horseName": "メイショウチタン",
    "jockeyName": "松若",
    "totalPoint": 18.69,
    "horsePoint": 4.24,
    "jockeyPoint": 3.21,
    "framePoint": 5,
    "timePoint": 5,
    "racePoint": 4.9,
    "roubdTotalPoint": 5,
    "oddsRank": 5,
    "rank": 12
  },
  {
    "horseNumber": 4,
    "horseName": "○地クリノアリエル",
    "jockeyName": "富田",
    "totalPoint": 16.69,
    "horsePoint": 4.85,
    "jockeyPoint": 3.29,
    "framePoint": 2.41,
    "timePoint": 4.43,
    "racePoint": 4.41,
    "roubdTotalPoint": 4.46,
    "oddsRank": 7,
    "rank": 9
  },
  {
    "horseNumber": 3,
    "horseName": "○地ファストフォース",
    "jockeyName": "鮫島駿",
    "totalPoint": 16.37,
    "horsePoint": 5,
    "jockeyPoint": 2.86,
    "framePoint": 3.62,
    "timePoint": 3.71,
    "racePoint": 3.75,
    "roubdTotalPoint": 4.38,
    "oddsRank": 8,
    "rank": 1
  },
  {
    "horseNumber": 12,
    "horseName": "メイショウカリン",
    "jockeyName": "秋山真",
    "totalPoint": 16.09,
    "horsePoint": 2.51,
    "jockeyPoint": 4.03,
    "framePoint": 3.62,
    "timePoint": 4.04,
    "racePoint": 4.53,
    "roubdTotalPoint": 4.3,
    "oddsRank": 10,
    "rank": 10
  },
  {
    "horseNumber": 1,
    "horseName": "タイセイビジョン",
    "jockeyName": "川田",
    "totalPoint": 15.61,
    "horsePoint": 2.3,
    "jockeyPoint": 4.82,
    "framePoint": 1.21,
    "timePoint": 4.77,
    "racePoint": 4.44,
    "roubdTotalPoint": 4.18,
    "oddsRank": 4,
    "rank": 4
  },
  {
    "horseNumber": 9,
    "horseName": "ヨカヨカ",
    "jockeyName": "和田竜",
    "totalPoint": 15.06,
    "horsePoint": 2.12,
    "jockeyPoint": 2.88,
    "framePoint": 5,
    "timePoint": 4.15,
    "racePoint": 3.97,
    "roubdTotalPoint": 4.03,
    "oddsRank": 1,
    "rank": 5
  },
  {
    "horseNumber": 11,
    "horseName": "ピクシーナイト",
    "jockeyName": "福永",
    "totalPoint": 14.36,
    "horsePoint": 1.17,
    "jockeyPoint": 5,
    "framePoint": 1.21,
    "timePoint": 4.2,
    "racePoint": 4.65,
    "roubdTotalPoint": 3.84,
    "oddsRank": 2,
    "rank": 2
  },
  {
    "horseNumber": 13,
    "horseName": "ノーワン",
    "jockeyName": "荻野極",
    "totalPoint": 14.11,
    "horsePoint": 4.05,
    "jockeyPoint": 2.22,
    "framePoint": 3.62,
    "timePoint": 2.72,
    "racePoint": 4.69,
    "roubdTotalPoint": 3.77,
    "oddsRank": 12,
    "rank": 6
  },
  {
    "horseNumber": 10,
    "horseName": "アウィルアウェイ",
    "jockeyName": "松山",
    "totalPoint": 14.08,
    "horsePoint": 3.06,
    "jockeyPoint": 3.16,
    "framePoint": 1.21,
    "timePoint": 4.53,
    "racePoint": 5,
    "roubdTotalPoint": 3.77,
    "oddsRank": 6,
    "rank": 3
  },
  {
    "horseNumber": 5,
    "horseName": "○外クーファウェヌス",
    "jockeyName": "酒井",
    "totalPoint": 13.98,
    "horsePoint": 2.81,
    "jockeyPoint": 2.99,
    "framePoint": 2.41,
    "timePoint": 4.15,
    "racePoint": 4.34,
    "roubdTotalPoint": 3.74,
    "oddsRank": 9,
    "rank": 7
  },
  {
    "horseNumber": 2,
    "horseName": "メイショウケイメイ",
    "jockeyName": "藤懸",
    "totalPoint": 10.79,
    "horsePoint": 1.86,
    "jockeyPoint": 2.75,
    "framePoint": 0,
    "timePoint": 4.28,
    "racePoint": 4.14,
    "roubdTotalPoint": 2.89,
    "oddsRank": 13,
    "rank": 8
  },
  {
    "horseNumber": 6,
    "horseName": "ビオグラフィー",
    "jockeyName": "藤岡康",
    "totalPoint": 10.59,
    "horsePoint": 1.67,
    "jockeyPoint": 2.89,
    "framePoint": 0,
    "timePoint": 4.3,
    "racePoint": 3.59,
    "roubdTotalPoint": 2.83,
    "oddsRank": 3,
    "rank": 11
  },
  {
    "horseNumber": 7,
    "horseName": "プリカジュール",
    "jockeyName": "角田",
    "totalPoint": 4.65,
    "horsePoint": 2.88,
    "jockeyPoint": 0.56,
    "framePoint": 0,
    "timePoint": 0.81,
    "racePoint": 0.85,
    "roubdTotalPoint": 1.24,
    "oddsRank": 11,
    "rank": 13
  }
]


export default Index;

