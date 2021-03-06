import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第73回 鳴尾記念(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202107040111"

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
    "title": "0603naruo",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "8-9-5"
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 11,
    "horseName": "クラージュゲリエ",
    "jockeyName": "松山",
    "totalPoint": 17.01,
    "horsePoint": 4.83,
    "jockeyPoint": 3.53,
    "framePoint": 5,
    "timePoint": 2.02,
    "racePoint": 4.06,
    "roubdTotalPoint": 5,
    "oddsRank": 4,
    "rank": 7
  },
  {
    "horseNumber": 9,
    "horseName": "ヒンドゥタイムズ",
    "jockeyName": "福永",
    "totalPoint": 16.92,
    "horsePoint": 4.91,
    "jockeyPoint": 4.58,
    "framePoint": 1.21,
    "timePoint": 4.41,
    "racePoint": 2.76,
    "roubdTotalPoint": 4.97,
    "oddsRank": 2,
    "rank": 11
  },
  {
    "horseNumber": 6,
    "horseName": "ブラヴァス",
    "jockeyName": "武豊",
    "totalPoint": 16.72,
    "horsePoint": 5,
    "jockeyPoint": 4,
    "framePoint": 2.24,
    "timePoint": 4.18,
    "racePoint": 2.47,
    "roubdTotalPoint": 4.91,
    "oddsRank": 6,
    "rank": 9
  },
  {
    "horseNumber": 7,
    "horseName": "サトノソルタス",
    "jockeyName": "川田",
    "totalPoint": 16.62,
    "horsePoint": 2.38,
    "jockeyPoint": 5,
    "framePoint": 2.24,
    "timePoint": 4.63,
    "racePoint": 4.37,
    "roubdTotalPoint": 4.89,
    "oddsRank": 3,
    "rank": 7
  },
  {
    "horseNumber": 12,
    "horseName": "アメリカズカップ",
    "jockeyName": "西村淳",
    "totalPoint": 15.45,
    "horsePoint": 3.29,
    "jockeyPoint": 3.69,
    "framePoint": 3.79,
    "timePoint": 3.46,
    "racePoint": 2.99,
    "roubdTotalPoint": 4.54,
    "oddsRank": 13,
    "rank": 13
  },
  {
    "horseNumber": 13,
    "horseName": "サンレイポケット",
    "jockeyName": "鮫島駿",
    "totalPoint": 14.88,
    "horsePoint": 2.47,
    "jockeyPoint": 2.42,
    "framePoint": 3.79,
    "timePoint": 5,
    "racePoint": 4.97,
    "roubdTotalPoint": 4.37,
    "oddsRank": 1,
    "rank": 6
  },
  {
    "horseNumber": 4,
    "horseName": "ペルシアンナイト",
    "jockeyName": "幸",
    "totalPoint": 14.28,
    "horsePoint": 3.32,
    "jockeyPoint": 3.14,
    "framePoint": 1.21,
    "timePoint": 4.49,
    "racePoint": 5,
    "roubdTotalPoint": 4.2,
    "oddsRank": 7,
    "rank": 4
  },
  {
    "horseNumber": 1,
    "horseName": "ブラストワンピース",
    "jockeyName": "岩田康",
    "totalPoint": 12.87,
    "horsePoint": 4.6,
    "jockeyPoint": 3.82,
    "framePoint": 0,
    "timePoint": 1.33,
    "racePoint": 4.64,
    "roubdTotalPoint": 3.78,
    "oddsRank": 5,
    "rank": 3
  },
  {
    "horseNumber": 8,
    "horseName": "ショウナンバルディ",
    "jockeyName": "池添",
    "totalPoint": 12.53,
    "horsePoint": 3.41,
    "jockeyPoint": 3.37,
    "framePoint": 1.21,
    "timePoint": 3.01,
    "racePoint": 2.57,
    "roubdTotalPoint": 3.68,
    "oddsRank": 9,
    "rank": 2
  },
  {
    "horseNumber": 2,
    "horseName": "アフリカンゴールド",
    "jockeyName": "藤岡康",
    "totalPoint": 12.37,
    "horsePoint": 1.48,
    "jockeyPoint": 3.59,
    "framePoint": 3.1,
    "timePoint": 2.5,
    "racePoint": 3.47,
    "roubdTotalPoint": 3.64,
    "oddsRank": 11,
    "rank": 10
  },
  {
    "horseNumber": 5,
    "horseName": "ワイプティアーズ",
    "jockeyName": "松若",
    "totalPoint": 12.22,
    "horsePoint": 2.24,
    "jockeyPoint": 3.01,
    "framePoint": 1.21,
    "timePoint": 4.28,
    "racePoint": 3.44,
    "roubdTotalPoint": 3.59,
    "oddsRank": 12,
    "rank": 5
  },
  {
    "horseNumber": 10,
    "horseName": "ペプチドオーキッド",
    "jockeyName": "富田",
    "totalPoint": 11.42,
    "horsePoint": 1.86,
    "jockeyPoint": 2.07,
    "framePoint": 5,
    "timePoint": 2.58,
    "racePoint": 1.5,
    "roubdTotalPoint": 3.36,
    "oddsRank": 10,
    "rank": 12
  },
  {
    "horseNumber": 3,
    "horseName": "○外ユニコーンライオン",
    "jockeyName": "坂井",
    "totalPoint": 10.11,
    "horsePoint": 1.75,
    "jockeyPoint": 3.21,
    "framePoint": 0.69,
    "timePoint": 1.99,
    "racePoint": 4.31,
    "roubdTotalPoint": 2.97,
    "oddsRank": 8,
    "rank": 1
  }
]
const top_forecast_data = [
  {
    "horseNumber": 12,
    "horseName": "アメリカズカップ",
    "jockeyName": "西村淳",
    "totalPoint": 18.15,
    "horsePoint": 3.19,
    "jockeyPoint": 5,
    "framePoint": 5,
    "timePoint": 3.46,
    "racePoint": 2.99,
    "roubdTotalPoint": 5,
    "oddsRank": 13,
    "rank": 13
  },
  {
    "horseNumber": 13,
    "horseName": "サンレイポケット",
    "jockeyName": "鮫島駿",
    "totalPoint": 14.93,
    "horsePoint": 3.37,
    "jockeyPoint": 1.12,
    "framePoint": 5,
    "timePoint": 5,
    "racePoint": 4.97,
    "roubdTotalPoint": 4.11,
    "oddsRank": 1,
    "rank": 6
  },
  {
    "horseNumber": 11,
    "horseName": "クラージュゲリエ",
    "jockeyName": "松山",
    "totalPoint": 13.94,
    "horsePoint": 5,
    "jockeyPoint": 2.99,
    "framePoint": 1.89,
    "timePoint": 2.02,
    "racePoint": 4.06,
    "roubdTotalPoint": 3.84,
    "oddsRank": 4,
    "rank": 7
  },
  {
    "horseNumber": 7,
    "horseName": "サトノソルタス",
    "jockeyName": "川田",
    "totalPoint": 13.85,
    "horsePoint": 2.75,
    "jockeyPoint": 3.66,
    "framePoint": 0.66,
    "timePoint": 4.63,
    "racePoint": 4.37,
    "roubdTotalPoint": 3.82,
    "oddsRank": 3,
    "rank": 7
  },
  {
    "horseNumber": 4,
    "horseName": "ペルシアンナイト",
    "jockeyName": "幸",
    "totalPoint": 13.62,
    "horsePoint": 3.73,
    "jockeyPoint": 3.07,
    "framePoint": 0,
    "timePoint": 4.49,
    "racePoint": 5,
    "roubdTotalPoint": 3.75,
    "oddsRank": 7,
    "rank": 4
  },
  {
    "horseNumber": 9,
    "horseName": "ヒンドゥタイムズ",
    "jockeyName": "福永",
    "totalPoint": 12.65,
    "horsePoint": 2.52,
    "jockeyPoint": 3.93,
    "framePoint": 0,
    "timePoint": 4.41,
    "racePoint": 2.76,
    "roubdTotalPoint": 3.48,
    "oddsRank": 2,
    "rank": 11
  },
  {
    "horseNumber": 6,
    "horseName": "ブラヴァス",
    "jockeyName": "武豊",
    "totalPoint": 11.5,
    "horsePoint": 3.1,
    "jockeyPoint": 2.53,
    "framePoint": 0.66,
    "timePoint": 4.18,
    "racePoint": 2.47,
    "roubdTotalPoint": 3.17,
    "oddsRank": 6,
    "rank": 9
  },
  {
    "horseNumber": 1,
    "horseName": "ブラストワンピース",
    "jockeyName": "岩田康",
    "totalPoint": 10.66,
    "horsePoint": 4.7,
    "jockeyPoint": 2.17,
    "framePoint": 0,
    "timePoint": 1.33,
    "racePoint": 4.64,
    "roubdTotalPoint": 2.94,
    "oddsRank": 5,
    "rank": 3
  },
  {
    "horseNumber": 2,
    "horseName": "アフリカンゴールド",
    "jockeyName": "藤岡康",
    "totalPoint": 10.22,
    "horsePoint": 2.54,
    "jockeyPoint": 2.36,
    "framePoint": 1.23,
    "timePoint": 2.5,
    "racePoint": 3.47,
    "roubdTotalPoint": 2.82,
    "oddsRank": 11,
    "rank": 10
  },
  {
    "horseNumber": 5,
    "horseName": "ワイプティアーズ",
    "jockeyName": "松若",
    "totalPoint": 10.17,
    "horsePoint": 0.99,
    "jockeyPoint": 3.13,
    "framePoint": 0,
    "timePoint": 4.28,
    "racePoint": 3.44,
    "roubdTotalPoint": 2.8,
    "oddsRank": 12,
    "rank": 5
  },
  {
    "horseNumber": 3,
    "horseName": "○外ユニコーンライオン",
    "jockeyName": "坂井",
    "totalPoint": 9.87,
    "horsePoint": 2.75,
    "jockeyPoint": 2.34,
    "framePoint": 0.66,
    "timePoint": 1.99,
    "racePoint": 4.31,
    "roubdTotalPoint": 2.72,
    "oddsRank": 8,
    "rank": 1
  },
  {
    "horseNumber": 8,
    "horseName": "ショウナンバルディ",
    "jockeyName": "池添",
    "totalPoint": 8.71,
    "horsePoint": 1.59,
    "jockeyPoint": 2.63,
    "framePoint": 0,
    "timePoint": 3.01,
    "racePoint": 2.57,
    "roubdTotalPoint": 2.4,
    "oddsRank": 9,
    "rank": 2
  },
  {
    "horseNumber": 10,
    "horseName": "ペプチドオーキッド",
    "jockeyName": "富田",
    "totalPoint": 7.87,
    "horsePoint": 1.52,
    "jockeyPoint": 1.55,
    "framePoint": 1.89,
    "timePoint": 2.58,
    "racePoint": 1.5,
    "roubdTotalPoint": 2.17,
    "oddsRank": 10,
    "rank": 12
  }
]

export default Index;

