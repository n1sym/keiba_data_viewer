import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第135回 目黒記念 (G2)"
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
    "horseNumber": 11,
    "horseName": "グロンディオーズ",
    "jockeyName": "ルメール",
    "totalPoint": 11,
    "horsePoint": 5,
    "jockeyPoint": 5,
    "framePoint": 3.44,
    "timePoint": 3.97,
    "racePoint": 3.91,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 6,
    "horseName": "アドマイヤポラリス",
    "jockeyName": "吉田隼",
    "totalPoint": 9.1,
    "horsePoint": 4.39,
    "jockeyPoint": 3.69,
    "framePoint": 2.81,
    "timePoint": 4.7,
    "racePoint": 1.68,
    "roubdTotalPoint": 4.14
  },
  {
    "horseNumber": 8,
    "horseName": "ヒートオンビート",
    "jockeyName": "川田",
    "totalPoint": 8.67,
    "horsePoint": 3.98,
    "jockeyPoint": 3.87,
    "framePoint": 5,
    "timePoint": 4.85,
    "racePoint": 5,
    "roubdTotalPoint": 3.94
  },
  {
    "horseNumber": 16,
    "horseName": "トップウイナー",
    "jockeyName": "和田竜",
    "totalPoint": 7.54,
    "horsePoint": 4.69,
    "jockeyPoint": 1.22,
    "framePoint": 3.44,
    "timePoint": 1.25,
    "racePoint": 1.32,
    "roubdTotalPoint": 3.43
  },
  {
    "horseNumber": 5,
    "horseName": "ウインキートス",
    "jockeyName": "丹内",
    "totalPoint": 7.36,
    "horsePoint": 4.52,
    "jockeyPoint": 1.29,
    "framePoint": 2.81,
    "timePoint": 3.77,
    "racePoint": 2.96,
    "roubdTotalPoint": 3.35
  },
  {
    "horseNumber": 9,
    "horseName": "アイスバブル",
    "jockeyName": "石川",
    "totalPoint": 7.04,
    "horsePoint": 4.03,
    "jockeyPoint": 1.75,
    "framePoint": 4.06,
    "timePoint": 4.5,
    "racePoint": 3.88,
    "roubdTotalPoint": 3.2
  },
  {
    "horseNumber": 4,
    "horseName": "サンアップルトン",
    "jockeyName": "柴田善",
    "totalPoint": 6.97,
    "horsePoint": 3.07,
    "jockeyPoint": 3.34,
    "framePoint": 4.06,
    "timePoint": 4.9,
    "racePoint": 4.49,
    "roubdTotalPoint": 3.17
  },
  {
    "horseNumber": 15,
    "horseName": "○地ミスマンマミーア",
    "jockeyName": "福永",
    "totalPoint": 6.2,
    "horsePoint": 2.72,
    "jockeyPoint": 2.99,
    "framePoint": 3.44,
    "timePoint": 4.98,
    "racePoint": 4.7,
    "roubdTotalPoint": 2.82
  },
  {
    "horseNumber": 14,
    "horseName": "ゴールドギア",
    "jockeyName": "田辺",
    "totalPoint": 6.15,
    "horsePoint": 2.68,
    "jockeyPoint": 3,
    "framePoint": 3.44,
    "timePoint": 4.52,
    "racePoint": 4.96,
    "roubdTotalPoint": 2.8
  },
  {
    "horseNumber": 13,
    "horseName": "ディアマンミノル",
    "jockeyName": "松山",
    "totalPoint": 5.53,
    "horsePoint": 2.59,
    "jockeyPoint": 2.38,
    "framePoint": 3.44,
    "timePoint": 4.5,
    "racePoint": 3.98,
    "roubdTotalPoint": 2.51
  },
  {
    "horseNumber": 3,
    "horseName": "アドマイヤアルバ",
    "jockeyName": "北村宏",
    "totalPoint": 5.52,
    "horsePoint": 2.61,
    "jockeyPoint": 2.33,
    "framePoint": 4.06,
    "timePoint": 4.45,
    "racePoint": 4.27,
    "roubdTotalPoint": 2.51
  },
  {
    "horseNumber": 2,
    "horseName": "トラストケンシン",
    "jockeyName": "吉田豊",
    "totalPoint": 5.27,
    "horsePoint": 2.72,
    "jockeyPoint": 1.83,
    "framePoint": 5,
    "timePoint": 4.02,
    "racePoint": 3.8,
    "roubdTotalPoint": 2.4
  },
  {
    "horseNumber": 7,
    "horseName": "サトノルークス",
    "jockeyName": "大野",
    "totalPoint": 5.12,
    "horsePoint": 2.46,
    "jockeyPoint": 2.09,
    "framePoint": 5,
    "timePoint": 4.5,
    "racePoint": 3.44,
    "roubdTotalPoint": 2.33
  },
  {
    "horseNumber": 1,
    "horseName": "ムイトオブリガード",
    "jockeyName": "横山武",
    "totalPoint": 5.02,
    "horsePoint": 2.56,
    "jockeyPoint": 1.8,
    "framePoint": 5,
    "timePoint": 5,
    "racePoint": 4.78,
    "roubdTotalPoint": 2.28
  },
  {
    "horseNumber": 12,
    "horseName": "ダンスディライト",
    "jockeyName": "横山典",
    "totalPoint": 4.93,
    "horsePoint": 1.8,
    "jockeyPoint": 3.01,
    "framePoint": 3.44,
    "timePoint": 4.67,
    "racePoint": 3.22,
    "roubdTotalPoint": 2.24
  },
  {
    "horseNumber": 10,
    "horseName": "ナムラドノヴァン",
    "jockeyName": "内田博",
    "totalPoint": 4.37,
    "horsePoint": 2.1,
    "jockeyPoint": 1.79,
    "framePoint": 4.06,
    "timePoint": 4.88,
    "racePoint": 3.54,
    "roubdTotalPoint": 1.99
  }
]
const top_forecast_data = [
  {
    "horseNumber": 6,
    "horseName": "アドマイヤポラリス",
    "jockeyName": "吉田隼",
    "totalPoint": 12,
    "horsePoint": 5,
    "jockeyPoint": 5,
    "framePoint": 1.06,
    "timePoint": 4.7,
    "racePoint": 1.68,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 11,
    "horseName": "グロンディオーズ",
    "jockeyName": "ルメール",
    "totalPoint": 8.86,
    "horsePoint": 1.99,
    "jockeyPoint": 4.91,
    "framePoint": 1.06,
    "timePoint": 3.97,
    "racePoint": 3.91,
    "roubdTotalPoint": 3.69
  },
  {
    "horseNumber": 4,
    "horseName": "サンアップルトン",
    "jockeyName": "柴田善",
    "totalPoint": 7.92,
    "horsePoint": 1.63,
    "jockeyPoint": 4.49,
    "framePoint": 3.03,
    "timePoint": 4.9,
    "racePoint": 4.49,
    "roubdTotalPoint": 3.3
  },
  {
    "horseNumber": 12,
    "horseName": "ダンスディライト",
    "jockeyName": "横山典",
    "totalPoint": 6.56,
    "horsePoint": 1.18,
    "jockeyPoint": 3.84,
    "framePoint": 1.06,
    "timePoint": 4.67,
    "racePoint": 3.22,
    "roubdTotalPoint": 2.73
  },
  {
    "horseNumber": 1,
    "horseName": "ムイトオブリガード",
    "jockeyName": "横山武",
    "totalPoint": 6.33,
    "horsePoint": 1.77,
    "jockeyPoint": 3.26,
    "framePoint": 1.97,
    "timePoint": 5,
    "racePoint": 4.78,
    "roubdTotalPoint": 2.64
  },
  {
    "horseNumber": 8,
    "horseName": "ヒートオンビート",
    "jockeyName": "川田",
    "totalPoint": 5.82,
    "horsePoint": 1.91,
    "jockeyPoint": 2.79,
    "framePoint": 1.97,
    "timePoint": 4.85,
    "racePoint": 5,
    "roubdTotalPoint": 2.43
  },
  {
    "horseNumber": 15,
    "horseName": "○地ミスマンマミーア",
    "jockeyName": "福永",
    "totalPoint": 5.25,
    "horsePoint": 1.62,
    "jockeyPoint": 2.59,
    "framePoint": 1.06,
    "timePoint": 4.98,
    "racePoint": 4.7,
    "roubdTotalPoint": 2.19
  },
  {
    "horseNumber": 14,
    "horseName": "ゴールドギア",
    "jockeyName": "田辺",
    "totalPoint": 4.81,
    "horsePoint": 2.53,
    "jockeyPoint": 1.63,
    "framePoint": 5,
    "timePoint": 4.52,
    "racePoint": 4.96,
    "roubdTotalPoint": 2
  },
  {
    "horseNumber": 5,
    "horseName": "ウインキートス",
    "jockeyName": "丹内",
    "totalPoint": 4.76,
    "horsePoint": 4.34,
    "jockeyPoint": 0.3,
    "framePoint": 1.06,
    "timePoint": 3.77,
    "racePoint": 2.96,
    "roubdTotalPoint": 1.98
  },
  {
    "horseNumber": 7,
    "horseName": "サトノルークス",
    "jockeyName": "大野",
    "totalPoint": 4.72,
    "horsePoint": 0.72,
    "jockeyPoint": 2.86,
    "framePoint": 1.97,
    "timePoint": 4.5,
    "racePoint": 3.44,
    "roubdTotalPoint": 1.97
  },
  {
    "horseNumber": 3,
    "horseName": "アドマイヤアルバ",
    "jockeyName": "北村宏",
    "totalPoint": 4.66,
    "horsePoint": 2.22,
    "jockeyPoint": 1.74,
    "framePoint": 3.03,
    "timePoint": 4.45,
    "racePoint": 4.27,
    "roubdTotalPoint": 1.94
  },
  {
    "horseNumber": 16,
    "horseName": "トップウイナー",
    "jockeyName": "和田竜",
    "totalPoint": 4.04,
    "horsePoint": 2.77,
    "jockeyPoint": 0.91,
    "framePoint": 1.06,
    "timePoint": 1.25,
    "racePoint": 1.32,
    "roubdTotalPoint": 1.68
  },
  {
    "horseNumber": 10,
    "horseName": "ナムラドノヴァン",
    "jockeyName": "内田博",
    "totalPoint": 3.88,
    "horsePoint": 0.74,
    "jockeyPoint": 2.24,
    "framePoint": 0,
    "timePoint": 4.88,
    "racePoint": 3.54,
    "roubdTotalPoint": 1.62
  },
  {
    "horseNumber": 13,
    "horseName": "ディアマンミノル",
    "jockeyName": "松山",
    "totalPoint": 3.75,
    "horsePoint": 1.65,
    "jockeyPoint": 1.5,
    "framePoint": 5,
    "timePoint": 4.5,
    "racePoint": 3.98,
    "roubdTotalPoint": 1.56
  },
  {
    "horseNumber": 2,
    "horseName": "トラストケンシン",
    "jockeyName": "吉田豊",
    "totalPoint": 3.02,
    "horsePoint": 0.91,
    "jockeyPoint": 1.51,
    "framePoint": 1.97,
    "timePoint": 4.02,
    "racePoint": 3.8,
    "roubdTotalPoint": 1.26
  },
  {
    "horseNumber": 9,
    "horseName": "アイスバブル",
    "jockeyName": "石川",
    "totalPoint": 2.93,
    "horsePoint": 1.29,
    "jockeyPoint": 1.17,
    "framePoint": 0,
    "timePoint": 4.5,
    "racePoint": 3.88,
    "roubdTotalPoint": 1.22
  }
]

export default Index;
