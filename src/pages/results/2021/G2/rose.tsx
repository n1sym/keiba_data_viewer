import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第39回関西TVローズS(G2)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202107050411&rf=race_submenu"

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
    "date": "2021/09/18",
    "dirName": "2021/G2/rose",
    "raceName": "関西TVローズS(G2)",
    "tan": -1000,
    "tan2": -1000,
    "huku": 600,
    "wide3box": -1000,
    "wide5box": -570,
    "3huku5box": -1000,
    "1-2-3oddsRank": "4-12-1"
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 14,
    "horseName": "アールドヴィーヴル",
    "jockeyName": "松山",
    "totalPoint": 8.29,
    "horsePoint": 3.81,
    "jockeyPoint": 3.69,
    "framePoint": 5,
    "timePoint": 5,
    "racePoint": 4.81,
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 3
  },
  {
    "horseNumber": 13,
    "horseName": "コーディアル",
    "jockeyName": "鮫島駿",
    "totalPoint": 8.17,
    "horsePoint": 5,
    "jockeyPoint": 1.46,
    "framePoint": 5,
    "timePoint": 3.64,
    "racePoint": 3.02,
    "roubdTotalPoint": 4.93,
    "oddsRank": 8,
    "rank": 13
  },
  {
    "horseNumber": 5,
    "horseName": "クールキャット",
    "jockeyName": "ルメール",
    "totalPoint": 6.25,
    "horsePoint": 1.96,
    "jockeyPoint": 4.38,
    "framePoint": 2.38,
    "timePoint": 3.4,
    "racePoint": 3.18,
    "roubdTotalPoint": 3.77,
    "oddsRank": 3,
    "rank": 11
  },
  {
    "horseNumber": 17,
    "horseName": "オヌール",
    "jockeyName": "川田",
    "totalPoint": 6.14,
    "horsePoint": 1.53,
    "jockeyPoint": 5,
    "framePoint": 3.33,
    "timePoint": 1.7,
    "racePoint": 3.4,
    "roubdTotalPoint": 3.7,
    "oddsRank": 5,
    "rank": 6
  },
  {
    "horseNumber": 12,
    "horseName": "アンドヴァラナウト",
    "jockeyName": "福永",
    "totalPoint": 5.64,
    "horsePoint": 2.05,
    "jockeyPoint": 3.46,
    "framePoint": 2.86,
    "timePoint": 4.28,
    "racePoint": 5,
    "roubdTotalPoint": 3.4,
    "oddsRank": 4,
    "rank": 1
  },
  {
    "horseNumber": 4,
    "horseName": "スパークル",
    "jockeyName": "藤岡佑",
    "totalPoint": 4.72,
    "horsePoint": 2.36,
    "jockeyPoint": 1.77,
    "framePoint": 2.38,
    "timePoint": 4.28,
    "racePoint": 3.92,
    "roubdTotalPoint": 2.85,
    "oddsRank": 11,
    "rank": 10
  },
  {
    "horseNumber": 2,
    "horseName": "エンスージアズム",
    "jockeyName": "岩田望",
    "totalPoint": 4.52,
    "horsePoint": 1.69,
    "jockeyPoint": 2.69,
    "framePoint": 2.38,
    "timePoint": 3.47,
    "racePoint": 2.16,
    "roubdTotalPoint": 2.73,
    "oddsRank": 13,
    "rank": 7
  },
  {
    "horseNumber": 16,
    "horseName": "タガノディアーナ",
    "jockeyName": "和田竜",
    "totalPoint": 4.5,
    "horsePoint": 1.76,
    "jockeyPoint": 2.54,
    "framePoint": 3.33,
    "timePoint": 4.08,
    "racePoint": 4.01,
    "roubdTotalPoint": 2.71,
    "oddsRank": 6,
    "rank": 5
  },
  {
    "horseNumber": 7,
    "horseName": "ストゥーティ",
    "jockeyName": "吉田隼",
    "totalPoint": 4.39,
    "horsePoint": 1.99,
    "jockeyPoint": 2,
    "framePoint": 2.86,
    "timePoint": 3.87,
    "racePoint": 3.02,
    "roubdTotalPoint": 2.65,
    "oddsRank": 7,
    "rank": 4
  },
  {
    "horseNumber": 9,
    "horseName": "タガノパッション",
    "jockeyName": "岩田康",
    "totalPoint": 4.28,
    "horsePoint": 1.78,
    "jockeyPoint": 2.23,
    "framePoint": 2.86,
    "timePoint": 4.11,
    "racePoint": 4.63,
    "roubdTotalPoint": 2.58,
    "oddsRank": 2,
    "rank": 12
  },
  {
    "horseNumber": 11,
    "horseName": "プリュムドール",
    "jockeyName": "武豊",
    "totalPoint": 4.04,
    "horsePoint": 1.48,
    "jockeyPoint": 2.46,
    "framePoint": 2.86,
    "timePoint": 3.43,
    "racePoint": 3.64,
    "roubdTotalPoint": 2.44,
    "oddsRank": 10,
    "rank": 9
  },
  {
    "horseNumber": 15,
    "horseName": "オパールムーン",
    "jockeyName": "横山典",
    "totalPoint": 3.74,
    "horsePoint": 1.97,
    "jockeyPoint": 1.23,
    "framePoint": 5,
    "timePoint": 4.45,
    "racePoint": 2.84,
    "roubdTotalPoint": 2.26,
    "oddsRank": 15,
    "rank": 14
  },
  {
    "horseNumber": 10,
    "horseName": "エイシンヒテン",
    "jockeyName": "松若",
    "totalPoint": 3.44,
    "horsePoint": 2.06,
    "jockeyPoint": 0.69,
    "framePoint": 2.86,
    "timePoint": 4.42,
    "racePoint": 4.63,
    "roubdTotalPoint": 2.07,
    "oddsRank": 12,
    "rank": 2
  },
  {
    "horseNumber": 1,
    "horseName": "イリマ",
    "jockeyName": "幸",
    "totalPoint": 3.38,
    "horsePoint": 1.45,
    "jockeyPoint": 1.69,
    "framePoint": 2.38,
    "timePoint": 3.12,
    "racePoint": 3.27,
    "roubdTotalPoint": 2.04,
    "oddsRank": 9,
    "rank": 17
  },
  {
    "horseNumber": 18,
    "horseName": "レアシャンパーニュ",
    "jockeyName": "浜中",
    "totalPoint": 3.26,
    "horsePoint": 0.83,
    "jockeyPoint": 2.62,
    "framePoint": 3.33,
    "timePoint": 3.43,
    "racePoint": 3.07,
    "roubdTotalPoint": 1.97,
    "oddsRank": 14,
    "rank": 16
  },
  {
    "horseNumber": 6,
    "horseName": "メイショウオニユリ",
    "jockeyName": "池添",
    "totalPoint": 3.17,
    "horsePoint": 0.81,
    "jockeyPoint": 2.54,
    "framePoint": 2.38,
    "timePoint": 2.65,
    "racePoint": 2.24,
    "roubdTotalPoint": 1.91,
    "oddsRank": 16,
    "rank": 15
  },
  {
    "horseNumber": 3,
    "horseName": "アイコンテーラー",
    "jockeyName": "亀田",
    "totalPoint": 1.23,
    "horsePoint": 0.35,
    "jockeyPoint": 0.92,
    "framePoint": 2.38,
    "timePoint": 2.2,
    "racePoint": 3.15,
    "roubdTotalPoint": 0.74,
    "oddsRank": 17,
    "rank": 8
  },
  {
    "horseNumber": 8,
    "horseName": "オータムヒロイン",
    "jockeyName": "古川吉",
    "totalPoint": 1.02,
    "horsePoint": 0.29,
    "jockeyPoint": 0.77,
    "framePoint": 2.86,
    "timePoint": 2.24,
    "racePoint": 1.23,
    "roubdTotalPoint": 0.62,
    "oddsRank": 18,
    "rank": 18
  }
]
const top_forecast_data = [
  {
    "horseNumber": 14,
    "horseName": "アールドヴィーヴル",
    "jockeyName": "松山",
    "totalPoint": 7.73,
    "horsePoint": 4.14,
    "jockeyPoint": 3.59,
    "framePoint": 5,
    "timePoint": 5,
    "racePoint": 4.81,
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 3
  },
  {
    "horseNumber": 15,
    "horseName": "オパールムーン",
    "jockeyName": "横山典",
    "totalPoint": 7.5,
    "horsePoint": 5,
    "jockeyPoint": 2.5,
    "framePoint": 5,
    "timePoint": 4.45,
    "racePoint": 2.84,
    "roubdTotalPoint": 4.85,
    "oddsRank": 15,
    "rank": 14
  },
  {
    "horseNumber": 17,
    "horseName": "オヌール",
    "jockeyName": "川田",
    "totalPoint": 6.76,
    "horsePoint": 1.76,
    "jockeyPoint": 5,
    "framePoint": 3.33,
    "timePoint": 1.7,
    "racePoint": 3.4,
    "roubdTotalPoint": 4.37,
    "oddsRank": 5,
    "rank": 6
  },
  {
    "horseNumber": 7,
    "horseName": "ストゥーティ",
    "jockeyName": "吉田隼",
    "totalPoint": 6.5,
    "horsePoint": 4.94,
    "jockeyPoint": 1.56,
    "framePoint": 5,
    "timePoint": 3.87,
    "racePoint": 3.02,
    "roubdTotalPoint": 4.2,
    "oddsRank": 7,
    "rank": 4
  },
  {
    "horseNumber": 9,
    "horseName": "タガノパッション",
    "jockeyName": "岩田康",
    "totalPoint": 6.1,
    "horsePoint": 4.85,
    "jockeyPoint": 1.25,
    "framePoint": 3.33,
    "timePoint": 4.11,
    "racePoint": 4.63,
    "roubdTotalPoint": 3.95,
    "oddsRank": 2,
    "rank": 12
  },
  {
    "horseNumber": 5,
    "horseName": "クールキャット",
    "jockeyName": "ルメール",
    "totalPoint": 6.04,
    "horsePoint": 2.45,
    "jockeyPoint": 3.59,
    "framePoint": 1.67,
    "timePoint": 3.4,
    "racePoint": 3.18,
    "roubdTotalPoint": 3.91,
    "oddsRank": 3,
    "rank": 11
  },
  {
    "horseNumber": 2,
    "horseName": "エンスージアズム",
    "jockeyName": "岩田望",
    "totalPoint": 5.76,
    "horsePoint": 3.26,
    "jockeyPoint": 2.5,
    "framePoint": 1.67,
    "timePoint": 3.47,
    "racePoint": 2.16,
    "roubdTotalPoint": 3.73,
    "oddsRank": 13,
    "rank": 7
  },
  {
    "horseNumber": 4,
    "horseName": "スパークル",
    "jockeyName": "藤岡佑",
    "totalPoint": 5.53,
    "horsePoint": 4.12,
    "jockeyPoint": 1.41,
    "framePoint": 1.67,
    "timePoint": 4.28,
    "racePoint": 3.92,
    "roubdTotalPoint": 3.58,
    "oddsRank": 11,
    "rank": 10
  },
  {
    "horseNumber": 12,
    "horseName": "アンドヴァラナウト",
    "jockeyName": "福永",
    "totalPoint": 5.44,
    "horsePoint": 2.94,
    "jockeyPoint": 2.5,
    "framePoint": 1.67,
    "timePoint": 4.28,
    "racePoint": 5,
    "roubdTotalPoint": 3.52,
    "oddsRank": 4,
    "rank": 1
  },
  {
    "horseNumber": 10,
    "horseName": "エイシンヒテン",
    "jockeyName": "松若",
    "totalPoint": 4.93,
    "horsePoint": 4.46,
    "jockeyPoint": 0.47,
    "framePoint": 3.33,
    "timePoint": 4.42,
    "racePoint": 4.63,
    "roubdTotalPoint": 3.19,
    "oddsRank": 12,
    "rank": 2
  },
  {
    "horseNumber": 16,
    "horseName": "タガノディアーナ",
    "jockeyName": "和田竜",
    "totalPoint": 4.42,
    "horsePoint": 3.33,
    "jockeyPoint": 1.09,
    "framePoint": 3.33,
    "timePoint": 4.08,
    "racePoint": 4.01,
    "roubdTotalPoint": 2.86,
    "oddsRank": 6,
    "rank": 5
  },
  {
    "horseNumber": 11,
    "horseName": "プリュムドール",
    "jockeyName": "武豊",
    "totalPoint": 4.24,
    "horsePoint": 2.36,
    "jockeyPoint": 1.88,
    "framePoint": 1.67,
    "timePoint": 3.43,
    "racePoint": 3.64,
    "roubdTotalPoint": 2.74,
    "oddsRank": 10,
    "rank": 9
  },
  {
    "horseNumber": 1,
    "horseName": "イリマ",
    "jockeyName": "幸",
    "totalPoint": 2.73,
    "horsePoint": 2.1,
    "jockeyPoint": 0.63,
    "framePoint": 1.67,
    "timePoint": 3.12,
    "racePoint": 3.27,
    "roubdTotalPoint": 1.77,
    "oddsRank": 9,
    "rank": 17
  },
  {
    "horseNumber": 13,
    "horseName": "コーディアル",
    "jockeyName": "鮫島駿",
    "totalPoint": 2.68,
    "horsePoint": 2.21,
    "jockeyPoint": 0.47,
    "framePoint": 5,
    "timePoint": 3.64,
    "racePoint": 3.02,
    "roubdTotalPoint": 1.73,
    "oddsRank": 8,
    "rank": 13
  },
  {
    "horseNumber": 18,
    "horseName": "レアシャンパーニュ",
    "jockeyName": "浜中",
    "totalPoint": 1.45,
    "horsePoint": 0.98,
    "jockeyPoint": 0.47,
    "framePoint": 3.33,
    "timePoint": 3.43,
    "racePoint": 3.07,
    "roubdTotalPoint": 0.94,
    "oddsRank": 14,
    "rank": 16
  },
  {
    "horseNumber": 6,
    "horseName": "メイショウオニユリ",
    "jockeyName": "池添",
    "totalPoint": 0.98,
    "horsePoint": 0.98,
    "jockeyPoint": 0,
    "framePoint": 1.67,
    "timePoint": 2.65,
    "racePoint": 2.24,
    "roubdTotalPoint": 0.63,
    "oddsRank": 16,
    "rank": 15
  },
  {
    "horseNumber": 3,
    "horseName": "アイコンテーラー",
    "jockeyName": "亀田",
    "totalPoint": 0.12,
    "horsePoint": 0.12,
    "jockeyPoint": 0,
    "framePoint": 1.67,
    "timePoint": 2.2,
    "racePoint": 3.15,
    "roubdTotalPoint": 0.08,
    "oddsRank": 17,
    "rank": 8
  },
  {
    "horseNumber": 8,
    "horseName": "オータムヒロイン",
    "jockeyName": "古川吉",
    "totalPoint": 0,
    "horsePoint": 0,
    "jockeyPoint": 0,
    "framePoint": 5,
    "timePoint": 2.24,
    "racePoint": 1.23,
    "roubdTotalPoint": 0,
    "oddsRank": 18,
    "rank": 18
  }
]

export default Index;
