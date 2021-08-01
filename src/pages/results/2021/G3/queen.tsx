import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import {RaceForecastTableG3tan} from "../../../../components/RaceForecastTableG3tan"
import Link from "next/link";
import Head from "next/head";

const title = "第69回クイーンステークス(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202102011011"

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
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 6,
    "horseName": "マジックキャッスル",
    "jockeyName": "戸崎圭",
    "totalPoint": 19.65,
    "horsePoint": 5,
    "jockeyPoint": 3.66,
    "framePoint": 4.41,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 2
  },
  {
    "horseNumber": 12,
    "horseName": "シゲルピンクダイヤ",
    "jockeyName": "和田竜",
    "totalPoint": 17.91,
    "horsePoint": 2.98,
    "jockeyPoint": 4.72,
    "framePoint": 3.82,
    "timePoint": 4.19,
    "racePoint": 4.79,
    "roubdTotalPoint": 4.56,
    "oddsRank": 4,
    "rank": 10
  },
  {
    "horseNumber": 5,
    "horseName": "ドナアトラエンテ",
    "jockeyName": "川田",
    "totalPoint": 17.51,
    "horsePoint": 1.78,
    "jockeyPoint": 5,
    "framePoint": 4.41,
    "timePoint": 4.1,
    "racePoint": 4.81,
    "roubdTotalPoint": 4.46,
    "oddsRank": 2,
    "rank": 11
  },
  {
    "horseNumber": 9,
    "horseName": "テルツェット",
    "jockeyName": "ルメール",
    "totalPoint": 16.58,
    "horsePoint": 3.12,
    "jockeyPoint": 4.78,
    "framePoint": 2.06,
    "timePoint": 4.53,
    "racePoint": 3.73,
    "roubdTotalPoint": 4.22,
    "oddsRank": 3,
    "rank": 1
  },
  {
    "horseNumber": 3,
    "horseName": "フェアリーポルカ",
    "jockeyName": "三浦",
    "totalPoint": 16.17,
    "horsePoint": 2.76,
    "jockeyPoint": 3.49,
    "framePoint": 4.41,
    "timePoint": 3.93,
    "racePoint": 4.63,
    "roubdTotalPoint": 4.11,
    "oddsRank": 6,
    "rank": 4
  },
  {
    "horseNumber": 8,
    "horseName": "ウインマイティー",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 15.63,
    "horsePoint": 1.88,
    "jockeyPoint": 4.34,
    "framePoint": 3.82,
    "timePoint": 3.67,
    "racePoint": 4.2,
    "roubdTotalPoint": 3.98,
    "oddsRank": 9,
    "rank": 8
  },
  {
    "horseNumber": 2,
    "horseName": "イカット",
    "jockeyName": "横山武",
    "totalPoint": 13.37,
    "horsePoint": 1.21,
    "jockeyPoint": 3.01,
    "framePoint": 5,
    "timePoint": 3.08,
    "racePoint": 3.71,
    "roubdTotalPoint": 3.4,
    "oddsRank": 5,
    "rank": 7
  },
  {
    "horseNumber": 10,
    "horseName": "○外サトノセシル",
    "jockeyName": "大野",
    "totalPoint": 12.21,
    "horsePoint": 1.38,
    "jockeyPoint": 3.36,
    "framePoint": 2.06,
    "timePoint": 3.65,
    "racePoint": 3.9,
    "roubdTotalPoint": 3.11,
    "oddsRank": 8,
    "rank": 3
  },
  {
    "horseNumber": 11,
    "horseName": "シャムロックヒル",
    "jockeyName": "団野",
    "totalPoint": 11.59,
    "horsePoint": 1,
    "jockeyPoint": 2.87,
    "framePoint": 3.82,
    "timePoint": 2.73,
    "racePoint": 3.34,
    "roubdTotalPoint": 2.95,
    "oddsRank": 10,
    "rank": 9
  },
  {
    "horseNumber": 4,
    "horseName": "ローザノワール",
    "jockeyName": "国分恭",
    "totalPoint": 11.31,
    "horsePoint": 0.88,
    "jockeyPoint": 3.2,
    "framePoint": 3.24,
    "timePoint": 2.77,
    "racePoint": 2.85,
    "roubdTotalPoint": 2.88,
    "oddsRank": 12,
    "rank": 6
  },
  {
    "horseNumber": 1,
    "horseName": "クラヴァシュドール",
    "jockeyName": "藤岡佑",
    "totalPoint": 10.79,
    "horsePoint": 2.04,
    "jockeyPoint": 2.88,
    "framePoint": 2.65,
    "timePoint": 1.18,
    "racePoint": 4.14,
    "roubdTotalPoint": 2.75,
    "oddsRank": 7,
    "rank": 5
  },
  {
    "horseNumber": 7,
    "horseName": "マイエンフェルト",
    "jockeyName": "川又",
    "totalPoint": 10.61,
    "horsePoint": 2.42,
    "jockeyPoint": 2.29,
    "framePoint": 3.82,
    "timePoint": 1.64,
    "racePoint": 1.53,
    "roubdTotalPoint": 2.7,
    "oddsRank": 11,
    "rank": 12
  }
]
const top_forecast_data = [
  {
    "horseNumber": 5,
    "horseName": "ドナアトラエンテ",
    "jockeyName": "川田",
    "totalPoint": 12.28,
    "horsePoint": 0.69,
    "jockeyPoint": 5,
    "oikiriPoint": 4,
    "stablePoint": 4,
    "timePoint": 0,
    "roubdTotalPoint": 5,
    "oddsRank": 2,
    "rank": 11
  },
  {
    "horseNumber": 6,
    "horseName": "マジックキャッスル",
    "jockeyName": "戸崎圭",
    "totalPoint": 11.26,
    "horsePoint": 5,
    "jockeyPoint": 1.88,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 10,
    "roubdTotalPoint": 4.58,
    "oddsRank": 1,
    "rank": 2
  },
  {
    "horseNumber": 8,
    "horseName": "ウインマイティー",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 9.43,
    "horsePoint": 1.44,
    "jockeyPoint": 3.13,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 7,
    "roubdTotalPoint": 3.84,
    "oddsRank": 9,
    "rank": 8
  },
  {
    "horseNumber": 9,
    "horseName": "テルツェット",
    "jockeyName": "ルメール",
    "totalPoint": 9.27,
    "horsePoint": 0.41,
    "jockeyPoint": 3.42,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 3.77,
    "oddsRank": 3,
    "rank": 1
  },
  {
    "horseNumber": 12,
    "horseName": "シゲルピンクダイヤ",
    "jockeyName": "和田竜",
    "totalPoint": 8.35,
    "horsePoint": 1.81,
    "jockeyPoint": 2.19,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 3.4,
    "oddsRank": 4,
    "rank": 10
  },
  {
    "horseNumber": 2,
    "horseName": "イカット",
    "jockeyName": "横山武",
    "totalPoint": 7.55,
    "horsePoint": 0.98,
    "jockeyPoint": 1.8,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 3.07,
    "oddsRank": 5,
    "rank": 7
  },
  {
    "horseNumber": 3,
    "horseName": "フェアリーポルカ",
    "jockeyName": "三浦",
    "totalPoint": 7.36,
    "horsePoint": 1.12,
    "jockeyPoint": 1.76,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 6,
    "roubdTotalPoint": 3,
    "oddsRank": 6,
    "rank": 4
  },
  {
    "horseNumber": 7,
    "horseName": "マイエンフェルト",
    "jockeyName": "川又",
    "totalPoint": 7.12,
    "horsePoint": 2.11,
    "jockeyPoint": 2.73,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 2.9,
    "oddsRank": 11,
    "rank": 12
  },
  {
    "horseNumber": 10,
    "horseName": "○外サトノセシル",
    "jockeyName": "大野",
    "totalPoint": 6.8,
    "horsePoint": 0.26,
    "jockeyPoint": 1.41,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 2.77,
    "oddsRank": 8,
    "rank": 3
  },
  {
    "horseNumber": 11,
    "horseName": "シャムロックヒル",
    "jockeyName": "団野",
    "totalPoint": 6.34,
    "horsePoint": 0.61,
    "jockeyPoint": 2.58,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 2.58,
    "oddsRank": 10,
    "rank": 9
  },
  {
    "horseNumber": 4,
    "horseName": "ローザノワール",
    "jockeyName": "国分恭",
    "totalPoint": 6.32,
    "horsePoint": 0.21,
    "jockeyPoint": 2.7,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 2.57,
    "oddsRank": 12,
    "rank": 6
  },
  {
    "horseNumber": 1,
    "horseName": "クラヴァシュドール",
    "jockeyName": "藤岡佑",
    "totalPoint": 5.26,
    "horsePoint": 0.89,
    "jockeyPoint": 1.59,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 2.14,
    "oddsRank": 7,
    "rank": 5
  }
]

export default Index;

