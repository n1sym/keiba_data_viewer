import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第28回 函館スプリントS(G3)"
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
    "horseName": "ビアンフェ",
    "jockeyName": "藤岡佑",
    "totalPoint": 17.94,
    "horsePoint": 2.81,
    "jockeyPoint": 4.41,
    "framePoint": 5,
    "timePoint": 4.11,
    "racePoint": 4.17,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 1,
    "horseName": "アスタールビー",
    "jockeyName": "池添",
    "totalPoint": 17.9,
    "horsePoint": 1.61,
    "jockeyPoint": 5,
    "framePoint": 5,
    "timePoint": 4.35,
    "racePoint": 4.53,
    "roubdTotalPoint": 4.99
  },
  {
    "horseNumber": 5,
    "horseName": "ケープコッド",
    "jockeyName": "吉田隼",
    "totalPoint": 17.14,
    "horsePoint": 1.64,
    "jockeyPoint": 4.67,
    "framePoint": 4,
    "timePoint": 4.77,
    "racePoint": 4.86,
    "roubdTotalPoint": 4.78
  },
  {
    "horseNumber": 7,
    "horseName": "ミッキーブリランテ",
    "jockeyName": "和田竜",
    "totalPoint": 16.69,
    "horsePoint": 2.04,
    "jockeyPoint": 4.64,
    "framePoint": 2.75,
    "timePoint": 5,
    "racePoint": 4.88,
    "roubdTotalPoint": 4.65
  },
  {
    "horseNumber": 8,
    "horseName": "カツジ",
    "jockeyName": "岩田康",
    "totalPoint": 15.46,
    "horsePoint": 1.36,
    "jockeyPoint": 4.72,
    "framePoint": 2.75,
    "timePoint": 4.43,
    "racePoint": 4.37,
    "roubdTotalPoint": 4.31
  },
  {
    "horseNumber": 2,
    "horseName": "マイネルアルケミー",
    "jockeyName": "黛",
    "totalPoint": 15.22,
    "horsePoint": 1.6,
    "jockeyPoint": 3.3,
    "framePoint": 5,
    "timePoint": 4.14,
    "racePoint": 4.23,
    "roubdTotalPoint": 4.24
  },
  {
    "horseNumber": 13,
    "horseName": "センショウユウト",
    "jockeyName": "中井",
    "totalPoint": 14.85,
    "horsePoint": 1.02,
    "jockeyPoint": 3.69,
    "framePoint": 5,
    "timePoint": 3.84,
    "racePoint": 3.99,
    "roubdTotalPoint": 4.14
  },
  {
    "horseNumber": 16,
    "horseName": "カレンモエ",
    "jockeyName": "鮫島駿",
    "totalPoint": 14.63,
    "horsePoint": 1.12,
    "jockeyPoint": 3.77,
    "framePoint": 3.25,
    "timePoint": 4.66,
    "racePoint": 4.76,
    "roubdTotalPoint": 4.08
  },
  {
    "horseNumber": 15,
    "horseName": "アルピニズム",
    "jockeyName": "団野",
    "totalPoint": 14.55,
    "horsePoint": 0.97,
    "jockeyPoint": 4.36,
    "framePoint": 3.25,
    "timePoint": 4.01,
    "racePoint": 4.17,
    "roubdTotalPoint": 4.06
  },
  {
    "horseNumber": 6,
    "horseName": "リンゴアメ",
    "jockeyName": "秋山稔",
    "totalPoint": 14.02,
    "horsePoint": 1.79,
    "jockeyPoint": 3.63,
    "framePoint": 4,
    "timePoint": 3.25,
    "racePoint": 3.37,
    "roubdTotalPoint": 3.91
  },
  {
    "horseNumber": 11,
    "horseName": "コントラチェック",
    "jockeyName": "丸山",
    "totalPoint": 13.86,
    "horsePoint": 1.25,
    "jockeyPoint": 3.95,
    "framePoint": 1.75,
    "timePoint": 4.6,
    "racePoint": 5,
    "roubdTotalPoint": 3.86
  },
  {
    "horseNumber": 10,
    "horseName": "ジョーアラビカ",
    "jockeyName": "横山和",
    "totalPoint": 13.63,
    "horsePoint": 1.12,
    "jockeyPoint": 4.4,
    "framePoint": 1,
    "timePoint": 4.51,
    "racePoint": 4.86,
    "roubdTotalPoint": 3.8
  },
  {
    "horseNumber": 3,
    "horseName": "シゲルピンクルビー",
    "jockeyName": "泉谷",
    "totalPoint": 12.4,
    "horsePoint": 5,
    "jockeyPoint": 1.08,
    "framePoint": 2.25,
    "timePoint": 3.36,
    "racePoint": 3.49,
    "roubdTotalPoint": 3.46
  },
  {
    "horseNumber": 9,
    "horseName": "タイセイアベニール",
    "jockeyName": "小崎",
    "totalPoint": 12.12,
    "horsePoint": 1.76,
    "jockeyPoint": 2.86,
    "framePoint": 1,
    "timePoint": 4.54,
    "racePoint": 4.82,
    "roubdTotalPoint": 3.38
  },
  {
    "horseNumber": 12,
    "horseName": "ロードアクア",
    "jockeyName": "田中健",
    "totalPoint": 9.43,
    "horsePoint": 1.16,
    "jockeyPoint": 1.19,
    "framePoint": 1.75,
    "timePoint": 4.32,
    "racePoint": 4.37,
    "roubdTotalPoint": 2.63
  },
  {
    "horseNumber": 4,
    "horseName": "ジャスティン",
    "jockeyName": "坂井",
    "totalPoint": 8.87,
    "horsePoint": 0.97,
    "jockeyPoint": 3.53,
    "framePoint": 2.25,
    "timePoint": 0.95,
    "racePoint": 0.99,
    "roubdTotalPoint": 2.47
  }
]
const top_forecast_data = [
  {
    "horseNumber": 15,
    "horseName": "アルピニズム",
    "jockeyName": "団野",
    "totalPoint": 7.5,
    "horsePoint": 0.5,
    "jockeyPoint": 5,
    "framePoint": 1.2,
    "timePoint": 4.01,
    "racePoint": 4.17,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 16,
    "horseName": "カレンモエ",
    "jockeyName": "鮫島駿",
    "totalPoint": 6.53,
    "horsePoint": 0.17,
    "jockeyPoint": 4.54,
    "framePoint": 1.2,
    "timePoint": 4.66,
    "racePoint": 4.76,
    "roubdTotalPoint": 4.35
  },
  {
    "horseNumber": 5,
    "horseName": "ケープコッド",
    "jockeyName": "吉田隼",
    "totalPoint": 6.37,
    "horsePoint": 0.38,
    "jockeyPoint": 4.28,
    "framePoint": 3.8,
    "timePoint": 4.77,
    "racePoint": 4.86,
    "roubdTotalPoint": 4.25
  },
  {
    "horseNumber": 1,
    "horseName": "アスタールビー",
    "jockeyName": "池添",
    "totalPoint": 6.32,
    "horsePoint": 0.78,
    "jockeyPoint": 3.96,
    "framePoint": 5,
    "timePoint": 4.35,
    "racePoint": 4.53,
    "roubdTotalPoint": 4.21
  },
  {
    "horseNumber": 3,
    "horseName": "シゲルピンクルビー",
    "jockeyName": "泉谷",
    "totalPoint": 5.53,
    "horsePoint": 5,
    "jockeyPoint": 0.38,
    "framePoint": 2.6,
    "timePoint": 3.36,
    "racePoint": 3.49,
    "roubdTotalPoint": 3.69
  },
  {
    "horseNumber": 9,
    "horseName": "タイセイアベニール",
    "jockeyName": "小崎",
    "totalPoint": 5.21,
    "horsePoint": 0.56,
    "jockeyPoint": 3.32,
    "framePoint": 1.2,
    "timePoint": 4.54,
    "racePoint": 4.82,
    "roubdTotalPoint": 3.47
  },
  {
    "horseNumber": 14,
    "horseName": "ビアンフェ",
    "jockeyName": "藤岡佑",
    "totalPoint": 5.2,
    "horsePoint": 0.58,
    "jockeyPoint": 3.3,
    "framePoint": 5,
    "timePoint": 4.11,
    "racePoint": 4.17,
    "roubdTotalPoint": 3.47
  },
  {
    "horseNumber": 8,
    "horseName": "カツジ",
    "jockeyName": "岩田康",
    "totalPoint": 4.66,
    "horsePoint": 0.63,
    "jockeyPoint": 2.88,
    "framePoint": 0,
    "timePoint": 4.43,
    "racePoint": 4.37,
    "roubdTotalPoint": 3.11
  },
  {
    "horseNumber": 11,
    "horseName": "コントラチェック",
    "jockeyName": "丸山",
    "totalPoint": 4.64,
    "horsePoint": 0.45,
    "jockeyPoint": 2.99,
    "framePoint": 1.2,
    "timePoint": 4.6,
    "racePoint": 5,
    "roubdTotalPoint": 3.09
  },
  {
    "horseNumber": 10,
    "horseName": "ジョーアラビカ",
    "jockeyName": "横山和",
    "totalPoint": 4.51,
    "horsePoint": 0.32,
    "jockeyPoint": 2.99,
    "framePoint": 1.2,
    "timePoint": 4.51,
    "racePoint": 4.86,
    "roubdTotalPoint": 3.01
  },
  {
    "horseNumber": 12,
    "horseName": "ロードアクア",
    "jockeyName": "田中健",
    "totalPoint": 3.87,
    "horsePoint": 0.9,
    "jockeyPoint": 2.12,
    "framePoint": 1.2,
    "timePoint": 4.32,
    "racePoint": 4.37,
    "roubdTotalPoint": 2.58
  },
  {
    "horseNumber": 4,
    "horseName": "ジャスティン",
    "jockeyName": "坂井",
    "totalPoint": 3.73,
    "horsePoint": 0.1,
    "jockeyPoint": 2.59,
    "framePoint": 2.6,
    "timePoint": 0.95,
    "racePoint": 0.99,
    "roubdTotalPoint": 2.49
  },
  {
    "horseNumber": 6,
    "horseName": "リンゴアメ",
    "jockeyName": "秋山稔",
    "totalPoint": 3.45,
    "horsePoint": 0.45,
    "jockeyPoint": 2.14,
    "framePoint": 3.8,
    "timePoint": 3.25,
    "racePoint": 3.37,
    "roubdTotalPoint": 2.3
  },
  {
    "horseNumber": 2,
    "horseName": "マイネルアルケミー",
    "jockeyName": "黛",
    "totalPoint": 3.28,
    "horsePoint": 0.2,
    "jockeyPoint": 2.2,
    "framePoint": 5,
    "timePoint": 4.14,
    "racePoint": 4.23,
    "roubdTotalPoint": 2.19
  },
  {
    "horseNumber": 7,
    "horseName": "ミッキーブリランテ",
    "jockeyName": "和田竜",
    "totalPoint": 2.64,
    "horsePoint": 0.72,
    "jockeyPoint": 1.37,
    "framePoint": 0,
    "timePoint": 5,
    "racePoint": 4.88,
    "roubdTotalPoint": 1.76
  },
  {
    "horseNumber": 13,
    "horseName": "センショウユウト",
    "jockeyName": "中井",
    "totalPoint": 1.61,
    "horsePoint": 0.42,
    "jockeyPoint": 0.85,
    "framePoint": 5,
    "timePoint": 3.84,
    "racePoint": 3.99,
    "roubdTotalPoint": 1.07
  }
]

export default Index;
