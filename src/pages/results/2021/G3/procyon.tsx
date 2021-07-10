import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第24回 プロキオンステークス(G3)"
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
    "horseNumber": 15,
    "horseName": "スマートダンディー",
    "jockeyName": "秋山真",
    "totalPoint": 19.67,
    "horsePoint": 4.81,
    "jockeyPoint": 3.94,
    "framePoint": 4.52,
    "timePoint": 4.9,
    "racePoint": 4.53,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 9,
    "horseName": "ウェスタールンド",
    "jockeyName": "藤岡佑",
    "totalPoint": 18,
    "horsePoint": 5,
    "jockeyPoint": 3.64,
    "framePoint": 2.38,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 4.58
  },
  {
    "horseNumber": 13,
    "horseName": "タイサイ",
    "jockeyName": "中井",
    "totalPoint": 15.72,
    "horsePoint": 2.26,
    "jockeyPoint": 3.54,
    "framePoint": 5,
    "timePoint": 3.94,
    "racePoint": 3.39,
    "roubdTotalPoint": 4
  },
  {
    "horseNumber": 12,
    "horseName": "ダノンスプレンダー",
    "jockeyName": "川田",
    "totalPoint": 15.53,
    "horsePoint": 2.13,
    "jockeyPoint": 5,
    "framePoint": 1.67,
    "timePoint": 4.46,
    "racePoint": 3.73,
    "roubdTotalPoint": 3.95
  },
  {
    "horseNumber": 2,
    "horseName": "アヴァンティスト",
    "jockeyName": "松若",
    "totalPoint": 15.21,
    "horsePoint": 3.14,
    "jockeyPoint": 2.72,
    "framePoint": 4.05,
    "timePoint": 4.77,
    "racePoint": 3.01,
    "roubdTotalPoint": 3.87
  },
  {
    "horseNumber": 8,
    "horseName": "ワイドファラオ",
    "jockeyName": "福永",
    "totalPoint": 14.31,
    "horsePoint": 3.15,
    "jockeyPoint": 4.2,
    "framePoint": 1.19,
    "timePoint": 3.85,
    "racePoint": 3.11,
    "roubdTotalPoint": 3.64
  },
  {
    "horseNumber": 1,
    "horseName": "メイショウワザシ",
    "jockeyName": "西村淳",
    "totalPoint": 13.96,
    "horsePoint": 2.15,
    "jockeyPoint": 2.56,
    "framePoint": 4.05,
    "timePoint": 4.29,
    "racePoint": 3.88,
    "roubdTotalPoint": 3.55
  },
  {
    "horseNumber": 16,
    "horseName": "メイショウウズマサ",
    "jockeyName": "斎藤",
    "totalPoint": 13.88,
    "horsePoint": 2.1,
    "jockeyPoint": 2.64,
    "framePoint": 4.52,
    "timePoint": 4.33,
    "racePoint": 2.52,
    "roubdTotalPoint": 3.53
  },
  {
    "horseNumber": 5,
    "horseName": "ブラックムーン",
    "jockeyName": "浜中",
    "totalPoint": 13.79,
    "horsePoint": 0.73,
    "jockeyPoint": 3.26,
    "framePoint": 4.05,
    "timePoint": 4.27,
    "racePoint": 4.6,
    "roubdTotalPoint": 3.51
  },
  {
    "horseNumber": 6,
    "horseName": "トップウイナー",
    "jockeyName": "和田竜",
    "totalPoint": 12.85,
    "horsePoint": 3.03,
    "jockeyPoint": 3.15,
    "framePoint": 4.05,
    "timePoint": 0.96,
    "racePoint": 3.51,
    "roubdTotalPoint": 3.27
  },
  {
    "horseNumber": 7,
    "horseName": "ナムラカメタロー",
    "jockeyName": "小牧",
    "totalPoint": 12.73,
    "horsePoint": 3.35,
    "jockeyPoint": 2.47,
    "framePoint": 1.19,
    "timePoint": 4.29,
    "racePoint": 3.85,
    "roubdTotalPoint": 3.24
  },
  {
    "horseNumber": 14,
    "horseName": "タイガーインディ",
    "jockeyName": "熊沢",
    "totalPoint": 12.63,
    "horsePoint": 1.97,
    "jockeyPoint": 1.86,
    "framePoint": 5,
    "timePoint": 3.5,
    "racePoint": 3.14,
    "roubdTotalPoint": 3.21
  },
  {
    "horseNumber": 10,
    "horseName": "サンライズホープ",
    "jockeyName": "幸",
    "totalPoint": 12.59,
    "horsePoint": 1.93,
    "jockeyPoint": 3.18,
    "framePoint": 2.38,
    "timePoint": 4.1,
    "racePoint": 2.55,
    "roubdTotalPoint": 3.2
  },
  {
    "horseNumber": 3,
    "horseName": "メイショウカズサ",
    "jockeyName": "松山",
    "totalPoint": 12.17,
    "horsePoint": 3.35,
    "jockeyPoint": 3.54,
    "framePoint": 1.19,
    "timePoint": 2.87,
    "racePoint": 1.55,
    "roubdTotalPoint": 3.09
  },
  {
    "horseNumber": 11,
    "horseName": "ペプチドバンブー",
    "jockeyName": "富田",
    "totalPoint": 11.83,
    "horsePoint": 3.57,
    "jockeyPoint": 1.91,
    "framePoint": 1.67,
    "timePoint": 4.15,
    "racePoint": 2.33,
    "roubdTotalPoint": 3.01
  },
  {
    "horseNumber": 4,
    "horseName": "マリオマッハー",
    "jockeyName": "森裕",
    "totalPoint": 10.53,
    "horsePoint": 1.07,
    "jockeyPoint": 3.27,
    "framePoint": 1.19,
    "timePoint": 4.04,
    "racePoint": 1.74,
    "roubdTotalPoint": 2.68
  }
]
const top_forecast_data = [
  {
    "horseNumber": 8,
    "horseName": "ワイドファラオ",
    "jockeyName": "福永",
    "totalPoint": 10.09,
    "horsePoint": 4.67,
    "jockeyPoint": 3.87,
    "framePoint": 0,
    "timePoint": 3.85,
    "racePoint": 3.11,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 15,
    "horseName": "スマートダンディー",
    "jockeyName": "秋山真",
    "totalPoint": 9.86,
    "horsePoint": 4.37,
    "jockeyPoint": 3.92,
    "framePoint": 3.62,
    "timePoint": 4.9,
    "racePoint": 4.53,
    "roubdTotalPoint": 4.89
  },
  {
    "horseNumber": 9,
    "horseName": "ウェスタールンド",
    "jockeyName": "藤岡佑",
    "totalPoint": 9.27,
    "horsePoint": 5,
    "jockeyPoint": 3.05,
    "framePoint": 0,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 4.59
  },
  {
    "horseNumber": 13,
    "horseName": "タイサイ",
    "jockeyName": "中井",
    "totalPoint": 8.6,
    "horsePoint": 1.6,
    "jockeyPoint": 5,
    "framePoint": 5,
    "timePoint": 3.94,
    "racePoint": 3.39,
    "roubdTotalPoint": 4.26
  },
  {
    "horseNumber": 3,
    "horseName": "メイショウカズサ",
    "jockeyName": "松山",
    "totalPoint": 7.73,
    "horsePoint": 2.55,
    "jockeyPoint": 3.7,
    "framePoint": 1.21,
    "timePoint": 2.87,
    "racePoint": 1.55,
    "roubdTotalPoint": 3.83
  },
  {
    "horseNumber": 12,
    "horseName": "ダノンスプレンダー",
    "jockeyName": "川田",
    "totalPoint": 7.28,
    "horsePoint": 1.02,
    "jockeyPoint": 4.47,
    "framePoint": 1.21,
    "timePoint": 4.46,
    "racePoint": 3.73,
    "roubdTotalPoint": 3.61
  },
  {
    "horseNumber": 6,
    "horseName": "トップウイナー",
    "jockeyName": "和田竜",
    "totalPoint": 7.07,
    "horsePoint": 3.21,
    "jockeyPoint": 2.76,
    "framePoint": 5,
    "timePoint": 0.96,
    "racePoint": 3.51,
    "roubdTotalPoint": 3.5
  },
  {
    "horseNumber": 10,
    "horseName": "サンライズホープ",
    "jockeyName": "幸",
    "totalPoint": 6.59,
    "horsePoint": 2.04,
    "jockeyPoint": 3.25,
    "framePoint": 0,
    "timePoint": 4.1,
    "racePoint": 2.55,
    "roubdTotalPoint": 3.27
  },
  {
    "horseNumber": 1,
    "horseName": "メイショウワザシ",
    "jockeyName": "西村淳",
    "totalPoint": 5.96,
    "horsePoint": 2.54,
    "jockeyPoint": 2.44,
    "framePoint": 1.21,
    "timePoint": 4.29,
    "racePoint": 3.88,
    "roubdTotalPoint": 2.95
  },
  {
    "horseNumber": 2,
    "horseName": "アヴァンティスト",
    "jockeyName": "松若",
    "totalPoint": 5.88,
    "horsePoint": 2.83,
    "jockeyPoint": 2.18,
    "framePoint": 1.21,
    "timePoint": 4.77,
    "racePoint": 3.01,
    "roubdTotalPoint": 2.91
  },
  {
    "horseNumber": 14,
    "horseName": "タイガーインディ",
    "jockeyName": "熊沢",
    "totalPoint": 5.73,
    "horsePoint": 2.15,
    "jockeyPoint": 2.56,
    "framePoint": 5,
    "timePoint": 3.5,
    "racePoint": 3.14,
    "roubdTotalPoint": 2.84
  },
  {
    "horseNumber": 4,
    "horseName": "マリオマッハー",
    "jockeyName": "森裕",
    "totalPoint": 5.29,
    "horsePoint": 1.64,
    "jockeyPoint": 2.61,
    "framePoint": 1.21,
    "timePoint": 4.04,
    "racePoint": 1.74,
    "roubdTotalPoint": 2.62
  },
  {
    "horseNumber": 5,
    "horseName": "ブラックムーン",
    "jockeyName": "浜中",
    "totalPoint": 4.9,
    "horsePoint": 0.43,
    "jockeyPoint": 3.19,
    "framePoint": 5,
    "timePoint": 4.27,
    "racePoint": 4.6,
    "roubdTotalPoint": 2.43
  },
  {
    "horseNumber": 7,
    "horseName": "ナムラカメタロー",
    "jockeyName": "小牧",
    "totalPoint": 4.45,
    "horsePoint": 1.57,
    "jockeyPoint": 2.06,
    "framePoint": 0,
    "timePoint": 4.29,
    "racePoint": 3.85,
    "roubdTotalPoint": 2.21
  },
  {
    "horseNumber": 11,
    "horseName": "ペプチドバンブー",
    "jockeyName": "富田",
    "totalPoint": 4.4,
    "horsePoint": 2.48,
    "jockeyPoint": 1.37,
    "framePoint": 1.21,
    "timePoint": 4.15,
    "racePoint": 2.33,
    "roubdTotalPoint": 2.18
  },
  {
    "horseNumber": 16,
    "horseName": "メイショウウズマサ",
    "jockeyName": "斎藤",
    "totalPoint": 4.12,
    "horsePoint": 1.45,
    "jockeyPoint": 1.91,
    "framePoint": 3.62,
    "timePoint": 4.33,
    "racePoint": 2.52,
    "roubdTotalPoint": 2.04
  }
]

export default Index;

