import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";
import {RaceForecastTableG3tan} from "../../../../components/RaceForecastTableG3tan"

const title = "第57回 小倉記念(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202110040211"

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
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 8,
    "horseName": "ヴェロックス",
    "jockeyName": "浜中",
    "totalPoint": 12,
    "horsePoint": 5,
    "jockeyPoint": 5,
    "framePoint": 2.37,
    "timePoint": 4.29,
    "racePoint": 5,
    "roubdTotalPoint": 5,
    "oddsRank": 2,
    "rank": 7
  },
  {
    "horseNumber": 2,
    "horseName": "ファルコニア",
    "jockeyName": "川田",
    "totalPoint": 11.41,
    "horsePoint": 4.41,
    "jockeyPoint": 5,
    "framePoint": 2.89,
    "timePoint": 3.94,
    "racePoint": 3.41,
    "roubdTotalPoint": 4.75,
    "oddsRank": 1,
    "rank": 6
  },
  {
    "horseNumber": 10,
    "horseName": "スーパーフェザー",
    "jockeyName": "武豊",
    "totalPoint": 9.13,
    "horsePoint": 3.35,
    "jockeyPoint": 4.13,
    "framePoint": 5,
    "timePoint": 2.21,
    "racePoint": 1.98,
    "roubdTotalPoint": 3.8,
    "oddsRank": 8,
    "rank": 3
  },
  {
    "horseNumber": 9,
    "horseName": "モズナガレボシ",
    "jockeyName": "松山",
    "totalPoint": 8.74,
    "horsePoint": 2.96,
    "jockeyPoint": 4.13,
    "framePoint": 5,
    "timePoint": 3.36,
    "racePoint": 3.45,
    "roubdTotalPoint": 3.64,
    "oddsRank": 6,
    "rank": 1
  },
  {
    "horseNumber": 3,
    "horseName": "グランスピード",
    "jockeyName": "和田竜",
    "totalPoint": 6.55,
    "horsePoint": 3.36,
    "jockeyPoint": 2.28,
    "framePoint": 3.95,
    "timePoint": 2.65,
    "racePoint": 2.62,
    "roubdTotalPoint": 2.73,
    "oddsRank": 7,
    "rank": 9
  },
  {
    "horseNumber": 4,
    "horseName": "テーオーエナジー",
    "jockeyName": "藤岡康",
    "totalPoint": 6.09,
    "horsePoint": 1.06,
    "jockeyPoint": 3.59,
    "framePoint": 2.37,
    "timePoint": 3.72,
    "racePoint": 3.57,
    "roubdTotalPoint": 2.54,
    "oddsRank": 9,
    "rank": 8
  },
  {
    "horseNumber": 6,
    "horseName": "○地ダブルシャープ",
    "jockeyName": "酒井",
    "totalPoint": 5.77,
    "horsePoint": 2.27,
    "jockeyPoint": 2.5,
    "framePoint": 3.95,
    "timePoint": 3.89,
    "racePoint": 3.81,
    "roubdTotalPoint": 2.4,
    "oddsRank": 4,
    "rank": 4
  },
  {
    "horseNumber": 7,
    "horseName": "ヒュミドール",
    "jockeyName": "幸",
    "totalPoint": 5.41,
    "horsePoint": 1.15,
    "jockeyPoint": 3.04,
    "framePoint": 2.37,
    "timePoint": 4.51,
    "racePoint": 3.81,
    "roubdTotalPoint": 2.25,
    "oddsRank": 5,
    "rank": 2
  },
  {
    "horseNumber": 1,
    "horseName": "アールスター",
    "jockeyName": "長岡",
    "totalPoint": 4.75,
    "horsePoint": 2.62,
    "jockeyPoint": 1.52,
    "framePoint": 2.37,
    "timePoint": 5,
    "racePoint": 4.72,
    "roubdTotalPoint": 1.98,
    "oddsRank": "",
    "rank": "取消"
  },
  {
    "horseNumber": 5,
    "horseName": "ショウナンバルディ",
    "jockeyName": "岩田康",
    "totalPoint": 2.42,
    "horsePoint": 2.42,
    "jockeyPoint": 0,
    "framePoint": 3.95,
    "timePoint": 2.52,
    "racePoint": 3.33,
    "roubdTotalPoint": 1.01,
    "oddsRank": 3,
    "rank": 5
  }
]
const top_forecast_data = [
  {
    "horseNumber": 8,
    "horseName": "ヴェロックス",
    "jockeyName": "浜中",
    "totalPoint": 10.44,
    "horsePoint": 5,
    "jockeyPoint": 3.91,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2.5,
    "roubdTotalPoint": 5,
    "oddsRank": 2,
    "rank": 7
  },
  {
    "horseNumber": 2,
    "horseName": "ファルコニア",
    "jockeyName": "川田",
    "totalPoint": 10.02,
    "horsePoint": 0.67,
    "jockeyPoint": 5,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2.5,
    "roubdTotalPoint": 4.8,
    "oddsRank": 1,
    "rank": 6
  },
  {
    "horseNumber": 9,
    "horseName": "モズナガレボシ",
    "jockeyName": "松山",
    "totalPoint": 9.49,
    "horsePoint": 1.31,
    "jockeyPoint": 4.35,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2.5,
    "roubdTotalPoint": 4.55,
    "oddsRank": 6,
    "rank": 1
  },
  {
    "horseNumber": 1,
    "horseName": "アールスター",
    "jockeyName": "長岡",
    "totalPoint": 9.29,
    "horsePoint": 2.1,
    "jockeyPoint": 3.04,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 6,
    "roubdTotalPoint": 4.45,
    "oddsRank": "",
    "rank": "取消"
  },
  {
    "horseNumber": 3,
    "horseName": "グランスピード",
    "jockeyName": "和田竜",
    "totalPoint": 7.55,
    "horsePoint": 1.95,
    "jockeyPoint": 1.52,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 6.5,
    "roubdTotalPoint": 3.62,
    "oddsRank": 7,
    "rank": 9
  },
  {
    "horseNumber": 10,
    "horseName": "スーパーフェザー",
    "jockeyName": "武豊",
    "totalPoint": 7.06,
    "horsePoint": 2.01,
    "jockeyPoint": 1.09,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 6.5,
    "roubdTotalPoint": 3.38,
    "oddsRank": 8,
    "rank": 3
  },
  {
    "horseNumber": 4,
    "horseName": "テーオーエナジー",
    "jockeyName": "藤岡康",
    "totalPoint": 6.85,
    "horsePoint": 0.4,
    "jockeyPoint": 3.91,
    "oikiriPoint": 2,
    "stablePoint": 0,
    "timePoint": 0,
    "roubdTotalPoint": 3.28,
    "oddsRank": 9,
    "rank": 8
  },
  {
    "horseNumber": 6,
    "horseName": "○地ダブルシャープ",
    "jockeyName": "酒井",
    "totalPoint": 5.13,
    "horsePoint": 2.15,
    "jockeyPoint": 0.43,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2.5,
    "roubdTotalPoint": 2.46,
    "oddsRank": 4,
    "rank": 4
  },
  {
    "horseNumber": 5,
    "horseName": "ショウナンバルディ",
    "jockeyName": "岩田康",
    "totalPoint": 4.23,
    "horsePoint": 1.58,
    "jockeyPoint": 0,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2,
    "roubdTotalPoint": 2.03,
    "oddsRank": 3,
    "rank": 5
  },
  {
    "horseNumber": 7,
    "horseName": "ヒュミドール",
    "jockeyName": "幸",
    "totalPoint": 4.19,
    "horsePoint": 0.57,
    "jockeyPoint": 0.22,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 9,
    "roubdTotalPoint": 2.01,
    "oddsRank": 5,
    "rank": 2
  }
]

export default Index;

