import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第70回 ラジオNIKKEI賞(G3)"
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
    "horseNumber": 4,
    "horseName": "プレイイットサム",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 18.27,
    "horsePoint": 5,
    "jockeyPoint": 4.21,
    "framePoint": 5,
    "timePoint": 2.68,
    "racePoint": 3.08,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 6,
    "horseName": "リッケンバッカー",
    "jockeyName": "幸",
    "totalPoint": 15.82,
    "horsePoint": 1.66,
    "jockeyPoint": 4.88,
    "framePoint": 2.31,
    "timePoint": 5,
    "racePoint": 3.69,
    "roubdTotalPoint": 4.33
  },
  {
    "horseNumber": 5,
    "horseName": "ボーデン",
    "jockeyName": "武藤",
    "totalPoint": 15.04,
    "horsePoint": 3.81,
    "jockeyPoint": 3.39,
    "framePoint": 2.31,
    "timePoint": 4.22,
    "racePoint": 3.14,
    "roubdTotalPoint": 4.12
  },
  {
    "horseNumber": 9,
    "horseName": "スペシャルドラマ",
    "jockeyName": "戸崎圭",
    "totalPoint": 14.05,
    "horsePoint": 0.69,
    "jockeyPoint": 5,
    "framePoint": 2.31,
    "timePoint": 3.87,
    "racePoint": 3.55,
    "roubdTotalPoint": 3.85
  },
  {
    "horseNumber": 16,
    "horseName": "ヴェイルネビュラ",
    "jockeyName": "田辺",
    "totalPoint": 13.71,
    "horsePoint": 1.26,
    "jockeyPoint": 4.68,
    "framePoint": 2.69,
    "timePoint": 2.98,
    "racePoint": 3.4,
    "roubdTotalPoint": 3.75
  },
  {
    "horseNumber": 3,
    "horseName": "アサマノイタズラ",
    "jockeyName": "嶋田",
    "totalPoint": 13.65,
    "horsePoint": 2.44,
    "jockeyPoint": 2.63,
    "framePoint": 5,
    "timePoint": 2.88,
    "racePoint": 3.05,
    "roubdTotalPoint": 3.74
  },
  {
    "horseNumber": 7,
    "horseName": "シュヴァリエローズ",
    "jockeyName": "吉田隼",
    "totalPoint": 13.18,
    "horsePoint": 2.13,
    "jockeyPoint": 3.96,
    "framePoint": 0.96,
    "timePoint": 4.01,
    "racePoint": 3.82,
    "roubdTotalPoint": 3.61
  },
  {
    "horseNumber": 13,
    "horseName": "ワザモノ",
    "jockeyName": "柴田善",
    "totalPoint": 13.17,
    "horsePoint": 2.03,
    "jockeyPoint": 3.64,
    "framePoint": 1.92,
    "timePoint": 3.84,
    "racePoint": 3.59,
    "roubdTotalPoint": 3.6
  },
  {
    "horseNumber": 1,
    "horseName": "デルマセイシ",
    "jockeyName": "菅原明",
    "totalPoint": 12.97,
    "horsePoint": 4.06,
    "jockeyPoint": 3.52,
    "framePoint": 1.92,
    "timePoint": 1.71,
    "racePoint": 2.69,
    "roubdTotalPoint": 3.55
  },
  {
    "horseNumber": 10,
    "horseName": "ワールドリバイバル",
    "jockeyName": "津村",
    "totalPoint": 12.97,
    "horsePoint": 2.26,
    "jockeyPoint": 3.71,
    "framePoint": 2.31,
    "timePoint": 3.01,
    "racePoint": 3.15,
    "roubdTotalPoint": 3.55
  },
  {
    "horseNumber": 14,
    "horseName": "ノースブリッジ",
    "jockeyName": "岩田康",
    "totalPoint": 12.88,
    "horsePoint": 1.56,
    "jockeyPoint": 3.54,
    "framePoint": 1.92,
    "timePoint": 3.54,
    "racePoint": 5,
    "roubdTotalPoint": 3.52
  },
  {
    "horseNumber": 15,
    "horseName": "グランオフィシエ",
    "jockeyName": "大野",
    "totalPoint": 12.13,
    "horsePoint": 1.72,
    "jockeyPoint": 3.44,
    "framePoint": 2.69,
    "timePoint": 3.34,
    "racePoint": 1.92,
    "roubdTotalPoint": 3.32
  },
  {
    "horseNumber": 11,
    "horseName": "タイソウ",
    "jockeyName": "三浦",
    "totalPoint": 12.12,
    "horsePoint": 2.2,
    "jockeyPoint": 4.09,
    "framePoint": 2.31,
    "timePoint": 2.29,
    "racePoint": 1.28,
    "roubdTotalPoint": 3.32
  },
  {
    "horseNumber": 2,
    "horseName": "ヴァイスメテオール",
    "jockeyName": "丸山",
    "totalPoint": 11.81,
    "horsePoint": 1.73,
    "jockeyPoint": 4.06,
    "framePoint": 1.92,
    "timePoint": 2.35,
    "racePoint": 2.44,
    "roubdTotalPoint": 3.23
  },
  {
    "horseNumber": 12,
    "horseName": "アイコンテーラー",
    "jockeyName": "亀田",
    "totalPoint": 9.06,
    "horsePoint": 1.39,
    "jockeyPoint": 2.57,
    "framePoint": 2.31,
    "timePoint": 1.88,
    "racePoint": 1.79,
    "roubdTotalPoint": 2.48
  },
  {
    "horseNumber": 8,
    "horseName": "ロードトゥフェイム",
    "jockeyName": "木幡巧",
    "totalPoint": 8.55,
    "horsePoint": 1.12,
    "jockeyPoint": 2.57,
    "framePoint": 0.96,
    "timePoint": 2.43,
    "racePoint": 2.79,
    "roubdTotalPoint": 2.34
  }
]
const top_forecast_data = [
  {
    "horseNumber": 4,
    "horseName": "プレイイットサム",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 17.79,
    "horsePoint": 5,
    "jockeyPoint": 3.87,
    "framePoint": 5,
    "timePoint": 2.68,
    "racePoint": 3.08,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 2,
    "horseName": "ヴァイスメテオール",
    "jockeyName": "丸山",
    "totalPoint": 14.62,
    "horsePoint": 2.1,
    "jockeyPoint": 5,
    "framePoint": 3.33,
    "timePoint": 2.35,
    "racePoint": 2.44,
    "roubdTotalPoint": 4.11
  },
  {
    "horseNumber": 14,
    "horseName": "ノースブリッジ",
    "jockeyName": "岩田康",
    "totalPoint": 13.85,
    "horsePoint": 2.13,
    "jockeyPoint": 2.06,
    "framePoint": 5,
    "timePoint": 3.54,
    "racePoint": 5,
    "roubdTotalPoint": 3.89
  },
  {
    "horseNumber": 13,
    "horseName": "ワザモノ",
    "jockeyName": "柴田善",
    "totalPoint": 13.7,
    "horsePoint": 2.04,
    "jockeyPoint": 2.25,
    "framePoint": 5,
    "timePoint": 3.84,
    "racePoint": 3.59,
    "roubdTotalPoint": 3.85
  },
  {
    "horseNumber": 3,
    "horseName": "アサマノイタズラ",
    "jockeyName": "嶋田",
    "totalPoint": 12.72,
    "horsePoint": 1.05,
    "jockeyPoint": 2.96,
    "framePoint": 5,
    "timePoint": 2.88,
    "racePoint": 3.05,
    "roubdTotalPoint": 3.58
  },
  {
    "horseNumber": 16,
    "horseName": "ヴェイルネビュラ",
    "jockeyName": "田辺",
    "totalPoint": 12.39,
    "horsePoint": 1.33,
    "jockeyPoint": 3.32,
    "framePoint": 3.33,
    "timePoint": 2.98,
    "racePoint": 3.4,
    "roubdTotalPoint": 3.48
  },
  {
    "horseNumber": 1,
    "horseName": "デルマセイシ",
    "jockeyName": "菅原明",
    "totalPoint": 11.52,
    "horsePoint": 3.51,
    "jockeyPoint": 2.07,
    "framePoint": 3.33,
    "timePoint": 1.71,
    "racePoint": 2.69,
    "roubdTotalPoint": 3.24
  },
  {
    "horseNumber": 11,
    "horseName": "タイソウ",
    "jockeyName": "三浦",
    "totalPoint": 11.32,
    "horsePoint": 3.04,
    "jockeyPoint": 2.34,
    "framePoint": 3.33,
    "timePoint": 2.29,
    "racePoint": 1.28,
    "roubdTotalPoint": 3.18
  },
  {
    "horseNumber": 9,
    "horseName": "スペシャルドラマ",
    "jockeyName": "戸崎圭",
    "totalPoint": 10.79,
    "horsePoint": 0.35,
    "jockeyPoint": 3.28,
    "framePoint": 1.67,
    "timePoint": 3.87,
    "racePoint": 3.55,
    "roubdTotalPoint": 3.03
  },
  {
    "horseNumber": 7,
    "horseName": "シュヴァリエローズ",
    "jockeyName": "吉田隼",
    "totalPoint": 10.61,
    "horsePoint": 1.25,
    "jockeyPoint": 3.3,
    "framePoint": 0,
    "timePoint": 4.01,
    "racePoint": 3.82,
    "roubdTotalPoint": 2.98
  },
  {
    "horseNumber": 15,
    "horseName": "グランオフィシエ",
    "jockeyName": "大野",
    "totalPoint": 10.55,
    "horsePoint": 1.28,
    "jockeyPoint": 2.26,
    "framePoint": 3.33,
    "timePoint": 3.34,
    "racePoint": 1.92,
    "roubdTotalPoint": 2.97
  },
  {
    "horseNumber": 5,
    "horseName": "ボーデン",
    "jockeyName": "武藤",
    "totalPoint": 10.24,
    "horsePoint": 1.6,
    "jockeyPoint": 1.91,
    "framePoint": 1.67,
    "timePoint": 4.22,
    "racePoint": 3.14,
    "roubdTotalPoint": 2.88
  },
  {
    "horseNumber": 6,
    "horseName": "リッケンバッカー",
    "jockeyName": "幸",
    "totalPoint": 8.92,
    "horsePoint": 0.62,
    "jockeyPoint": 1.06,
    "framePoint": 1.67,
    "timePoint": 5,
    "racePoint": 3.69,
    "roubdTotalPoint": 2.51
  },
  {
    "horseNumber": 10,
    "horseName": "ワールドリバイバル",
    "jockeyName": "津村",
    "totalPoint": 8.9,
    "horsePoint": 1.07,
    "jockeyPoint": 2.02,
    "framePoint": 1.67,
    "timePoint": 3.01,
    "racePoint": 3.15,
    "roubdTotalPoint": 2.5
  },
  {
    "horseNumber": 12,
    "horseName": "アイコンテーラー",
    "jockeyName": "亀田",
    "totalPoint": 7.99,
    "horsePoint": 1.78,
    "jockeyPoint": 0.95,
    "framePoint": 3.33,
    "timePoint": 1.88,
    "racePoint": 1.79,
    "roubdTotalPoint": 2.25
  },
  {
    "horseNumber": 8,
    "horseName": "ロードトゥフェイム",
    "jockeyName": "木幡巧",
    "totalPoint": 6.16,
    "horsePoint": 1.08,
    "jockeyPoint": 1.44,
    "framePoint": 0,
    "timePoint": 2.43,
    "racePoint": 2.79,
    "roubdTotalPoint": 1.73
  }
]

export default Index;

