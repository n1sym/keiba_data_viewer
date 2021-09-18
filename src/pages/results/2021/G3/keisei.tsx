import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";
import {RaceForecastTableG3tan} from "../../../../components/RaceForecastTableG3tan"

const title = "第65回京成杯オータムハンデ(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202106040211&rf=race_list"

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
    "date": "2021/09/12",
    "dirName": "2021/G3/keisei",
    "raceName": "京成杯オータムH(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": 500,
    "wide3box": 1541,
    "wide5box": -230,
    "3huku5box": -1000,
    "1-2-3oddsRank": "7-12-1"
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 1,
    "horseName": "グレナディアガーズ",
    "jockeyName": "川田",
    "totalPoint": 19.2,
    "horsePoint": 5,
    "jockeyPoint": 5,
    "framePoint": 2.05,
    "timePoint": 4.54,
    "racePoint": 4.81,
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 3
  },
  {
    "horseNumber": 2,
    "horseName": "カテドラル",
    "jockeyName": "戸崎圭",
    "totalPoint": 15.59,
    "horsePoint": 3.13,
    "jockeyPoint": 3.67,
    "framePoint": 2.05,
    "timePoint": 4.78,
    "racePoint": 4.65,
    "roubdTotalPoint": 4.06,
    "oddsRank": 7,
    "rank": 1
  },
  {
    "horseNumber": 12,
    "horseName": "カレンシュトラウス",
    "jockeyName": "池添",
    "totalPoint": 14.98,
    "horsePoint": 4.43,
    "jockeyPoint": 2.25,
    "framePoint": 2.95,
    "timePoint": 4.19,
    "racePoint": 4.21,
    "roubdTotalPoint": 3.9,
    "oddsRank": 6,
    "rank": 12
  },
  {
    "horseNumber": 11,
    "horseName": "バスラットレオン",
    "jockeyName": "藤岡佑",
    "totalPoint": 13.93,
    "horsePoint": 3.03,
    "jockeyPoint": 3.33,
    "framePoint": 2.95,
    "timePoint": 2.69,
    "racePoint": 4.31,
    "roubdTotalPoint": 3.63,
    "oddsRank": 2,
    "rank": 15
  },
  {
    "horseNumber": 13,
    "horseName": "スマートリアン",
    "jockeyName": "三浦",
    "totalPoint": 13.48,
    "horsePoint": 2.38,
    "jockeyPoint": 2.83,
    "framePoint": 2.5,
    "timePoint": 4.35,
    "racePoint": 4.14,
    "roubdTotalPoint": 3.51,
    "oddsRank": 9,
    "rank": 4
  },
  {
    "horseNumber": 3,
    "horseName": "ベステンダンク",
    "jockeyName": "武藤",
    "totalPoint": 13.1,
    "horsePoint": 1.85,
    "jockeyPoint": 1.42,
    "framePoint": 5,
    "timePoint": 4.34,
    "racePoint": 4.48,
    "roubdTotalPoint": 3.41,
    "oddsRank": 16,
    "rank": 14
  },
  {
    "horseNumber": 7,
    "horseName": "マルターズディオサ",
    "jockeyName": "田辺",
    "totalPoint": 12.91,
    "horsePoint": 2.19,
    "jockeyPoint": 2.5,
    "framePoint": 2.05,
    "timePoint": 4.67,
    "racePoint": 4.6,
    "roubdTotalPoint": 3.36,
    "oddsRank": 4,
    "rank": 8
  },
  {
    "horseNumber": 9,
    "horseName": "コントラチェック",
    "jockeyName": "大野",
    "totalPoint": 12.88,
    "horsePoint": 2.25,
    "jockeyPoint": 1.67,
    "framePoint": 3.86,
    "timePoint": 4.27,
    "racePoint": 4.46,
    "roubdTotalPoint": 3.35,
    "oddsRank": 12,
    "rank": 2
  },
  {
    "horseNumber": 5,
    "horseName": "ステルヴィオ",
    "jockeyName": "横山武",
    "totalPoint": 12.73,
    "horsePoint": 2.73,
    "jockeyPoint": 1.17,
    "framePoint": 2.95,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 3.32,
    "oddsRank": 8,
    "rank": 7
  },
  {
    "horseNumber": 16,
    "horseName": "スマイルカナ",
    "jockeyName": "柴田大",
    "totalPoint": 11.97,
    "horsePoint": 3.19,
    "jockeyPoint": 1.5,
    "framePoint": 1.59,
    "timePoint": 4.38,
    "racePoint": 4.75,
    "roubdTotalPoint": 3.12,
    "oddsRank": 10,
    "rank": 10
  },
  {
    "horseNumber": 10,
    "horseName": "カラテ",
    "jockeyName": "菅原明",
    "totalPoint": 11.84,
    "horsePoint": 2.14,
    "jockeyPoint": 1.08,
    "framePoint": 3.86,
    "timePoint": 4.72,
    "racePoint": 3.3,
    "roubdTotalPoint": 3.08,
    "oddsRank": 3,
    "rank": 5
  },
  {
    "horseNumber": 8,
    "horseName": "ワイドファラオ",
    "jockeyName": "柴田善",
    "totalPoint": 11.68,
    "horsePoint": 2.48,
    "jockeyPoint": 1.83,
    "framePoint": 2.05,
    "timePoint": 4.13,
    "racePoint": 4.23,
    "roubdTotalPoint": 3.04,
    "oddsRank": 14,
    "rank": 9
  },
  {
    "horseNumber": 15,
    "horseName": "アカノニジュウイチ",
    "jockeyName": "横山典",
    "totalPoint": 11.6,
    "horsePoint": 1.23,
    "jockeyPoint": 3.08,
    "framePoint": 1.59,
    "timePoint": 4.03,
    "racePoint": 3.91,
    "roubdTotalPoint": 3.02,
    "oddsRank": 11,
    "rank": 13
  },
  {
    "horseNumber": 14,
    "horseName": "マイスタイル",
    "jockeyName": "横山和",
    "totalPoint": 11.5,
    "horsePoint": 3.35,
    "jockeyPoint": 0.92,
    "framePoint": 2.5,
    "timePoint": 3.89,
    "racePoint": 4.38,
    "roubdTotalPoint": 2.99,
    "oddsRank": 13,
    "rank": 16
  },
  {
    "horseNumber": 4,
    "horseName": "グランデマーレ",
    "jockeyName": "藤岡康",
    "totalPoint": 10.3,
    "horsePoint": 1.59,
    "jockeyPoint": 0,
    "framePoint": 5,
    "timePoint": 3.69,
    "racePoint": 4.39,
    "roubdTotalPoint": 2.68,
    "oddsRank": 5,
    "rank": 11
  },
  {
    "horseNumber": 6,
    "horseName": "レイエンダ",
    "jockeyName": "津村",
    "totalPoint": 9.37,
    "horsePoint": 3.48,
    "jockeyPoint": 1.83,
    "framePoint": 2.95,
    "timePoint": 0.79,
    "racePoint": 0.84,
    "roubdTotalPoint": 2.44,
    "oddsRank": 15,
    "rank": 6
  }
]
const top_forecast_data = [
  {
    "horseNumber": 1,
    "horseName": "グレナディアガーズ",
    "jockeyName": "川田",
    "totalPoint": 14.51,
    "horsePoint": 3.28,
    "jockeyPoint": 5,
    "oikiriPoint": 4,
    "stablePoint": 4,
    "timePoint": 4,
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 3
  },
  {
    "horseNumber": 11,
    "horseName": "バスラットレオン",
    "jockeyName": "藤岡佑",
    "totalPoint": 9.33,
    "horsePoint": 1.44,
    "jockeyPoint": 2.5,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 2.5,
    "roubdTotalPoint": 3.22,
    "oddsRank": 2,
    "rank": 15
  },
  {
    "horseNumber": 13,
    "horseName": "スマートリアン",
    "jockeyName": "三浦",
    "totalPoint": 8.19,
    "horsePoint": 0.45,
    "jockeyPoint": 1.63,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 2.82,
    "oddsRank": 9,
    "rank": 4
  },
  {
    "horseNumber": 2,
    "horseName": "カテドラル",
    "jockeyName": "戸崎圭",
    "totalPoint": 7.75,
    "horsePoint": 3.37,
    "jockeyPoint": 0.88,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 4.5,
    "roubdTotalPoint": 2.67,
    "oddsRank": 7,
    "rank": 1
  },
  {
    "horseNumber": 12,
    "horseName": "カレンシュトラウス",
    "jockeyName": "池添",
    "totalPoint": 7.57,
    "horsePoint": 3.28,
    "jockeyPoint": 1.38,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 2,
    "roubdTotalPoint": 2.61,
    "oddsRank": 6,
    "rank": 12
  },
  {
    "horseNumber": 10,
    "horseName": "カラテ",
    "jockeyName": "菅原明",
    "totalPoint": 6.97,
    "horsePoint": 2.17,
    "jockeyPoint": 0.63,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 4.5,
    "roubdTotalPoint": 2.4,
    "oddsRank": 3,
    "rank": 5
  },
  {
    "horseNumber": 15,
    "horseName": "アカノニジュウイチ",
    "jockeyName": "横山典",
    "totalPoint": 6.74,
    "horsePoint": 1.09,
    "jockeyPoint": 1.75,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 4,
    "roubdTotalPoint": 2.32,
    "oddsRank": 11,
    "rank": 13
  },
  {
    "horseNumber": 16,
    "horseName": "スマイルカナ",
    "jockeyName": "柴田大",
    "totalPoint": 6.62,
    "horsePoint": 3.54,
    "jockeyPoint": 0.38,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 2.5,
    "roubdTotalPoint": 2.28,
    "oddsRank": 10,
    "rank": 10
  },
  {
    "horseNumber": 14,
    "horseName": "マイスタイル",
    "jockeyName": "横山和",
    "totalPoint": 6.47,
    "horsePoint": 4.15,
    "jockeyPoint": 0.63,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 2.23,
    "oddsRank": 13,
    "rank": 16
  },
  {
    "horseNumber": 6,
    "horseName": "レイエンダ",
    "jockeyName": "津村",
    "totalPoint": 6.2,
    "horsePoint": 5,
    "jockeyPoint": 0.5,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2,
    "roubdTotalPoint": 2.14,
    "oddsRank": 15,
    "rank": 6
  },
  {
    "horseNumber": 5,
    "horseName": "ステルヴィオ",
    "jockeyName": "横山武",
    "totalPoint": 6.15,
    "horsePoint": 3.37,
    "jockeyPoint": 0.63,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 2.12,
    "oddsRank": 8,
    "rank": 7
  },
  {
    "horseNumber": 4,
    "horseName": "グランデマーレ",
    "jockeyName": "藤岡康",
    "totalPoint": 6.09,
    "horsePoint": 0.85,
    "jockeyPoint": 0,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 2.5,
    "roubdTotalPoint": 2.1,
    "oddsRank": 5,
    "rank": 11
  },
  {
    "horseNumber": 8,
    "horseName": "ワイドファラオ",
    "jockeyName": "柴田善",
    "totalPoint": 5,
    "horsePoint": 0.85,
    "jockeyPoint": 1.38,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 1.72,
    "oddsRank": 14,
    "rank": 9
  },
  {
    "horseNumber": 3,
    "horseName": "ベステンダンク",
    "jockeyName": "武藤",
    "totalPoint": 4.79,
    "horsePoint": 1.46,
    "jockeyPoint": 0.38,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2.5,
    "roubdTotalPoint": 1.65,
    "oddsRank": 16,
    "rank": 14
  },
  {
    "horseNumber": 7,
    "horseName": "マルターズディオサ",
    "jockeyName": "田辺",
    "totalPoint": 4.73,
    "horsePoint": 1.81,
    "jockeyPoint": 1.38,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 4.5,
    "roubdTotalPoint": 1.63,
    "oddsRank": 4,
    "rank": 8
  },
  {
    "horseNumber": 9,
    "horseName": "コントラチェック",
    "jockeyName": "大野",
    "totalPoint": 4.06,
    "horsePoint": 3.52,
    "jockeyPoint": 0.75,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 2.5,
    "roubdTotalPoint": 1.4,
    "oddsRank": 12,
    "rank": 2
  }
]

export default Index;

