import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第38回 エプソムカップ(G3)"
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
    "horseNumber": 8,
    "horseName": "アルジャンナ",
    "jockeyName": "ルメール",
    "totalPoint": 18.41,
    "horsePoint": 4.25,
    "jockeyPoint": 5,
    "framePoint": 3.82,
    "timePoint": 3.14,
    "racePoint": 3.98,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 13,
    "horseName": "サトノフラッグ",
    "jockeyName": "戸崎圭",
    "totalPoint": 17.92,
    "horsePoint": 5,
    "jockeyPoint": 4.13,
    "framePoint": 3.24,
    "timePoint": 3.76,
    "racePoint": 3.84,
    "roubdTotalPoint": 4.87
  },
  {
    "horseNumber": 15,
    "horseName": "ザダル",
    "jockeyName": "石橋脩",
    "totalPoint": 16.68,
    "horsePoint": 4.47,
    "jockeyPoint": 3.23,
    "framePoint": 3.24,
    "timePoint": 3.99,
    "racePoint": 4.76,
    "roubdTotalPoint": 4.53
  },
  {
    "horseNumber": 16,
    "horseName": "シュリ",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 16.59,
    "horsePoint": 1.96,
    "jockeyPoint": 4.37,
    "framePoint": 4.41,
    "timePoint": 3.92,
    "racePoint": 4.62,
    "roubdTotalPoint": 4.51
  },
  {
    "horseNumber": 7,
    "horseName": "ファルコニア",
    "jockeyName": "川田",
    "totalPoint": 16.5,
    "horsePoint": 3.22,
    "jockeyPoint": 4.52,
    "framePoint": 3.82,
    "timePoint": 3.19,
    "racePoint": 3.36,
    "roubdTotalPoint": 4.48
  },
  {
    "horseNumber": 17,
    "horseName": "アドマイヤビルゴ",
    "jockeyName": "岩田望",
    "totalPoint": 16.39,
    "horsePoint": 4.3,
    "jockeyPoint": 3.39,
    "framePoint": 4.41,
    "timePoint": 2.89,
    "racePoint": 3.75,
    "roubdTotalPoint": 4.45
  },
  {
    "horseNumber": 3,
    "horseName": "ヴェロックス",
    "jockeyName": "浜中",
    "totalPoint": 16.34,
    "horsePoint": 4.65,
    "jockeyPoint": 3.14,
    "framePoint": 3.24,
    "timePoint": 3.67,
    "racePoint": 4.42,
    "roubdTotalPoint": 4.44
  },
  {
    "horseNumber": 5,
    "horseName": "○外エアアルマス",
    "jockeyName": "三浦",
    "totalPoint": 16.14,
    "horsePoint": 1.72,
    "jockeyPoint": 3.16,
    "framePoint": 5,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 4.38
  },
  {
    "horseNumber": 18,
    "horseName": "アトミックフォース",
    "jockeyName": "武藤",
    "totalPoint": 14.68,
    "horsePoint": 3.17,
    "jockeyPoint": 2.58,
    "framePoint": 4.41,
    "timePoint": 3.44,
    "racePoint": 4.04,
    "roubdTotalPoint": 3.99
  },
  {
    "horseNumber": 2,
    "horseName": "マイラプソディ",
    "jockeyName": "武豊",
    "totalPoint": 14.17,
    "horsePoint": 2.74,
    "jockeyPoint": 3.4,
    "framePoint": 4.41,
    "timePoint": 2.43,
    "racePoint": 3,
    "roubdTotalPoint": 3.85
  },
  {
    "horseNumber": 6,
    "horseName": "ヒュミドール",
    "jockeyName": "吉田豊",
    "totalPoint": 13.63,
    "horsePoint": 1.33,
    "jockeyPoint": 2.63,
    "framePoint": 5,
    "timePoint": 3.72,
    "racePoint": 4.1,
    "roubdTotalPoint": 3.7
  },
  {
    "horseNumber": 1,
    "horseName": "プレシャスブルー",
    "jockeyName": "柴田善",
    "totalPoint": 13.27,
    "horsePoint": 1.76,
    "jockeyPoint": 2.81,
    "framePoint": 4.41,
    "timePoint": 3.17,
    "racePoint": 3.79,
    "roubdTotalPoint": 3.6
  },
  {
    "horseNumber": 4,
    "horseName": "セダブリランテス",
    "jockeyName": "石川",
    "totalPoint": 12.87,
    "horsePoint": 1.76,
    "jockeyPoint": 2.52,
    "framePoint": 3.24,
    "timePoint": 4.08,
    "racePoint": 4.31,
    "roubdTotalPoint": 3.5
  },
  {
    "horseNumber": 9,
    "horseName": "ヤシャマル",
    "jockeyName": "木幡巧",
    "totalPoint": 12.76,
    "horsePoint": 3.77,
    "jockeyPoint": 2.32,
    "framePoint": 2.06,
    "timePoint": 3.07,
    "racePoint": 4.1,
    "roubdTotalPoint": 3.47
  },
  {
    "horseNumber": 12,
    "horseName": "ミラアイトーン",
    "jockeyName": "菊沢",
    "totalPoint": 12.02,
    "horsePoint": 2.16,
    "jockeyPoint": 1.71,
    "framePoint": 3.24,
    "timePoint": 3.88,
    "racePoint": 4.43,
    "roubdTotalPoint": 3.26
  },
  {
    "horseNumber": 10,
    "horseName": "ワンダープチュック",
    "jockeyName": "田辺",
    "totalPoint": 11.77,
    "horsePoint": 1.36,
    "jockeyPoint": 3.22,
    "framePoint": 2.06,
    "timePoint": 3.37,
    "racePoint": 3.9,
    "roubdTotalPoint": 3.2
  },
  {
    "horseNumber": 11,
    "horseName": "ニシノデイジー",
    "jockeyName": "江田照",
    "totalPoint": 10.58,
    "horsePoint": 1.33,
    "jockeyPoint": 1.87,
    "framePoint": 3.24,
    "timePoint": 2.96,
    "racePoint": 4.17,
    "roubdTotalPoint": 2.87
  },
  {
    "horseNumber": 14,
    "horseName": "ガロアクリーク",
    "jockeyName": "野中",
    "totalPoint": 9.58,
    "horsePoint": 2.78,
    "jockeyPoint": 2.13,
    "framePoint": 3.24,
    "timePoint": 1.15,
    "racePoint": 0.76,
    "roubdTotalPoint": 2.6
  }
]
const top_forecast_data = [
  {
    "horseNumber": 3,
    "horseName": "ヴェロックス",
    "jockeyName": "浜中",
    "totalPoint": 11.56,
    "horsePoint": 4.56,
    "jockeyPoint": 5,
    "framePoint": 1.2,
    "timePoint": 3.67,
    "racePoint": 4.42,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 13,
    "horseName": "サトノフラッグ",
    "jockeyName": "戸崎圭",
    "totalPoint": 10.22,
    "horsePoint": 5,
    "jockeyPoint": 3.73,
    "framePoint": 1.2,
    "timePoint": 3.76,
    "racePoint": 3.84,
    "roubdTotalPoint": 4.42
  },
  {
    "horseNumber": 8,
    "horseName": "アルジャンナ",
    "jockeyName": "ルメール",
    "totalPoint": 9.12,
    "horsePoint": 2.43,
    "jockeyPoint": 4.78,
    "framePoint": 1.2,
    "timePoint": 3.14,
    "racePoint": 3.98,
    "roubdTotalPoint": 3.94
  },
  {
    "horseNumber": 17,
    "horseName": "アドマイヤビルゴ",
    "jockeyName": "岩田望",
    "totalPoint": 8.52,
    "horsePoint": 4.54,
    "jockeyPoint": 2.84,
    "framePoint": 2.6,
    "timePoint": 2.89,
    "racePoint": 3.75,
    "roubdTotalPoint": 3.69
  },
  {
    "horseNumber": 16,
    "horseName": "シュリ",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 7.62,
    "horsePoint": 1.5,
    "jockeyPoint": 4.37,
    "framePoint": 2.6,
    "timePoint": 3.92,
    "racePoint": 4.62,
    "roubdTotalPoint": 3.3
  },
  {
    "horseNumber": 7,
    "horseName": "ファルコニア",
    "jockeyName": "川田",
    "totalPoint": 6.35,
    "horsePoint": 0.51,
    "jockeyPoint": 4.17,
    "framePoint": 1.2,
    "timePoint": 3.19,
    "racePoint": 3.36,
    "roubdTotalPoint": 2.75
  },
  {
    "horseNumber": 15,
    "horseName": "ザダル",
    "jockeyName": "石橋脩",
    "totalPoint": 6.26,
    "horsePoint": 2.9,
    "jockeyPoint": 2.4,
    "framePoint": 1.2,
    "timePoint": 3.99,
    "racePoint": 4.76,
    "roubdTotalPoint": 2.71
  },
  {
    "horseNumber": 2,
    "horseName": "マイラプソディ",
    "jockeyName": "武豊",
    "totalPoint": 5.44,
    "horsePoint": 1.24,
    "jockeyPoint": 3,
    "framePoint": 5,
    "timePoint": 2.43,
    "racePoint": 3,
    "roubdTotalPoint": 2.35
  },
  {
    "horseNumber": 4,
    "horseName": "セダブリランテス",
    "jockeyName": "石川",
    "totalPoint": 5.43,
    "horsePoint": 0.99,
    "jockeyPoint": 3.17,
    "framePoint": 1.2,
    "timePoint": 4.08,
    "racePoint": 4.31,
    "roubdTotalPoint": 2.35
  },
  {
    "horseNumber": 18,
    "horseName": "アトミックフォース",
    "jockeyName": "武藤",
    "totalPoint": 4.67,
    "horsePoint": 0.78,
    "jockeyPoint": 2.78,
    "framePoint": 2.6,
    "timePoint": 3.44,
    "racePoint": 4.04,
    "roubdTotalPoint": 2.02
  },
  {
    "horseNumber": 6,
    "horseName": "ヒュミドール",
    "jockeyName": "吉田豊",
    "totalPoint": 4.34,
    "horsePoint": 0.43,
    "jockeyPoint": 2.79,
    "framePoint": 3.8,
    "timePoint": 3.72,
    "racePoint": 4.1,
    "roubdTotalPoint": 1.88
  },
  {
    "horseNumber": 14,
    "horseName": "ガロアクリーク",
    "jockeyName": "野中",
    "totalPoint": 4.32,
    "horsePoint": 1.93,
    "jockeyPoint": 1.71,
    "framePoint": 1.2,
    "timePoint": 1.15,
    "racePoint": 0.76,
    "roubdTotalPoint": 1.87
  },
  {
    "horseNumber": 5,
    "horseName": "○外エアアルマス",
    "jockeyName": "三浦",
    "totalPoint": 4.08,
    "horsePoint": 0.45,
    "jockeyPoint": 2.59,
    "framePoint": 3.8,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 1.76
  },
  {
    "horseNumber": 10,
    "horseName": "ワンダープチュック",
    "jockeyName": "田辺",
    "totalPoint": 4.03,
    "horsePoint": 0.21,
    "jockeyPoint": 2.73,
    "framePoint": 1.2,
    "timePoint": 3.37,
    "racePoint": 3.9,
    "roubdTotalPoint": 1.74
  },
  {
    "horseNumber": 9,
    "horseName": "ヤシャマル",
    "jockeyName": "木幡巧",
    "totalPoint": 3.61,
    "horsePoint": 0.99,
    "jockeyPoint": 1.87,
    "framePoint": 1.2,
    "timePoint": 3.07,
    "racePoint": 4.1,
    "roubdTotalPoint": 1.56
  },
  {
    "horseNumber": 11,
    "horseName": "ニシノデイジー",
    "jockeyName": "江田照",
    "totalPoint": 3.58,
    "horsePoint": 0.56,
    "jockeyPoint": 2.16,
    "framePoint": 3.8,
    "timePoint": 2.96,
    "racePoint": 4.17,
    "roubdTotalPoint": 1.55
  },
  {
    "horseNumber": 12,
    "horseName": "ミラアイトーン",
    "jockeyName": "菊沢",
    "totalPoint": 2.77,
    "horsePoint": 0.68,
    "jockeyPoint": 1.49,
    "framePoint": 3.8,
    "timePoint": 3.88,
    "racePoint": 4.43,
    "roubdTotalPoint": 1.2
  },
  {
    "horseNumber": 1,
    "horseName": "プレシャスブルー",
    "jockeyName": "柴田善",
    "totalPoint": 2.75,
    "horsePoint": 0.64,
    "jockeyPoint": 1.51,
    "framePoint": 5,
    "timePoint": 3.17,
    "racePoint": 3.79,
    "roubdTotalPoint": 1.19
  }
]

export default Index;

