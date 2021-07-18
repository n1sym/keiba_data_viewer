import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {RaceForecastTableG3tan} from "../../../../components/RaceForecastTableG3tan"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第57回 函館記念(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202102010611"

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
    "date": "2021/07/18",
    "dirName": "2021/G3/hakodate",
    "raceName": "函館記念(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": 690,
    "3huku5box": -1000,
    "1-2-3oddsRank": "2-14-12"
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 3,
    "horseName": "ワールドウインズ",
    "jockeyName": "武豊",
    "totalPoint": 19.24,
    "horsePoint": 5,
    "jockeyPoint": 3.94,
    "framePoint": 5,
    "timePoint": 3.82,
    "racePoint": 4.16,
    "roubdTotalPoint": 5,
    "oddsRank": 5,
    "rank": 7
  },
  {
    "horseNumber": 15,
    "horseName": "バイオスパーク",
    "jockeyName": "池添",
    "totalPoint": 17.29,
    "horsePoint": 4.68,
    "jockeyPoint": 3.69,
    "framePoint": 1.8,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 4.49,
    "oddsRank": 12,
    "rank": 3
  },
  {
    "horseNumber": 2,
    "horseName": "ハナズレジェンド",
    "jockeyName": "藤岡佑",
    "totalPoint": 14.76,
    "horsePoint": 3.14,
    "jockeyPoint": 3.9,
    "framePoint": 1.4,
    "timePoint": 4,
    "racePoint": 4.6,
    "roubdTotalPoint": 3.84,
    "oddsRank": 6,
    "rank": 10
  },
  {
    "horseNumber": 8,
    "horseName": "○地トーセンスーリヤ",
    "jockeyName": "横山和",
    "totalPoint": 14.43,
    "horsePoint": 2.34,
    "jockeyPoint": 3.42,
    "framePoint": 4,
    "timePoint": 3.05,
    "racePoint": 4.16,
    "roubdTotalPoint": 3.75,
    "oddsRank": 2,
    "rank": 1
  },
  {
    "horseNumber": 9,
    "horseName": "サトノエルドール",
    "jockeyName": "亀田",
    "totalPoint": 14.28,
    "horsePoint": 4.7,
    "jockeyPoint": 2.88,
    "framePoint": 2.2,
    "timePoint": 3.05,
    "racePoint": 3.36,
    "roubdTotalPoint": 3.71,
    "oddsRank": 8,
    "rank": 5
  },
  {
    "horseNumber": 13,
    "horseName": "ワセダインブルー",
    "jockeyName": "大野",
    "totalPoint": 14.15,
    "horsePoint": 3.91,
    "jockeyPoint": 3.76,
    "framePoint": 1.4,
    "timePoint": 3,
    "racePoint": 3.65,
    "roubdTotalPoint": 3.68,
    "oddsRank": 9,
    "rank": 13
  },
  {
    "horseNumber": 12,
    "horseName": "アドマイヤジャスタ",
    "jockeyName": "吉田隼",
    "totalPoint": 14.1,
    "horsePoint": 3.3,
    "jockeyPoint": 3.6,
    "framePoint": 1.8,
    "timePoint": 2.95,
    "racePoint": 4.89,
    "roubdTotalPoint": 3.66,
    "oddsRank": 10,
    "rank": 16
  },
  {
    "horseNumber": 16,
    "horseName": "レッドジェニアル",
    "jockeyName": "坂井",
    "totalPoint": 13.75,
    "horsePoint": 3.68,
    "jockeyPoint": 2.94,
    "framePoint": 1.8,
    "timePoint": 3.64,
    "racePoint": 4.01,
    "roubdTotalPoint": 3.57,
    "oddsRank": 13,
    "rank": 15
  },
  {
    "horseNumber": 6,
    "horseName": "タイセイトレイル",
    "jockeyName": "菱田",
    "totalPoint": 13.4,
    "horsePoint": 3.68,
    "jockeyPoint": 2.62,
    "framePoint": 2.2,
    "timePoint": 3.18,
    "racePoint": 4.38,
    "roubdTotalPoint": 3.48,
    "oddsRank": 16,
    "rank": 12
  },
  {
    "horseNumber": 1,
    "horseName": "○外カフェファラオ",
    "jockeyName": "ルメール",
    "totalPoint": 13.36,
    "horsePoint": 0.62,
    "jockeyPoint": 5,
    "framePoint": 1.4,
    "timePoint": 4.86,
    "racePoint": 1.82,
    "roubdTotalPoint": 3.47,
    "oddsRank": 1,
    "rank": 9
  },
  {
    "horseNumber": 7,
    "horseName": "ドゥオーモ",
    "jockeyName": "勝浦",
    "totalPoint": 13.14,
    "horsePoint": 2.34,
    "jockeyPoint": 2.83,
    "framePoint": 4,
    "timePoint": 2.32,
    "racePoint": 4.45,
    "roubdTotalPoint": 3.41,
    "oddsRank": 15,
    "rank": 11
  },
  {
    "horseNumber": 4,
    "horseName": "アイスバブル",
    "jockeyName": "水口",
    "totalPoint": 12.76,
    "horsePoint": 2.79,
    "jockeyPoint": 1.4,
    "framePoint": 5,
    "timePoint": 2.77,
    "racePoint": 4.49,
    "roubdTotalPoint": 3.32,
    "oddsRank": 14,
    "rank": 2
  },
  {
    "horseNumber": 10,
    "horseName": "マイネルウィルトス",
    "jockeyName": "丹内",
    "totalPoint": 12.74,
    "horsePoint": 3.63,
    "jockeyPoint": 2.67,
    "framePoint": 2.2,
    "timePoint": 3,
    "racePoint": 3.03,
    "roubdTotalPoint": 3.31,
    "oddsRank": 3,
    "rank": 8
  },
  {
    "horseNumber": 14,
    "horseName": "マイネルファンロン",
    "jockeyName": "秋山稔",
    "totalPoint": 11.99,
    "horsePoint": 4.18,
    "jockeyPoint": 1.92,
    "framePoint": 1.4,
    "timePoint": 3.18,
    "racePoint": 3.65,
    "roubdTotalPoint": 3.12,
    "oddsRank": 7,
    "rank": 14
  },
  {
    "horseNumber": 5,
    "horseName": "ジェットモーション",
    "jockeyName": "横山武",
    "totalPoint": 11.9,
    "horsePoint": 2.1,
    "jockeyPoint": 3.46,
    "framePoint": 2.2,
    "timePoint": 2.5,
    "racePoint": 2.99,
    "roubdTotalPoint": 3.09,
    "oddsRank": 4,
    "rank": 6
  },
  {
    "horseNumber": 11,
    "horseName": "ディアマンミノル",
    "jockeyName": "泉谷",
    "totalPoint": 8.91,
    "horsePoint": 2.39,
    "jockeyPoint": 1.32,
    "framePoint": 1.8,
    "timePoint": 2.27,
    "racePoint": 3.54,
    "roubdTotalPoint": 2.32,
    "oddsRank": 11,
    "rank": 4
  }
]
const top_forecast_data = [
  {
    "horseNumber": 10,
    "horseName": "マイネルウィルトス",
    "jockeyName": "丹内",
    "totalPoint": 11.76,
    "horsePoint": 4.94,
    "jockeyPoint": 2.24,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 7,
    "roubdTotalPoint": 5,
    "oddsRank": 3,
    "rank": 8
  },
  {
    "horseNumber": 15,
    "horseName": "バイオスパーク",
    "jockeyName": "池添",
    "totalPoint": 11.26,
    "horsePoint": 5,
    "jockeyPoint": 3.84,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 5.5,
    "roubdTotalPoint": 4.79,
    "oddsRank": 12,
    "rank": 3
  },
  {
    "horseNumber": 9,
    "horseName": "サトノエルドール",
    "jockeyName": "亀田",
    "totalPoint": 10.92,
    "horsePoint": 3.79,
    "jockeyPoint": 3.13,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 5.5,
    "roubdTotalPoint": 4.64,
    "oddsRank": 8,
    "rank": 5
  },
  {
    "horseNumber": 1,
    "horseName": "○外カフェファラオ",
    "jockeyName": "ルメール",
    "totalPoint": 10.86,
    "horsePoint": 0.56,
    "jockeyPoint": 4.7,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 4.62,
    "oddsRank": 1,
    "rank": 9
  },
  {
    "horseNumber": 2,
    "horseName": "ハナズレジェンド",
    "jockeyName": "藤岡佑",
    "totalPoint": 10.24,
    "horsePoint": 3.11,
    "jockeyPoint": 5,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 4.35,
    "oddsRank": 6,
    "rank": 10
  },
  {
    "horseNumber": 12,
    "horseName": "アドマイヤジャスタ",
    "jockeyName": "吉田隼",
    "totalPoint": 9.87,
    "horsePoint": 4.55,
    "jockeyPoint": 4.5,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 5.5,
    "roubdTotalPoint": 4.2,
    "oddsRank": 10,
    "rank": 16
  },
  {
    "horseNumber": 8,
    "horseName": "○地トーセンスーリヤ",
    "jockeyName": "横山和",
    "totalPoint": 9.5,
    "horsePoint": 3.29,
    "jockeyPoint": 3.49,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 0,
    "roubdTotalPoint": 4.04,
    "oddsRank": 2,
    "rank": 1
  },
  {
    "horseNumber": 6,
    "horseName": "タイセイトレイル",
    "jockeyName": "菱田",
    "totalPoint": 8.73,
    "horsePoint": 1.05,
    "jockeyPoint": 3.05,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 5.5,
    "roubdTotalPoint": 3.71,
    "oddsRank": 16,
    "rank": 12
  },
  {
    "horseNumber": 3,
    "horseName": "ワールドウインズ",
    "jockeyName": "武豊",
    "totalPoint": 8.47,
    "horsePoint": 4.31,
    "jockeyPoint": 3.41,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 5.5,
    "roubdTotalPoint": 3.6,
    "oddsRank": 5,
    "rank": 7
  },
  {
    "horseNumber": 5,
    "horseName": "ジェットモーション",
    "jockeyName": "横山武",
    "totalPoint": 7.78,
    "horsePoint": 0.84,
    "jockeyPoint": 3.7,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 3.31,
    "oddsRank": 4,
    "rank": 6
  },
  {
    "horseNumber": 14,
    "horseName": "マイネルファンロン",
    "jockeyName": "秋山稔",
    "totalPoint": 7.74,
    "horsePoint": 2.2,
    "jockeyPoint": 1.09,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 8.5,
    "roubdTotalPoint": 3.29,
    "oddsRank": 7,
    "rank": 14
  },
  {
    "horseNumber": 13,
    "horseName": "ワセダインブルー",
    "jockeyName": "大野",
    "totalPoint": 7.09,
    "horsePoint": 3.53,
    "jockeyPoint": 2.27,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 6.5,
    "roubdTotalPoint": 3.01,
    "oddsRank": 9,
    "rank": 13
  },
  {
    "horseNumber": 16,
    "horseName": "レッドジェニアル",
    "jockeyName": "坂井",
    "totalPoint": 7.01,
    "horsePoint": 1.72,
    "jockeyPoint": 2.31,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 8.5,
    "roubdTotalPoint": 2.98,
    "oddsRank": 13,
    "rank": 15
  },
  {
    "horseNumber": 4,
    "horseName": "アイスバブル",
    "jockeyName": "水口",
    "totalPoint": 6.92,
    "horsePoint": 3.55,
    "jockeyPoint": 0.71,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 5.5,
    "roubdTotalPoint": 2.94,
    "oddsRank": 14,
    "rank": 2
  },
  {
    "horseNumber": 7,
    "horseName": "ドゥオーモ",
    "jockeyName": "勝浦",
    "totalPoint": 6.85,
    "horsePoint": 1.57,
    "jockeyPoint": 2.98,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 5.5,
    "roubdTotalPoint": 2.91,
    "oddsRank": 15,
    "rank": 11
  },
  {
    "horseNumber": 11,
    "horseName": "ディアマンミノル",
    "jockeyName": "泉谷",
    "totalPoint": 6.12,
    "horsePoint": 0.63,
    "jockeyPoint": 2.43,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 6.5,
    "roubdTotalPoint": 2.6,
    "oddsRank": 11,
    "rank": 4
  }
]

export default Index;

