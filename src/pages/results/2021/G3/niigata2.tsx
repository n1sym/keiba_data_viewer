import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";
import {RaceForecastTableG3tan} from "../../../../components/RaceForecastTableG3tan"

const title = "第41回新潟2歳ステークス(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202104040611&rf=race_list"

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
    "dirName": "2021/G3/niigata2",
    "raceName": "新潟2歳S(G3)",
    "tan": 3500,
    "tan2": 1250,
    "huku": 300,
    "wide3box": -241,
    "wide5box": -770,
    "3huku5box": -1000,
    "1-2-3oddsRank": "3-1-2"
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 1,
    "horseName": "セリフォス",
    "jockeyName": "川田",
    "totalPoint": 19.21,
    "horsePoint": 5,
    "jockeyPoint": 4.2,
    "framePoint": 3.53,
    "timePoint": 4.74,
    "racePoint": 4.29,
    "roubdTotalPoint": 5,
    "oddsRank": 3,
    "rank": 1
  },
  {
    "horseNumber": 8,
    "horseName": "アライバル",
    "jockeyName": "ルメール",
    "totalPoint": 18.5,
    "horsePoint": 5,
    "jockeyPoint": 5,
    "framePoint": 3.53,
    "timePoint": 3.16,
    "racePoint": 2.86,
    "roubdTotalPoint": 4.82,
    "oddsRank": 1,
    "rank": 2
  },
  {
    "horseNumber": 4,
    "horseName": "タガノフィナーレ",
    "jockeyName": "田辺",
    "totalPoint": 17.58,
    "horsePoint": 4.61,
    "jockeyPoint": 2.53,
    "framePoint": 5,
    "timePoint": 4.28,
    "racePoint": 5,
    "roubdTotalPoint": 4.58,
    "oddsRank": 12,
    "rank": 7
  },
  {
    "horseNumber": 2,
    "horseName": "クレイドル",
    "jockeyName": "福永",
    "totalPoint": 16.93,
    "horsePoint": 5,
    "jockeyPoint": 3.67,
    "framePoint": 2.94,
    "timePoint": 3.82,
    "racePoint": 3.45,
    "roubdTotalPoint": 4.41,
    "oddsRank": 4,
    "rank": 11
  },
  {
    "horseNumber": 10,
    "horseName": "サイード",
    "jockeyName": "戸崎圭",
    "totalPoint": 16.2,
    "horsePoint": 5,
    "jockeyPoint": 2.53,
    "framePoint": 5,
    "timePoint": 3.68,
    "racePoint": 1.79,
    "roubdTotalPoint": 4.22,
    "oddsRank": 10,
    "rank": 12
  },
  {
    "horseNumber": 6,
    "horseName": "オタルエバー",
    "jockeyName": "幸",
    "totalPoint": 14.7,
    "horsePoint": 5,
    "jockeyPoint": 1.2,
    "framePoint": 3.53,
    "timePoint": 4.47,
    "racePoint": 4.05,
    "roubdTotalPoint": 3.83,
    "oddsRank": 2,
    "rank": 3
  },
  {
    "horseNumber": 7,
    "horseName": "クラウンドマジック",
    "jockeyName": "岩田康",
    "totalPoint": 13.91,
    "horsePoint": 5,
    "jockeyPoint": 1.07,
    "framePoint": 3.53,
    "timePoint": 3.95,
    "racePoint": 3.57,
    "roubdTotalPoint": 3.62,
    "oddsRank": 7,
    "rank": 10
  },
  {
    "horseNumber": 11,
    "horseName": "コムストックロード",
    "jockeyName": "柴田大",
    "totalPoint": 13.58,
    "horsePoint": 3.09,
    "jockeyPoint": 1.33,
    "framePoint": 3.53,
    "timePoint": 5,
    "racePoint": 4.52,
    "roubdTotalPoint": 3.53,
    "oddsRank": 9,
    "rank": 4
  },
  {
    "horseNumber": 9,
    "horseName": "キミワクイーン",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 13.33,
    "horsePoint": 5,
    "jockeyPoint": 2,
    "framePoint": 5,
    "timePoint": 1.32,
    "racePoint": 1.19,
    "roubdTotalPoint": 3.47,
    "oddsRank": 8,
    "rank": 6
  },
  {
    "horseNumber": 5,
    "horseName": "スタニングローズ",
    "jockeyName": "松山",
    "totalPoint": 12.82,
    "horsePoint": 5,
    "jockeyPoint": 1.4,
    "framePoint": 3.53,
    "timePoint": 2.96,
    "racePoint": 1.67,
    "roubdTotalPoint": 3.34,
    "oddsRank": 5,
    "rank": 5
  },
  {
    "horseNumber": 3,
    "horseName": "ウインピクシス",
    "jockeyName": "丸山",
    "totalPoint": 11.77,
    "horsePoint": 5,
    "jockeyPoint": 1.67,
    "framePoint": 2.94,
    "timePoint": 1.71,
    "racePoint": 1.79,
    "roubdTotalPoint": 3.06,
    "oddsRank": 6,
    "rank": 9
  },
  {
    "horseNumber": 12,
    "horseName": "グランドライン",
    "jockeyName": "三浦",
    "totalPoint": 10.08,
    "horsePoint": 2.53,
    "jockeyPoint": 1.67,
    "framePoint": 3.53,
    "timePoint": 1.97,
    "racePoint": 2.02,
    "roubdTotalPoint": 2.62,
    "oddsRank": 11,
    "rank": 8
  }
]
const top_forecast_data = [
  {
    "horseNumber": 1,
    "horseName": "セリフォス",
    "jockeyName": "川田",
    "totalPoint": 11.96,
    "horsePoint": 5,
    "jockeyPoint": 1.8,
    "oikiriPoint": 4,
    "stablePoint": 4,
    "timePoint": 6,
    "roubdTotalPoint": 5,
    "oddsRank": 3,
    "rank": 1
  },
  {
    "horseNumber": 8,
    "horseName": "アライバル",
    "jockeyName": "ルメール",
    "totalPoint": 10.3,
    "horsePoint": 5,
    "jockeyPoint": 5,
    "oikiriPoint": 0,
    "stablePoint": 4,
    "timePoint": 1,
    "roubdTotalPoint": 4.31,
    "oddsRank": 1,
    "rank": 2
  },
  {
    "horseNumber": 11,
    "horseName": "コムストックロード",
    "jockeyName": "柴田大",
    "totalPoint": 9.55,
    "horsePoint": 2.62,
    "jockeyPoint": 0.13,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 14.5,
    "roubdTotalPoint": 3.99,
    "oddsRank": 9,
    "rank": 4
  },
  {
    "horseNumber": 2,
    "horseName": "クレイドル",
    "jockeyName": "福永",
    "totalPoint": 9.06,
    "horsePoint": 5,
    "jockeyPoint": 1.8,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 3,
    "roubdTotalPoint": 3.79,
    "oddsRank": 4,
    "rank": 11
  },
  {
    "horseNumber": 6,
    "horseName": "オタルエバー",
    "jockeyName": "幸",
    "totalPoint": 8.76,
    "horsePoint": 5,
    "jockeyPoint": 0.8,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 6,
    "roubdTotalPoint": 3.66,
    "oddsRank": 2,
    "rank": 3
  },
  {
    "horseNumber": 4,
    "horseName": "タガノフィナーレ",
    "jockeyName": "田辺",
    "totalPoint": 7.33,
    "horsePoint": 4.29,
    "jockeyPoint": 0.8,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 5.5,
    "roubdTotalPoint": 3.06,
    "oddsRank": 12,
    "rank": 7
  },
  {
    "horseNumber": 10,
    "horseName": "サイード",
    "jockeyName": "戸崎圭",
    "totalPoint": 6.9,
    "horsePoint": 5,
    "jockeyPoint": 1.33,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 1,
    "roubdTotalPoint": 2.88,
    "oddsRank": 10,
    "rank": 12
  },
  {
    "horseNumber": 7,
    "horseName": "クラウンドマジック",
    "jockeyName": "岩田康",
    "totalPoint": 6.54,
    "horsePoint": 5,
    "jockeyPoint": 0.53,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3,
    "roubdTotalPoint": 2.73,
    "oddsRank": 7,
    "rank": 10
  },
  {
    "horseNumber": 5,
    "horseName": "スタニングローズ",
    "jockeyName": "松山",
    "totalPoint": 6.32,
    "horsePoint": 4.64,
    "jockeyPoint": 0.47,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3,
    "roubdTotalPoint": 2.64,
    "oddsRank": 5,
    "rank": 5
  },
  {
    "horseNumber": 3,
    "horseName": "ウインピクシス",
    "jockeyName": "丸山",
    "totalPoint": 5.88,
    "horsePoint": 5,
    "jockeyPoint": 0.73,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 2.46,
    "oddsRank": 6,
    "rank": 9
  },
  {
    "horseNumber": 9,
    "horseName": "キミワクイーン",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 5.48,
    "horsePoint": 5,
    "jockeyPoint": 0.4,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 2.29,
    "oddsRank": 8,
    "rank": 6
  },
  {
    "horseNumber": 12,
    "horseName": "グランドライン",
    "jockeyName": "三浦",
    "totalPoint": 5.34,
    "horsePoint": 2.14,
    "jockeyPoint": 0.4,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 0,
    "roubdTotalPoint": 2.23,
    "oddsRank": 11,
    "rank": 8
  }
]

export default Index;

