import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";
import {RaceForecastTableG3tan} from "../../../../components/RaceForecastTableG3tan"

const title = "第41回小倉2歳ステークス(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202110040811&rf=race_list"

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
    "date": "2021/09/05",
    "dirName": "2021/G3/ogura2",
    "raceName": "小倉2歳S(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": 1200,
    "wide3box": 1178,
    "wide5box": -340,
    "3huku5box": -1000,
    "1-2-3oddsRank": "4-3-8"
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 7,
    "horseName": "スリーパーダ",
    "jockeyName": "福永",
    "totalPoint": 18.07,
    "horsePoint": 3.29,
    "jockeyPoint": 5,
    "framePoint": 5,
    "timePoint": 3.19,
    "racePoint": 3.06,
    "roubdTotalPoint": 5,
    "oddsRank": 3,
    "rank": 2
  },
  {
    "horseNumber": 5,
    "horseName": "○外デュガ",
    "jockeyName": "武豊",
    "totalPoint": 17.05,
    "horsePoint": 5,
    "jockeyPoint": 3.87,
    "framePoint": 1.67,
    "timePoint": 4.47,
    "racePoint": 4.29,
    "roubdTotalPoint": 4.72,
    "oddsRank": 5,
    "rank": 4
  },
  {
    "horseNumber": 9,
    "horseName": "ナムラクレア",
    "jockeyName": "和田竜",
    "totalPoint": 15.43,
    "horsePoint": 4.41,
    "jockeyPoint": 2.02,
    "framePoint": 3.33,
    "timePoint": 4.41,
    "racePoint": 5,
    "roubdTotalPoint": 4.27,
    "oddsRank": 4,
    "rank": 1
  },
  {
    "horseNumber": 3,
    "horseName": "ショウナンマッハ",
    "jockeyName": "松山",
    "totalPoint": 14.77,
    "horsePoint": 3.29,
    "jockeyPoint": 2.74,
    "framePoint": 4.52,
    "timePoint": 3.4,
    "racePoint": 3.27,
    "roubdTotalPoint": 4.09,
    "oddsRank": 1,
    "rank": 7
  },
  {
    "horseNumber": 8,
    "horseName": "ブレスレスリー",
    "jockeyName": "藤岡康",
    "totalPoint": 12.17,
    "horsePoint": 3.29,
    "jockeyPoint": 1.37,
    "framePoint": 5,
    "timePoint": 2.98,
    "racePoint": 1.44,
    "roubdTotalPoint": 3.37,
    "oddsRank": 7,
    "rank": 6
  },
  {
    "horseNumber": 4,
    "horseName": "インプロバイザー",
    "jockeyName": "松若",
    "totalPoint": 11.72,
    "horsePoint": 2.57,
    "jockeyPoint": 1.85,
    "framePoint": 2.86,
    "timePoint": 3.35,
    "racePoint": 3.98,
    "roubdTotalPoint": 3.24,
    "oddsRank": 2,
    "rank": 5
  },
  {
    "horseNumber": 10,
    "horseName": "アネゴハダ",
    "jockeyName": "幸",
    "totalPoint": 11.62,
    "horsePoint": 3.29,
    "jockeyPoint": 1.69,
    "framePoint": 3.33,
    "timePoint": 3.4,
    "racePoint": 1.44,
    "roubdTotalPoint": 3.22,
    "oddsRank": 8,
    "rank": 3
  },
  {
    "horseNumber": 2,
    "horseName": "ソリッドグロウ",
    "jockeyName": "岩田康",
    "totalPoint": 11.11,
    "horsePoint": 3.29,
    "jockeyPoint": 0,
    "framePoint": 2.38,
    "timePoint": 5,
    "racePoint": 4.8,
    "roubdTotalPoint": 3.07,
    "oddsRank": 6,
    "rank": 9
  },
  {
    "horseNumber": 1,
    "horseName": "シュンメキラリ",
    "jockeyName": "秋山真",
    "totalPoint": 8.19,
    "horsePoint": 1.64,
    "jockeyPoint": 2.42,
    "framePoint": 2.38,
    "timePoint": 1.06,
    "racePoint": 1.02,
    "roubdTotalPoint": 2.27,
    "oddsRank": 9,
    "rank": 10
  },
  {
    "horseNumber": 6,
    "horseName": "エトワールジェンヌ",
    "jockeyName": "国分優",
    "totalPoint": 7.2,
    "horsePoint": 1.23,
    "jockeyPoint": 1.29,
    "framePoint": 1.67,
    "timePoint": 2.82,
    "racePoint": 1.44,
    "roubdTotalPoint": 1.99,
    "oddsRank": 10,
    "rank": 8
  }
]
const top_forecast_data = [
  {
    "horseNumber": 7,
    "horseName": "スリーパーダ",
    "jockeyName": "福永",
    "totalPoint": 11.73,
    "horsePoint": 2.33,
    "jockeyPoint": 5,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 6,
    "roubdTotalPoint": 5,
    "oddsRank": 3,
    "rank": 2
  },
  {
    "horseNumber": 5,
    "horseName": "○外デュガ",
    "jockeyName": "武豊",
    "totalPoint": 11,
    "horsePoint": 4,
    "jockeyPoint": 3.67,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 4.69,
    "oddsRank": 5,
    "rank": 4
  },
  {
    "horseNumber": 3,
    "horseName": "ショウナンマッハ",
    "jockeyName": "松山",
    "totalPoint": 10.13,
    "horsePoint": 2.33,
    "jockeyPoint": 2,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 6,
    "roubdTotalPoint": 4.32,
    "oddsRank": 1,
    "rank": 7
  },
  {
    "horseNumber": 4,
    "horseName": "インプロバイザー",
    "jockeyName": "松若",
    "totalPoint": 7.8,
    "horsePoint": 2.5,
    "jockeyPoint": 1.5,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 3.32,
    "oddsRank": 2,
    "rank": 5
  },
  {
    "horseNumber": 9,
    "horseName": "ナムラクレア",
    "jockeyName": "和田竜",
    "totalPoint": 7.5,
    "horsePoint": 5,
    "jockeyPoint": 0.83,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 5,
    "roubdTotalPoint": 3.2,
    "oddsRank": 4,
    "rank": 1
  },
  {
    "horseNumber": 8,
    "horseName": "ブレスレスリー",
    "jockeyName": "藤岡康",
    "totalPoint": 6.73,
    "horsePoint": 2.33,
    "jockeyPoint": 0.83,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 6,
    "roubdTotalPoint": 2.87,
    "oddsRank": 7,
    "rank": 6
  },
  {
    "horseNumber": 2,
    "horseName": "ソリッドグロウ",
    "jockeyName": "岩田康",
    "totalPoint": 5.43,
    "horsePoint": 2.33,
    "jockeyPoint": 0,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 5,
    "roubdTotalPoint": 2.31,
    "oddsRank": 6,
    "rank": 9
  },
  {
    "horseNumber": 10,
    "horseName": "アネゴハダ",
    "jockeyName": "幸",
    "totalPoint": 4.93,
    "horsePoint": 2.33,
    "jockeyPoint": 0.83,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 2.1,
    "oddsRank": 8,
    "rank": 3
  },
  {
    "horseNumber": 6,
    "horseName": "エトワールジェンヌ",
    "jockeyName": "国分優",
    "totalPoint": 4.71,
    "horsePoint": 1.27,
    "jockeyPoint": 1,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 2.01,
    "oddsRank": 10,
    "rank": 8
  },
  {
    "horseNumber": 1,
    "horseName": "シュンメキラリ",
    "jockeyName": "秋山真",
    "totalPoint": 4.67,
    "horsePoint": 1.17,
    "jockeyPoint": 1,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 1.99,
    "oddsRank": 9,
    "rank": 10
  }
]

export default Index;
