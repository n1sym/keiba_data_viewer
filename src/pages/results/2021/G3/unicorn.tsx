import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第26回 ユニコーンステークス(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202105030611&rf=race_submenu"

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
    "date": "2021/06/19",
    "dirName": "2021/G3/unicorn",
    "raceName": "ユニコーンS(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "7-14-3"
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 4,
    "horseName": "○地ラペルーズ",
    "jockeyName": "ルメール",
    "totalPoint": 17.58,
    "horsePoint": 4.25,
    "jockeyPoint": 5,
    "framePoint": 3.16,
    "timePoint": 3.69,
    "racePoint": 2.13,
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 13
  },
  {
    "horseNumber": 16,
    "horseName": "ルーチェドーロ",
    "jockeyName": "戸崎圭",
    "totalPoint": 16.62,
    "horsePoint": 3.34,
    "jockeyPoint": 4.13,
    "framePoint": 3.16,
    "timePoint": 4.14,
    "racePoint": 4.15,
    "roubdTotalPoint": 4.73,
    "oddsRank": 2,
    "rank": 4
  },
  {
    "horseNumber": 1,
    "horseName": "ゲンパチフォルツァ",
    "jockeyName": "木幡巧",
    "totalPoint": 16.16,
    "horsePoint": 5,
    "jockeyPoint": 2.39,
    "framePoint": 2.37,
    "timePoint": 5,
    "racePoint": 4.79,
    "roubdTotalPoint": 4.6,
    "oddsRank": 5,
    "rank": 11
  },
  {
    "horseNumber": 10,
    "horseName": "プロバーティオ",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 15.73,
    "horsePoint": 2.92,
    "jockeyPoint": 4.35,
    "framePoint": 2.37,
    "timePoint": 4.59,
    "racePoint": 2.89,
    "roubdTotalPoint": 4.47,
    "oddsRank": 10,
    "rank": 8
  },
  {
    "horseNumber": 12,
    "horseName": "ローウェル",
    "jockeyName": "団野",
    "totalPoint": 15.2,
    "horsePoint": 2.48,
    "jockeyPoint": 3.2,
    "framePoint": 5,
    "timePoint": 3.94,
    "racePoint": 2.73,
    "roubdTotalPoint": 4.32,
    "oddsRank": 13,
    "rank": 14
  },
  {
    "horseNumber": 2,
    "horseName": "スマッシャー",
    "jockeyName": "坂井",
    "totalPoint": 14.98,
    "horsePoint": 3.72,
    "jockeyPoint": 3.68,
    "framePoint": 2.37,
    "timePoint": 4.28,
    "racePoint": 1.97,
    "roubdTotalPoint": 4.26,
    "oddsRank": 7,
    "rank": 1
  },
  {
    "horseNumber": 7,
    "horseName": "ケイアイロベージ",
    "jockeyName": "三浦",
    "totalPoint": 14.89,
    "horsePoint": 4.38,
    "jockeyPoint": 3.24,
    "framePoint": 3.16,
    "timePoint": 3.78,
    "racePoint": 1.06,
    "roubdTotalPoint": 4.23,
    "oddsRank": 3,
    "rank": 3
  },
  {
    "horseNumber": 9,
    "horseName": "ブラックアーメット",
    "jockeyName": "津村",
    "totalPoint": 14.56,
    "horsePoint": 3.48,
    "jockeyPoint": 3.04,
    "framePoint": 2.37,
    "timePoint": 4.28,
    "racePoint": 3.77,
    "roubdTotalPoint": 4.14,
    "oddsRank": 12,
    "rank": 10
  },
  {
    "horseNumber": 11,
    "horseName": "ヴィゴーレ",
    "jockeyName": "丸山",
    "totalPoint": 14.52,
    "horsePoint": 1.38,
    "jockeyPoint": 3.17,
    "framePoint": 5,
    "timePoint": 4.07,
    "racePoint": 3.62,
    "roubdTotalPoint": 4.13,
    "oddsRank": 16,
    "rank": 9
  },
  {
    "horseNumber": 8,
    "horseName": "サンライズウルス",
    "jockeyName": "藤井勘",
    "totalPoint": 14.5,
    "horsePoint": 1.5,
    "jockeyPoint": 4.02,
    "framePoint": 3.16,
    "timePoint": 4.04,
    "racePoint": 4.04,
    "roubdTotalPoint": 4.12,
    "oddsRank": 6,
    "rank": 6
  },
  {
    "horseNumber": 14,
    "horseName": "カレンロマチェンコ",
    "jockeyName": "松若",
    "totalPoint": 14.37,
    "horsePoint": 3.28,
    "jockeyPoint": 2.13,
    "framePoint": 4.21,
    "timePoint": 4.07,
    "racePoint": 3.72,
    "roubdTotalPoint": 4.09,
    "oddsRank": 8,
    "rank": 15
  },
  {
    "horseNumber": 3,
    "horseName": "ティアップリオン",
    "jockeyName": "内田博",
    "totalPoint": 13.97,
    "horsePoint": 1.93,
    "jockeyPoint": 2.78,
    "framePoint": 3.16,
    "timePoint": 4.53,
    "racePoint": 5,
    "roubdTotalPoint": 3.97,
    "oddsRank": 9,
    "rank": 7
  },
  {
    "horseNumber": 6,
    "horseName": "クリーンスレイト",
    "jockeyName": "田辺",
    "totalPoint": 13.46,
    "horsePoint": 1.95,
    "jockeyPoint": 3.41,
    "framePoint": 3.16,
    "timePoint": 3.4,
    "racePoint": 3.72,
    "roubdTotalPoint": 3.83,
    "oddsRank": 4,
    "rank": 5
  },
  {
    "horseNumber": 5,
    "horseName": "□地イグナイター",
    "jockeyName": "武藤",
    "totalPoint": 12.9,
    "horsePoint": 2.07,
    "jockeyPoint": 2.85,
    "framePoint": 3.16,
    "timePoint": 3.64,
    "racePoint": 3.51,
    "roubdTotalPoint": 3.67,
    "oddsRank": 15,
    "rank": 12
  },
  {
    "horseNumber": 13,
    "horseName": "ピンクカメハメハ",
    "jockeyName": "北村宏",
    "totalPoint": 11.87,
    "horsePoint": 3.16,
    "jockeyPoint": 2.81,
    "framePoint": 4.21,
    "timePoint": 0.86,
    "racePoint": 1.81,
    "roubdTotalPoint": 3.38,
    "oddsRank": 11,
    "rank": "中止"
  },
  {
    "horseNumber": 15,
    "horseName": "サヴァ",
    "jockeyName": "石川",
    "totalPoint": 11.27,
    "horsePoint": 1.38,
    "jockeyPoint": 2.14,
    "framePoint": 3.16,
    "timePoint": 3.86,
    "racePoint": 3.19,
    "roubdTotalPoint": 3.21,
    "oddsRank": 14,
    "rank": 2
  }
]
const top_forecast_data = [
  {
    "horseNumber": 4,
    "horseName": "○地ラペルーズ",
    "jockeyName": "ルメール",
    "totalPoint": 11.15,
    "horsePoint": 5,
    "jockeyPoint": 4.39,
    "framePoint": 0.97,
    "timePoint": 3.69,
    "racePoint": 2.13,
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 13
  },
  {
    "horseNumber": 16,
    "horseName": "ルーチェドーロ",
    "jockeyName": "戸崎圭",
    "totalPoint": 8.76,
    "horsePoint": 3.75,
    "jockeyPoint": 3.58,
    "framePoint": 0,
    "timePoint": 4.14,
    "racePoint": 4.15,
    "roubdTotalPoint": 3.93,
    "oddsRank": 2,
    "rank": 4
  },
  {
    "horseNumber": 14,
    "horseName": "カレンロマチェンコ",
    "jockeyName": "松若",
    "totalPoint": 8.67,
    "horsePoint": 3.52,
    "jockeyPoint": 3.68,
    "framePoint": 1.94,
    "timePoint": 4.07,
    "racePoint": 3.72,
    "roubdTotalPoint": 3.89,
    "oddsRank": 8,
    "rank": 15
  },
  {
    "horseNumber": 7,
    "horseName": "ケイアイロベージ",
    "jockeyName": "三浦",
    "totalPoint": 8.62,
    "horsePoint": 4.56,
    "jockeyPoint": 2.9,
    "framePoint": 1.94,
    "timePoint": 3.78,
    "racePoint": 1.06,
    "roubdTotalPoint": 3.87,
    "oddsRank": 3,
    "rank": 3
  },
  {
    "horseNumber": 11,
    "horseName": "ヴィゴーレ",
    "jockeyName": "丸山",
    "totalPoint": 8.25,
    "horsePoint": 1.25,
    "jockeyPoint": 5,
    "framePoint": 5,
    "timePoint": 4.07,
    "racePoint": 3.62,
    "roubdTotalPoint": 3.7,
    "oddsRank": 16,
    "rank": 9
  },
  {
    "horseNumber": 10,
    "horseName": "プロバーティオ",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 7.99,
    "horsePoint": 2.54,
    "jockeyPoint": 3.89,
    "framePoint": 0.97,
    "timePoint": 4.59,
    "racePoint": 2.89,
    "roubdTotalPoint": 3.58,
    "oddsRank": 10,
    "rank": 8
  },
  {
    "horseNumber": 1,
    "horseName": "ゲンパチフォルツァ",
    "jockeyName": "木幡巧",
    "totalPoint": 6.47,
    "horsePoint": 3.32,
    "jockeyPoint": 2.25,
    "framePoint": 0.97,
    "timePoint": 5,
    "racePoint": 4.79,
    "roubdTotalPoint": 2.9,
    "oddsRank": 5,
    "rank": 11
  },
  {
    "horseNumber": 6,
    "horseName": "クリーンスレイト",
    "jockeyName": "田辺",
    "totalPoint": 5.5,
    "horsePoint": 1.64,
    "jockeyPoint": 2.76,
    "framePoint": 1.94,
    "timePoint": 3.4,
    "racePoint": 3.72,
    "roubdTotalPoint": 2.47,
    "oddsRank": 4,
    "rank": 5
  },
  {
    "horseNumber": 5,
    "horseName": "□地イグナイター",
    "jockeyName": "武藤",
    "totalPoint": 5.2,
    "horsePoint": 2.43,
    "jockeyPoint": 1.98,
    "framePoint": 1.94,
    "timePoint": 3.64,
    "racePoint": 3.51,
    "roubdTotalPoint": 2.33,
    "oddsRank": 15,
    "rank": 12
  },
  {
    "horseNumber": 9,
    "horseName": "ブラックアーメット",
    "jockeyName": "津村",
    "totalPoint": 5.09,
    "horsePoint": 2.33,
    "jockeyPoint": 1.97,
    "framePoint": 0.97,
    "timePoint": 4.28,
    "racePoint": 3.77,
    "roubdTotalPoint": 2.28,
    "oddsRank": 12,
    "rank": 10
  },
  {
    "horseNumber": 8,
    "horseName": "サンライズウルス",
    "jockeyName": "藤井勘",
    "totalPoint": 5.08,
    "horsePoint": 0,
    "jockeyPoint": 3.63,
    "framePoint": 1.94,
    "timePoint": 4.04,
    "racePoint": 4.04,
    "roubdTotalPoint": 2.28,
    "oddsRank": 6,
    "rank": 6
  },
  {
    "horseNumber": 3,
    "horseName": "ティアップリオン",
    "jockeyName": "内田博",
    "totalPoint": 4.97,
    "horsePoint": 2.06,
    "jockeyPoint": 2.08,
    "framePoint": 0.97,
    "timePoint": 4.53,
    "racePoint": 5,
    "roubdTotalPoint": 2.23,
    "oddsRank": 9,
    "rank": 7
  },
  {
    "horseNumber": 2,
    "horseName": "スマッシャー",
    "jockeyName": "坂井",
    "totalPoint": 4.63,
    "horsePoint": 3.45,
    "jockeyPoint": 0.84,
    "framePoint": 0.97,
    "timePoint": 4.28,
    "racePoint": 1.97,
    "roubdTotalPoint": 2.08,
    "oddsRank": 7,
    "rank": 1
  },
  {
    "horseNumber": 15,
    "horseName": "サヴァ",
    "jockeyName": "石川",
    "totalPoint": 4.53,
    "horsePoint": 0.85,
    "jockeyPoint": 2.63,
    "framePoint": 0,
    "timePoint": 3.86,
    "racePoint": 3.19,
    "roubdTotalPoint": 2.03,
    "oddsRank": 14,
    "rank": 2
  },
  {
    "horseNumber": 13,
    "horseName": "ピンクカメハメハ",
    "jockeyName": "北村宏",
    "totalPoint": 4.37,
    "horsePoint": 1.46,
    "jockeyPoint": 2.08,
    "framePoint": 1.94,
    "timePoint": 0.86,
    "racePoint": 1.81,
    "roubdTotalPoint": 1.96,
    "oddsRank": 11,
    "rank": "中止"
  },
  {
    "horseNumber": 12,
    "horseName": "ローウェル",
    "jockeyName": "団野",
    "totalPoint": 2.1,
    "horsePoint": 2.1,
    "jockeyPoint": 0,
    "framePoint": 5,
    "timePoint": 3.94,
    "racePoint": 2.73,
    "roubdTotalPoint": 0.94,
    "oddsRank": 13,
    "rank": 14
  }
]

export default Index;

