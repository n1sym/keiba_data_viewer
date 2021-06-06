import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第71回 安田記念(G1)"
const result_url = "https://race.netkeiba.com/race/shutuba.html?race_id=202105030211"

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
    "date": "2021/06/06",
    "dirName": "2021/G1/yasuda",
    "raceName": "安田記念(G1)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": 320,
    "wide5box": 6020,
    "3huku5box": 7860,
    "1-2-3oddsRank": "8-1-4"
  }
]

const wide_forecast_data = [
  {
    "horseNumber": 8,
    "horseName": "インディチャンプ",
    "jockeyName": "福永",
    "totalPoint": 11.96,
    "horsePoint": 4.6,
    "jockeyPoint": 4.15,
    "framePoint": 3.82,
    "timePoint": 5,
    "racePoint": 4.59,
    "roubdTotalPoint": 5,
    "oddsRank": 2,
    "rank": 4
  },
  {
    "horseNumber": 13,
    "horseName": "○外シュネルマイスター",
    "jockeyName": "横山武",
    "totalPoint": 11.61,
    "horsePoint": 5,
    "jockeyPoint": 2.96,
    "framePoint": 4.41,
    "timePoint": 3.43,
    "racePoint": 5,
    "roubdTotalPoint": 4.85,
    "oddsRank": 4,
    "rank": 3
  },
  {
    "horseNumber": 5,
    "horseName": "グランアレグリア",
    "jockeyName": "ルメール",
    "totalPoint": 11.46,
    "horsePoint": 3.85,
    "jockeyPoint": 5,
    "framePoint": 2.94,
    "timePoint": 4.96,
    "racePoint": 4.21,
    "roubdTotalPoint": 4.79,
    "oddsRank": 1,
    "rank": 2
  },
  {
    "horseNumber": 11,
    "horseName": "ダノンキングリー",
    "jockeyName": "川田",
    "totalPoint": 10.7,
    "horsePoint": 3.36,
    "jockeyPoint": 4.55,
    "framePoint": 3.82,
    "timePoint": 4.66,
    "racePoint": 2.5,
    "roubdTotalPoint": 4.47,
    "oddsRank": 8,
    "rank": 1
  },
  {
    "horseNumber": 1,
    "horseName": "サリオス",
    "jockeyName": "松山",
    "totalPoint": 9.44,
    "horsePoint": 3.48,
    "jockeyPoint": 3.17,
    "framePoint": 3.82,
    "timePoint": 4.61,
    "racePoint": 2.49,
    "roubdTotalPoint": 3.95,
    "oddsRank": 3,
    "rank": 8
  },
  {
    "horseNumber": 7,
    "horseName": "ラウダシオン",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 9.05,
    "horsePoint": 1.81,
    "jockeyPoint": 4.26,
    "framePoint": 3.82,
    "timePoint": 4.12,
    "racePoint": 3.45,
    "roubdTotalPoint": 3.78,
    "oddsRank": 7,
    "rank": 14
  },
  {
    "horseNumber": 6,
    "horseName": "ダノンプレミアム",
    "jockeyName": "池添",
    "totalPoint": 8.87,
    "horsePoint": 2.76,
    "jockeyPoint": 3.4,
    "framePoint": 2.94,
    "timePoint": 0.93,
    "racePoint": 4.74,
    "roubdTotalPoint": 3.71,
    "oddsRank": 6,
    "rank": 7
  },
  {
    "horseNumber": 14,
    "horseName": "カテドラル",
    "jockeyName": "田辺",
    "totalPoint": 8.56,
    "horsePoint": 1.45,
    "jockeyPoint": 3.71,
    "framePoint": 4.41,
    "timePoint": 4.53,
    "racePoint": 3.75,
    "roubdTotalPoint": 3.58,
    "oddsRank": 9,
    "rank": 12
  },
  {
    "horseNumber": 12,
    "horseName": "ケイデンスコール",
    "jockeyName": "岩田康",
    "totalPoint": 7.83,
    "horsePoint": 1.79,
    "jockeyPoint": 3.14,
    "framePoint": 3.82,
    "timePoint": 4.63,
    "racePoint": 3.06,
    "roubdTotalPoint": 3.27,
    "oddsRank": 5,
    "rank": 10
  },
  {
    "horseNumber": 3,
    "horseName": "ダイワキャグニー",
    "jockeyName": "石橋脩",
    "totalPoint": 7.8,
    "horsePoint": 1.71,
    "jockeyPoint": 3.1,
    "framePoint": 3.82,
    "timePoint": 4.18,
    "racePoint": 3.49,
    "roubdTotalPoint": 3.26,
    "oddsRank": 12,
    "rank": 11
  },
  {
    "horseNumber": 9,
    "horseName": "トーラスジェミニ",
    "jockeyName": "戸崎圭",
    "totalPoint": 7.26,
    "horsePoint": 1.03,
    "jockeyPoint": 4.28,
    "framePoint": 2.35,
    "timePoint": 4.2,
    "racePoint": 2.7,
    "roubdTotalPoint": 3.04,
    "oddsRank": 13,
    "rank": 5
  },
  {
    "horseNumber": 2,
    "horseName": "ギベオン",
    "jockeyName": "西村淳",
    "totalPoint": 7.05,
    "horsePoint": 1.55,
    "jockeyPoint": 1.97,
    "framePoint": 5,
    "timePoint": 3.99,
    "racePoint": 2.63,
    "roubdTotalPoint": 2.95,
    "oddsRank": 11,
    "rank": 9
  },
  {
    "horseNumber": 10,
    "horseName": "カデナ",
    "jockeyName": "武豊",
    "totalPoint": 6.47,
    "horsePoint": 0.71,
    "jockeyPoint": 3.55,
    "framePoint": 2.35,
    "timePoint": 4.37,
    "racePoint": 4.01,
    "roubdTotalPoint": 2.7,
    "oddsRank": 14,
    "rank": 6
  },
  {
    "horseNumber": 4,
    "horseName": "カラテ",
    "jockeyName": "菅原明",
    "totalPoint": 5.89,
    "horsePoint": 0.98,
    "jockeyPoint": 2.29,
    "framePoint": 3.82,
    "timePoint": 3.77,
    "racePoint": 1.64,
    "roubdTotalPoint": 2.46,
    "oddsRank": 10,
    "rank": 13
  }
]
const top_forecast_data = [
  {
    "horseNumber": 8,
    "horseName": "インディチャンプ",
    "jockeyName": "福永",
    "totalPoint": 12.42,
    "horsePoint": 4.48,
    "jockeyPoint": 4.02,
    "framePoint": 5,
    "timePoint": 5,
    "racePoint": 4.59,
    "roubdTotalPoint": 5,
    "oddsRank": 2,
    "rank": 4
  },
  {
    "horseNumber": 5,
    "horseName": "グランアレグリア",
    "jockeyName": "ルメール",
    "totalPoint": 11.62,
    "horsePoint": 5,
    "jockeyPoint": 5,
    "framePoint": 1.3,
    "timePoint": 4.96,
    "racePoint": 4.21,
    "roubdTotalPoint": 4.68,
    "oddsRank": 1,
    "rank": 2
  },
  {
    "horseNumber": 13,
    "horseName": "○外シュネルマイスター",
    "jockeyName": "横山武",
    "totalPoint": 9.31,
    "horsePoint": 3.91,
    "jockeyPoint": 3.62,
    "framePoint": 1.3,
    "timePoint": 3.43,
    "racePoint": 5,
    "roubdTotalPoint": 3.75,
    "oddsRank": 4,
    "rank": 3
  },
  {
    "horseNumber": 7,
    "horseName": "ラウダシオン",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 9.14,
    "horsePoint": 1.71,
    "jockeyPoint": 3.74,
    "framePoint": 5,
    "timePoint": 4.12,
    "racePoint": 3.45,
    "roubdTotalPoint": 3.68,
    "oddsRank": 7,
    "rank": 14
  },
  {
    "horseNumber": 6,
    "horseName": "ダノンプレミアム",
    "jockeyName": "池添",
    "totalPoint": 8.92,
    "horsePoint": 2.64,
    "jockeyPoint": 4.55,
    "framePoint": 1.3,
    "timePoint": 0.93,
    "racePoint": 4.74,
    "roubdTotalPoint": 3.59,
    "oddsRank": 6,
    "rank": 7
  },
  {
    "horseNumber": 11,
    "horseName": "ダノンキングリー",
    "jockeyName": "川田",
    "totalPoint": 8.6,
    "horsePoint": 2.7,
    "jockeyPoint": 3.95,
    "framePoint": 2.41,
    "timePoint": 4.66,
    "racePoint": 2.5,
    "roubdTotalPoint": 3.46,
    "oddsRank": 8,
    "rank": 1
  },
  {
    "horseNumber": 1,
    "horseName": "サリオス",
    "jockeyName": "松山",
    "totalPoint": 8.43,
    "horsePoint": 3.65,
    "jockeyPoint": 3.5,
    "framePoint": 1.3,
    "timePoint": 4.61,
    "racePoint": 2.49,
    "roubdTotalPoint": 3.39,
    "oddsRank": 3,
    "rank": 8
  },
  {
    "horseNumber": 3,
    "horseName": "ダイワキャグニー",
    "jockeyName": "石橋脩",
    "totalPoint": 7.86,
    "horsePoint": 2.22,
    "jockeyPoint": 2.72,
    "framePoint": 3.7,
    "timePoint": 4.18,
    "racePoint": 3.49,
    "roubdTotalPoint": 3.16,
    "oddsRank": 12,
    "rank": 11
  },
  {
    "horseNumber": 12,
    "horseName": "ケイデンスコール",
    "jockeyName": "岩田康",
    "totalPoint": 6.14,
    "horsePoint": 1.16,
    "jockeyPoint": 2.92,
    "framePoint": 2.41,
    "timePoint": 4.63,
    "racePoint": 3.06,
    "roubdTotalPoint": 2.47,
    "oddsRank": 5,
    "rank": 10
  },
  {
    "horseNumber": 4,
    "horseName": "カラテ",
    "jockeyName": "菅原明",
    "totalPoint": 6.06,
    "horsePoint": 0.62,
    "jockeyPoint": 2.89,
    "framePoint": 3.7,
    "timePoint": 3.77,
    "racePoint": 1.64,
    "roubdTotalPoint": 2.44,
    "oddsRank": 10,
    "rank": 13
  },
  {
    "horseNumber": 14,
    "horseName": "カテドラル",
    "jockeyName": "田辺",
    "totalPoint": 5.91,
    "horsePoint": 1.09,
    "jockeyPoint": 3.29,
    "framePoint": 1.3,
    "timePoint": 4.53,
    "racePoint": 3.75,
    "roubdTotalPoint": 2.38,
    "oddsRank": 9,
    "rank": 12
  },
  {
    "horseNumber": 9,
    "horseName": "トーラスジェミニ",
    "jockeyName": "戸崎圭",
    "totalPoint": 5.5,
    "horsePoint": 1.27,
    "jockeyPoint": 3.69,
    "framePoint": 0,
    "timePoint": 4.2,
    "racePoint": 2.7,
    "roubdTotalPoint": 2.21,
    "oddsRank": 13,
    "rank": 5
  },
  {
    "horseNumber": 2,
    "horseName": "ギベオン",
    "jockeyName": "西村淳",
    "totalPoint": 4.83,
    "horsePoint": 0.98,
    "jockeyPoint": 1.1,
    "framePoint": 3.7,
    "timePoint": 3.99,
    "racePoint": 2.63,
    "roubdTotalPoint": 1.94,
    "oddsRank": 11,
    "rank": 9
  },
  {
    "horseNumber": 10,
    "horseName": "カデナ",
    "jockeyName": "武豊",
    "totalPoint": 4.02,
    "horsePoint": 0.45,
    "jockeyPoint": 2.77,
    "framePoint": 0,
    "timePoint": 4.37,
    "racePoint": 4.01,
    "roubdTotalPoint": 1.62,
    "oddsRank": 14,
    "rank": 6
  }
]

export default Index;
