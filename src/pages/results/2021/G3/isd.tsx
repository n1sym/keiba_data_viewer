import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";
import {RaceForecastTableG3tan} from "../../../../components/RaceForecastTableG3tan"

const title = "第21回 アイビスサマーD(G3)"
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
    "horseNumber": 13,
    "horseName": "ビリーバー",
    "jockeyName": "杉原",
    "totalPoint": 14.72,
    "horsePoint": 4.33,
    "jockeyPoint": 0.98,
    "framePoint": 5,
    "timePoint": 3.98,
    "racePoint": 4.58,
    "roubdTotalPoint": 4.33
  },
  {
    "horseNumber": 12,
    "horseName": "ライオンボス",
    "jockeyName": "鮫島駿",
    "totalPoint": 13.5,
    "horsePoint": 4.1,
    "jockeyPoint": 1.71,
    "framePoint": 3,
    "timePoint": 4.09,
    "racePoint": 3.34,
    "roubdTotalPoint": 3.98
  },
  {
    "horseNumber": 6,
    "horseName": "モントライゼ",
    "jockeyName": "川田",
    "totalPoint": 13.28,
    "horsePoint": 5,
    "jockeyPoint": 1.83,
    "framePoint": 0.4,
    "timePoint": 4.64,
    "racePoint": 4.22,
    "roubdTotalPoint": 3.91
  },
  {
    "horseNumber": 14,
    "horseName": "オールアットワンス",
    "jockeyName": "石川",
    "totalPoint": 12.96,
    "horsePoint": 2.89,
    "jockeyPoint": 1.19,
    "framePoint": 5,
    "timePoint": 3.75,
    "racePoint": 3.51,
    "roubdTotalPoint": 3.82
  },
  {
    "horseNumber": 4,
    "horseName": "ジュランビル",
    "jockeyName": "松若",
    "totalPoint": 12.96,
    "horsePoint": 2.7,
    "jockeyPoint": 1.48,
    "framePoint": 3,
    "timePoint": 4.83,
    "racePoint": 4.82,
    "roubdTotalPoint": 3.82
  },
  {
    "horseNumber": 7,
    "horseName": "グレイトゲイナー",
    "jockeyName": "丸山",
    "totalPoint": 11.99,
    "horsePoint": 1.45,
    "jockeyPoint": 3.46,
    "framePoint": 0.8,
    "timePoint": 4.44,
    "racePoint": 3.75,
    "roubdTotalPoint": 3.53
  },
  {
    "horseNumber": 3,
    "horseName": "○地ヒロイックアゲン",
    "jockeyName": "荻野極",
    "totalPoint": 11.01,
    "horsePoint": 1.85,
    "jockeyPoint": 1.07,
    "framePoint": 3,
    "timePoint": 4.16,
    "racePoint": 4.84,
    "roubdTotalPoint": 3.24
  },
  {
    "horseNumber": 8,
    "horseName": "タマモメイトウ",
    "jockeyName": "津村",
    "totalPoint": 10.81,
    "horsePoint": 2.25,
    "jockeyPoint": 1.37,
    "framePoint": 0.8,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 3.18
  },
  {
    "horseNumber": 9,
    "horseName": "トキメキ",
    "jockeyName": "田辺",
    "totalPoint": 10.8,
    "horsePoint": 1.51,
    "jockeyPoint": 1.76,
    "framePoint": 2.6,
    "timePoint": 3.98,
    "racePoint": 3.91,
    "roubdTotalPoint": 3.18
  },
  {
    "horseNumber": 11,
    "horseName": "ロードエース",
    "jockeyName": "松山",
    "totalPoint": 10.65,
    "horsePoint": 1.75,
    "jockeyPoint": 0.91,
    "framePoint": 3,
    "timePoint": 4.34,
    "racePoint": 4.38,
    "roubdTotalPoint": 3.14
  },
  {
    "horseNumber": 16,
    "horseName": "ルドラクシャ",
    "jockeyName": "斎藤",
    "totalPoint": 9.25,
    "horsePoint": 1.47,
    "jockeyPoint": 1.32,
    "framePoint": 5,
    "timePoint": 1.6,
    "racePoint": 1.64,
    "roubdTotalPoint": 2.72
  },
  {
    "horseNumber": 15,
    "horseName": "セピアノーツ",
    "jockeyName": "藤田菜",
    "totalPoint": 8.93,
    "horsePoint": 1.44,
    "jockeyPoint": 1.07,
    "framePoint": 5,
    "timePoint": 1.91,
    "racePoint": 1.15,
    "roubdTotalPoint": 2.63
  },
  {
    "horseNumber": 10,
    "horseName": "アルミューテン",
    "jockeyName": "柴田大",
    "totalPoint": 8.8,
    "horsePoint": 1.09,
    "jockeyPoint": 1.16,
    "framePoint": 2.6,
    "timePoint": 3.12,
    "racePoint": 3.78,
    "roubdTotalPoint": 2.59
  },
  {
    "horseNumber": 1,
    "horseName": "バカラクイーン",
    "jockeyName": "菅原明",
    "totalPoint": 7.91,
    "horsePoint": 1.02,
    "jockeyPoint": 1.3,
    "framePoint": 0.4,
    "timePoint": 3.96,
    "racePoint": 3.96,
    "roubdTotalPoint": 2.33
  },
  {
    "horseNumber": 5,
    "horseName": "リッチクレマチス",
    "jockeyName": "原",
    "totalPoint": 5.35,
    "horsePoint": 1.22,
    "jockeyPoint": 0.43,
    "framePoint": 0.4,
    "timePoint": 2.43,
    "racePoint": 3.16,
    "roubdTotalPoint": 1.58
  },
  {
    "horseNumber": 2,
    "horseName": "○地モメチョッタ",
    "jockeyName": "城戸",
    "totalPoint": 3.92,
    "horsePoint": 1.23,
    "jockeyPoint": 0.99,
    "framePoint": 0.4,
    "timePoint": 0.83,
    "racePoint": 0.81,
    "roubdTotalPoint": 1.15
  }
]
const top_forecast_data = [
  {
    "horseNumber": 7,
    "horseName": "グレイトゲイナー",
    "jockeyName": "丸山",
    "totalPoint": 11.81,
    "horsePoint": 1.15,
    "jockeyPoint": 3.67,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 6.5,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 13,
    "horseName": "ビリーバー",
    "jockeyName": "杉原",
    "totalPoint": 11.67,
    "horsePoint": 1.79,
    "jockeyPoint": 5,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 6.5,
    "roubdTotalPoint": 4.94
  },
  {
    "horseNumber": 12,
    "horseName": "ライオンボス",
    "jockeyName": "鮫島駿",
    "totalPoint": 11.61,
    "horsePoint": 4.48,
    "jockeyPoint": 4.06,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 6.5,
    "roubdTotalPoint": 4.92
  },
  {
    "horseNumber": 6,
    "horseName": "モントライゼ",
    "jockeyName": "川田",
    "totalPoint": 10.61,
    "horsePoint": 5,
    "jockeyPoint": 3.05,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 6.5,
    "roubdTotalPoint": 4.49
  },
  {
    "horseNumber": 3,
    "horseName": "○地ヒロイックアゲン",
    "jockeyName": "荻野極",
    "totalPoint": 10.1,
    "horsePoint": 1.31,
    "jockeyPoint": 3.02,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 6.5,
    "roubdTotalPoint": 4.28
  },
  {
    "horseNumber": 8,
    "horseName": "タマモメイトウ",
    "jockeyName": "津村",
    "totalPoint": 9.89,
    "horsePoint": 1.33,
    "jockeyPoint": 3.67,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 6.5,
    "roubdTotalPoint": 4.19
  },
  {
    "horseNumber": 11,
    "horseName": "ロードエース",
    "jockeyName": "松山",
    "totalPoint": 8.72,
    "horsePoint": 1.62,
    "jockeyPoint": 3.6,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2.5,
    "roubdTotalPoint": 3.69
  },
  {
    "horseNumber": 4,
    "horseName": "ジュランビル",
    "jockeyName": "松若",
    "totalPoint": 7.6,
    "horsePoint": 4.45,
    "jockeyPoint": 1.1,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 5,
    "roubdTotalPoint": 3.22
  },
  {
    "horseNumber": 9,
    "horseName": "トキメキ",
    "jockeyName": "田辺",
    "totalPoint": 7.58,
    "horsePoint": 1.32,
    "jockeyPoint": 4.42,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 2.5,
    "roubdTotalPoint": 3.21
  },
  {
    "horseNumber": 14,
    "horseName": "オールアットワンス",
    "jockeyName": "石川",
    "totalPoint": 7.07,
    "horsePoint": 3.51,
    "jockeyPoint": 1.72,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2,
    "roubdTotalPoint": 2.99
  },
  {
    "horseNumber": 15,
    "horseName": "セピアノーツ",
    "jockeyName": "藤田菜",
    "totalPoint": 7.07,
    "horsePoint": 1.36,
    "jockeyPoint": 3.15,
    "oikiriPoint": 2,
    "stablePoint": 0,
    "timePoint": 2.5,
    "roubdTotalPoint": 2.99
  },
  {
    "horseNumber": 10,
    "horseName": "アルミューテン",
    "jockeyName": "柴田大",
    "totalPoint": 6.56,
    "horsePoint": 1.13,
    "jockeyPoint": 2.63,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 6.5,
    "roubdTotalPoint": 2.78
  },
  {
    "horseNumber": 1,
    "horseName": "バカラクイーン",
    "jockeyName": "菅原明",
    "totalPoint": 5.98,
    "horsePoint": 1.04,
    "jockeyPoint": 2.18,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 6.5,
    "roubdTotalPoint": 2.53
  },
  {
    "horseNumber": 16,
    "horseName": "ルドラクシャ",
    "jockeyName": "斎藤",
    "totalPoint": 3.94,
    "horsePoint": 1.47,
    "jockeyPoint": 2.79,
    "oikiriPoint": 0,
    "stablePoint": 0,
    "timePoint": 0,
    "roubdTotalPoint": 1.67
  },
  {
    "horseNumber": 2,
    "horseName": "○地モメチョッタ",
    "jockeyName": "城戸",
    "totalPoint": 3.02,
    "horsePoint": 1.22,
    "jockeyPoint": 2.11,
    "oikiriPoint": 0,
    "stablePoint": 0,
    "timePoint": 0,
    "roubdTotalPoint": 1.28
  },
  {
    "horseNumber": 5,
    "horseName": "リッチクレマチス",
    "jockeyName": "原",
    "totalPoint": 1.14,
    "horsePoint": 0.97,
    "jockeyPoint": 0,
    "oikiriPoint": 0,
    "stablePoint": 0,
    "timePoint": 2.5,
    "roubdTotalPoint": 0.48
  }
]

export default Index;

