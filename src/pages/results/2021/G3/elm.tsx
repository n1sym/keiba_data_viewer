import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第26回 エルムステークス(G3)"
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
    "horseNumber": 9,
    "horseName": "ヴェンジェンス",
    "jockeyName": "幸",
    "totalPoint": 18.67,
    "horsePoint": 5,
    "jockeyPoint": 3.83,
    "framePoint": 2.89,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 5,
    "horseName": "タイムフライヤー",
    "jockeyName": "武豊",
    "totalPoint": 18.35,
    "horsePoint": 4.68,
    "jockeyPoint": 4.2,
    "framePoint": 4.47,
    "timePoint": 4.03,
    "racePoint": 2.48,
    "roubdTotalPoint": 4.91
  },
  {
    "horseNumber": 3,
    "horseName": "○外アメリカンシード",
    "jockeyName": "ルメール",
    "totalPoint": 18.28,
    "horsePoint": 4.92,
    "jockeyPoint": 4.78,
    "framePoint": 2.89,
    "timePoint": 4.25,
    "racePoint": 2.38,
    "roubdTotalPoint": 4.9
  },
  {
    "horseNumber": 6,
    "horseName": "ウェスタールンド",
    "jockeyName": "藤岡佑",
    "totalPoint": 17.54,
    "horsePoint": 4.59,
    "jockeyPoint": 2.95,
    "framePoint": 4.47,
    "timePoint": 4.53,
    "racePoint": 4.06,
    "roubdTotalPoint": 4.7
  },
  {
    "horseNumber": 7,
    "horseName": "ソリストサンダー",
    "jockeyName": "戸崎圭",
    "totalPoint": 16.18,
    "horsePoint": 2.78,
    "jockeyPoint": 3.76,
    "framePoint": 3.95,
    "timePoint": 4.63,
    "racePoint": 3.19,
    "roubdTotalPoint": 4.33
  },
  {
    "horseNumber": 12,
    "horseName": "ロードゴラッソ",
    "jockeyName": "吉田隼",
    "totalPoint": 16.13,
    "horsePoint": 4.18,
    "jockeyPoint": 3.6,
    "framePoint": 3.42,
    "timePoint": 3.82,
    "racePoint": 2.79,
    "roubdTotalPoint": 4.32
  },
  {
    "horseNumber": 14,
    "horseName": "デルマルーヴル",
    "jockeyName": "岩田康",
    "totalPoint": 15.94,
    "horsePoint": 3.99,
    "jockeyPoint": 3.35,
    "framePoint": 5,
    "timePoint": 3.23,
    "racePoint": 1.68,
    "roubdTotalPoint": 4.27
  },
  {
    "horseNumber": 13,
    "horseName": "オメガレインボー",
    "jockeyName": "横山和",
    "totalPoint": 15.35,
    "horsePoint": 2.32,
    "jockeyPoint": 3.34,
    "framePoint": 5,
    "timePoint": 4.1,
    "racePoint": 2.68,
    "roubdTotalPoint": 4.11
  },
  {
    "horseNumber": 8,
    "horseName": "トップウイナー",
    "jockeyName": "和田竜",
    "totalPoint": 14.83,
    "horsePoint": 3.01,
    "jockeyPoint": 5,
    "framePoint": 3.95,
    "timePoint": 0.93,
    "racePoint": 2.28,
    "roubdTotalPoint": 3.97
  },
  {
    "horseNumber": 2,
    "horseName": "ケイティブレイブ",
    "jockeyName": "団野",
    "totalPoint": 14.79,
    "horsePoint": 4.25,
    "jockeyPoint": 2.97,
    "framePoint": 2.37,
    "timePoint": 4.03,
    "racePoint": 3.15,
    "roubdTotalPoint": 3.96
  },
  {
    "horseNumber": 4,
    "horseName": "スワーヴアラミス",
    "jockeyName": "松田",
    "totalPoint": 14.55,
    "horsePoint": 4.31,
    "jockeyPoint": 2.49,
    "framePoint": 2.89,
    "timePoint": 3.96,
    "racePoint": 3.19,
    "roubdTotalPoint": 3.9
  },
  {
    "horseNumber": 10,
    "horseName": "レピアーウィット",
    "jockeyName": "横山武",
    "totalPoint": 14.31,
    "horsePoint": 2.59,
    "jockeyPoint": 3.1,
    "framePoint": 2.89,
    "timePoint": 4.2,
    "racePoint": 4.26,
    "roubdTotalPoint": 3.83
  },
  {
    "horseNumber": 11,
    "horseName": "ロードブレス",
    "jockeyName": "坂井",
    "totalPoint": 13.88,
    "horsePoint": 2.15,
    "jockeyPoint": 3.01,
    "framePoint": 3.42,
    "timePoint": 3.96,
    "racePoint": 4.03,
    "roubdTotalPoint": 3.72
  },
  {
    "horseNumber": 1,
    "horseName": "ダンツキャッスル",
    "jockeyName": "菱田",
    "totalPoint": 13.42,
    "horsePoint": 3.3,
    "jockeyPoint": 3.1,
    "framePoint": 1.58,
    "timePoint": 4.22,
    "racePoint": 2.85,
    "roubdTotalPoint": 3.59
  }
]
const top_forecast_data = [
  {
    "horseNumber": 3,
    "horseName": "○外アメリカンシード",
    "jockeyName": "ルメール",
    "totalPoint": 10.75,
    "horsePoint": 5,
    "jockeyPoint": 4.11,
    "framePoint": 1.25,
    "timePoint": 4.25,
    "racePoint": 2.38,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 5,
    "horseName": "タイムフライヤー",
    "jockeyName": "武豊",
    "totalPoint": 8.52,
    "horsePoint": 4.89,
    "jockeyPoint": 2.59,
    "framePoint": 5,
    "timePoint": 4.03,
    "racePoint": 2.48,
    "roubdTotalPoint": 3.96
  },
  {
    "horseNumber": 13,
    "horseName": "オメガレインボー",
    "jockeyName": "横山和",
    "totalPoint": 8.35,
    "horsePoint": 1.35,
    "jockeyPoint": 5,
    "framePoint": 3.75,
    "timePoint": 4.1,
    "racePoint": 2.68,
    "roubdTotalPoint": 3.88
  },
  {
    "horseNumber": 1,
    "horseName": "ダンツキャッスル",
    "jockeyName": "菱田",
    "totalPoint": 7.23,
    "horsePoint": 1.91,
    "jockeyPoint": 3.8,
    "framePoint": 1.25,
    "timePoint": 4.22,
    "racePoint": 2.85,
    "roubdTotalPoint": 3.36
  },
  {
    "horseNumber": 12,
    "horseName": "ロードゴラッソ",
    "jockeyName": "吉田隼",
    "totalPoint": 6.5,
    "horsePoint": 1.52,
    "jockeyPoint": 3.56,
    "framePoint": 2.5,
    "timePoint": 3.82,
    "racePoint": 2.79,
    "roubdTotalPoint": 3.02
  },
  {
    "horseNumber": 2,
    "horseName": "ケイティブレイブ",
    "jockeyName": "団野",
    "totalPoint": 5.95,
    "horsePoint": 2.93,
    "jockeyPoint": 2.16,
    "framePoint": 1.25,
    "timePoint": 4.03,
    "racePoint": 3.15,
    "roubdTotalPoint": 2.77
  },
  {
    "horseNumber": 4,
    "horseName": "スワーヴアラミス",
    "jockeyName": "松田",
    "totalPoint": 5.89,
    "horsePoint": 2.03,
    "jockeyPoint": 2.76,
    "framePoint": 1.25,
    "timePoint": 3.96,
    "racePoint": 3.19,
    "roubdTotalPoint": 2.74
  },
  {
    "horseNumber": 6,
    "horseName": "ウェスタールンド",
    "jockeyName": "藤岡佑",
    "totalPoint": 5.88,
    "horsePoint": 2.93,
    "jockeyPoint": 2.11,
    "framePoint": 5,
    "timePoint": 4.53,
    "racePoint": 4.06,
    "roubdTotalPoint": 2.73
  },
  {
    "horseNumber": 8,
    "horseName": "トップウイナー",
    "jockeyName": "和田竜",
    "totalPoint": 4.92,
    "horsePoint": 1.64,
    "jockeyPoint": 2.34,
    "framePoint": 3.75,
    "timePoint": 0.93,
    "racePoint": 2.28,
    "roubdTotalPoint": 2.29
  },
  {
    "horseNumber": 7,
    "horseName": "ソリストサンダー",
    "jockeyName": "戸崎圭",
    "totalPoint": 4.67,
    "horsePoint": 1.72,
    "jockeyPoint": 2.11,
    "framePoint": 3.75,
    "timePoint": 4.63,
    "racePoint": 3.19,
    "roubdTotalPoint": 2.17
  },
  {
    "horseNumber": 11,
    "horseName": "ロードブレス",
    "jockeyName": "坂井",
    "totalPoint": 4.57,
    "horsePoint": 1.31,
    "jockeyPoint": 2.33,
    "framePoint": 2.5,
    "timePoint": 3.96,
    "racePoint": 4.03,
    "roubdTotalPoint": 2.13
  },
  {
    "horseNumber": 14,
    "horseName": "デルマルーヴル",
    "jockeyName": "岩田康",
    "totalPoint": 4.21,
    "horsePoint": 0.84,
    "jockeyPoint": 2.41,
    "framePoint": 3.75,
    "timePoint": 3.23,
    "racePoint": 1.68,
    "roubdTotalPoint": 1.96
  },
  {
    "horseNumber": 9,
    "horseName": "ヴェンジェンス",
    "jockeyName": "幸",
    "totalPoint": 3.59,
    "horsePoint": 2.09,
    "jockeyPoint": 1.07,
    "framePoint": 2.5,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 1.67
  },
  {
    "horseNumber": 10,
    "horseName": "レピアーウィット",
    "jockeyName": "横山武",
    "totalPoint": 3.49,
    "horsePoint": 0.82,
    "jockeyPoint": 1.91,
    "framePoint": 2.5,
    "timePoint": 4.2,
    "racePoint": 4.26,
    "roubdTotalPoint": 1.62
  }
]

export default Index;

