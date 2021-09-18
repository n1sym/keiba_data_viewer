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
    "roubdTotalPoint": 5
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
    "roubdTotalPoint": 4.93
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
    "roubdTotalPoint": 3.77
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
    "roubdTotalPoint": 3.7
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
    "roubdTotalPoint": 3.4
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
    "roubdTotalPoint": 2.85
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
    "roubdTotalPoint": 2.73
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
    "roubdTotalPoint": 2.71
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
    "roubdTotalPoint": 2.65
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
    "roubdTotalPoint": 2.58
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
    "roubdTotalPoint": 2.44
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
    "roubdTotalPoint": 2.26
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
    "roubdTotalPoint": 2.07
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
    "roubdTotalPoint": 2.04
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
    "roubdTotalPoint": 1.97
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
    "roubdTotalPoint": 1.91
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
    "roubdTotalPoint": 0.74
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
    "roubdTotalPoint": 0.62
  }
]
const top_forecast_data = [
  {
    "horseNumber": 14,
    "horseName": "アールドヴィーヴル",
    "jockeyName": "松山",
    "totalPoint": 9.17,
    "horsePoint": 4.14,
    "jockeyPoint": 3.59,
    "framePoint": 5,
    "timePoint": 5,
    "racePoint": 4.81,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 17,
    "horseName": "オヌール",
    "jockeyName": "川田",
    "totalPoint": 8.76,
    "horsePoint": 1.76,
    "jockeyPoint": 5,
    "framePoint": 3.33,
    "timePoint": 1.7,
    "racePoint": 3.4,
    "roubdTotalPoint": 4.78
  },
  {
    "horseNumber": 15,
    "horseName": "オパールムーン",
    "jockeyName": "横山典",
    "totalPoint": 8.5,
    "horsePoint": 5,
    "jockeyPoint": 2.5,
    "framePoint": 5,
    "timePoint": 4.45,
    "racePoint": 2.84,
    "roubdTotalPoint": 4.63
  },
  {
    "horseNumber": 5,
    "horseName": "クールキャット",
    "jockeyName": "ルメール",
    "totalPoint": 7.48,
    "horsePoint": 2.45,
    "jockeyPoint": 3.59,
    "framePoint": 1.67,
    "timePoint": 3.4,
    "racePoint": 3.18,
    "roubdTotalPoint": 4.08
  },
  {
    "horseNumber": 7,
    "horseName": "ストゥーティ",
    "jockeyName": "吉田隼",
    "totalPoint": 7.12,
    "horsePoint": 4.94,
    "jockeyPoint": 1.56,
    "framePoint": 5,
    "timePoint": 3.87,
    "racePoint": 3.02,
    "roubdTotalPoint": 3.88
  },
  {
    "horseNumber": 2,
    "horseName": "エンスージアズム",
    "jockeyName": "岩田望",
    "totalPoint": 6.76,
    "horsePoint": 3.26,
    "jockeyPoint": 2.5,
    "framePoint": 1.67,
    "timePoint": 3.47,
    "racePoint": 2.16,
    "roubdTotalPoint": 3.69
  },
  {
    "horseNumber": 9,
    "horseName": "タガノパッション",
    "jockeyName": "岩田康",
    "totalPoint": 6.6,
    "horsePoint": 4.85,
    "jockeyPoint": 1.25,
    "framePoint": 3.33,
    "timePoint": 4.11,
    "racePoint": 4.63,
    "roubdTotalPoint": 3.6
  },
  {
    "horseNumber": 12,
    "horseName": "アンドヴァラナウト",
    "jockeyName": "福永",
    "totalPoint": 6.44,
    "horsePoint": 2.94,
    "jockeyPoint": 2.5,
    "framePoint": 1.67,
    "timePoint": 4.28,
    "racePoint": 5,
    "roubdTotalPoint": 3.51
  },
  {
    "horseNumber": 4,
    "horseName": "スパークル",
    "jockeyName": "藤岡佑",
    "totalPoint": 6.09,
    "horsePoint": 4.12,
    "jockeyPoint": 1.41,
    "framePoint": 1.67,
    "timePoint": 4.28,
    "racePoint": 3.92,
    "roubdTotalPoint": 3.32
  },
  {
    "horseNumber": 10,
    "horseName": "エイシンヒテン",
    "jockeyName": "松若",
    "totalPoint": 5.12,
    "horsePoint": 4.46,
    "jockeyPoint": 0.47,
    "framePoint": 3.33,
    "timePoint": 4.42,
    "racePoint": 4.63,
    "roubdTotalPoint": 2.79
  },
  {
    "horseNumber": 11,
    "horseName": "プリュムドール",
    "jockeyName": "武豊",
    "totalPoint": 4.99,
    "horsePoint": 2.36,
    "jockeyPoint": 1.88,
    "framePoint": 1.67,
    "timePoint": 3.43,
    "racePoint": 3.64,
    "roubdTotalPoint": 2.72
  },
  {
    "horseNumber": 16,
    "horseName": "タガノディアーナ",
    "jockeyName": "和田竜",
    "totalPoint": 4.86,
    "horsePoint": 3.33,
    "jockeyPoint": 1.09,
    "framePoint": 3.33,
    "timePoint": 4.08,
    "racePoint": 4.01,
    "roubdTotalPoint": 2.65
  },
  {
    "horseNumber": 1,
    "horseName": "イリマ",
    "jockeyName": "幸",
    "totalPoint": 2.98,
    "horsePoint": 2.1,
    "jockeyPoint": 0.63,
    "framePoint": 1.67,
    "timePoint": 3.12,
    "racePoint": 3.27,
    "roubdTotalPoint": 1.62
  },
  {
    "horseNumber": 13,
    "horseName": "コーディアル",
    "jockeyName": "鮫島駿",
    "totalPoint": 2.87,
    "horsePoint": 2.21,
    "jockeyPoint": 0.47,
    "framePoint": 5,
    "timePoint": 3.64,
    "racePoint": 3.02,
    "roubdTotalPoint": 1.56
  },
  {
    "horseNumber": 18,
    "horseName": "レアシャンパーニュ",
    "jockeyName": "浜中",
    "totalPoint": 1.64,
    "horsePoint": 0.98,
    "jockeyPoint": 0.47,
    "framePoint": 3.33,
    "timePoint": 3.43,
    "racePoint": 3.07,
    "roubdTotalPoint": 0.89
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
    "roubdTotalPoint": 0.53
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
    "roubdTotalPoint": 0.07
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
    "roubdTotalPoint": 0
  }
]

export default Index;
