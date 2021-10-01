import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第69回神戸新聞杯(G2)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202107050711&rf=race_submenu"

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
    "date": "2021/09/26",
    "dirName": "2021/G2/koube",
    "raceName": "神戸新聞杯(G2)",
    "tan": -1000,
    "tan2": 500,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "2-5-8"
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 10,
    "horseName": "シャフリヤール",
    "jockeyName": "福永",
    "totalPoint": 11,
    "horsePoint": 5,
    "jockeyPoint": 5,
    "framePoint": 4.05,
    "timePoint": 4.95,
    "racePoint": 5,
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 4
  },
  {
    "horseNumber": 5,
    "horseName": "ステラヴェローチェ",
    "jockeyName": "吉田隼",
    "totalPoint": 7.38,
    "horsePoint": 3.92,
    "jockeyPoint": 2.37,
    "framePoint": 5,
    "timePoint": 5,
    "racePoint": 4.48,
    "roubdTotalPoint": 3.35,
    "oddsRank": 2,
    "rank": 1
  },
  {
    "horseNumber": 3,
    "horseName": "キングストンボーイ",
    "jockeyName": "ルメール",
    "totalPoint": 5.44,
    "horsePoint": 1.18,
    "jockeyPoint": 4.74,
    "framePoint": 2.86,
    "timePoint": 2.92,
    "racePoint": 3.91,
    "roubdTotalPoint": 2.47,
    "oddsRank": 3,
    "rank": 5
  },
  {
    "horseNumber": 1,
    "horseName": "セファーラジエル",
    "jockeyName": "鮫島駿",
    "totalPoint": 4.44,
    "horsePoint": 2.07,
    "jockeyPoint": 1.93,
    "framePoint": 2.38,
    "timePoint": 3.36,
    "racePoint": 2.92,
    "roubdTotalPoint": 2.02,
    "oddsRank": 7,
    "rank": 7
  },
  {
    "horseNumber": 2,
    "horseName": "ワンダフルタウン",
    "jockeyName": "和田竜",
    "totalPoint": 4.14,
    "horsePoint": 2,
    "jockeyPoint": 1.67,
    "framePoint": 1.67,
    "timePoint": 4.15,
    "racePoint": 4.55,
    "roubdTotalPoint": 1.88,
    "oddsRank": 4,
    "rank": 8
  },
  {
    "horseNumber": 4,
    "horseName": "モンテディオ",
    "jockeyName": "池添",
    "totalPoint": 4.11,
    "horsePoint": 1.43,
    "jockeyPoint": 2.63,
    "framePoint": 1.67,
    "timePoint": 3.95,
    "racePoint": 2.98,
    "roubdTotalPoint": 1.87,
    "oddsRank": 8,
    "rank": 3
  },
  {
    "horseNumber": 7,
    "horseName": "レッドジェネシス",
    "jockeyName": "藤岡康",
    "totalPoint": 3.83,
    "horsePoint": 0.88,
    "jockeyPoint": 3.25,
    "framePoint": 2.86,
    "timePoint": 4.47,
    "racePoint": 4.72,
    "roubdTotalPoint": 1.74,
    "oddsRank": 5,
    "rank": 2
  },
  {
    "horseNumber": 6,
    "horseName": "シゲルソウサイ",
    "jockeyName": "岩田康",
    "totalPoint": 2.56,
    "horsePoint": 0.83,
    "jockeyPoint": 1.75,
    "framePoint": 3.33,
    "timePoint": 1.46,
    "racePoint": 2.26,
    "roubdTotalPoint": 1.16,
    "oddsRank": 9,
    "rank": 10
  },
  {
    "horseNumber": 8,
    "horseName": "イクスプロージョン",
    "jockeyName": "松山",
    "totalPoint": 2.56,
    "horsePoint": 0.83,
    "jockeyPoint": 1.75,
    "framePoint": 2.86,
    "timePoint": 3.04,
    "racePoint": 3.4,
    "roubdTotalPoint": 1.16,
    "oddsRank": 6,
    "rank": 6
  },
  {
    "horseNumber": 9,
    "horseName": "テイエムタツマキ",
    "jockeyName": "富田",
    "totalPoint": 2.06,
    "horsePoint": 0.77,
    "jockeyPoint": 1.23,
    "framePoint": 4.05,
    "timePoint": 1.93,
    "racePoint": 1.04,
    "roubdTotalPoint": 0.94,
    "oddsRank": 10,
    "rank": 9
  }
]
const top_forecast_data = [
  {
    "horseNumber": 10,
    "horseName": "シャフリヤール",
    "jockeyName": "福永",
    "totalPoint": 11.61,
    "horsePoint": 5,
    "jockeyPoint": 4.72,
    "framePoint": 3.62,
    "timePoint": 4.95,
    "racePoint": 5,
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 4
  },
  {
    "horseNumber": 5,
    "horseName": "ステラヴェローチェ",
    "jockeyName": "吉田隼",
    "totalPoint": 8.21,
    "horsePoint": 3.16,
    "jockeyPoint": 3.61,
    "framePoint": 3.62,
    "timePoint": 5,
    "racePoint": 4.48,
    "roubdTotalPoint": 3.54,
    "oddsRank": 2,
    "rank": 1
  },
  {
    "horseNumber": 3,
    "horseName": "キングストンボーイ",
    "jockeyName": "ルメール",
    "totalPoint": 7.53,
    "horsePoint": 0.53,
    "jockeyPoint": 5,
    "framePoint": 5,
    "timePoint": 2.92,
    "racePoint": 3.91,
    "roubdTotalPoint": 3.24,
    "oddsRank": 3,
    "rank": 5
  },
  {
    "horseNumber": 1,
    "horseName": "セファーラジエル",
    "jockeyName": "鮫島駿",
    "totalPoint": 5.21,
    "horsePoint": 0.93,
    "jockeyPoint": 3.06,
    "framePoint": 1.21,
    "timePoint": 3.36,
    "racePoint": 2.92,
    "roubdTotalPoint": 2.24,
    "oddsRank": 7,
    "rank": 7
  },
  {
    "horseNumber": 7,
    "horseName": "レッドジェネシス",
    "jockeyName": "藤岡康",
    "totalPoint": 4.97,
    "horsePoint": 0.31,
    "jockeyPoint": 3.33,
    "framePoint": 1.21,
    "timePoint": 4.47,
    "racePoint": 4.72,
    "roubdTotalPoint": 2.14,
    "oddsRank": 5,
    "rank": 2
  },
  {
    "horseNumber": 8,
    "horseName": "イクスプロージョン",
    "jockeyName": "松山",
    "totalPoint": 4.88,
    "horsePoint": 0.22,
    "jockeyPoint": 3.33,
    "framePoint": 1.21,
    "timePoint": 3.04,
    "racePoint": 3.4,
    "roubdTotalPoint": 2.1,
    "oddsRank": 6,
    "rank": 6
  },
  {
    "horseNumber": 4,
    "horseName": "モンテディオ",
    "jockeyName": "池添",
    "totalPoint": 4.37,
    "horsePoint": 0.48,
    "jockeyPoint": 2.78,
    "framePoint": 1.21,
    "timePoint": 3.95,
    "racePoint": 2.98,
    "roubdTotalPoint": 1.88,
    "oddsRank": 8,
    "rank": 3
  },
  {
    "horseNumber": 6,
    "horseName": "シゲルソウサイ",
    "jockeyName": "岩田康",
    "totalPoint": 4.08,
    "horsePoint": 0.19,
    "jockeyPoint": 2.78,
    "framePoint": 1.21,
    "timePoint": 1.46,
    "racePoint": 2.26,
    "roubdTotalPoint": 1.76,
    "oddsRank": 9,
    "rank": 10
  },
  {
    "horseNumber": 9,
    "horseName": "テイエムタツマキ",
    "jockeyName": "富田",
    "totalPoint": 2.93,
    "horsePoint": 0.21,
    "jockeyPoint": 1.94,
    "framePoint": 3.62,
    "timePoint": 1.93,
    "racePoint": 1.04,
    "roubdTotalPoint": 1.26,
    "oddsRank": 10,
    "rank": 9
  },
  {
    "horseNumber": 2,
    "horseName": "ワンダフルタウン",
    "jockeyName": "和田竜",
    "totalPoint": 1.22,
    "horsePoint": 1.22,
    "jockeyPoint": 0,
    "framePoint": 0,
    "timePoint": 4.15,
    "racePoint": 4.55,
    "roubdTotalPoint": 0.53,
    "oddsRank": 4,
    "rank": 8
  }
]

export default Index;
