import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";
import {RaceForecastTableG3tan} from "../../../../components/RaceForecastTableG3tan"

const title = "第16回キーンランドカップ(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202101020611&rf=race_list"

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
    "date": "2021/08/29",
    "dirName": "2021/G3/keene",
    "raceName": "キーンランドC(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "3-7-10"
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 11,
    "horseName": "ミッキーブリランテ",
    "jockeyName": "和田竜",
    "totalPoint": 19.2,
    "horsePoint": 2.72,
    "jockeyPoint": 5,
    "framePoint": 4.52,
    "timePoint": 5,
    "racePoint": 4.66,
    "roubdTotalPoint": 5,
    "oddsRank": 2,
    "rank": 10
  },
  {
    "horseNumber": 12,
    "horseName": "レイハリア",
    "jockeyName": "亀田",
    "totalPoint": 13.68,
    "horsePoint": 5,
    "jockeyPoint": 1.81,
    "framePoint": 4.52,
    "timePoint": 2.76,
    "racePoint": 0.8,
    "roubdTotalPoint": 3.56,
    "oddsRank": 3,
    "rank": 1
  },
  {
    "horseNumber": 13,
    "horseName": "ダイアトニック",
    "jockeyName": "池添",
    "totalPoint": 13.62,
    "horsePoint": 1.97,
    "jockeyPoint": 1.75,
    "framePoint": 5,
    "timePoint": 4.3,
    "racePoint": 4.41,
    "roubdTotalPoint": 3.55,
    "oddsRank": 4,
    "rank": 14
  },
  {
    "horseNumber": 4,
    "horseName": "タイセイアベニール",
    "jockeyName": "藤岡佑",
    "totalPoint": 13.09,
    "horsePoint": 2.38,
    "jockeyPoint": 2.19,
    "framePoint": 2.86,
    "timePoint": 4.49,
    "racePoint": 4.41,
    "roubdTotalPoint": 3.41,
    "oddsRank": 8,
    "rank": 9
  },
  {
    "horseNumber": 10,
    "horseName": "シュウジ",
    "jockeyName": "丹内",
    "totalPoint": 12.95,
    "horsePoint": 3.19,
    "jockeyPoint": 1.5,
    "framePoint": 2.14,
    "timePoint": 4.93,
    "racePoint": 5,
    "roubdTotalPoint": 3.37,
    "oddsRank": 16,
    "rank": 12
  },
  {
    "horseNumber": 3,
    "horseName": "アストラエンブレム",
    "jockeyName": "吉田隼",
    "totalPoint": 12.84,
    "horsePoint": 2.33,
    "jockeyPoint": 2,
    "framePoint": 2.86,
    "timePoint": 4.41,
    "racePoint": 4.73,
    "roubdTotalPoint": 3.34,
    "oddsRank": 14,
    "rank": 5
  },
  {
    "horseNumber": 5,
    "horseName": "メイケイエール",
    "jockeyName": "武豊",
    "totalPoint": 12.4,
    "horsePoint": 3.26,
    "jockeyPoint": 2.13,
    "framePoint": 1.67,
    "timePoint": 3.97,
    "racePoint": 4.12,
    "roubdTotalPoint": 3.23,
    "oddsRank": 1,
    "rank": 7
  },
  {
    "horseNumber": 8,
    "horseName": "セイウンコウセイ",
    "jockeyName": "勝浦",
    "totalPoint": 12.4,
    "horsePoint": 2.9,
    "jockeyPoint": 1.25,
    "framePoint": 3.33,
    "timePoint": 4.09,
    "racePoint": 4.54,
    "roubdTotalPoint": 3.23,
    "oddsRank": 10,
    "rank": 3
  },
  {
    "horseNumber": 9,
    "horseName": "エイティーンガール",
    "jockeyName": "横山和",
    "totalPoint": 11.73,
    "horsePoint": 2.77,
    "jockeyPoint": 1.75,
    "framePoint": 2.14,
    "timePoint": 3.88,
    "racePoint": 4.23,
    "roubdTotalPoint": 3.05,
    "oddsRank": 7,
    "rank": 2
  },
  {
    "horseNumber": 6,
    "horseName": "カツジ",
    "jockeyName": "横山武",
    "totalPoint": 11.32,
    "horsePoint": 1.89,
    "jockeyPoint": 2,
    "framePoint": 1.67,
    "timePoint": 4.39,
    "racePoint": 4.46,
    "roubdTotalPoint": 2.95,
    "oddsRank": 5,
    "rank": 15
  },
  {
    "horseNumber": 14,
    "horseName": "カイザーメランジェ",
    "jockeyName": "菱田",
    "totalPoint": 11.19,
    "horsePoint": 1.28,
    "jockeyPoint": 1.25,
    "framePoint": 5,
    "timePoint": 3.43,
    "racePoint": 3.55,
    "roubdTotalPoint": 2.91,
    "oddsRank": 9,
    "rank": 4
  },
  {
    "horseNumber": 16,
    "horseName": "ジョーアラビカ",
    "jockeyName": "大野",
    "totalPoint": 11.08,
    "horsePoint": 2.02,
    "jockeyPoint": 1.25,
    "framePoint": 2.86,
    "timePoint": 4.06,
    "racePoint": 4.44,
    "roubdTotalPoint": 2.89,
    "oddsRank": 13,
    "rank": 11
  },
  {
    "horseNumber": 7,
    "horseName": "○地ヒロイックアゲン",
    "jockeyName": "秋山稔",
    "totalPoint": 10.39,
    "horsePoint": 1.6,
    "jockeyPoint": 1.19,
    "framePoint": 3.33,
    "timePoint": 3.34,
    "racePoint": 4.47,
    "roubdTotalPoint": 2.71,
    "oddsRank": 12,
    "rank": 8
  },
  {
    "horseNumber": 15,
    "horseName": "マイネルアルケミー",
    "jockeyName": "黛",
    "totalPoint": 9.87,
    "horsePoint": 1.91,
    "jockeyPoint": 0.38,
    "framePoint": 2.86,
    "timePoint": 4.23,
    "racePoint": 4.38,
    "roubdTotalPoint": 2.57,
    "oddsRank": 11,
    "rank": 6
  },
  {
    "horseNumber": 1,
    "horseName": "ロードアクア",
    "jockeyName": "団野",
    "totalPoint": 8.81,
    "horsePoint": 1.02,
    "jockeyPoint": 1,
    "framePoint": 1.67,
    "timePoint": 4.11,
    "racePoint": 4.42,
    "roubdTotalPoint": 2.29,
    "oddsRank": 6,
    "rank": 13
  },
  {
    "horseNumber": 2,
    "horseName": "□地ソロユニット",
    "jockeyName": "古川吉",
    "totalPoint": 6.31,
    "horsePoint": 1.93,
    "jockeyPoint": 1.31,
    "framePoint": 1.67,
    "timePoint": 0.87,
    "racePoint": 1.29,
    "roubdTotalPoint": 1.64,
    "oddsRank": 15,
    "rank": 16
  }
]
const top_forecast_data = [
  {
    "horseNumber": 6,
    "horseName": "カツジ",
    "jockeyName": "横山武",
    "totalPoint": 14.46,
    "horsePoint": 1.02,
    "jockeyPoint": 4.17,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 13.5,
    "roubdTotalPoint": 5,
    "oddsRank": 5,
    "rank": 15
  },
  {
    "horseNumber": 4,
    "horseName": "タイセイアベニール",
    "jockeyName": "藤岡佑",
    "totalPoint": 14.13,
    "horsePoint": 1.04,
    "jockeyPoint": 4.72,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 13.5,
    "roubdTotalPoint": 4.89,
    "oddsRank": 8,
    "rank": 9
  },
  {
    "horseNumber": 12,
    "horseName": "レイハリア",
    "jockeyName": "亀田",
    "totalPoint": 13,
    "horsePoint": 5,
    "jockeyPoint": 5,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 4.5,
    "oddsRank": 3,
    "rank": 1
  },
  {
    "horseNumber": 5,
    "horseName": "メイケイエール",
    "jockeyName": "武豊",
    "totalPoint": 12.81,
    "horsePoint": 1.88,
    "jockeyPoint": 4.17,
    "oikiriPoint": 4,
    "stablePoint": 4,
    "timePoint": 3.5,
    "roubdTotalPoint": 4.43,
    "oddsRank": 1,
    "rank": 7
  },
  {
    "horseNumber": 11,
    "horseName": "ミッキーブリランテ",
    "jockeyName": "和田竜",
    "totalPoint": 11.06,
    "horsePoint": 2.53,
    "jockeyPoint": 0,
    "oikiriPoint": 4,
    "stablePoint": 4,
    "timePoint": 13.5,
    "roubdTotalPoint": 3.82,
    "oddsRank": 2,
    "rank": 10
  },
  {
    "horseNumber": 9,
    "horseName": "エイティーンガール",
    "jockeyName": "横山和",
    "totalPoint": 10.47,
    "horsePoint": 3.54,
    "jockeyPoint": 1.67,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 13.5,
    "roubdTotalPoint": 3.62,
    "oddsRank": 7,
    "rank": 2
  },
  {
    "horseNumber": 8,
    "horseName": "セイウンコウセイ",
    "jockeyName": "勝浦",
    "totalPoint": 7.91,
    "horsePoint": 2.16,
    "jockeyPoint": 2.5,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 2.74,
    "oddsRank": 10,
    "rank": 3
  },
  {
    "horseNumber": 3,
    "horseName": "アストラエンブレム",
    "jockeyName": "吉田隼",
    "totalPoint": 7.71,
    "horsePoint": 1.65,
    "jockeyPoint": 2.5,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 2.67,
    "oddsRank": 14,
    "rank": 5
  },
  {
    "horseNumber": 10,
    "horseName": "シュウジ",
    "jockeyName": "丹内",
    "totalPoint": 7.44,
    "horsePoint": 1.1,
    "jockeyPoint": 3.33,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 2.57,
    "oddsRank": 16,
    "rank": 12
  },
  {
    "horseNumber": 1,
    "horseName": "ロードアクア",
    "jockeyName": "団野",
    "totalPoint": 7.35,
    "horsePoint": 0.76,
    "jockeyPoint": 0.83,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 2.54,
    "oddsRank": 6,
    "rank": 13
  },
  {
    "horseNumber": 7,
    "horseName": "○地ヒロイックアゲン",
    "jockeyName": "秋山稔",
    "totalPoint": 7.02,
    "horsePoint": 0.76,
    "jockeyPoint": 2.22,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 2.43,
    "oddsRank": 12,
    "rank": 8
  },
  {
    "horseNumber": 16,
    "horseName": "ジョーアラビカ",
    "jockeyName": "大野",
    "totalPoint": 4.86,
    "horsePoint": 2.03,
    "jockeyPoint": 0,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 1.68,
    "oddsRank": 13,
    "rank": 11
  },
  {
    "horseNumber": 15,
    "horseName": "マイネルアルケミー",
    "jockeyName": "黛",
    "totalPoint": 4.74,
    "horsePoint": 1.72,
    "jockeyPoint": 0,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 1.64,
    "oddsRank": 11,
    "rank": 6
  },
  {
    "horseNumber": 14,
    "horseName": "カイザーメランジェ",
    "jockeyName": "菱田",
    "totalPoint": 3.84,
    "horsePoint": 0.41,
    "jockeyPoint": 0.56,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 1.33,
    "oddsRank": 9,
    "rank": 4
  },
  {
    "horseNumber": 2,
    "horseName": "□地ソロユニット",
    "jockeyName": "古川吉",
    "totalPoint": 3.62,
    "horsePoint": 1.53,
    "jockeyPoint": 1.67,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 1.25,
    "oddsRank": 15,
    "rank": 16
  },
  {
    "horseNumber": 13,
    "horseName": "ダイアトニック",
    "jockeyName": "池添",
    "totalPoint": 3.05,
    "horsePoint": 0.95,
    "jockeyPoint": 1.39,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 1.05,
    "oddsRank": 4,
    "rank": 14
  }
]

export default Index;

