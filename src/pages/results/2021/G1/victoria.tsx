import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第16回 ヴィクトリアマイル(G1)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202105020811"

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
    "title": "ヴィクトリアマイル(G1)",
    "tan": 300,
    "tan2": -350,
    "huku": 100,
    "wide3box": 89,
    "wide5box": -670,
    "3huku5box": -1000,
    "1-2-3oddsRank": "1-10-5"
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 6,
    "horseName": "グランアレグリア",
    "jockeyName": "ルメール",
    "totalPoint": 12.78,
    "horsePoint": 5,
    "jockeyPoint": 5,
    "framePoint": 3.06,
    "timePoint": 5,
    "racePoint": 4.71,
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 1
  },
  {
    "horseNumber": 18,
    "horseName": "レシステンシア",
    "jockeyName": "武豊",
    "totalPoint": 10.57,
    "horsePoint": 3.6,
    "jockeyPoint": 3.06,
    "framePoint": 5,
    "timePoint": 4.48,
    "racePoint": 4.55,
    "roubdTotalPoint": 4.14,
    "oddsRank": 2,
    "rank": 6
  },
  {
    "horseNumber": 1,
    "horseName": "マジックキャッスル",
    "jockeyName": "戸崎圭",
    "totalPoint": 10.1,
    "horsePoint": 2.44,
    "jockeyPoint": 3.83,
    "framePoint": 5,
    "timePoint": 4.11,
    "racePoint": 4.14,
    "roubdTotalPoint": 3.95,
    "oddsRank": 5,
    "rank": 3
  },
  {
    "horseNumber": 16,
    "horseName": "リアアメリア",
    "jockeyName": "福永",
    "totalPoint": 9.26,
    "horsePoint": 1.91,
    "jockeyPoint": 3.6,
    "framePoint": 5,
    "timePoint": 3.54,
    "racePoint": 3.77,
    "roubdTotalPoint": 3.62,
    "oddsRank": 8,
    "rank": 13
  },
  {
    "horseNumber": 5,
    "horseName": "デゼル",
    "jockeyName": "川田",
    "totalPoint": 7.81,
    "horsePoint": 1.07,
    "jockeyPoint": 4.14,
    "framePoint": 3.06,
    "timePoint": 3.67,
    "racePoint": 3.83,
    "roubdTotalPoint": 3.06,
    "oddsRank": 4,
    "rank": 8
  },
  {
    "horseNumber": 2,
    "horseName": "シゲルピンクダイヤ",
    "jockeyName": "和田竜",
    "totalPoint": 7.79,
    "horsePoint": 1.95,
    "jockeyPoint": 2.03,
    "framePoint": 5,
    "timePoint": 3.49,
    "racePoint": 4.06,
    "roubdTotalPoint": 3.05,
    "oddsRank": 13,
    "rank": 5
  },
  {
    "horseNumber": 12,
    "horseName": "サウンドキアラ",
    "jockeyName": "松山",
    "totalPoint": 7.43,
    "horsePoint": 3.39,
    "jockeyPoint": 2.07,
    "framePoint": 2.5,
    "timePoint": 4.71,
    "racePoint": 2.34,
    "roubdTotalPoint": 2.91,
    "oddsRank": 6,
    "rank": 11
  },
  {
    "horseNumber": 7,
    "horseName": "マルターズディオサ",
    "jockeyName": "田辺",
    "totalPoint": 7.06,
    "horsePoint": 2.97,
    "jockeyPoint": 2.88,
    "framePoint": 1.11,
    "timePoint": 3.7,
    "racePoint": 2.74,
    "roubdTotalPoint": 2.76,
    "oddsRank": 7,
    "rank": 9
  },
  {
    "horseNumber": 17,
    "horseName": "スマイルカナ",
    "jockeyName": "柴田大",
    "totalPoint": 6.82,
    "horsePoint": 1.93,
    "jockeyPoint": 1.4,
    "framePoint": 5,
    "timePoint": 3.72,
    "racePoint": 2.43,
    "roubdTotalPoint": 2.67,
    "oddsRank": 12,
    "rank": 15
  },
  {
    "horseNumber": 9,
    "horseName": "テルツェット",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 6.78,
    "horsePoint": 0.85,
    "jockeyPoint": 3.87,
    "framePoint": 3.06,
    "timePoint": 1.3,
    "racePoint": 1.12,
    "roubdTotalPoint": 2.65,
    "oddsRank": 3,
    "rank": 14
  },
  {
    "horseNumber": 4,
    "horseName": "イベリス",
    "jockeyName": "酒井",
    "totalPoint": 6.69,
    "horsePoint": 2.09,
    "jockeyPoint": 1.04,
    "framePoint": 5,
    "timePoint": 4.3,
    "racePoint": 2.82,
    "roubdTotalPoint": 2.62,
    "oddsRank": 16,
    "rank": 18
  },
  {
    "horseNumber": 11,
    "horseName": "ダノンファンタジー",
    "jockeyName": "藤岡佑",
    "totalPoint": 6.57,
    "horsePoint": 1.85,
    "jockeyPoint": 2.39,
    "framePoint": 2.5,
    "timePoint": 4.61,
    "racePoint": 4.13,
    "roubdTotalPoint": 2.57,
    "oddsRank": 9,
    "rank": 7
  },
  {
    "horseNumber": 13,
    "horseName": "プールヴィル",
    "jockeyName": "三浦",
    "totalPoint": 6.53,
    "horsePoint": 1.41,
    "jockeyPoint": 2.43,
    "framePoint": 3.06,
    "timePoint": 3.98,
    "racePoint": 4.26,
    "roubdTotalPoint": 2.55,
    "oddsRank": 11,
    "rank": 17
  },
  {
    "horseNumber": 10,
    "horseName": "レッドベルディエス",
    "jockeyName": "石橋脩",
    "totalPoint": 6.09,
    "horsePoint": 1.35,
    "jockeyPoint": 2.21,
    "framePoint": 3.06,
    "timePoint": 3.15,
    "racePoint": 3.48,
    "roubdTotalPoint": 2.38,
    "oddsRank": 17,
    "rank": 12
  },
  {
    "horseNumber": 14,
    "horseName": "ディアンドル",
    "jockeyName": "団野",
    "totalPoint": 6.09,
    "horsePoint": 1.96,
    "jockeyPoint": 1.67,
    "framePoint": 3.06,
    "timePoint": 3.57,
    "racePoint": 3.13,
    "roubdTotalPoint": 2.38,
    "oddsRank": 14,
    "rank": 4
  },
  {
    "horseNumber": 3,
    "horseName": "クリスティ",
    "jockeyName": "斎藤",
    "totalPoint": 5.89,
    "horsePoint": 1.39,
    "jockeyPoint": 0.95,
    "framePoint": 5,
    "timePoint": 3.46,
    "racePoint": 2.77,
    "roubdTotalPoint": 2.3,
    "oddsRank": 15,
    "rank": 10
  },
  {
    "horseNumber": 15,
    "horseName": "アフランシール",
    "jockeyName": "大野",
    "totalPoint": 4.92,
    "horsePoint": 0.48,
    "jockeyPoint": 1.85,
    "framePoint": 3.06,
    "timePoint": 3.26,
    "racePoint": 3.77,
    "roubdTotalPoint": 1.92,
    "oddsRank": 18,
    "rank": 16
  },
  {
    "horseNumber": 8,
    "horseName": "ランブリングアレー",
    "jockeyName": "吉田隼",
    "totalPoint": 4.75,
    "horsePoint": 1.19,
    "jockeyPoint": 1.89,
    "framePoint": 1.11,
    "timePoint": 4.11,
    "racePoint": 5,
    "roubdTotalPoint": 1.86,
    "oddsRank": 10,
    "rank": 2
  }
]
const top_forecast_data = [
  {
    "horseNumber": 6,
    "horseName": "グランアレグリア",
    "jockeyName": "ルメール",
    "totalPoint": 13.94,
    "horsePoint": 5,
    "jockeyPoint": 5,
    "framePoint": 5,
    "timePoint": 5,
    "racePoint": 4.71,
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 1
  },
  {
    "horseNumber": 5,
    "horseName": "デゼル",
    "jockeyName": "川田",
    "totalPoint": 7.63,
    "horsePoint": 0.41,
    "jockeyPoint": 3.45,
    "framePoint": 5,
    "timePoint": 3.67,
    "racePoint": 3.83,
    "roubdTotalPoint": 2.74,
    "oddsRank": 4,
    "rank": 8
  },
  {
    "horseNumber": 18,
    "horseName": "レシステンシア",
    "jockeyName": "武豊",
    "totalPoint": 7.14,
    "horsePoint": 3.54,
    "jockeyPoint": 1.91,
    "framePoint": 1.3,
    "timePoint": 4.48,
    "racePoint": 4.55,
    "roubdTotalPoint": 2.56,
    "oddsRank": 2,
    "rank": 6
  },
  {
    "horseNumber": 11,
    "horseName": "ダノンファンタジー",
    "jockeyName": "藤岡佑",
    "totalPoint": 6.45,
    "horsePoint": 1.35,
    "jockeyPoint": 1.27,
    "framePoint": 5,
    "timePoint": 4.61,
    "racePoint": 4.13,
    "roubdTotalPoint": 2.31,
    "oddsRank": 9,
    "rank": 7
  },
  {
    "horseNumber": 1,
    "horseName": "マジックキャッスル",
    "jockeyName": "戸崎圭",
    "totalPoint": 6.04,
    "horsePoint": 1.52,
    "jockeyPoint": 2.91,
    "framePoint": 1.3,
    "timePoint": 4.11,
    "racePoint": 4.14,
    "roubdTotalPoint": 2.17,
    "oddsRank": 5,
    "rank": 3
  },
  {
    "horseNumber": 12,
    "horseName": "サウンドキアラ",
    "jockeyName": "松山",
    "totalPoint": 5.44,
    "horsePoint": 0.61,
    "jockeyPoint": 1.36,
    "framePoint": 5,
    "timePoint": 4.71,
    "racePoint": 2.34,
    "roubdTotalPoint": 1.95,
    "oddsRank": 6,
    "rank": 11
  },
  {
    "horseNumber": 4,
    "horseName": "イベリス",
    "jockeyName": "酒井",
    "totalPoint": 5.15,
    "horsePoint": 1.73,
    "jockeyPoint": 0.64,
    "framePoint": 3.7,
    "timePoint": 4.3,
    "racePoint": 2.82,
    "roubdTotalPoint": 1.85,
    "oddsRank": 16,
    "rank": 18
  },
  {
    "horseNumber": 16,
    "horseName": "リアアメリア",
    "jockeyName": "福永",
    "totalPoint": 5.06,
    "horsePoint": 0.62,
    "jockeyPoint": 2.91,
    "framePoint": 1.3,
    "timePoint": 3.54,
    "racePoint": 3.77,
    "roubdTotalPoint": 1.81,
    "oddsRank": 8,
    "rank": 13
  },
  {
    "horseNumber": 14,
    "horseName": "ディアンドル",
    "jockeyName": "団野",
    "totalPoint": 4.84,
    "horsePoint": 2.32,
    "jockeyPoint": 0.45,
    "framePoint": 2.41,
    "timePoint": 3.57,
    "racePoint": 3.13,
    "roubdTotalPoint": 1.74,
    "oddsRank": 14,
    "rank": 4
  },
  {
    "horseNumber": 13,
    "horseName": "プールヴィル",
    "jockeyName": "三浦",
    "totalPoint": 4.47,
    "horsePoint": 0.62,
    "jockeyPoint": 1.55,
    "framePoint": 2.41,
    "timePoint": 3.98,
    "racePoint": 4.26,
    "roubdTotalPoint": 1.6,
    "oddsRank": 11,
    "rank": 17
  },
  {
    "horseNumber": 7,
    "horseName": "マルターズディオサ",
    "jockeyName": "田辺",
    "totalPoint": 4.37,
    "horsePoint": 1.73,
    "jockeyPoint": 2.09,
    "framePoint": 0,
    "timePoint": 3.7,
    "racePoint": 2.74,
    "roubdTotalPoint": 1.57,
    "oddsRank": 7,
    "rank": 9
  },
  {
    "horseNumber": 3,
    "horseName": "クリスティ",
    "jockeyName": "斎藤",
    "totalPoint": 4.34,
    "horsePoint": 0.84,
    "jockeyPoint": 0.73,
    "framePoint": 3.7,
    "timePoint": 3.46,
    "racePoint": 2.77,
    "roubdTotalPoint": 1.56,
    "oddsRank": 15,
    "rank": 10
  },
  {
    "horseNumber": 2,
    "horseName": "シゲルピンクダイヤ",
    "jockeyName": "和田竜",
    "totalPoint": 4.12,
    "horsePoint": 1.35,
    "jockeyPoint": 1.18,
    "framePoint": 1.3,
    "timePoint": 3.49,
    "racePoint": 4.06,
    "roubdTotalPoint": 1.48,
    "oddsRank": 13,
    "rank": 5
  },
  {
    "horseNumber": 10,
    "horseName": "レッドベルディエス",
    "jockeyName": "石橋脩",
    "totalPoint": 3.65,
    "horsePoint": 1.31,
    "jockeyPoint": 1.64,
    "framePoint": 0,
    "timePoint": 3.15,
    "racePoint": 3.48,
    "roubdTotalPoint": 1.31,
    "oddsRank": 17,
    "rank": 12
  },
  {
    "horseNumber": 15,
    "horseName": "アフランシール",
    "jockeyName": "大野",
    "totalPoint": 3.53,
    "horsePoint": 0.15,
    "jockeyPoint": 1.18,
    "framePoint": 2.41,
    "timePoint": 3.26,
    "racePoint": 3.77,
    "roubdTotalPoint": 1.27,
    "oddsRank": 18,
    "rank": 16
  },
  {
    "horseNumber": 9,
    "horseName": "テルツェット",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 3.48,
    "horsePoint": 0.26,
    "jockeyPoint": 3,
    "framePoint": 0,
    "timePoint": 1.3,
    "racePoint": 1.12,
    "roubdTotalPoint": 1.25,
    "oddsRank": 3,
    "rank": 14
  },
  {
    "horseNumber": 8,
    "horseName": "ランブリングアレー",
    "jockeyName": "吉田隼",
    "totalPoint": 3.11,
    "horsePoint": 0.56,
    "jockeyPoint": 1.55,
    "framePoint": 0,
    "timePoint": 4.11,
    "racePoint": 5,
    "roubdTotalPoint": 1.12,
    "oddsRank": 10,
    "rank": 2
  },
  {
    "horseNumber": 17,
    "horseName": "スマイルカナ",
    "jockeyName": "柴田大",
    "totalPoint": 2.86,
    "horsePoint": 0.95,
    "jockeyPoint": 0.64,
    "framePoint": 1.3,
    "timePoint": 3.72,
    "racePoint": 2.43,
    "roubdTotalPoint": 1.03,
    "oddsRank": 12,
    "rank": 15
  }
]

export default Index;

