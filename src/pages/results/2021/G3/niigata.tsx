import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";
import {RaceForecastTableG3tan} from "../../../../components/RaceForecastTableG3tan"
const title = "第57回新潟記念(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202104040811&rf=race_list"

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
    "date": "2021/09/05",
    "dirName": "2021/G3/niigata",
    "raceName": "新潟記念(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": 1400,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "12-3-2"
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 5,
    "horseName": "リアアメリア",
    "jockeyName": "川田",
    "totalPoint": 18.75,
    "horsePoint": 2.21,
    "jockeyPoint": 5,
    "framePoint": 5,
    "timePoint": 4.67,
    "racePoint": 4.52,
    "roubdTotalPoint": 5,
    "oddsRank": 6,
    "rank": 9
  },
  {
    "horseNumber": 6,
    "horseName": "パルティアーモ",
    "jockeyName": "横山武",
    "totalPoint": 15.71,
    "horsePoint": 3.38,
    "jockeyPoint": 1.94,
    "framePoint": 5,
    "timePoint": 4.72,
    "racePoint": 4.59,
    "roubdTotalPoint": 4.19,
    "oddsRank": 4,
    "rank": 11
  },
  {
    "horseNumber": 8,
    "horseName": "ギベオン",
    "jockeyName": "岩田望",
    "totalPoint": 15.27,
    "horsePoint": 3.81,
    "jockeyPoint": 1.82,
    "framePoint": 4.07,
    "timePoint": 4.86,
    "racePoint": 4.43,
    "roubdTotalPoint": 4.07,
    "oddsRank": 10,
    "rank": 17
  },
  {
    "horseNumber": 10,
    "horseName": "ラーゴム",
    "jockeyName": "池添",
    "totalPoint": 15.21,
    "horsePoint": 4.38,
    "jockeyPoint": 2.94,
    "framePoint": 2.04,
    "timePoint": 4.24,
    "racePoint": 4.22,
    "roubdTotalPoint": 4.06,
    "oddsRank": 7,
    "rank": 12
  },
  {
    "horseNumber": 16,
    "horseName": "マイネルファンロン",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 14.16,
    "horsePoint": 4.16,
    "jockeyPoint": 2.53,
    "framePoint": 1.67,
    "timePoint": 4.45,
    "racePoint": 3.91,
    "roubdTotalPoint": 3.78,
    "oddsRank": 12,
    "rank": 1
  },
  {
    "horseNumber": 17,
    "horseName": "○地トーセンスーリヤ",
    "jockeyName": "横山和",
    "totalPoint": 14.16,
    "horsePoint": 2.67,
    "jockeyPoint": 3.35,
    "framePoint": 1.67,
    "timePoint": 4.82,
    "racePoint": 4.03,
    "roubdTotalPoint": 3.78,
    "oddsRank": 3,
    "rank": 2
  },
  {
    "horseNumber": 12,
    "horseName": "ヤシャマル",
    "jockeyName": "菅原明",
    "totalPoint": 13.58,
    "horsePoint": 5,
    "jockeyPoint": 1.53,
    "framePoint": 1.67,
    "timePoint": 4.38,
    "racePoint": 4,
    "roubdTotalPoint": 3.62,
    "oddsRank": 8,
    "rank": 4
  },
  {
    "horseNumber": 1,
    "horseName": "サトノアーサー",
    "jockeyName": "石川",
    "totalPoint": 13.16,
    "horsePoint": 3.18,
    "jockeyPoint": 2.18,
    "framePoint": 1.67,
    "timePoint": 4.71,
    "racePoint": 4.57,
    "roubdTotalPoint": 3.51,
    "oddsRank": 13,
    "rank": 7
  },
  {
    "horseNumber": 13,
    "horseName": "クラヴェル",
    "jockeyName": "横山典",
    "totalPoint": 12.82,
    "horsePoint": 1.83,
    "jockeyPoint": 3.35,
    "framePoint": 1.67,
    "timePoint": 4.28,
    "racePoint": 3.85,
    "roubdTotalPoint": 3.42,
    "oddsRank": 2,
    "rank": 3
  },
  {
    "horseNumber": 2,
    "horseName": "ザダル",
    "jockeyName": "石橋脩",
    "totalPoint": 12.69,
    "horsePoint": 2.81,
    "jockeyPoint": 1.82,
    "framePoint": 1.67,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 3.38,
    "oddsRank": 1,
    "rank": 13
  },
  {
    "horseNumber": 9,
    "horseName": "アドマイヤポラリス",
    "jockeyName": "三浦",
    "totalPoint": 12.56,
    "horsePoint": 3.83,
    "jockeyPoint": 2,
    "framePoint": 2.04,
    "timePoint": 4.4,
    "racePoint": 1.95,
    "roubdTotalPoint": 3.35,
    "oddsRank": 15,
    "rank": 15
  },
  {
    "horseNumber": 7,
    "horseName": "マイネルサーパス",
    "jockeyName": "柴田大",
    "totalPoint": 12.32,
    "horsePoint": 3.03,
    "jockeyPoint": 0.76,
    "framePoint": 4.07,
    "timePoint": 4.24,
    "racePoint": 3.94,
    "roubdTotalPoint": 3.29,
    "oddsRank": 16,
    "rank": 16
  },
  {
    "horseNumber": 3,
    "horseName": "ショウナンバルディ",
    "jockeyName": "戸崎圭",
    "totalPoint": 11.01,
    "horsePoint": 3.89,
    "jockeyPoint": 1.47,
    "framePoint": 0.74,
    "timePoint": 3.95,
    "racePoint": 3.28,
    "roubdTotalPoint": 2.94,
    "oddsRank": 9,
    "rank": 14
  },
  {
    "horseNumber": 15,
    "horseName": "プレシャスブルー",
    "jockeyName": "柴田善",
    "totalPoint": 9.74,
    "horsePoint": 2.64,
    "jockeyPoint": 0.59,
    "framePoint": 1.67,
    "timePoint": 4.36,
    "racePoint": 3.62,
    "roubdTotalPoint": 2.6,
    "oddsRank": 14,
    "rank": 6
  },
  {
    "horseNumber": 11,
    "horseName": "ラインベック",
    "jockeyName": "津村",
    "totalPoint": 9.13,
    "horsePoint": 0.77,
    "jockeyPoint": 1.65,
    "framePoint": 1.67,
    "timePoint": 4.16,
    "racePoint": 3.46,
    "roubdTotalPoint": 2.43,
    "oddsRank": 5,
    "rank": 5
  },
  {
    "horseNumber": 14,
    "horseName": "エフェクトオン",
    "jockeyName": "木幡巧",
    "totalPoint": 6.22,
    "horsePoint": 0.96,
    "jockeyPoint": 0,
    "framePoint": 1.67,
    "timePoint": 3.94,
    "racePoint": 1.92,
    "roubdTotalPoint": 1.66,
    "oddsRank": 11,
    "rank": 8
  },
  {
    "horseNumber": 4,
    "horseName": "レッドサイオン",
    "jockeyName": "杉原",
    "totalPoint": 5.43,
    "horsePoint": 2.86,
    "jockeyPoint": 0.71,
    "framePoint": 0.74,
    "timePoint": 0.66,
    "racePoint": 1.13,
    "roubdTotalPoint": 1.45,
    "oddsRank": 17,
    "rank": 10
  }
]
const top_forecast_data = [
  {
    "horseNumber": 17,
    "horseName": "○地トーセンスーリヤ",
    "jockeyName": "横山和",
    "totalPoint": 10.86,
    "horsePoint": 2.14,
    "jockeyPoint": 5,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 0,
    "roubdTotalPoint": 5,
    "oddsRank": 3,
    "rank": 2
  },
  {
    "horseNumber": 5,
    "horseName": "リアアメリア",
    "jockeyName": "川田",
    "totalPoint": 10.04,
    "horsePoint": 2.44,
    "jockeyPoint": 3.68,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 5.5,
    "roubdTotalPoint": 4.62,
    "oddsRank": 6,
    "rank": 9
  },
  {
    "horseNumber": 2,
    "horseName": "ザダル",
    "jockeyName": "石橋脩",
    "totalPoint": 8.28,
    "horsePoint": 2.76,
    "jockeyPoint": 0.44,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 5.5,
    "roubdTotalPoint": 3.81,
    "oddsRank": 1,
    "rank": 13
  },
  {
    "horseNumber": 16,
    "horseName": "マイネルファンロン",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 8.23,
    "horsePoint": 3.98,
    "jockeyPoint": 2.28,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3,
    "roubdTotalPoint": 3.79,
    "oddsRank": 12,
    "rank": 1
  },
  {
    "horseNumber": 8,
    "horseName": "ギベオン",
    "jockeyName": "岩田望",
    "totalPoint": 7.23,
    "horsePoint": 3.03,
    "jockeyPoint": 1.14,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 5.5,
    "roubdTotalPoint": 3.33,
    "oddsRank": 10,
    "rank": 17
  },
  {
    "horseNumber": 13,
    "horseName": "クラヴェル",
    "jockeyName": "横山典",
    "totalPoint": 7.17,
    "horsePoint": 0.36,
    "jockeyPoint": 1.23,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 8.5,
    "roubdTotalPoint": 3.3,
    "oddsRank": 2,
    "rank": 3
  },
  {
    "horseNumber": 3,
    "horseName": "ショウナンバルディ",
    "jockeyName": "戸崎圭",
    "totalPoint": 6.78,
    "horsePoint": 5,
    "jockeyPoint": 1.23,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 1,
    "roubdTotalPoint": 3.12,
    "oddsRank": 9,
    "rank": 14
  },
  {
    "horseNumber": 10,
    "horseName": "ラーゴム",
    "jockeyName": "池添",
    "totalPoint": 6.71,
    "horsePoint": 1.11,
    "jockeyPoint": 4.39,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 3.09,
    "oddsRank": 7,
    "rank": 12
  },
  {
    "horseNumber": 6,
    "horseName": "パルティアーモ",
    "jockeyName": "横山武",
    "totalPoint": 5.8,
    "horsePoint": 1,
    "jockeyPoint": 1.75,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 1,
    "roubdTotalPoint": 2.67,
    "oddsRank": 4,
    "rank": 11
  },
  {
    "horseNumber": 7,
    "horseName": "マイネルサーパス",
    "jockeyName": "柴田大",
    "totalPoint": 5.65,
    "horsePoint": 2.27,
    "jockeyPoint": 0.7,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3,
    "roubdTotalPoint": 2.6,
    "oddsRank": 16,
    "rank": 16
  },
  {
    "horseNumber": 9,
    "horseName": "アドマイヤポラリス",
    "jockeyName": "三浦",
    "totalPoint": 5.21,
    "horsePoint": 2.44,
    "jockeyPoint": 0.53,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2,
    "roubdTotalPoint": 2.4,
    "oddsRank": 15,
    "rank": 15
  },
  {
    "horseNumber": 15,
    "horseName": "プレシャスブルー",
    "jockeyName": "柴田善",
    "totalPoint": 5.08,
    "horsePoint": 1.82,
    "jockeyPoint": 0.88,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 1,
    "roubdTotalPoint": 2.34,
    "oddsRank": 14,
    "rank": 6
  },
  {
    "horseNumber": 4,
    "horseName": "レッドサイオン",
    "jockeyName": "杉原",
    "totalPoint": 4.79,
    "horsePoint": 2.22,
    "jockeyPoint": 0,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3,
    "roubdTotalPoint": 2.21,
    "oddsRank": 17,
    "rank": 10
  },
  {
    "horseNumber": 12,
    "horseName": "ヤシャマル",
    "jockeyName": "菅原明",
    "totalPoint": 4.69,
    "horsePoint": 2.93,
    "jockeyPoint": 0.18,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 1,
    "roubdTotalPoint": 2.16,
    "oddsRank": 8,
    "rank": 4
  },
  {
    "horseNumber": 1,
    "horseName": "サトノアーサー",
    "jockeyName": "石川",
    "totalPoint": 4.67,
    "horsePoint": 2.67,
    "jockeyPoint": 0,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2,
    "roubdTotalPoint": 2.15,
    "oddsRank": 13,
    "rank": 7
  },
  {
    "horseNumber": 11,
    "horseName": "ラインベック",
    "jockeyName": "津村",
    "totalPoint": 3.78,
    "horsePoint": 0.63,
    "jockeyPoint": 0.44,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 1.74,
    "oddsRank": 5,
    "rank": 5
  },
  {
    "horseNumber": 14,
    "horseName": "エフェクトオン",
    "jockeyName": "木幡巧",
    "totalPoint": 3.52,
    "horsePoint": 0.56,
    "jockeyPoint": 0,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 1,
    "roubdTotalPoint": 1.62,
    "oddsRank": 11,
    "rank": 8
  }
]

export default Index;
