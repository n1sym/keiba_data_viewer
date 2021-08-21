import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";
import {RaceForecastTableG3tan} from "../../../../components/RaceForecastTableG3tan"

const title = "第56回 北九州記念(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202110040411"

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
    "horseName": "○外ジャンダルム",
    "jockeyName": "福永",
    "totalPoint": 17.24,
    "horsePoint": 1.3,
    "jockeyPoint": 5,
    "framePoint": 3.68,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 11,
    "horseName": "アウィルアウェイ",
    "jockeyName": "松山",
    "totalPoint": 16.11,
    "horsePoint": 4.35,
    "jockeyPoint": 2.72,
    "framePoint": 4.21,
    "timePoint": 3.84,
    "racePoint": 3.78,
    "roubdTotalPoint": 4.67
  },
  {
    "horseNumber": 12,
    "horseName": "○外モズスーパーフレア",
    "jockeyName": "松若",
    "totalPoint": 14.72,
    "horsePoint": 5,
    "jockeyPoint": 1.62,
    "framePoint": 4.21,
    "timePoint": 3.45,
    "racePoint": 3.3,
    "roubdTotalPoint": 4.27
  },
  {
    "horseNumber": 17,
    "horseName": "ヨカヨカ",
    "jockeyName": "幸",
    "totalPoint": 13.71,
    "horsePoint": 3.76,
    "jockeyPoint": 1.47,
    "framePoint": 5,
    "timePoint": 3.43,
    "racePoint": 2.87,
    "roubdTotalPoint": 3.98
  },
  {
    "horseNumber": 16,
    "horseName": "アスコルターレ",
    "jockeyName": "藤岡康",
    "totalPoint": 13.4,
    "horsePoint": 3.92,
    "jockeyPoint": 1.25,
    "framePoint": 5,
    "timePoint": 3.3,
    "racePoint": 2.73,
    "roubdTotalPoint": 3.89
  },
  {
    "horseNumber": 9,
    "horseName": "シゲルピンクルビー",
    "jockeyName": "和田竜",
    "totalPoint": 13.24,
    "horsePoint": 4.45,
    "jockeyPoint": 2.28,
    "framePoint": 3.16,
    "timePoint": 2.77,
    "racePoint": 2.13,
    "roubdTotalPoint": 3.84
  },
  {
    "horseNumber": 18,
    "horseName": "ボンボヤージ",
    "jockeyName": "岩田望",
    "totalPoint": 13.11,
    "horsePoint": 1.77,
    "jockeyPoint": 2.28,
    "framePoint": 5,
    "timePoint": 3.58,
    "racePoint": 3.21,
    "roubdTotalPoint": 3.8
  },
  {
    "horseNumber": 14,
    "horseName": "レッドアンシェル",
    "jockeyName": "武豊",
    "totalPoint": 12.65,
    "horsePoint": 2.87,
    "jockeyPoint": 3.31,
    "framePoint": 2.37,
    "timePoint": 3.3,
    "racePoint": 1.53,
    "roubdTotalPoint": 3.67
  },
  {
    "horseNumber": 6,
    "horseName": "○地ファストフォース",
    "jockeyName": "鮫島駿",
    "totalPoint": 12.24,
    "horsePoint": 3.5,
    "jockeyPoint": 1.54,
    "framePoint": 3.68,
    "timePoint": 3.28,
    "racePoint": 2.53,
    "roubdTotalPoint": 3.55
  },
  {
    "horseNumber": 3,
    "horseName": "コンパウンダー",
    "jockeyName": "荻野極",
    "totalPoint": 11.94,
    "horsePoint": 3.32,
    "jockeyPoint": 1.03,
    "framePoint": 3.68,
    "timePoint": 3.8,
    "racePoint": 2.98,
    "roubdTotalPoint": 3.46
  },
  {
    "horseNumber": 10,
    "horseName": "メイショウカリン",
    "jockeyName": "酒井",
    "totalPoint": 11.64,
    "horsePoint": 3.15,
    "jockeyPoint": 1.47,
    "framePoint": 3.16,
    "timePoint": 3.5,
    "racePoint": 2.76,
    "roubdTotalPoint": 3.38
  },
  {
    "horseNumber": 15,
    "horseName": "○地メイショウキョウジ",
    "jockeyName": "斎藤",
    "totalPoint": 11.22,
    "horsePoint": 3.8,
    "jockeyPoint": 0.96,
    "framePoint": 2.37,
    "timePoint": 3.61,
    "racePoint": 3.24,
    "roubdTotalPoint": 3.25
  },
  {
    "horseNumber": 5,
    "horseName": "ロジクライ",
    "jockeyName": "秋山真",
    "totalPoint": 10.74,
    "horsePoint": 2.39,
    "jockeyPoint": 2.35,
    "framePoint": 3.68,
    "timePoint": 1.07,
    "racePoint": 3.15,
    "roubdTotalPoint": 3.11
  },
  {
    "horseNumber": 8,
    "horseName": "メイショウケイメイ",
    "jockeyName": "藤懸",
    "totalPoint": 10.3,
    "horsePoint": 2.04,
    "jockeyPoint": 0.96,
    "framePoint": 3.68,
    "timePoint": 3.48,
    "racePoint": 2.98,
    "roubdTotalPoint": 2.99
  },
  {
    "horseNumber": 1,
    "horseName": "ボンセルヴィーソ",
    "jockeyName": "富田",
    "totalPoint": 9.81,
    "horsePoint": 1.87,
    "jockeyPoint": 1.4,
    "framePoint": 0.53,
    "timePoint": 4.57,
    "racePoint": 4.74,
    "roubdTotalPoint": 2.85
  },
  {
    "horseNumber": 4,
    "horseName": "ノーワン",
    "jockeyName": "川又",
    "totalPoint": 9.28,
    "horsePoint": 2.89,
    "jockeyPoint": 0.66,
    "framePoint": 3.68,
    "timePoint": 1.48,
    "racePoint": 3.35,
    "roubdTotalPoint": 2.69
  },
  {
    "horseNumber": 2,
    "horseName": "エングレーバー",
    "jockeyName": "浜中",
    "totalPoint": 9.01,
    "horsePoint": 1.76,
    "jockeyPoint": 1.76,
    "framePoint": 0.53,
    "timePoint": 3.63,
    "racePoint": 3.64,
    "roubdTotalPoint": 2.61
  },
  {
    "horseNumber": 13,
    "horseName": "ファンタジステラ",
    "jockeyName": "藤井勘",
    "totalPoint": 6.87,
    "horsePoint": 2,
    "jockeyPoint": 0.22,
    "framePoint": 2.37,
    "timePoint": 2.62,
    "racePoint": 1.42,
    "roubdTotalPoint": 1.99
  }
]
const top_forecast_data = [
  {
    "horseNumber": 7,
    "horseName": "○外ジャンダルム",
    "jockeyName": "福永",
    "totalPoint": 20.27,
    "horsePoint": 1.92,
    "jockeyPoint": 5,
    "oikiriPoint": 4,
    "stablePoint": 4,
    "timePoint": 25,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 2,
    "horseName": "エングレーバー",
    "jockeyName": "浜中",
    "totalPoint": 14.3,
    "horsePoint": 1.77,
    "jockeyPoint": 0.91,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 25,
    "roubdTotalPoint": 3.53
  },
  {
    "horseNumber": 6,
    "horseName": "○地ファストフォース",
    "jockeyName": "鮫島駿",
    "totalPoint": 9.68,
    "horsePoint": 5,
    "jockeyPoint": 1.36,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 2.39
  },
  {
    "horseNumber": 14,
    "horseName": "レッドアンシェル",
    "jockeyName": "武豊",
    "totalPoint": 9.53,
    "horsePoint": 4.16,
    "jockeyPoint": 3.18,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 2.35
  },
  {
    "horseNumber": 9,
    "horseName": "シゲルピンクルビー",
    "jockeyName": "和田竜",
    "totalPoint": 8.7,
    "horsePoint": 3.9,
    "jockeyPoint": 0.91,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 2.15
  },
  {
    "horseNumber": 11,
    "horseName": "アウィルアウェイ",
    "jockeyName": "松山",
    "totalPoint": 8.21,
    "horsePoint": 2.24,
    "jockeyPoint": 1.97,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 6.5,
    "roubdTotalPoint": 2.03
  },
  {
    "horseNumber": 12,
    "horseName": "○外モズスーパーフレア",
    "jockeyName": "松若",
    "totalPoint": 7.45,
    "horsePoint": 1.91,
    "jockeyPoint": 1.36,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 3.5,
    "roubdTotalPoint": 1.84
  },
  {
    "horseNumber": 10,
    "horseName": "メイショウカリン",
    "jockeyName": "酒井",
    "totalPoint": 6.85,
    "horsePoint": 2.16,
    "jockeyPoint": 0.61,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 7.5,
    "roubdTotalPoint": 1.69
  },
  {
    "horseNumber": 17,
    "horseName": "ヨカヨカ",
    "jockeyName": "幸",
    "totalPoint": 6.68,
    "horsePoint": 1.74,
    "jockeyPoint": 0.61,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 7.5,
    "roubdTotalPoint": 1.65
  },
  {
    "horseNumber": 18,
    "horseName": "ボンボヤージ",
    "jockeyName": "岩田望",
    "totalPoint": 6.23,
    "horsePoint": 0.17,
    "jockeyPoint": 0.76,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 7.5,
    "roubdTotalPoint": 1.54
  },
  {
    "horseNumber": 13,
    "horseName": "ファンタジステラ",
    "jockeyName": "藤井勘",
    "totalPoint": 5.65,
    "horsePoint": 2.64,
    "jockeyPoint": 0.45,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 1.39
  },
  {
    "horseNumber": 16,
    "horseName": "アスコルターレ",
    "jockeyName": "藤岡康",
    "totalPoint": 5.53,
    "horsePoint": 0.97,
    "jockeyPoint": 0.91,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 1.36
  },
  {
    "horseNumber": 3,
    "horseName": "コンパウンダー",
    "jockeyName": "荻野極",
    "totalPoint": 5.25,
    "horsePoint": 3.68,
    "jockeyPoint": 0.61,
    "oikiriPoint": 2,
    "stablePoint": 0,
    "timePoint": 3.5,
    "roubdTotalPoint": 1.3
  },
  {
    "horseNumber": 8,
    "horseName": "メイショウケイメイ",
    "jockeyName": "藤懸",
    "totalPoint": 4.68,
    "horsePoint": 1.29,
    "jockeyPoint": 0.76,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 7.5,
    "roubdTotalPoint": 1.15
  },
  {
    "horseNumber": 1,
    "horseName": "ボンセルヴィーソ",
    "jockeyName": "富田",
    "totalPoint": 4.42,
    "horsePoint": 0.83,
    "jockeyPoint": 0.91,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 1.09
  },
  {
    "horseNumber": 15,
    "horseName": "○地メイショウキョウジ",
    "jockeyName": "斎藤",
    "totalPoint": 4.33,
    "horsePoint": 4.79,
    "jockeyPoint": 0.3,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 1.07
  },
  {
    "horseNumber": 4,
    "horseName": "ノーワン",
    "jockeyName": "川又",
    "totalPoint": 3.43,
    "horsePoint": 2.55,
    "jockeyPoint": 0.3,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 0.85
  },
  {
    "horseNumber": 5,
    "horseName": "ロジクライ",
    "jockeyName": "秋山真",
    "totalPoint": 2.97,
    "horsePoint": 1.75,
    "jockeyPoint": 1.06,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 0.73
  }
]

export default Index;

