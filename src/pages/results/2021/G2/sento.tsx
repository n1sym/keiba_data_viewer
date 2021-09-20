import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第75回朝日セントライト記念(G2)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202106040511&rf=race_submenu"

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
    "horseNumber": 7,
    "horseName": "タイトルホルダー",
    "jockeyName": "横山武",
    "totalPoint": 9.54,
    "horsePoint": 5,
    "jockeyPoint": 3.17,
    "framePoint": 0,
    "timePoint": 5,
    "racePoint": 2.79,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 11,
    "horseName": "ルペルカーリア",
    "jockeyName": "福永",
    "totalPoint": 7.36,
    "horsePoint": 2.51,
    "jockeyPoint": 4.81,
    "framePoint": 5,
    "timePoint": 4.33,
    "racePoint": 5,
    "roubdTotalPoint": 3.86
  },
  {
    "horseNumber": 12,
    "horseName": "ソーヴァリアント",
    "jockeyName": "戸崎圭",
    "totalPoint": 6.53,
    "horsePoint": 2.08,
    "jockeyPoint": 4.52,
    "framePoint": 5,
    "timePoint": 4.1,
    "racePoint": 2.96,
    "roubdTotalPoint": 3.42
  },
  {
    "horseNumber": 3,
    "horseName": "ヴィクティファルス",
    "jockeyName": "池添",
    "totalPoint": 6.5,
    "horsePoint": 3.87,
    "jockeyPoint": 1.35,
    "framePoint": 5,
    "timePoint": 3.74,
    "racePoint": 2.47,
    "roubdTotalPoint": 3.41
  },
  {
    "horseNumber": 6,
    "horseName": "レインフロムヘヴン",
    "jockeyName": "石橋脩",
    "totalPoint": 5.94,
    "horsePoint": 1.77,
    "jockeyPoint": 4.33,
    "framePoint": 3.86,
    "timePoint": 2.99,
    "racePoint": 1.41,
    "roubdTotalPoint": 3.11
  },
  {
    "horseNumber": 10,
    "horseName": "オーソクレース",
    "jockeyName": "ルメール",
    "totalPoint": 5.76,
    "horsePoint": 1.26,
    "jockeyPoint": 5,
    "framePoint": 0,
    "timePoint": 3.11,
    "racePoint": 1.62,
    "roubdTotalPoint": 3.02
  },
  {
    "horseNumber": 5,
    "horseName": "ノースブリッジ",
    "jockeyName": "岩田康",
    "totalPoint": 5.52,
    "horsePoint": 3.17,
    "jockeyPoint": 1.35,
    "framePoint": 3.86,
    "timePoint": 3.26,
    "racePoint": 3.07,
    "roubdTotalPoint": 2.89
  },
  {
    "horseNumber": 8,
    "horseName": "レッドヴェロシティ",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 5.28,
    "horsePoint": 1.46,
    "jockeyPoint": 4.04,
    "framePoint": 0,
    "timePoint": 3.67,
    "racePoint": 1.83,
    "roubdTotalPoint": 2.77
  },
  {
    "horseNumber": 13,
    "horseName": "グラティアス",
    "jockeyName": "松山",
    "totalPoint": 5.27,
    "horsePoint": 2.67,
    "jockeyPoint": 1.92,
    "framePoint": 2.5,
    "timePoint": 3.44,
    "racePoint": 3.34,
    "roubdTotalPoint": 2.76
  },
  {
    "horseNumber": 14,
    "horseName": "ワールドリバイバル",
    "jockeyName": "津村",
    "totalPoint": 5.11,
    "horsePoint": 1.34,
    "jockeyPoint": 4.04,
    "framePoint": 2.5,
    "timePoint": 2.99,
    "racePoint": 2.1,
    "roubdTotalPoint": 2.68
  },
  {
    "horseNumber": 2,
    "horseName": "アサマノイタズラ",
    "jockeyName": "田辺",
    "totalPoint": 4.81,
    "horsePoint": 1.9,
    "jockeyPoint": 2.69,
    "framePoint": 3.86,
    "timePoint": 2.95,
    "racePoint": 2.08,
    "roubdTotalPoint": 2.52
  },
  {
    "horseNumber": 1,
    "horseName": "ベルウッドエオ",
    "jockeyName": "吉田豊",
    "totalPoint": 1.96,
    "horsePoint": 0.9,
    "jockeyPoint": 0.87,
    "framePoint": 2.5,
    "timePoint": 1.8,
    "racePoint": 1.38,
    "roubdTotalPoint": 1.03
  },
  {
    "horseNumber": 4,
    "horseName": "タイムトゥヘヴン",
    "jockeyName": "柴田善",
    "totalPoint": 1.85,
    "horsePoint": 0.94,
    "jockeyPoint": 0.67,
    "framePoint": 5,
    "timePoint": 4.78,
    "racePoint": 2.68,
    "roubdTotalPoint": 0.97
  },
  {
    "horseNumber": 9,
    "horseName": "カレンルシェルブル",
    "jockeyName": "横山和",
    "totalPoint": 1.68,
    "horsePoint": 1.2,
    "jockeyPoint": 0,
    "framePoint": 0,
    "timePoint": 2.84,
    "racePoint": 2.33,
    "roubdTotalPoint": 0.88
  }
]
const top_forecast_data = [
  {
    "horseNumber": 7,
    "horseName": "タイトルホルダー",
    "jockeyName": "横山武",
    "totalPoint": 10.23,
    "horsePoint": 4.63,
    "jockeyPoint": 4,
    "framePoint": 0,
    "timePoint": 5,
    "racePoint": 2.79,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 13,
    "horseName": "グラティアス",
    "jockeyName": "松山",
    "totalPoint": 7.98,
    "horsePoint": 2.38,
    "jockeyPoint": 4,
    "framePoint": 0,
    "timePoint": 3.44,
    "racePoint": 3.34,
    "roubdTotalPoint": 3.9
  },
  {
    "horseNumber": 11,
    "horseName": "ルペルカーリア",
    "jockeyName": "福永",
    "totalPoint": 7.46,
    "horsePoint": 0.46,
    "jockeyPoint": 5,
    "framePoint": 1.7,
    "timePoint": 4.33,
    "racePoint": 5,
    "roubdTotalPoint": 3.65
  },
  {
    "horseNumber": 10,
    "horseName": "オーソクレース",
    "jockeyName": "ルメール",
    "totalPoint": 6.75,
    "horsePoint": 0.31,
    "jockeyPoint": 4.6,
    "framePoint": 0,
    "timePoint": 3.11,
    "racePoint": 1.62,
    "roubdTotalPoint": 3.3
  },
  {
    "horseNumber": 8,
    "horseName": "レッドヴェロシティ",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 5.86,
    "horsePoint": 1.66,
    "jockeyPoint": 3,
    "framePoint": 0,
    "timePoint": 3.67,
    "racePoint": 1.83,
    "roubdTotalPoint": 2.86
  },
  {
    "horseNumber": 3,
    "horseName": "ヴィクティファルス",
    "jockeyName": "池添",
    "totalPoint": 5,
    "horsePoint": 5,
    "jockeyPoint": 0,
    "framePoint": 5,
    "timePoint": 3.74,
    "racePoint": 2.47,
    "roubdTotalPoint": 2.44
  },
  {
    "horseNumber": 12,
    "horseName": "ソーヴァリアント",
    "jockeyName": "戸崎圭",
    "totalPoint": 3.73,
    "horsePoint": 1.21,
    "jockeyPoint": 1.8,
    "framePoint": 1.7,
    "timePoint": 4.1,
    "racePoint": 2.96,
    "roubdTotalPoint": 1.82
  },
  {
    "horseNumber": 6,
    "horseName": "レインフロムヘヴン",
    "jockeyName": "石橋脩",
    "totalPoint": 3.51,
    "horsePoint": 0.15,
    "jockeyPoint": 2.4,
    "framePoint": 3.3,
    "timePoint": 2.99,
    "racePoint": 1.41,
    "roubdTotalPoint": 1.72
  },
  {
    "horseNumber": 2,
    "horseName": "アサマノイタズラ",
    "jockeyName": "田辺",
    "totalPoint": 2.98,
    "horsePoint": 1.58,
    "jockeyPoint": 1,
    "framePoint": 0,
    "timePoint": 2.95,
    "racePoint": 2.08,
    "roubdTotalPoint": 1.46
  },
  {
    "horseNumber": 1,
    "horseName": "ベルウッドエオ",
    "jockeyName": "吉田豊",
    "totalPoint": 2.89,
    "horsePoint": 0.37,
    "jockeyPoint": 1.8,
    "framePoint": 0,
    "timePoint": 1.8,
    "racePoint": 1.38,
    "roubdTotalPoint": 1.41
  },
  {
    "horseNumber": 14,
    "horseName": "ワールドリバイバル",
    "jockeyName": "津村",
    "totalPoint": 2.36,
    "horsePoint": 0.4,
    "jockeyPoint": 1.4,
    "framePoint": 0,
    "timePoint": 2.99,
    "racePoint": 2.1,
    "roubdTotalPoint": 1.15
  },
  {
    "horseNumber": 5,
    "horseName": "ノースブリッジ",
    "jockeyName": "岩田康",
    "totalPoint": 2.14,
    "horsePoint": 2.14,
    "jockeyPoint": 0,
    "framePoint": 3.3,
    "timePoint": 3.26,
    "racePoint": 3.07,
    "roubdTotalPoint": 1.05
  },
  {
    "horseNumber": 4,
    "horseName": "タイムトゥヘヴン",
    "jockeyName": "柴田善",
    "totalPoint": 0.9,
    "horsePoint": 0.9,
    "jockeyPoint": 0,
    "framePoint": 5,
    "timePoint": 4.78,
    "racePoint": 2.68,
    "roubdTotalPoint": 0.44
  },
  {
    "horseNumber": 9,
    "horseName": "カレンルシェルブル",
    "jockeyName": "横山和",
    "totalPoint": 0.69,
    "horsePoint": 0.69,
    "jockeyPoint": 0,
    "framePoint": 0,
    "timePoint": 2.84,
    "racePoint": 2.33,
    "roubdTotalPoint": 0.34
  }
]

export default Index;
