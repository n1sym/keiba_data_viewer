import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第26回 マーメイドステークス(G3)"
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
    "horseNumber": 14,
    "horseName": "サンクテュエール",
    "jockeyName": "川田",
    "totalPoint": 17.51,
    "horsePoint": 2.45,
    "jockeyPoint": 5,
    "framePoint": 5,
    "timePoint": 3.57,
    "racePoint": 3.02,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 15,
    "horseName": "ミスニューヨーク",
    "jockeyName": "加藤",
    "totalPoint": 16.96,
    "horsePoint": 4.82,
    "jockeyPoint": 2.28,
    "framePoint": 5,
    "timePoint": 4.12,
    "racePoint": 4.13,
    "roubdTotalPoint": 4.84
  },
  {
    "horseNumber": 8,
    "horseName": "ソフトフルート",
    "jockeyName": "横山和",
    "totalPoint": 16.37,
    "horsePoint": 5,
    "jockeyPoint": 2.05,
    "framePoint": 4.38,
    "timePoint": 4.18,
    "racePoint": 4.13,
    "roubdTotalPoint": 4.67
  },
  {
    "horseNumber": 5,
    "horseName": "シャドウディーヴァ",
    "jockeyName": "福永",
    "totalPoint": 15.88,
    "horsePoint": 2.3,
    "jockeyPoint": 4.16,
    "framePoint": 2.19,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 4.53
  },
  {
    "horseNumber": 9,
    "horseName": "イズジョーノキセキ",
    "jockeyName": "西村淳",
    "totalPoint": 15.64,
    "horsePoint": 2.54,
    "jockeyPoint": 3.22,
    "framePoint": 4.38,
    "timePoint": 4.24,
    "racePoint": 4.25,
    "roubdTotalPoint": 4.47
  },
  {
    "horseNumber": 7,
    "horseName": "レッドベルディエス",
    "jockeyName": "幸",
    "totalPoint": 15.15,
    "horsePoint": 2.25,
    "jockeyPoint": 2.88,
    "framePoint": 4.38,
    "timePoint": 4.37,
    "racePoint": 4.66,
    "roubdTotalPoint": 4.33
  },
  {
    "horseNumber": 12,
    "horseName": "アンドラステ",
    "jockeyName": "岩田望",
    "totalPoint": 15.12,
    "horsePoint": 3.21,
    "jockeyPoint": 2.63,
    "framePoint": 3.44,
    "timePoint": 4.67,
    "racePoint": 4.36,
    "roubdTotalPoint": 4.32
  },
  {
    "horseNumber": 2,
    "horseName": "アブレイズ",
    "jockeyName": "浜中",
    "totalPoint": 13.57,
    "horsePoint": 1.74,
    "jockeyPoint": 3.66,
    "framePoint": 3.44,
    "timePoint": 4,
    "racePoint": 1.89,
    "roubdTotalPoint": 3.87
  },
  {
    "horseNumber": 4,
    "horseName": "カセドラルベル",
    "jockeyName": "和田竜",
    "totalPoint": 13.53,
    "horsePoint": 1.57,
    "jockeyPoint": 3.07,
    "framePoint": 3.44,
    "timePoint": 3.71,
    "racePoint": 4.85,
    "roubdTotalPoint": 3.86
  },
  {
    "horseNumber": 13,
    "horseName": "クラヴェル",
    "jockeyName": "横山典",
    "totalPoint": 13.48,
    "horsePoint": 0.63,
    "jockeyPoint": 2.95,
    "framePoint": 5,
    "timePoint": 4,
    "racePoint": 3.79,
    "roubdTotalPoint": 3.85
  },
  {
    "horseNumber": 16,
    "horseName": "アッシェンプッテル",
    "jockeyName": "太宰",
    "totalPoint": 12.18,
    "horsePoint": 2.9,
    "jockeyPoint": 2.46,
    "framePoint": 5,
    "timePoint": 0.98,
    "racePoint": 2.62,
    "roubdTotalPoint": 3.48
  },
  {
    "horseNumber": 6,
    "horseName": "フィリアプーラ",
    "jockeyName": "菊沢",
    "totalPoint": 12.03,
    "horsePoint": 2.57,
    "jockeyPoint": 1.98,
    "framePoint": 2.19,
    "timePoint": 3.92,
    "racePoint": 4.51,
    "roubdTotalPoint": 3.44
  },
  {
    "horseNumber": 3,
    "horseName": "ホウオウエミーズ",
    "jockeyName": "丸田",
    "totalPoint": 11.49,
    "horsePoint": 2.09,
    "jockeyPoint": 2.32,
    "framePoint": 3.44,
    "timePoint": 3.16,
    "racePoint": 2.17,
    "roubdTotalPoint": 3.28
  },
  {
    "horseNumber": 10,
    "horseName": "キングスタイル",
    "jockeyName": "高倉",
    "totalPoint": 11.31,
    "horsePoint": 1.94,
    "jockeyPoint": 1.84,
    "framePoint": 4.38,
    "timePoint": 3.14,
    "racePoint": 1.94,
    "roubdTotalPoint": 3.23
  },
  {
    "horseNumber": 11,
    "horseName": "パッシングスルー",
    "jockeyName": "荻野極",
    "totalPoint": 11.25,
    "horsePoint": 1.31,
    "jockeyPoint": 2.72,
    "framePoint": 3.44,
    "timePoint": 3.25,
    "racePoint": 1.94,
    "roubdTotalPoint": 3.21
  },
  {
    "horseNumber": 1,
    "horseName": "シャムロックヒル",
    "jockeyName": "藤懸",
    "totalPoint": 10.36,
    "horsePoint": 1.38,
    "jockeyPoint": 2.06,
    "framePoint": 3.44,
    "timePoint": 3.1,
    "racePoint": 2.17,
    "roubdTotalPoint": 2.96
  }
]
const top_forecast_data = [
  {
    "horseNumber": 8,
    "horseName": "ソフトフルート",
    "jockeyName": "横山和",
    "totalPoint": 9.23,
    "horsePoint": 5,
    "jockeyPoint": 3.02,
    "framePoint": 0,
    "timePoint": 4.18,
    "racePoint": 4.13,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 14,
    "horseName": "サンクテュエール",
    "jockeyName": "川田",
    "totalPoint": 8.76,
    "horsePoint": 1.87,
    "jockeyPoint": 4.92,
    "framePoint": 3.33,
    "timePoint": 3.57,
    "racePoint": 3.02,
    "roubdTotalPoint": 4.75
  },
  {
    "horseNumber": 5,
    "horseName": "シャドウディーヴァ",
    "jockeyName": "福永",
    "totalPoint": 8.69,
    "horsePoint": 2.22,
    "jockeyPoint": 4.62,
    "framePoint": 1.67,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 4.71
  },
  {
    "horseNumber": 9,
    "horseName": "イズジョーノキセキ",
    "jockeyName": "西村淳",
    "totalPoint": 8.48,
    "horsePoint": 1.48,
    "jockeyPoint": 5,
    "framePoint": 1.67,
    "timePoint": 4.24,
    "racePoint": 4.25,
    "roubdTotalPoint": 4.59
  },
  {
    "horseNumber": 7,
    "horseName": "レッドベルディエス",
    "jockeyName": "幸",
    "totalPoint": 7.42,
    "horsePoint": 2.48,
    "jockeyPoint": 3.53,
    "framePoint": 0,
    "timePoint": 4.37,
    "racePoint": 4.66,
    "roubdTotalPoint": 4.02
  },
  {
    "horseNumber": 12,
    "horseName": "アンドラステ",
    "jockeyName": "岩田望",
    "totalPoint": 6.2,
    "horsePoint": 2.91,
    "jockeyPoint": 2.35,
    "framePoint": 5,
    "timePoint": 4.67,
    "racePoint": 4.36,
    "roubdTotalPoint": 3.36
  },
  {
    "horseNumber": 10,
    "horseName": "キングスタイル",
    "jockeyName": "高倉",
    "totalPoint": 5.66,
    "horsePoint": 1.28,
    "jockeyPoint": 3.13,
    "framePoint": 1.67,
    "timePoint": 3.14,
    "racePoint": 1.94,
    "roubdTotalPoint": 3.07
  },
  {
    "horseNumber": 4,
    "horseName": "カセドラルベル",
    "jockeyName": "和田竜",
    "totalPoint": 5.62,
    "horsePoint": 1.55,
    "jockeyPoint": 2.91,
    "framePoint": 3.33,
    "timePoint": 3.71,
    "racePoint": 4.85,
    "roubdTotalPoint": 3.04
  },
  {
    "horseNumber": 2,
    "horseName": "アブレイズ",
    "jockeyName": "浜中",
    "totalPoint": 5.38,
    "horsePoint": 0.83,
    "jockeyPoint": 3.25,
    "framePoint": 3.33,
    "timePoint": 4,
    "racePoint": 1.89,
    "roubdTotalPoint": 2.91
  },
  {
    "horseNumber": 3,
    "horseName": "ホウオウエミーズ",
    "jockeyName": "丸田",
    "totalPoint": 4.89,
    "horsePoint": 1.6,
    "jockeyPoint": 2.35,
    "framePoint": 3.33,
    "timePoint": 3.16,
    "racePoint": 2.17,
    "roubdTotalPoint": 2.65
  },
  {
    "horseNumber": 6,
    "horseName": "フィリアプーラ",
    "jockeyName": "菊沢",
    "totalPoint": 4.53,
    "horsePoint": 2.29,
    "jockeyPoint": 1.6,
    "framePoint": 1.67,
    "timePoint": 3.92,
    "racePoint": 4.51,
    "roubdTotalPoint": 2.45
  },
  {
    "horseNumber": 15,
    "horseName": "ミスニューヨーク",
    "jockeyName": "加藤",
    "totalPoint": 4.32,
    "horsePoint": 2.46,
    "jockeyPoint": 1.33,
    "framePoint": 5,
    "timePoint": 4.12,
    "racePoint": 4.13,
    "roubdTotalPoint": 2.34
  },
  {
    "horseNumber": 11,
    "horseName": "パッシングスルー",
    "jockeyName": "荻野極",
    "totalPoint": 4.32,
    "horsePoint": 0.78,
    "jockeyPoint": 2.53,
    "framePoint": 5,
    "timePoint": 3.25,
    "racePoint": 1.94,
    "roubdTotalPoint": 2.34
  },
  {
    "horseNumber": 16,
    "horseName": "アッシェンプッテル",
    "jockeyName": "太宰",
    "totalPoint": 4.18,
    "horsePoint": 1.52,
    "jockeyPoint": 1.9,
    "framePoint": 5,
    "timePoint": 0.98,
    "racePoint": 2.62,
    "roubdTotalPoint": 2.26
  },
  {
    "horseNumber": 13,
    "horseName": "クラヴェル",
    "jockeyName": "横山典",
    "totalPoint": 3.5,
    "horsePoint": 0.77,
    "jockeyPoint": 1.95,
    "framePoint": 3.33,
    "timePoint": 4,
    "racePoint": 3.79,
    "roubdTotalPoint": 1.9
  },
  {
    "horseNumber": 1,
    "horseName": "シャムロックヒル",
    "jockeyName": "藤懸",
    "totalPoint": 2.84,
    "horsePoint": 0.95,
    "jockeyPoint": 1.35,
    "framePoint": 3.33,
    "timePoint": 3.1,
    "racePoint": 2.17,
    "roubdTotalPoint": 1.54
  }
]

export default Index;

