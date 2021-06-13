import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第38回 エプソムカップ(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202105030411&rf=race_submenu"

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
    "date": "2021/06/13",
    "dirName": "2021/G3/epsom",
    "raceName": "エプソムC(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": 5600,
    "wide5box": 3630,
    "3huku5box": 12090,
    "1-2-3oddsRank": "3-6-2"
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
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 10
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
    "roubdTotalPoint": 4.87,
    "oddsRank": 6,
    "rank": 2
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
    "roubdTotalPoint": 4.53,
    "oddsRank": 3,
    "rank": 1
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
    "roubdTotalPoint": 4.51,
    "oddsRank": 4,
    "rank": 14
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
    "roubdTotalPoint": 4.48,
    "oddsRank": 2,
    "rank": 3
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
    "roubdTotalPoint": 4.45,
    "oddsRank": 7,
    "rank": 7
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
    "roubdTotalPoint": 4.44,
    "oddsRank": 8,
    "rank": 4
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
    "roubdTotalPoint": 4.38,
    "oddsRank": 14,
    "rank": 16
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
    "roubdTotalPoint": 3.99,
    "oddsRank": 13,
    "rank": 5
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
    "roubdTotalPoint": 3.85,
    "oddsRank": 10,
    "rank": 11
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
    "roubdTotalPoint": 3.7,
    "oddsRank": 11,
    "rank": 6
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
    "roubdTotalPoint": 3.6,
    "oddsRank": 18,
    "rank": 13
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
    "roubdTotalPoint": 3.5,
    "oddsRank": 9,
    "rank": 17
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
    "roubdTotalPoint": 3.47,
    "oddsRank": 5,
    "rank": 9
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
    "roubdTotalPoint": 3.26,
    "oddsRank": 15,
    "rank": 15
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
    "roubdTotalPoint": 3.2,
    "oddsRank": 17,
    "rank": 8
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
    "roubdTotalPoint": 2.87,
    "oddsRank": 16,
    "rank": 18
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
    "roubdTotalPoint": 2.6,
    "oddsRank": 12,
    "rank": 12
  }
]
const top_forecast_data = [
  {
    "horseNumber": 3,
    "horseName": "ヴェロックス",
    "jockeyName": "浜中",
    "totalPoint": 17.22,
    "horsePoint": 4.56,
    "jockeyPoint": 5,
    "framePoint": 1.2,
    "timePoint": 3.67,
    "racePoint": 4.42,
    "roubdTotalPoint": 5,
    "oddsRank": 8,
    "rank": 4
  },
  {
    "horseNumber": 13,
    "horseName": "サトノフラッグ",
    "jockeyName": "戸崎圭",
    "totalPoint": 15.73,
    "horsePoint": 5,
    "jockeyPoint": 3.73,
    "framePoint": 1.2,
    "timePoint": 3.76,
    "racePoint": 3.84,
    "roubdTotalPoint": 4.57,
    "oddsRank": 6,
    "rank": 2
  },
  {
    "horseNumber": 16,
    "horseName": "シュリ",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 14.68,
    "horsePoint": 1.5,
    "jockeyPoint": 4.37,
    "framePoint": 2.6,
    "timePoint": 3.92,
    "racePoint": 4.62,
    "roubdTotalPoint": 4.26,
    "oddsRank": 4,
    "rank": 14
  },
  {
    "horseNumber": 17,
    "horseName": "アドマイヤビルゴ",
    "jockeyName": "岩田望",
    "totalPoint": 14.41,
    "horsePoint": 4.54,
    "jockeyPoint": 2.84,
    "framePoint": 2.6,
    "timePoint": 2.89,
    "racePoint": 3.75,
    "roubdTotalPoint": 4.18,
    "oddsRank": 7,
    "rank": 7
  },
  {
    "horseNumber": 8,
    "horseName": "アルジャンナ",
    "jockeyName": "ルメール",
    "totalPoint": 14.19,
    "horsePoint": 2.43,
    "jockeyPoint": 4.78,
    "framePoint": 1.2,
    "timePoint": 3.14,
    "racePoint": 3.98,
    "roubdTotalPoint": 4.12,
    "oddsRank": 1,
    "rank": 10
  },
  {
    "horseNumber": 5,
    "horseName": "○外エアアルマス",
    "jockeyName": "三浦",
    "totalPoint": 13.12,
    "horsePoint": 0.45,
    "jockeyPoint": 2.59,
    "framePoint": 3.8,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 3.81,
    "oddsRank": 14,
    "rank": 16
  },
  {
    "horseNumber": 2,
    "horseName": "マイラプソディ",
    "jockeyName": "武豊",
    "totalPoint": 12.58,
    "horsePoint": 1.24,
    "jockeyPoint": 3,
    "framePoint": 5,
    "timePoint": 2.43,
    "racePoint": 3,
    "roubdTotalPoint": 3.65,
    "oddsRank": 10,
    "rank": 11
  },
  {
    "horseNumber": 15,
    "horseName": "ザダル",
    "jockeyName": "石橋脩",
    "totalPoint": 12.32,
    "horsePoint": 2.9,
    "jockeyPoint": 2.4,
    "framePoint": 1.2,
    "timePoint": 3.99,
    "racePoint": 4.76,
    "roubdTotalPoint": 3.58,
    "oddsRank": 3,
    "rank": 1
  },
  {
    "horseNumber": 6,
    "horseName": "ヒュミドール",
    "jockeyName": "吉田豊",
    "totalPoint": 11.99,
    "horsePoint": 0.43,
    "jockeyPoint": 2.79,
    "framePoint": 3.8,
    "timePoint": 3.72,
    "racePoint": 4.1,
    "roubdTotalPoint": 3.48,
    "oddsRank": 11,
    "rank": 6
  },
  {
    "horseNumber": 4,
    "horseName": "セダブリランテス",
    "jockeyName": "石川",
    "totalPoint": 11.38,
    "horsePoint": 0.99,
    "jockeyPoint": 3.17,
    "framePoint": 1.2,
    "timePoint": 4.08,
    "racePoint": 4.31,
    "roubdTotalPoint": 3.3,
    "oddsRank": 9,
    "rank": 17
  },
  {
    "horseNumber": 7,
    "horseName": "ファルコニア",
    "jockeyName": "川田",
    "totalPoint": 11.2,
    "horsePoint": 0.51,
    "jockeyPoint": 4.17,
    "framePoint": 1.2,
    "timePoint": 3.19,
    "racePoint": 3.36,
    "roubdTotalPoint": 3.25,
    "oddsRank": 2,
    "rank": 3
  },
  {
    "horseNumber": 18,
    "horseName": "アトミックフォース",
    "jockeyName": "武藤",
    "totalPoint": 11.12,
    "horsePoint": 0.78,
    "jockeyPoint": 2.78,
    "framePoint": 2.6,
    "timePoint": 3.44,
    "racePoint": 4.04,
    "roubdTotalPoint": 3.23,
    "oddsRank": 13,
    "rank": 5
  },
  {
    "horseNumber": 1,
    "horseName": "プレシャスブルー",
    "jockeyName": "柴田善",
    "totalPoint": 10.81,
    "horsePoint": 0.64,
    "jockeyPoint": 1.51,
    "framePoint": 5,
    "timePoint": 3.17,
    "racePoint": 3.79,
    "roubdTotalPoint": 3.14,
    "oddsRank": 18,
    "rank": 13
  },
  {
    "horseNumber": 12,
    "horseName": "ミラアイトーン",
    "jockeyName": "菊沢",
    "totalPoint": 10.68,
    "horsePoint": 0.68,
    "jockeyPoint": 1.49,
    "framePoint": 3.8,
    "timePoint": 3.88,
    "racePoint": 4.43,
    "roubdTotalPoint": 3.1,
    "oddsRank": 15,
    "rank": 15
  },
  {
    "horseNumber": 11,
    "horseName": "ニシノデイジー",
    "jockeyName": "江田照",
    "totalPoint": 10.66,
    "horsePoint": 0.56,
    "jockeyPoint": 2.16,
    "framePoint": 3.8,
    "timePoint": 2.96,
    "racePoint": 4.17,
    "roubdTotalPoint": 3.1,
    "oddsRank": 16,
    "rank": 18
  },
  {
    "horseNumber": 10,
    "horseName": "ワンダープチュック",
    "jockeyName": "田辺",
    "totalPoint": 9.25,
    "horsePoint": 0.21,
    "jockeyPoint": 2.73,
    "framePoint": 1.2,
    "timePoint": 3.37,
    "racePoint": 3.9,
    "roubdTotalPoint": 2.69,
    "oddsRank": 17,
    "rank": 8
  },
  {
    "horseNumber": 9,
    "horseName": "ヤシャマル",
    "jockeyName": "木幡巧",
    "totalPoint": 8.66,
    "horsePoint": 0.99,
    "jockeyPoint": 1.87,
    "framePoint": 1.2,
    "timePoint": 3.07,
    "racePoint": 4.1,
    "roubdTotalPoint": 2.51,
    "oddsRank": 5,
    "rank": 9
  },
  {
    "horseNumber": 14,
    "horseName": "ガロアクリーク",
    "jockeyName": "野中",
    "totalPoint": 6.51,
    "horsePoint": 1.93,
    "jockeyPoint": 1.71,
    "framePoint": 1.2,
    "timePoint": 1.15,
    "racePoint": 0.76,
    "roubdTotalPoint": 1.89,
    "oddsRank": 12,
    "rank": 12
  }
]

export default Index;

