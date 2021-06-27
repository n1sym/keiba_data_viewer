import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第62回 宝塚記念(G1)"
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
    "horseNumber": 7,
    "horseName": "クロノジェネシス",
    "jockeyName": "Ｃ．ルメール",
    "totalPoint": 11.53,
    "horsePoint": 5,
    "jockeyPoint": 4.67,
    "framePoint": 2.29,
    "timePoint": 2.39,
    "racePoint": 2.45,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 2,
    "horseName": "レイパパレ",
    "jockeyName": "川田将雅",
    "totalPoint": 11.3,
    "horsePoint": 4.13,
    "jockeyPoint": 5,
    "framePoint": 2.29,
    "timePoint": 4.39,
    "racePoint": 3.96,
    "roubdTotalPoint": 4.9
  },
  {
    "horseNumber": 13,
    "horseName": "キセキ",
    "jockeyName": "福永祐一",
    "totalPoint": 9.54,
    "horsePoint": 1.94,
    "jockeyPoint": 4.21,
    "framePoint": 5,
    "timePoint": 1.53,
    "racePoint": 1.94,
    "roubdTotalPoint": 4.14
  },
  {
    "horseNumber": 10,
    "horseName": "カレンブーケドール",
    "jockeyName": "戸崎圭太",
    "totalPoint": 9.07,
    "horsePoint": 2.72,
    "jockeyPoint": 4.22,
    "framePoint": 1.88,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 3.93
  },
  {
    "horseNumber": 9,
    "horseName": "アリストテレス",
    "jockeyName": "武豊",
    "totalPoint": 8.29,
    "horsePoint": 2.29,
    "jockeyPoint": 3.92,
    "framePoint": 1.88,
    "timePoint": 4.66,
    "racePoint": 4.75,
    "roubdTotalPoint": 3.59
  },
  {
    "horseNumber": 12,
    "horseName": "○地ミスマンマミーア",
    "jockeyName": "岩田望来",
    "totalPoint": 7.37,
    "horsePoint": 1.09,
    "jockeyPoint": 2.46,
    "framePoint": 5,
    "timePoint": 3.07,
    "racePoint": 4.09,
    "roubdTotalPoint": 3.2
  },
  {
    "horseNumber": 8,
    "horseName": "カデナ",
    "jockeyName": "松山弘平",
    "totalPoint": 6.42,
    "horsePoint": 0.64,
    "jockeyPoint": 3.74,
    "framePoint": 1.88,
    "timePoint": 4.2,
    "racePoint": 4.55,
    "roubdTotalPoint": 2.78
  },
  {
    "horseNumber": 1,
    "horseName": "○外ユニコーンライオン",
    "jockeyName": "坂井瑠星",
    "totalPoint": 6.18,
    "horsePoint": 0.86,
    "jockeyPoint": 2.57,
    "framePoint": 4.17,
    "timePoint": 2.58,
    "racePoint": 1.26,
    "roubdTotalPoint": 2.68
  },
  {
    "horseNumber": 6,
    "horseName": "シロニイ",
    "jockeyName": "松若風馬",
    "totalPoint": 6.02,
    "horsePoint": 0.8,
    "jockeyPoint": 3.21,
    "framePoint": 2.29,
    "timePoint": 2.67,
    "racePoint": 3.16,
    "roubdTotalPoint": 2.61
  },
  {
    "horseNumber": 4,
    "horseName": "ワイプティアーズ",
    "jockeyName": "和田竜二",
    "totalPoint": 5.94,
    "horsePoint": 0.65,
    "jockeyPoint": 3.28,
    "framePoint": 1.88,
    "timePoint": 3.13,
    "racePoint": 4.39,
    "roubdTotalPoint": 2.58
  },
  {
    "horseNumber": 11,
    "horseName": "モズベッロ",
    "jockeyName": "池添謙一",
    "totalPoint": 5.75,
    "horsePoint": 1,
    "jockeyPoint": 2.78,
    "framePoint": 1.88,
    "timePoint": 3.93,
    "racePoint": 4.19,
    "roubdTotalPoint": 2.49
  },
  {
    "horseNumber": 3,
    "horseName": "メロディーレーン",
    "jockeyName": "幸英明",
    "totalPoint": 5.75,
    "horsePoint": 0.53,
    "jockeyPoint": 3.37,
    "framePoint": 1.88,
    "timePoint": 2.79,
    "racePoint": 3.59,
    "roubdTotalPoint": 2.49
  },
  {
    "horseNumber": 5,
    "horseName": "アドマイヤアルバ",
    "jockeyName": "酒井学",
    "totalPoint": 5.4,
    "horsePoint": 1.22,
    "jockeyPoint": 2.51,
    "framePoint": 1.88,
    "timePoint": 2.48,
    "racePoint": 2.7,
    "roubdTotalPoint": 2.34
  }
]
const top_forecast_data = [
  {
    "horseNumber": 13,
    "horseName": "キセキ",
    "jockeyName": "福永祐一",
    "totalPoint": 9.15,
    "horsePoint": 2.31,
    "jockeyPoint": 3.45,
    "framePoint": 5,
    "timePoint": 1.53,
    "racePoint": 1.94,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 7,
    "horseName": "クロノジェネシス",
    "jockeyName": "Ｃ．ルメール",
    "totalPoint": 8.92,
    "horsePoint": 5,
    "jockeyPoint": 3.43,
    "framePoint": 0,
    "timePoint": 2.39,
    "racePoint": 2.45,
    "roubdTotalPoint": 4.87
  },
  {
    "horseNumber": 12,
    "horseName": "○地ミスマンマミーア",
    "jockeyName": "岩田望来",
    "totalPoint": 8.07,
    "horsePoint": 2.27,
    "jockeyPoint": 1.98,
    "framePoint": 5,
    "timePoint": 3.07,
    "racePoint": 4.09,
    "roubdTotalPoint": 4.41
  },
  {
    "horseNumber": 9,
    "horseName": "アリストテレス",
    "jockeyName": "武豊",
    "totalPoint": 7.92,
    "horsePoint": 2.05,
    "jockeyPoint": 3.18,
    "framePoint": 2.9,
    "timePoint": 4.66,
    "racePoint": 4.75,
    "roubdTotalPoint": 4.33
  },
  {
    "horseNumber": 8,
    "horseName": "カデナ",
    "jockeyName": "松山弘平",
    "totalPoint": 7.48,
    "horsePoint": 1.51,
    "jockeyPoint": 3.32,
    "framePoint": 2.9,
    "timePoint": 4.2,
    "racePoint": 4.55,
    "roubdTotalPoint": 4.09
  },
  {
    "horseNumber": 3,
    "horseName": "メロディーレーン",
    "jockeyName": "幸英明",
    "totalPoint": 6.44,
    "horsePoint": 0.53,
    "jockeyPoint": 4.77,
    "framePoint": 0.7,
    "timePoint": 2.79,
    "racePoint": 3.59,
    "roubdTotalPoint": 3.52
  },
  {
    "horseNumber": 10,
    "horseName": "カレンブーケドール",
    "jockeyName": "戸崎圭太",
    "totalPoint": 6.32,
    "horsePoint": 2.07,
    "jockeyPoint": 3.25,
    "framePoint": 0,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 3.45
  },
  {
    "horseNumber": 5,
    "horseName": "アドマイヤアルバ",
    "jockeyName": "酒井学",
    "totalPoint": 6.13,
    "horsePoint": 0.59,
    "jockeyPoint": 5,
    "framePoint": 0,
    "timePoint": 2.48,
    "racePoint": 2.7,
    "roubdTotalPoint": 3.35
  },
  {
    "horseNumber": 2,
    "horseName": "レイパパレ",
    "jockeyName": "川田将雅",
    "totalPoint": 5.88,
    "horsePoint": 0.81,
    "jockeyPoint": 3.86,
    "framePoint": 0.7,
    "timePoint": 4.39,
    "racePoint": 3.96,
    "roubdTotalPoint": 3.21
  },
  {
    "horseNumber": 1,
    "horseName": "○外ユニコーンライオン",
    "jockeyName": "坂井瑠星",
    "totalPoint": 5.37,
    "horsePoint": 2.13,
    "jockeyPoint": 2.57,
    "framePoint": 0.7,
    "timePoint": 2.58,
    "racePoint": 1.26,
    "roubdTotalPoint": 2.93
  },
  {
    "horseNumber": 6,
    "horseName": "シロニイ",
    "jockeyName": "松若風馬",
    "totalPoint": 4.3,
    "horsePoint": 0.32,
    "jockeyPoint": 3.35,
    "framePoint": 0,
    "timePoint": 2.67,
    "racePoint": 3.16,
    "roubdTotalPoint": 2.35
  },
  {
    "horseNumber": 4,
    "horseName": "ワイプティアーズ",
    "jockeyName": "和田竜二",
    "totalPoint": 3.77,
    "horsePoint": 0.69,
    "jockeyPoint": 2.2,
    "framePoint": 0,
    "timePoint": 3.13,
    "racePoint": 4.39,
    "roubdTotalPoint": 2.06
  },
  {
    "horseNumber": 11,
    "horseName": "モズベッロ",
    "jockeyName": "池添謙一",
    "totalPoint": 3.59,
    "horsePoint": 0.9,
    "jockeyPoint": 1.85,
    "framePoint": 0,
    "timePoint": 3.93,
    "racePoint": 4.19,
    "roubdTotalPoint": 1.96
  }
]

export default Index;
