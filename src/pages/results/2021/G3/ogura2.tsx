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
    "horseNumber": 7,
    "horseName": "スリーパーダ",
    "jockeyName": "福永",
    "totalPoint": 18.07,
    "horsePoint": 3.29,
    "jockeyPoint": 5,
    "framePoint": 5,
    "timePoint": 3.19,
    "racePoint": 3.06,
    "roubdTotalPoint": 5
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
    "roubdTotalPoint": 4.72
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
    "roubdTotalPoint": 4.27
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
    "roubdTotalPoint": 4.09
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
    "roubdTotalPoint": 3.37
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
    "roubdTotalPoint": 3.24
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
    "roubdTotalPoint": 3.22
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
    "roubdTotalPoint": 3.07
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
    "roubdTotalPoint": 2.27
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
    "roubdTotalPoint": 1.99
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
    "roubdTotalPoint": 5
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
    "roubdTotalPoint": 4.69
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
    "roubdTotalPoint": 4.32
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
    "roubdTotalPoint": 3.32
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
    "roubdTotalPoint": 3.2
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
    "roubdTotalPoint": 2.87
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
    "roubdTotalPoint": 2.31
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
    "roubdTotalPoint": 2.1
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
    "roubdTotalPoint": 2.01
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
    "roubdTotalPoint": 1.99
  }
]

export default Index;
