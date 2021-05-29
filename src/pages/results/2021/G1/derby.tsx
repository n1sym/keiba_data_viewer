import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第88回 東京優駿(G1)"
const result_url = ""

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
    "horseNumber": 1,
    "horseName": "エフフォーリア",
    "jockeyName": "横山武史",
    "totalPoint": 11.28,
    "horsePoint": 5,
    "jockeyPoint": 2.49,
    "framePoint": 5,
    "timePoint": 3.36,
    "racePoint": 3.94,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 16,
    "horseName": "サトノレイナス",
    "jockeyName": "Ｃ．ルメール",
    "totalPoint": 11.01,
    "horsePoint": 4.69,
    "jockeyPoint": 5,
    "framePoint": 1.46,
    "timePoint": 4.2,
    "racePoint": 2.24,
    "roubdTotalPoint": 4.88
  },
  {
    "horseNumber": 13,
    "horseName": "グレートマジシャン",
    "jockeyName": "戸崎圭太",
    "totalPoint": 9.75,
    "horsePoint": 3.4,
    "jockeyPoint": 3.73,
    "framePoint": 2.92,
    "timePoint": 5,
    "racePoint": 4.35,
    "roubdTotalPoint": 4.32
  },
  {
    "horseNumber": 8,
    "horseName": "ヨーホーレイク",
    "jockeyName": "川田将雅",
    "totalPoint": 9.02,
    "horsePoint": 1.9,
    "jockeyPoint": 4,
    "framePoint": 3.54,
    "timePoint": 3.53,
    "racePoint": 5,
    "roubdTotalPoint": 4
  },
  {
    "horseNumber": 2,
    "horseName": "ヴィクティファルス",
    "jockeyName": "池添謙一",
    "totalPoint": 8.71,
    "horsePoint": 1.74,
    "jockeyPoint": 3.12,
    "framePoint": 5,
    "timePoint": 3.17,
    "racePoint": 4.27,
    "roubdTotalPoint": 3.86
  },
  {
    "horseNumber": 14,
    "horseName": "タイトルホルダー",
    "jockeyName": "田辺裕信",
    "totalPoint": 8.24,
    "horsePoint": 2.47,
    "jockeyPoint": 3.18,
    "framePoint": 2.92,
    "timePoint": 3.45,
    "racePoint": 4.19,
    "roubdTotalPoint": 3.65
  },
  {
    "horseNumber": 12,
    "horseName": "ワンダフルタウン",
    "jockeyName": "和田竜二",
    "totalPoint": 8.15,
    "horsePoint": 2.78,
    "jockeyPoint": 3,
    "framePoint": 2.5,
    "timePoint": 3.45,
    "racePoint": 4.35,
    "roubdTotalPoint": 3.61
  },
  {
    "horseNumber": 10,
    "horseName": "シャフリヤール",
    "jockeyName": "福永祐一",
    "totalPoint": 8.14,
    "horsePoint": 3.08,
    "jockeyPoint": 3.33,
    "framePoint": 1.46,
    "timePoint": 4.44,
    "racePoint": 4.27,
    "roubdTotalPoint": 3.61
  },
  {
    "horseNumber": 15,
    "horseName": "アドマイヤハダル",
    "jockeyName": "Ｍ．デムーロ",
    "totalPoint": 7.93,
    "horsePoint": 1.94,
    "jockeyPoint": 4.38,
    "framePoint": 1.46,
    "timePoint": 2.71,
    "racePoint": 3.66,
    "roubdTotalPoint": 3.52
  },
  {
    "horseNumber": 11,
    "horseName": "ステラヴェローチェ",
    "jockeyName": "吉田隼人",
    "totalPoint": 7.91,
    "horsePoint": 2.82,
    "jockeyPoint": 2.78,
    "framePoint": 2.5,
    "timePoint": 4.16,
    "racePoint": 4.07,
    "roubdTotalPoint": 3.51
  },
  {
    "horseNumber": 3,
    "horseName": "タイムトゥヘヴン",
    "jockeyName": "石橋脩",
    "totalPoint": 7.3,
    "horsePoint": 0.91,
    "jockeyPoint": 3.97,
    "framePoint": 2.92,
    "timePoint": 4.2,
    "racePoint": 3.33,
    "roubdTotalPoint": 3.24
  },
  {
    "horseNumber": 7,
    "horseName": "グラティアス",
    "jockeyName": "松山弘平",
    "totalPoint": 6.99,
    "horsePoint": 1.66,
    "jockeyPoint": 2.84,
    "framePoint": 3.54,
    "timePoint": 2.15,
    "racePoint": 1.83,
    "roubdTotalPoint": 3.1
  },
  {
    "horseNumber": 9,
    "horseName": "ラーゴム",
    "jockeyName": "浜中俊",
    "totalPoint": 6.52,
    "horsePoint": 1.45,
    "jockeyPoint": 3.26,
    "framePoint": 1.46,
    "timePoint": 3.08,
    "racePoint": 4.67,
    "roubdTotalPoint": 2.89
  },
  {
    "horseNumber": 4,
    "horseName": "レッドジェネシス",
    "jockeyName": "横山典弘",
    "totalPoint": 6.46,
    "horsePoint": 1.22,
    "jockeyPoint": 2.57,
    "framePoint": 2.92,
    "timePoint": 4.08,
    "racePoint": 4.59,
    "roubdTotalPoint": 2.86
  },
  {
    "horseNumber": 6,
    "horseName": "バジオウ",
    "jockeyName": "大野拓弥",
    "totalPoint": 5.62,
    "horsePoint": 1.84,
    "jockeyPoint": 2.33,
    "framePoint": 1.04,
    "timePoint": 3.27,
    "racePoint": 4.14,
    "roubdTotalPoint": 2.49
  },
  {
    "horseNumber": 5,
    "horseName": "ディープモンスター",
    "jockeyName": "武豊",
    "totalPoint": 5.58,
    "horsePoint": 1.18,
    "jockeyPoint": 2.86,
    "framePoint": 1.04,
    "timePoint": 2.97,
    "racePoint": 4.59,
    "roubdTotalPoint": 2.47
  },
  {
    "horseNumber": 17,
    "horseName": "バスラットレオン",
    "jockeyName": "藤岡佑介",
    "totalPoint": 4.58,
    "horsePoint": 0.81,
    "jockeyPoint": 2.73,
    "framePoint": 1.46,
    "timePoint": 1.86,
    "racePoint": 0.81,
    "roubdTotalPoint": 2.03
  }
]
const top_forecast_data = [
  {
    "horseNumber": 16,
    "horseName": "サトノレイナス",
    "jockeyName": "Ｃ．ルメール",
    "totalPoint": 9.54,
    "horsePoint": 5,
    "jockeyPoint": 3.67,
    "framePoint": 0.7,
    "timePoint": 4.2,
    "racePoint": 2.24,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 13,
    "horseName": "グレートマジシャン",
    "jockeyName": "戸崎圭太",
    "totalPoint": 7.63,
    "horsePoint": 3.65,
    "jockeyPoint": 2.69,
    "framePoint": 0.7,
    "timePoint": 5,
    "racePoint": 4.35,
    "roubdTotalPoint": 4
  },
  {
    "horseNumber": 2,
    "horseName": "ヴィクティファルス",
    "jockeyName": "池添謙一",
    "totalPoint": 7.57,
    "horsePoint": 1.07,
    "jockeyPoint": 2.65,
    "framePoint": 5,
    "timePoint": 3.17,
    "racePoint": 4.27,
    "roubdTotalPoint": 3.97
  },
  {
    "horseNumber": 1,
    "horseName": "エフフォーリア",
    "jockeyName": "横山武史",
    "totalPoint": 7.27,
    "horsePoint": 2.11,
    "jockeyPoint": 1.37,
    "framePoint": 5,
    "timePoint": 3.36,
    "racePoint": 3.94,
    "roubdTotalPoint": 3.81
  },
  {
    "horseNumber": 9,
    "horseName": "ラーゴム",
    "jockeyName": "浜中俊",
    "totalPoint": 6.65,
    "horsePoint": 0.3,
    "jockeyPoint": 5,
    "framePoint": 0.7,
    "timePoint": 3.08,
    "racePoint": 4.67,
    "roubdTotalPoint": 3.49
  },
  {
    "horseNumber": 15,
    "horseName": "アドマイヤハダル",
    "jockeyName": "Ｍ．デムーロ",
    "totalPoint": 5.61,
    "horsePoint": 1.52,
    "jockeyPoint": 2.94,
    "framePoint": 0.7,
    "timePoint": 2.71,
    "racePoint": 3.66,
    "roubdTotalPoint": 2.94
  },
  {
    "horseNumber": 10,
    "horseName": "シャフリヤール",
    "jockeyName": "福永祐一",
    "totalPoint": 5.46,
    "horsePoint": 2.01,
    "jockeyPoint": 2.18,
    "framePoint": 0.7,
    "timePoint": 4.44,
    "racePoint": 4.27,
    "roubdTotalPoint": 2.86
  },
  {
    "horseNumber": 14,
    "horseName": "タイトルホルダー",
    "jockeyName": "田辺裕信",
    "totalPoint": 5.16,
    "horsePoint": 1.48,
    "jockeyPoint": 2.42,
    "framePoint": 0.7,
    "timePoint": 3.45,
    "racePoint": 4.19,
    "roubdTotalPoint": 2.7
  },
  {
    "horseNumber": 8,
    "horseName": "ヨーホーレイク",
    "jockeyName": "川田将雅",
    "totalPoint": 4.92,
    "horsePoint": 1.02,
    "jockeyPoint": 2.9,
    "framePoint": 0,
    "timePoint": 3.53,
    "racePoint": 5,
    "roubdTotalPoint": 2.58
  },
  {
    "horseNumber": 4,
    "horseName": "レッドジェネシス",
    "jockeyName": "横山典弘",
    "totalPoint": 4.87,
    "horsePoint": 0.52,
    "jockeyPoint": 2.59,
    "framePoint": 1.4,
    "timePoint": 4.08,
    "racePoint": 4.59,
    "roubdTotalPoint": 2.55
  },
  {
    "horseNumber": 6,
    "horseName": "バジオウ",
    "jockeyName": "大野拓弥",
    "totalPoint": 4.73,
    "horsePoint": 1.15,
    "jockeyPoint": 2.33,
    "framePoint": 0.7,
    "timePoint": 3.27,
    "racePoint": 4.14,
    "roubdTotalPoint": 2.48
  },
  {
    "horseNumber": 3,
    "horseName": "タイムトゥヘヴン",
    "jockeyName": "石橋脩",
    "totalPoint": 4.59,
    "horsePoint": 0.38,
    "jockeyPoint": 2.7,
    "framePoint": 1.4,
    "timePoint": 4.2,
    "racePoint": 3.33,
    "roubdTotalPoint": 2.41
  },
  {
    "horseNumber": 11,
    "horseName": "ステラヴェローチェ",
    "jockeyName": "吉田隼人",
    "totalPoint": 4.53,
    "horsePoint": 0.86,
    "jockeyPoint": 2.44,
    "framePoint": 0.7,
    "timePoint": 4.16,
    "racePoint": 4.07,
    "roubdTotalPoint": 2.37
  },
  {
    "horseNumber": 5,
    "horseName": "ディープモンスター",
    "jockeyName": "武豊",
    "totalPoint": 4.33,
    "horsePoint": 0.79,
    "jockeyPoint": 2.2,
    "framePoint": 0.7,
    "timePoint": 2.97,
    "racePoint": 4.59,
    "roubdTotalPoint": 2.27
  },
  {
    "horseNumber": 7,
    "horseName": "グラティアス",
    "jockeyName": "松山弘平",
    "totalPoint": 4.27,
    "horsePoint": 1.56,
    "jockeyPoint": 2.34,
    "framePoint": 0,
    "timePoint": 2.15,
    "racePoint": 1.83,
    "roubdTotalPoint": 2.24
  },
  {
    "horseNumber": 12,
    "horseName": "ワンダフルタウン",
    "jockeyName": "和田竜二",
    "totalPoint": 3.89,
    "horsePoint": 0.89,
    "jockeyPoint": 1.71,
    "framePoint": 0.7,
    "timePoint": 3.45,
    "racePoint": 4.35,
    "roubdTotalPoint": 2.04
  },
  {
    "horseNumber": 17,
    "horseName": "バスラットレオン",
    "jockeyName": "藤岡佑介",
    "totalPoint": 3.84,
    "horsePoint": 0.53,
    "jockeyPoint": 2.73,
    "framePoint": 0.7,
    "timePoint": 1.86,
    "racePoint": 0.81,
    "roubdTotalPoint": 2.01
  }
]

export default Index;
