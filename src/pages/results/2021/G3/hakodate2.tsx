import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第53回 函館2歳ステークス(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202102010511&rf=race_submenu"

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
    "date": "2021/07/17",
    "dirName": "2021/G3/hakodate2",
    "raceName": "函館2歳S(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": 1100,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "3-2-10"
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 3,
    "horseName": "イチローイチロー",
    "jockeyName": "池添",
    "totalPoint": 18.75,
    "horsePoint": 5,
    "jockeyPoint": 4.29,
    "framePoint": 5,
    "timePoint": 3.12,
    "racePoint": 3.12,
    "roubdTotalPoint": 5,
    "oddsRank": 8,
    "rank": 4
  },
  {
    "horseNumber": 4,
    "horseName": "ポメランチェ",
    "jockeyName": "藤岡佑",
    "totalPoint": 18.4,
    "horsePoint": 5,
    "jockeyPoint": 3.78,
    "framePoint": 2.63,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 4.91,
    "oddsRank": 1,
    "rank": 7
  },
  {
    "horseNumber": 6,
    "horseName": "カイカノキセキ",
    "jockeyName": "鮫島駿",
    "totalPoint": 17.98,
    "horsePoint": 5,
    "jockeyPoint": 3.24,
    "framePoint": 4.47,
    "timePoint": 4.06,
    "racePoint": 4.06,
    "roubdTotalPoint": 4.79,
    "oddsRank": 2,
    "rank": 2
  },
  {
    "horseNumber": 9,
    "horseName": "メリトクラシー",
    "jockeyName": "ルメール",
    "totalPoint": 17.72,
    "horsePoint": 5,
    "jockeyPoint": 5,
    "framePoint": 3.16,
    "timePoint": 2.61,
    "racePoint": 2.77,
    "roubdTotalPoint": 4.73,
    "oddsRank": 4,
    "rank": 10
  },
  {
    "horseNumber": 8,
    "horseName": "トーセンヴァンノ",
    "jockeyName": "武豊",
    "totalPoint": 17.7,
    "horsePoint": 4.57,
    "jockeyPoint": 4.4,
    "framePoint": 3.16,
    "timePoint": 3.7,
    "racePoint": 3.7,
    "roubdTotalPoint": 4.72,
    "oddsRank": 5,
    "rank": 6
  },
  {
    "horseNumber": 2,
    "horseName": "フェズカズマ",
    "jockeyName": "横山和",
    "totalPoint": 16.03,
    "horsePoint": 5,
    "jockeyPoint": 3.77,
    "framePoint": 2.63,
    "timePoint": 3.04,
    "racePoint": 3.04,
    "roubdTotalPoint": 4.27,
    "oddsRank": 7,
    "rank": 9
  },
  {
    "horseNumber": 10,
    "horseName": "リトス",
    "jockeyName": "亀田",
    "totalPoint": 15.45,
    "horsePoint": 4.67,
    "jockeyPoint": 2.21,
    "framePoint": 3.68,
    "timePoint": 3.95,
    "racePoint": 3.95,
    "roubdTotalPoint": 4.12,
    "oddsRank": 6,
    "rank": 8
  },
  {
    "horseNumber": 11,
    "horseName": "ナムラリコリス",
    "jockeyName": "泉谷",
    "totalPoint": 14.16,
    "horsePoint": 4.67,
    "jockeyPoint": 0.92,
    "framePoint": 3.68,
    "timePoint": 4.38,
    "racePoint": 4.38,
    "roubdTotalPoint": 3.78,
    "oddsRank": 3,
    "rank": 1
  },
  {
    "horseNumber": 5,
    "horseName": "カワキタレブリー",
    "jockeyName": "加藤",
    "totalPoint": 13,
    "horsePoint": 5,
    "jockeyPoint": 2.24,
    "framePoint": 1.84,
    "timePoint": 2.83,
    "racePoint": 2.83,
    "roubdTotalPoint": 3.47,
    "oddsRank": 9,
    "rank": 5
  },
  {
    "horseNumber": 7,
    "horseName": "□地ラブミードール",
    "jockeyName": "古川吉",
    "totalPoint": 9.77,
    "horsePoint": 0.54,
    "jockeyPoint": 2.61,
    "framePoint": 4.47,
    "timePoint": 1.67,
    "racePoint": 1.67,
    "roubdTotalPoint": 2.61,
    "oddsRank": 11,
    "rank": 11
  },
  {
    "horseNumber": 1,
    "horseName": "グランデ",
    "jockeyName": "坂井",
    "totalPoint": 8.61,
    "horsePoint": 0.98,
    "jockeyPoint": 3.03,
    "framePoint": 3.16,
    "timePoint": 0.72,
    "racePoint": 0.72,
    "roubdTotalPoint": 2.3,
    "oddsRank": 10,
    "rank": 3
  }
]
const top_forecast_data = [
  {
    "horseNumber": 6,
    "horseName": "カイカノキセキ",
    "jockeyName": "鮫島駿",
    "totalPoint": 12,
    "horsePoint": 5,
    "jockeyPoint": 5,
    "framePoint": 5,
    "timePoint": 4.06,
    "racePoint": 4.06,
    "roubdTotalPoint": 5,
    "oddsRank": 2,
    "rank": 2
  },
  {
    "horseNumber": 9,
    "horseName": "メリトクラシー",
    "jockeyName": "ルメール",
    "totalPoint": 11.26,
    "horsePoint": 5,
    "jockeyPoint": 4.47,
    "framePoint": 3.62,
    "timePoint": 2.61,
    "racePoint": 2.77,
    "roubdTotalPoint": 4.69,
    "oddsRank": 4,
    "rank": 10
  },
  {
    "horseNumber": 3,
    "horseName": "イチローイチロー",
    "jockeyName": "池添",
    "totalPoint": 11.06,
    "horsePoint": 5,
    "jockeyPoint": 4.33,
    "framePoint": 1.21,
    "timePoint": 3.12,
    "racePoint": 3.12,
    "roubdTotalPoint": 4.61,
    "oddsRank": 8,
    "rank": 4
  },
  {
    "horseNumber": 8,
    "horseName": "トーセンヴァンノ",
    "jockeyName": "武豊",
    "totalPoint": 10.92,
    "horsePoint": 4.06,
    "jockeyPoint": 4.9,
    "framePoint": 3.62,
    "timePoint": 3.7,
    "racePoint": 3.7,
    "roubdTotalPoint": 4.55,
    "oddsRank": 5,
    "rank": 6
  },
  {
    "horseNumber": 4,
    "horseName": "ポメランチェ",
    "jockeyName": "藤岡佑",
    "totalPoint": 10.05,
    "horsePoint": 5,
    "jockeyPoint": 3.61,
    "framePoint": 0,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 4.19,
    "oddsRank": 1,
    "rank": 7
  },
  {
    "horseNumber": 2,
    "horseName": "フェズカズマ",
    "jockeyName": "横山和",
    "totalPoint": 9.56,
    "horsePoint": 5,
    "jockeyPoint": 3.26,
    "framePoint": 0,
    "timePoint": 3.04,
    "racePoint": 3.04,
    "roubdTotalPoint": 3.98,
    "oddsRank": 7,
    "rank": 9
  },
  {
    "horseNumber": 5,
    "horseName": "カワキタレブリー",
    "jockeyName": "加藤",
    "totalPoint": 8.18,
    "horsePoint": 5,
    "jockeyPoint": 2.27,
    "framePoint": 2.41,
    "timePoint": 2.83,
    "racePoint": 2.83,
    "roubdTotalPoint": 3.41,
    "oddsRank": 9,
    "rank": 5
  },
  {
    "horseNumber": 10,
    "horseName": "リトス",
    "jockeyName": "亀田",
    "totalPoint": 7.27,
    "horsePoint": 4.06,
    "jockeyPoint": 2.29,
    "framePoint": 1.21,
    "timePoint": 3.95,
    "racePoint": 3.95,
    "roubdTotalPoint": 3.03,
    "oddsRank": 6,
    "rank": 8
  },
  {
    "horseNumber": 7,
    "horseName": "□地ラブミードール",
    "jockeyName": "古川吉",
    "totalPoint": 5.45,
    "horsePoint": 1.56,
    "jockeyPoint": 2.78,
    "framePoint": 5,
    "timePoint": 1.67,
    "racePoint": 1.67,
    "roubdTotalPoint": 2.27,
    "oddsRank": 11,
    "rank": 11
  },
  {
    "horseNumber": 11,
    "horseName": "ナムラリコリス",
    "jockeyName": "泉谷",
    "totalPoint": 4.63,
    "horsePoint": 4.06,
    "jockeyPoint": 0.41,
    "framePoint": 1.21,
    "timePoint": 4.38,
    "racePoint": 4.38,
    "roubdTotalPoint": 1.93,
    "oddsRank": 3,
    "rank": 1
  },
  {
    "horseNumber": 1,
    "horseName": "グランデ",
    "jockeyName": "坂井",
    "totalPoint": 3.98,
    "horsePoint": 0,
    "jockeyPoint": 2.84,
    "framePoint": 3.62,
    "timePoint": 0.72,
    "racePoint": 0.72,
    "roubdTotalPoint": 1.66,
    "oddsRank": 10,
    "rank": 3
  }
]

export default Index;
