import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第55回スプリンターズS(G1)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202106040911&rf=race_submenu"

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
    "horseName": "ダノンスマッシュ",
    "jockeyName": "川田",
    "totalPoint": 11.73,
    "horsePoint": 5,
    "jockeyPoint": 3.6,
    "framePoint": 5,
    "timePoint": 0.89,
    "racePoint": 0.66,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 12,
    "horseName": "レシステンシア",
    "jockeyName": "ルメール",
    "totalPoint": 8.86,
    "horsePoint": 4.05,
    "jockeyPoint": 3.6,
    "framePoint": 0.43,
    "timePoint": 5,
    "racePoint": 4.75,
    "roubdTotalPoint": 3.78
  },
  {
    "horseNumber": 13,
    "horseName": "アウィルアウェイ",
    "jockeyName": "戸崎圭",
    "totalPoint": 8.48,
    "horsePoint": 2.54,
    "jockeyPoint": 2.07,
    "framePoint": 5,
    "timePoint": 3.89,
    "racePoint": 4.37,
    "roubdTotalPoint": 3.61
  },
  {
    "horseNumber": 8,
    "horseName": "ビアンフェ",
    "jockeyName": "藤岡佑",
    "totalPoint": 7.37,
    "horsePoint": 2.26,
    "jockeyPoint": 2.2,
    "framePoint": 3.48,
    "timePoint": 3.82,
    "racePoint": 4.11,
    "roubdTotalPoint": 3.14
  },
  {
    "horseNumber": 9,
    "horseName": "クリノガウディー",
    "jockeyName": "岩田康",
    "totalPoint": 7.23,
    "horsePoint": 1.23,
    "jockeyPoint": 3.67,
    "framePoint": 2.39,
    "timePoint": 4.34,
    "racePoint": 4.49,
    "roubdTotalPoint": 3.08
  },
  {
    "horseNumber": 16,
    "horseName": "○外モズスーパーフレア",
    "jockeyName": "松若",
    "totalPoint": 7.15,
    "horsePoint": 3.77,
    "jockeyPoint": 1.33,
    "framePoint": 1.96,
    "timePoint": 3.7,
    "racePoint": 4.39,
    "roubdTotalPoint": 3.05
  },
  {
    "horseNumber": 7,
    "horseName": "タイセイビジョン",
    "jockeyName": "三浦",
    "totalPoint": 7.1,
    "horsePoint": 1.87,
    "jockeyPoint": 2.27,
    "framePoint": 3.48,
    "timePoint": 4.29,
    "racePoint": 4.38,
    "roubdTotalPoint": 3.03
  },
  {
    "horseNumber": 3,
    "horseName": "ラヴィングアンサー",
    "jockeyName": "岩田望",
    "totalPoint": 7.02,
    "horsePoint": 1,
    "jockeyPoint": 3,
    "framePoint": 3.48,
    "timePoint": 4.21,
    "racePoint": 4.64,
    "roubdTotalPoint": 2.99
  },
  {
    "horseNumber": 2,
    "horseName": "ミッキーブリランテ",
    "jockeyName": "和田竜",
    "totalPoint": 6.68,
    "horsePoint": 1.76,
    "jockeyPoint": 2.2,
    "framePoint": 3.04,
    "timePoint": 4.27,
    "racePoint": 4.5,
    "roubdTotalPoint": 2.85
  },
  {
    "horseNumber": 1,
    "horseName": "○外シヴァージ",
    "jockeyName": "吉田隼",
    "totalPoint": 6.01,
    "horsePoint": 3.25,
    "jockeyPoint": 0,
    "framePoint": 3.04,
    "timePoint": 4.46,
    "racePoint": 4.66,
    "roubdTotalPoint": 2.56
  },
  {
    "horseNumber": 4,
    "horseName": "ピクシーナイト",
    "jockeyName": "福永",
    "totalPoint": 6,
    "horsePoint": 3.03,
    "jockeyPoint": 0,
    "framePoint": 3.48,
    "timePoint": 4.55,
    "racePoint": 4.42,
    "roubdTotalPoint": 2.56
  },
  {
    "horseNumber": 10,
    "horseName": "エイティーンガール",
    "jockeyName": "横山和",
    "totalPoint": 5.03,
    "horsePoint": 1.84,
    "jockeyPoint": 0.93,
    "framePoint": 2.39,
    "timePoint": 3.61,
    "racePoint": 4.14,
    "roubdTotalPoint": 2.14
  },
  {
    "horseNumber": 6,
    "horseName": "メイケイエール",
    "jockeyName": "池添",
    "totalPoint": 4.71,
    "horsePoint": 1.92,
    "jockeyPoint": 0.8,
    "framePoint": 1.96,
    "timePoint": 3.57,
    "racePoint": 4.05,
    "roubdTotalPoint": 2.01
  },
  {
    "horseNumber": 5,
    "horseName": "○地ファストフォース",
    "jockeyName": "鮫島駿",
    "totalPoint": 4.51,
    "horsePoint": 1.17,
    "jockeyPoint": 1.33,
    "framePoint": 1.96,
    "timePoint": 3.64,
    "racePoint": 4.18,
    "roubdTotalPoint": 1.92
  },
  {
    "horseNumber": 15,
    "horseName": "ロードアクア",
    "jockeyName": "田中健",
    "totalPoint": 3.45,
    "horsePoint": 1.44,
    "jockeyPoint": 0,
    "framePoint": 1.96,
    "timePoint": 3.39,
    "racePoint": 4.17,
    "roubdTotalPoint": 1.47
  },
  {
    "horseNumber": 11,
    "horseName": "○外ジャンダルム",
    "jockeyName": "浜中",
    "totalPoint": 2.74,
    "horsePoint": 1.48,
    "jockeyPoint": 0,
    "framePoint": 0.43,
    "timePoint": 4.95,
    "racePoint": 5,
    "roubdTotalPoint": 1.17
  }
]
const top_forecast_data = [
  {
    "horseNumber": 14,
    "horseName": "ダノンスマッシュ",
    "jockeyName": "川田",
    "totalPoint": 11.68,
    "horsePoint": 5,
    "jockeyPoint": 3.55,
    "framePoint": 5,
    "timePoint": 0.89,
    "racePoint": 0.66,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 12,
    "horseName": "レシステンシア",
    "jockeyName": "ルメール",
    "totalPoint": 10.57,
    "horsePoint": 4.62,
    "jockeyPoint": 5,
    "framePoint": 0,
    "timePoint": 5,
    "racePoint": 4.75,
    "roubdTotalPoint": 4.52
  },
  {
    "horseNumber": 7,
    "horseName": "タイセイビジョン",
    "jockeyName": "三浦",
    "totalPoint": 7.19,
    "horsePoint": 2.26,
    "jockeyPoint": 1.05,
    "framePoint": 5,
    "timePoint": 4.29,
    "racePoint": 4.38,
    "roubdTotalPoint": 3.08
  },
  {
    "horseNumber": 13,
    "horseName": "アウィルアウェイ",
    "jockeyName": "戸崎圭",
    "totalPoint": 6.4,
    "horsePoint": 1.87,
    "jockeyPoint": 0.66,
    "framePoint": 5,
    "timePoint": 3.89,
    "racePoint": 4.37,
    "roubdTotalPoint": 2.74
  },
  {
    "horseNumber": 9,
    "horseName": "クリノガウディー",
    "jockeyName": "岩田康",
    "totalPoint": 6.15,
    "horsePoint": 1.18,
    "jockeyPoint": 2.89,
    "framePoint": 1.97,
    "timePoint": 4.34,
    "racePoint": 4.49,
    "roubdTotalPoint": 2.63
  },
  {
    "horseNumber": 8,
    "horseName": "ビアンフェ",
    "jockeyName": "藤岡佑",
    "totalPoint": 5.54,
    "horsePoint": 1.72,
    "jockeyPoint": 0,
    "framePoint": 5,
    "timePoint": 3.82,
    "racePoint": 4.11,
    "roubdTotalPoint": 2.37
  },
  {
    "horseNumber": 5,
    "horseName": "○地ファストフォース",
    "jockeyName": "鮫島駿",
    "totalPoint": 5.03,
    "horsePoint": 1.56,
    "jockeyPoint": 2.63,
    "framePoint": 0,
    "timePoint": 3.64,
    "racePoint": 4.18,
    "roubdTotalPoint": 2.15
  },
  {
    "horseNumber": 3,
    "horseName": "ラヴィングアンサー",
    "jockeyName": "岩田望",
    "totalPoint": 4.95,
    "horsePoint": 0.73,
    "jockeyPoint": 3.29,
    "framePoint": 0,
    "timePoint": 4.21,
    "racePoint": 4.64,
    "roubdTotalPoint": 2.12
  },
  {
    "horseNumber": 6,
    "horseName": "メイケイエール",
    "jockeyName": "池添",
    "totalPoint": 4.67,
    "horsePoint": 2.28,
    "jockeyPoint": 1.58,
    "framePoint": 0,
    "timePoint": 3.57,
    "racePoint": 4.05,
    "roubdTotalPoint": 2
  },
  {
    "horseNumber": 2,
    "horseName": "ミッキーブリランテ",
    "jockeyName": "和田竜",
    "totalPoint": 4.61,
    "horsePoint": 0.96,
    "jockeyPoint": 2.11,
    "framePoint": 1.06,
    "timePoint": 4.27,
    "racePoint": 4.5,
    "roubdTotalPoint": 1.97
  },
  {
    "horseNumber": 1,
    "horseName": "○外シヴァージ",
    "jockeyName": "吉田隼",
    "totalPoint": 3.82,
    "horsePoint": 2.25,
    "jockeyPoint": 0,
    "framePoint": 1.06,
    "timePoint": 4.46,
    "racePoint": 4.66,
    "roubdTotalPoint": 1.64
  },
  {
    "horseNumber": 10,
    "horseName": "エイティーンガール",
    "jockeyName": "横山和",
    "totalPoint": 3.5,
    "horsePoint": 0.96,
    "jockeyPoint": 0.53,
    "framePoint": 1.97,
    "timePoint": 3.61,
    "racePoint": 4.14,
    "roubdTotalPoint": 1.5
  },
  {
    "horseNumber": 15,
    "horseName": "ロードアクア",
    "jockeyName": "田中健",
    "totalPoint": 3.32,
    "horsePoint": 1.3,
    "jockeyPoint": 0,
    "framePoint": 1.97,
    "timePoint": 3.39,
    "racePoint": 4.17,
    "roubdTotalPoint": 1.42
  },
  {
    "horseNumber": 16,
    "horseName": "○外モズスーパーフレア",
    "jockeyName": "松若",
    "totalPoint": 3.22,
    "horsePoint": 1.16,
    "jockeyPoint": 0,
    "framePoint": 1.97,
    "timePoint": 3.7,
    "racePoint": 4.39,
    "roubdTotalPoint": 1.38
  },
  {
    "horseNumber": 4,
    "horseName": "ピクシーナイト",
    "jockeyName": "福永",
    "totalPoint": 2.53,
    "horsePoint": 1.65,
    "jockeyPoint": 0,
    "framePoint": 0,
    "timePoint": 4.55,
    "racePoint": 4.42,
    "roubdTotalPoint": 1.08
  },
  {
    "horseNumber": 11,
    "horseName": "○外ジャンダルム",
    "jockeyName": "浜中",
    "totalPoint": 1.73,
    "horsePoint": 0.73,
    "jockeyPoint": 0,
    "framePoint": 0,
    "timePoint": 4.95,
    "racePoint": 5,
    "roubdTotalPoint": 0.74
  }
]

export default Index;
