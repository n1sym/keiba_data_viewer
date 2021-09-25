import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第67回産経賞オールカマー(G2)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202106040711&rf=race_submenu"

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
    "horseNumber": 12,
    "horseName": "レイパパレ",
    "jockeyName": "川田",
    "totalPoint": 9.08,
    "horsePoint": 3.63,
    "jockeyPoint": 5,
    "framePoint": 3.48,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 11,
    "horseName": "グローリーヴェイズ",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 7.98,
    "horsePoint": 4.5,
    "jockeyPoint": 2.1,
    "framePoint": 3.48,
    "timePoint": 1.33,
    "racePoint": 0.96,
    "roubdTotalPoint": 4.39
  },
  {
    "horseNumber": 6,
    "horseName": "ランブリングアレー",
    "jockeyName": "戸崎圭",
    "totalPoint": 7.45,
    "horsePoint": 3.98,
    "jockeyPoint": 2.35,
    "framePoint": 5,
    "timePoint": 4.92,
    "racePoint": 4.58,
    "roubdTotalPoint": 4.1
  },
  {
    "horseNumber": 16,
    "horseName": "ステイフーリッシュ",
    "jockeyName": "横山和",
    "totalPoint": 7,
    "horsePoint": 5,
    "jockeyPoint": 0,
    "framePoint": 1.52,
    "timePoint": 1.91,
    "racePoint": 3.25,
    "roubdTotalPoint": 3.85
  },
  {
    "horseNumber": 1,
    "horseName": "ウインマリリン",
    "jockeyName": "横山武",
    "totalPoint": 5.87,
    "horsePoint": 3.25,
    "jockeyPoint": 1.65,
    "framePoint": 2.39,
    "timePoint": 4.18,
    "racePoint": 4.61,
    "roubdTotalPoint": 3.23
  },
  {
    "horseNumber": 15,
    "horseName": "ロザムール",
    "jockeyName": "三浦",
    "totalPoint": 4.64,
    "horsePoint": 3.03,
    "jockeyPoint": 0.5,
    "framePoint": 1.52,
    "timePoint": 3.46,
    "racePoint": 4.45,
    "roubdTotalPoint": 2.56
  },
  {
    "horseNumber": 3,
    "horseName": "セダブリランテス",
    "jockeyName": "石川",
    "totalPoint": 4.47,
    "horsePoint": 3.05,
    "jockeyPoint": 0.25,
    "framePoint": 3.04,
    "timePoint": 3.99,
    "racePoint": 4.23,
    "roubdTotalPoint": 2.46
  },
  {
    "horseNumber": 2,
    "horseName": "ウインキートス",
    "jockeyName": "丹内",
    "totalPoint": 4.2,
    "horsePoint": 2.14,
    "jockeyPoint": 1.5,
    "framePoint": 2.39,
    "timePoint": 3.22,
    "racePoint": 4.13,
    "roubdTotalPoint": 2.31
  },
  {
    "horseNumber": 8,
    "horseName": "サトノソルタス",
    "jockeyName": "大野",
    "totalPoint": 4.19,
    "horsePoint": 2.65,
    "jockeyPoint": 0.6,
    "framePoint": 1.52,
    "timePoint": 3.99,
    "racePoint": 4.95,
    "roubdTotalPoint": 2.31
  },
  {
    "horseNumber": 10,
    "horseName": "キングオブコージ",
    "jockeyName": "横山典",
    "totalPoint": 4.18,
    "horsePoint": 1.64,
    "jockeyPoint": 2.35,
    "framePoint": 3.48,
    "timePoint": 4.18,
    "racePoint": 4.36,
    "roubdTotalPoint": 2.3
  },
  {
    "horseNumber": 4,
    "horseName": "アドマイヤアルバ",
    "jockeyName": "柴田善",
    "totalPoint": 3.98,
    "horsePoint": 2.64,
    "jockeyPoint": 0.35,
    "framePoint": 3.04,
    "timePoint": 3.16,
    "racePoint": 3.81,
    "roubdTotalPoint": 2.19
  },
  {
    "horseNumber": 14,
    "horseName": "アールスター",
    "jockeyName": "長岡",
    "totalPoint": 3.88,
    "horsePoint": 2.77,
    "jockeyPoint": 0,
    "framePoint": 1.52,
    "timePoint": 1.6,
    "racePoint": 3.05,
    "roubdTotalPoint": 2.14
  },
  {
    "horseNumber": 13,
    "horseName": "ゴールドギア",
    "jockeyName": "田辺",
    "totalPoint": 3.25,
    "horsePoint": 1.52,
    "jockeyPoint": 1.4,
    "framePoint": 1.52,
    "timePoint": 3.09,
    "racePoint": 2.51,
    "roubdTotalPoint": 1.79
  },
  {
    "horseNumber": 7,
    "horseName": "ブレステイキング",
    "jockeyName": "石橋脩",
    "totalPoint": 3.09,
    "horsePoint": 0.92,
    "jockeyPoint": 2.25,
    "framePoint": 1.52,
    "timePoint": 3.48,
    "racePoint": 4.55,
    "roubdTotalPoint": 1.7
  },
  {
    "horseNumber": 5,
    "horseName": "○地ソッサスブレイ",
    "jockeyName": "柴田大",
    "totalPoint": 1.99,
    "horsePoint": 1.22,
    "jockeyPoint": 0.35,
    "framePoint": 5,
    "timePoint": 2.63,
    "racePoint": 0.8,
    "roubdTotalPoint": 1.1
  },
  {
    "horseNumber": 9,
    "horseName": "○地マウントゴールド",
    "jockeyName": "岩田望",
    "totalPoint": 1.92,
    "horsePoint": 1.37,
    "jockeyPoint": 0,
    "framePoint": 3.48,
    "timePoint": 3.8,
    "racePoint": 4.42,
    "roubdTotalPoint": 1.06
  }
]
const top_forecast_data = [
  {
    "horseNumber": 12,
    "horseName": "レイパパレ",
    "jockeyName": "川田",
    "totalPoint": 12,
    "horsePoint": 5,
    "jockeyPoint": 5,
    "framePoint": 5,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 1,
    "horseName": "ウインマリリン",
    "jockeyName": "横山武",
    "totalPoint": 6.15,
    "horsePoint": 2.37,
    "jockeyPoint": 2.7,
    "framePoint": 0,
    "timePoint": 4.18,
    "racePoint": 4.61,
    "roubdTotalPoint": 2.56
  },
  {
    "horseNumber": 11,
    "horseName": "グローリーヴェイズ",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 5,
    "horsePoint": 2.16,
    "jockeyPoint": 2.03,
    "framePoint": 5,
    "timePoint": 1.33,
    "racePoint": 0.96,
    "roubdTotalPoint": 2.08
  },
  {
    "horseNumber": 15,
    "horseName": "ロザムール",
    "jockeyName": "三浦",
    "totalPoint": 4.09,
    "horsePoint": 3.52,
    "jockeyPoint": 0.41,
    "framePoint": 3.33,
    "timePoint": 3.46,
    "racePoint": 4.45,
    "roubdTotalPoint": 1.7
  },
  {
    "horseNumber": 2,
    "horseName": "ウインキートス",
    "jockeyName": "丹内",
    "totalPoint": 3.46,
    "horsePoint": 0.62,
    "jockeyPoint": 2.03,
    "framePoint": 0,
    "timePoint": 3.22,
    "racePoint": 4.13,
    "roubdTotalPoint": 1.44
  },
  {
    "horseNumber": 8,
    "horseName": "サトノソルタス",
    "jockeyName": "大野",
    "totalPoint": 3.37,
    "horsePoint": 2.24,
    "jockeyPoint": 0.81,
    "framePoint": 0,
    "timePoint": 3.99,
    "racePoint": 4.95,
    "roubdTotalPoint": 1.4
  },
  {
    "horseNumber": 10,
    "horseName": "キングオブコージ",
    "jockeyName": "横山典",
    "totalPoint": 2.85,
    "horsePoint": 0.76,
    "jockeyPoint": 1.49,
    "framePoint": 3.33,
    "timePoint": 4.18,
    "racePoint": 4.36,
    "roubdTotalPoint": 1.19
  },
  {
    "horseNumber": 7,
    "horseName": "ブレステイキング",
    "jockeyName": "石橋脩",
    "totalPoint": 2.7,
    "horsePoint": 0.43,
    "jockeyPoint": 1.62,
    "framePoint": 0,
    "timePoint": 3.48,
    "racePoint": 4.55,
    "roubdTotalPoint": 1.13
  },
  {
    "horseNumber": 6,
    "horseName": "ランブリングアレー",
    "jockeyName": "戸崎圭",
    "totalPoint": 2.58,
    "horsePoint": 0.87,
    "jockeyPoint": 1.22,
    "framePoint": 5,
    "timePoint": 4.92,
    "racePoint": 4.58,
    "roubdTotalPoint": 1.08
  },
  {
    "horseNumber": 16,
    "horseName": "ステイフーリッシュ",
    "jockeyName": "横山和",
    "totalPoint": 2.5,
    "horsePoint": 2.5,
    "jockeyPoint": 0,
    "framePoint": 3.33,
    "timePoint": 1.91,
    "racePoint": 3.25,
    "roubdTotalPoint": 1.04
  },
  {
    "horseNumber": 3,
    "horseName": "セダブリランテス",
    "jockeyName": "石川",
    "totalPoint": 2.33,
    "horsePoint": 2.33,
    "jockeyPoint": 0,
    "framePoint": 1.67,
    "timePoint": 3.99,
    "racePoint": 4.23,
    "roubdTotalPoint": 0.97
  },
  {
    "horseNumber": 13,
    "horseName": "ゴールドギア",
    "jockeyName": "田辺",
    "totalPoint": 1.59,
    "horsePoint": 0.64,
    "jockeyPoint": 0.68,
    "framePoint": 5,
    "timePoint": 3.09,
    "racePoint": 2.51,
    "roubdTotalPoint": 0.66
  },
  {
    "horseNumber": 14,
    "horseName": "アールスター",
    "jockeyName": "長岡",
    "totalPoint": 1.47,
    "horsePoint": 1.47,
    "jockeyPoint": 0,
    "framePoint": 5,
    "timePoint": 1.6,
    "racePoint": 3.05,
    "roubdTotalPoint": 0.61
  },
  {
    "horseNumber": 4,
    "horseName": "アドマイヤアルバ",
    "jockeyName": "柴田善",
    "totalPoint": 0.73,
    "horsePoint": 0.73,
    "jockeyPoint": 0,
    "framePoint": 1.67,
    "timePoint": 3.16,
    "racePoint": 3.81,
    "roubdTotalPoint": 0.3
  },
  {
    "horseNumber": 9,
    "horseName": "○地マウントゴールド",
    "jockeyName": "岩田望",
    "totalPoint": 0.65,
    "horsePoint": 0.65,
    "jockeyPoint": 0,
    "framePoint": 3.33,
    "timePoint": 3.8,
    "racePoint": 4.42,
    "roubdTotalPoint": 0.27
  },
  {
    "horseNumber": 5,
    "horseName": "○地ソッサスブレイ",
    "jockeyName": "柴田大",
    "totalPoint": 0.64,
    "horsePoint": 0.07,
    "jockeyPoint": 0.41,
    "framePoint": 5,
    "timePoint": 2.63,
    "racePoint": 0.8,
    "roubdTotalPoint": 0.27
  }
]

export default Index;
