import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";
import {RaceForecastTableG3tan} from "../../../../components/RaceForecastTableG3tan"

const title = "第25回シリウスステークス(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202107050811&rf=race_submenu"

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
    "horseNumber": 11,
    "horseName": "ウェスタールンド",
    "jockeyName": "藤岡佑",
    "totalPoint": 11.75,
    "horsePoint": 5,
    "jockeyPoint": 4.82,
    "framePoint": 2.5,
    "timePoint": 4.01,
    "racePoint": 4.34,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 10,
    "horseName": "ハヤヤッコ",
    "jockeyName": "田辺",
    "totalPoint": 9.11,
    "horsePoint": 2.96,
    "jockeyPoint": 4.39,
    "framePoint": 2.92,
    "timePoint": 3.75,
    "racePoint": 4.56,
    "roubdTotalPoint": 3.88
  },
  {
    "horseNumber": 15,
    "horseName": "エブリワンブラック",
    "jockeyName": "浜中",
    "totalPoint": 9.05,
    "horsePoint": 2.05,
    "jockeyPoint": 5,
    "framePoint": 1.46,
    "timePoint": 1.64,
    "racePoint": 1.88,
    "roubdTotalPoint": 3.85
  },
  {
    "horseNumber": 1,
    "horseName": "ダノンスプレンダー",
    "jockeyName": "川田",
    "totalPoint": 7.7,
    "horsePoint": 1.55,
    "jockeyPoint": 4.39,
    "framePoint": 2.5,
    "timePoint": 3.59,
    "racePoint": 3.38,
    "roubdTotalPoint": 3.28
  },
  {
    "horseNumber": 6,
    "horseName": "ゴッドセレクション",
    "jockeyName": "中井",
    "totalPoint": 7.21,
    "horsePoint": 3.53,
    "jockeyPoint": 2.63,
    "framePoint": 2.92,
    "timePoint": 1.71,
    "racePoint": 1.6,
    "roubdTotalPoint": 3.07
  },
  {
    "horseNumber": 7,
    "horseName": "アナザートゥルース",
    "jockeyName": "松山",
    "totalPoint": 6.96,
    "horsePoint": 2.91,
    "jockeyPoint": 2.89,
    "framePoint": 1.04,
    "timePoint": 3.12,
    "racePoint": 4.14,
    "roubdTotalPoint": 2.96
  },
  {
    "horseNumber": 2,
    "horseName": "ブルベアイリーデ",
    "jockeyName": "福永",
    "totalPoint": 6.46,
    "horsePoint": 1.55,
    "jockeyPoint": 3.51,
    "framePoint": 2.5,
    "timePoint": 5,
    "racePoint": 4.85,
    "roubdTotalPoint": 2.75
  },
  {
    "horseNumber": 8,
    "horseName": "サンライズホープ",
    "jockeyName": "幸",
    "totalPoint": 5.92,
    "horsePoint": 2.24,
    "jockeyPoint": 2.63,
    "framePoint": 1.04,
    "timePoint": 3.12,
    "racePoint": 4.08,
    "roubdTotalPoint": 2.52
  },
  {
    "horseNumber": 12,
    "horseName": "サクラアリュール",
    "jockeyName": "藤岡康",
    "totalPoint": 5.4,
    "horsePoint": 3.19,
    "jockeyPoint": 1.58,
    "framePoint": 2.5,
    "timePoint": 3.32,
    "racePoint": 4.08,
    "roubdTotalPoint": 2.3
  },
  {
    "horseNumber": 3,
    "horseName": "ロードリバーサル",
    "jockeyName": "吉田隼",
    "totalPoint": 4.25,
    "horsePoint": 0.57,
    "jockeyPoint": 2.63,
    "framePoint": 2.5,
    "timePoint": 2.76,
    "racePoint": 3.64,
    "roubdTotalPoint": 1.81
  },
  {
    "horseNumber": 4,
    "horseName": "エルデュクラージュ",
    "jockeyName": "鮫島駿",
    "totalPoint": 3.78,
    "horsePoint": 1.82,
    "jockeyPoint": 1.4,
    "framePoint": 2.5,
    "timePoint": 3.22,
    "racePoint": 4.35,
    "roubdTotalPoint": 1.61
  },
  {
    "horseNumber": 14,
    "horseName": "テンザワールド",
    "jockeyName": "和田竜",
    "totalPoint": 3.47,
    "horsePoint": 1.26,
    "jockeyPoint": 1.58,
    "framePoint": 5,
    "timePoint": 2.14,
    "racePoint": 0.75,
    "roubdTotalPoint": 1.48
  },
  {
    "horseNumber": 5,
    "horseName": "リアンヴェリテ",
    "jockeyName": "国分恭",
    "totalPoint": 2.8,
    "horsePoint": 1.08,
    "jockeyPoint": 1.23,
    "framePoint": 2.92,
    "timePoint": 2.8,
    "racePoint": 2.97,
    "roubdTotalPoint": 1.19
  },
  {
    "horseNumber": 9,
    "horseName": "ケイティブレイブ",
    "jockeyName": "内田博",
    "totalPoint": 2.27,
    "horsePoint": 2.27,
    "jockeyPoint": 0,
    "framePoint": 2.92,
    "timePoint": 4.05,
    "racePoint": 5,
    "roubdTotalPoint": 0.97
  },
  {
    "horseNumber": 16,
    "horseName": "サンデーウィザード",
    "jockeyName": "荻野琢",
    "totalPoint": 1.82,
    "horsePoint": 1.82,
    "jockeyPoint": 0,
    "framePoint": 1.46,
    "timePoint": 3.62,
    "racePoint": 4.11,
    "roubdTotalPoint": 0.77
  },
  {
    "horseNumber": 13,
    "horseName": "アシャカトブ",
    "jockeyName": "武藤",
    "totalPoint": 1.34,
    "horsePoint": 1.34,
    "jockeyPoint": 0,
    "framePoint": 5,
    "timePoint": 3.85,
    "racePoint": 4.19,
    "roubdTotalPoint": 0.57
  }
]
const top_forecast_data = [
  {
    "horseNumber": 10,
    "horseName": "ハヤヤッコ",
    "jockeyName": "田辺",
    "totalPoint": 12.87,
    "horsePoint": 3.79,
    "jockeyPoint": 5,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 4.5,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 6,
    "horseName": "ゴッドセレクション",
    "jockeyName": "中井",
    "totalPoint": 9.02,
    "horsePoint": 3.95,
    "jockeyPoint": 0.7,
    "oikiriPoint": 4,
    "stablePoint": 4,
    "timePoint": 2,
    "roubdTotalPoint": 3.5
  },
  {
    "horseNumber": 15,
    "horseName": "エブリワンブラック",
    "jockeyName": "浜中",
    "totalPoint": 8.21,
    "horsePoint": 2.37,
    "jockeyPoint": 2.8,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3,
    "roubdTotalPoint": 3.19
  },
  {
    "horseNumber": 7,
    "horseName": "アナザートゥルース",
    "jockeyName": "松山",
    "totalPoint": 8,
    "horsePoint": 4,
    "jockeyPoint": 1,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 4,
    "roubdTotalPoint": 3.11
  },
  {
    "horseNumber": 2,
    "horseName": "ブルベアイリーデ",
    "jockeyName": "福永",
    "totalPoint": 7.79,
    "horsePoint": 1.02,
    "jockeyPoint": 2.4,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 5,
    "roubdTotalPoint": 3.03
  },
  {
    "horseNumber": 11,
    "horseName": "ウェスタールンド",
    "jockeyName": "藤岡佑",
    "totalPoint": 7.66,
    "horsePoint": 3.55,
    "jockeyPoint": 2.2,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2,
    "roubdTotalPoint": 2.98
  },
  {
    "horseNumber": 5,
    "horseName": "リアンヴェリテ",
    "jockeyName": "国分恭",
    "totalPoint": 6.93,
    "horsePoint": 2.32,
    "jockeyPoint": 0,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 10,
    "roubdTotalPoint": 2.69
  },
  {
    "horseNumber": 3,
    "horseName": "ロードリバーサル",
    "jockeyName": "吉田隼",
    "totalPoint": 6.42,
    "horsePoint": 1.34,
    "jockeyPoint": 1.9,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2,
    "roubdTotalPoint": 2.49
  },
  {
    "horseNumber": 8,
    "horseName": "サンライズホープ",
    "jockeyName": "幸",
    "totalPoint": 6.06,
    "horsePoint": 2.24,
    "jockeyPoint": 1.3,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2,
    "roubdTotalPoint": 2.35
  },
  {
    "horseNumber": 16,
    "horseName": "サンデーウィザード",
    "jockeyName": "荻野琢",
    "totalPoint": 5.75,
    "horsePoint": 5,
    "jockeyPoint": 0,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2.5,
    "roubdTotalPoint": 2.23
  },
  {
    "horseNumber": 1,
    "horseName": "ダノンスプレンダー",
    "jockeyName": "川田",
    "totalPoint": 5.44,
    "horsePoint": 1.6,
    "jockeyPoint": 1,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2,
    "roubdTotalPoint": 2.11
  },
  {
    "horseNumber": 14,
    "horseName": "テンザワールド",
    "jockeyName": "和田竜",
    "totalPoint": 5.44,
    "horsePoint": 1.67,
    "jockeyPoint": 1.1,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 1.5,
    "roubdTotalPoint": 2.11
  },
  {
    "horseNumber": 4,
    "horseName": "エルデュクラージュ",
    "jockeyName": "鮫島駿",
    "totalPoint": 4.93,
    "horsePoint": 2.43,
    "jockeyPoint": 0.3,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2,
    "roubdTotalPoint": 1.92
  },
  {
    "horseNumber": 13,
    "horseName": "アシャカトブ",
    "jockeyName": "武藤",
    "totalPoint": 4.54,
    "horsePoint": 1.97,
    "jockeyPoint": 0,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2.5,
    "roubdTotalPoint": 1.76
  },
  {
    "horseNumber": 12,
    "horseName": "サクラアリュール",
    "jockeyName": "藤岡康",
    "totalPoint": 3.44,
    "horsePoint": 4.59,
    "jockeyPoint": 0,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 2,
    "roubdTotalPoint": 1.34
  },
  {
    "horseNumber": 9,
    "horseName": "ケイティブレイブ",
    "jockeyName": "内田博",
    "totalPoint": 2.72,
    "horsePoint": 2.06,
    "jockeyPoint": 0,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 3,
    "roubdTotalPoint": 1.06
  }
]

export default Index;

