import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";
import {RaceForecastTableG3tan} from "../../../../components/RaceForecastTableG3tan"

const title = "第56回札幌2歳ステークス(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202101020711"

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
    "date": "2021/09/04",
    "dirName": "2021/G3/sapporo2",
    "raceName": "札幌2歳S(G3)",
    "tan": -1000,
    "tan2": 50,
    "huku": -1000,
    "wide3box": 155,
    "wide5box": -650,
    "3huku5box": -1000,
    "1-2-3oddsRank": "1-4-5"
  }
]
const top_forecast_data = [
  {
    "horseNumber": 1,
    "horseName": "リューベック",
    "jockeyName": "横山武",
    "totalPoint": 13.84,
    "horsePoint": 2.34,
    "jockeyPoint": 5,
    "oikiriPoint": 4,
    "stablePoint": 4,
    "timePoint": 3,
    "roubdTotalPoint": 5,
    "oddsRank": 3,
    "rank": 6
  },
  {
    "horseNumber": 9,
    "horseName": "ジオグリフ",
    "jockeyName": "ルメール",
    "totalPoint": 12.19,
    "horsePoint": 2.34,
    "jockeyPoint": 3.5,
    "oikiriPoint": 4,
    "stablePoint": 4,
    "timePoint": 3.5,
    "roubdTotalPoint": 4.4,
    "oddsRank": 1,
    "rank": 1
  },
  {
    "horseNumber": 3,
    "horseName": "ダークエクリプス",
    "jockeyName": "和田竜",
    "totalPoint": 9.94,
    "horsePoint": 2.34,
    "jockeyPoint": 4.17,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 0,
    "roubdTotalPoint": 3.59,
    "oddsRank": "",
    "rank": "除外"
  },
  {
    "horseNumber": 7,
    "horseName": "アスクワイルドモア",
    "jockeyName": "武豊",
    "totalPoint": 9.3,
    "horsePoint": 5,
    "jockeyPoint": 1.5,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 5,
    "roubdTotalPoint": 3.36,
    "oddsRank": 4,
    "rank": 2
  },
  {
    "horseNumber": 10,
    "horseName": "トーセンヴァンノ",
    "jockeyName": "山田",
    "totalPoint": 7.7,
    "horsePoint": 3.63,
    "jockeyPoint": 1.83,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3.5,
    "roubdTotalPoint": 2.78,
    "oddsRank": 5,
    "rank": 3
  },
  {
    "horseNumber": 4,
    "horseName": "エーティーマクフィ",
    "jockeyName": "藤岡佑",
    "totalPoint": 7.39,
    "horsePoint": 4.22,
    "jockeyPoint": 1.5,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3,
    "roubdTotalPoint": 2.67,
    "oddsRank": 6,
    "rank": 7
  },
  {
    "horseNumber": 6,
    "horseName": "オンリーオピニオン",
    "jockeyName": "柴田大",
    "totalPoint": 5.94,
    "horsePoint": 2.34,
    "jockeyPoint": 0,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 2.15,
    "oddsRank": 7,
    "rank": 4
  },
  {
    "horseNumber": 2,
    "horseName": "トップキャスト",
    "jockeyName": "団野",
    "totalPoint": 5.94,
    "horsePoint": 2.34,
    "jockeyPoint": 0,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 2.15,
    "oddsRank": 2,
    "rank": 5
  },
  {
    "horseNumber": 5,
    "horseName": "ユキノオウジサマ",
    "jockeyName": "横山和",
    "totalPoint": 4.43,
    "horsePoint": 2.34,
    "jockeyPoint": 0.83,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 5,
    "roubdTotalPoint": 1.6,
    "oddsRank": 8,
    "rank": 8
  },
  {
    "horseNumber": 8,
    "horseName": "クリノメガミエース",
    "jockeyName": "菱田",
    "totalPoint": 2.74,
    "horsePoint": 2.34,
    "jockeyPoint": 0.67,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 0.99,
    "oddsRank": 9,
    "rank": 9
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 9,
    "horseName": "ジオグリフ",
    "jockeyName": "ルメール",
    "totalPoint": 18.26,
    "horsePoint": 3.94,
    "jockeyPoint": 5,
    "framePoint": 4.05,
    "timePoint": 4.35,
    "racePoint": 1.51,
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 1
  },
  {
    "horseNumber": 7,
    "horseName": "アスクワイルドモア",
    "jockeyName": "武豊",
    "totalPoint": 16.62,
    "horsePoint": 3.88,
    "jockeyPoint": 3.51,
    "framePoint": 5,
    "timePoint": 3.19,
    "racePoint": 3.19,
    "roubdTotalPoint": 4.55,
    "oddsRank": 4,
    "rank": 2
  },
  {
    "horseNumber": 4,
    "horseName": "エーティーマクフィ",
    "jockeyName": "藤岡佑",
    "totalPoint": 14.77,
    "horsePoint": 5,
    "jockeyPoint": 2.61,
    "framePoint": 2.38,
    "timePoint": 3.51,
    "racePoint": 3.51,
    "roubdTotalPoint": 4.04,
    "oddsRank": 6,
    "rank": 7
  },
  {
    "horseNumber": 1,
    "horseName": "リューベック",
    "jockeyName": "横山武",
    "totalPoint": 14.1,
    "horsePoint": 3.94,
    "jockeyPoint": 3.13,
    "framePoint": 1.67,
    "timePoint": 3.7,
    "racePoint": 3.7,
    "roubdTotalPoint": 3.86,
    "oddsRank": 3,
    "rank": 6
  },
  {
    "horseNumber": 5,
    "horseName": "ユキノオウジサマ",
    "jockeyName": "横山和",
    "totalPoint": 13.35,
    "horsePoint": 3.94,
    "jockeyPoint": 2.46,
    "framePoint": 3.33,
    "timePoint": 3.37,
    "racePoint": 1.51,
    "roubdTotalPoint": 3.66,
    "oddsRank": 8,
    "rank": 8
  },
  {
    "horseNumber": 10,
    "horseName": "トーセンヴァンノ",
    "jockeyName": "山田",
    "totalPoint": 13.34,
    "horsePoint": 4.36,
    "jockeyPoint": 0.82,
    "framePoint": 4.05,
    "timePoint": 3.83,
    "racePoint": 3.83,
    "roubdTotalPoint": 3.65,
    "oddsRank": 5,
    "rank": 3
  },
  {
    "horseNumber": 2,
    "horseName": "トップキャスト",
    "jockeyName": "団野",
    "totalPoint": 12.73,
    "horsePoint": 3.94,
    "jockeyPoint": 1.04,
    "framePoint": 1.67,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 3.49,
    "oddsRank": 2,
    "rank": 5
  },
  {
    "horseNumber": 3,
    "horseName": "ダークエクリプス",
    "jockeyName": "和田竜",
    "totalPoint": 11.83,
    "horsePoint": 3.94,
    "jockeyPoint": 1.87,
    "framePoint": 3.33,
    "timePoint": 2.17,
    "racePoint": 2.17,
    "roubdTotalPoint": 3.24,
    "oddsRank": "",
    "rank": "除外"
  },
  {
    "horseNumber": 8,
    "horseName": "クリノメガミエース",
    "jockeyName": "菱田",
    "totalPoint": 10.7,
    "horsePoint": 3.94,
    "jockeyPoint": 1.04,
    "framePoint": 5,
    "timePoint": 1.09,
    "racePoint": 1.09,
    "roubdTotalPoint": 2.93,
    "oddsRank": 9,
    "rank": 9
  },
  {
    "horseNumber": 6,
    "horseName": "オンリーオピニオン",
    "jockeyName": "柴田大",
    "totalPoint": 8.45,
    "horsePoint": 3.94,
    "jockeyPoint": 0,
    "framePoint": 2.38,
    "timePoint": 2.17,
    "racePoint": 2.17,
    "roubdTotalPoint": 2.31,
    "oddsRank": 7,
    "rank": 4
  }
]

export default Index;

