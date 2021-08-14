import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";
import {RaceForecastTableG3tan} from "../../../../components/RaceForecastTableG3tan"

const title = "第56回 関屋記念(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202104040211"

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

  }
]
const wide_forecast_data = [
  {
    "horseNumber": 12,
    "horseName": "サトノアーサー",
    "jockeyName": "戸崎圭",
    "totalPoint": 9.59,
    "horsePoint": 5,
    "jockeyPoint": 3.28,
    "framePoint": 2.12,
    "timePoint": 4.79,
    "racePoint": 4.95,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 3,
    "horseName": "シャドウディーヴァ",
    "jockeyName": "福永",
    "totalPoint": 9.51,
    "horsePoint": 2.51,
    "jockeyPoint": 5,
    "framePoint": 1.73,
    "timePoint": 4.77,
    "racePoint": 4.8,
    "roubdTotalPoint": 4.96
  },
  {
    "horseNumber": 11,
    "horseName": "ソングライン",
    "jockeyName": "池添",
    "totalPoint": 8.76,
    "horsePoint": 2.73,
    "jockeyPoint": 4.31,
    "framePoint": 2.12,
    "timePoint": 3.81,
    "racePoint": 4.22,
    "roubdTotalPoint": 4.57
  },
  {
    "horseNumber": 4,
    "horseName": "ラセット",
    "jockeyName": "秋山真",
    "totalPoint": 7.68,
    "horsePoint": 2.61,
    "jockeyPoint": 3.62,
    "framePoint": 1.73,
    "timePoint": 4.72,
    "racePoint": 4.17,
    "roubdTotalPoint": 4
  },
  {
    "horseNumber": 8,
    "horseName": "アンドラステ",
    "jockeyName": "岩田望",
    "totalPoint": 7.55,
    "horsePoint": 4.78,
    "jockeyPoint": 1.98,
    "framePoint": 1.35,
    "timePoint": 4.4,
    "racePoint": 5,
    "roubdTotalPoint": 3.94
  },
  {
    "horseNumber": 14,
    "horseName": "クリスティ",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 6.43,
    "horsePoint": 2.33,
    "jockeyPoint": 2.93,
    "framePoint": 5,
    "timePoint": 4.7,
    "racePoint": 3.92,
    "roubdTotalPoint": 3.35
  },
  {
    "horseNumber": 10,
    "horseName": "ブランノワール",
    "jockeyName": "丸山",
    "totalPoint": 6.41,
    "horsePoint": 3.51,
    "jockeyPoint": 2.07,
    "framePoint": 2.5,
    "timePoint": 5,
    "racePoint": 4.7,
    "roubdTotalPoint": 3.34
  },
  {
    "horseNumber": 15,
    "horseName": "ミラアイトーン",
    "jockeyName": "津村",
    "totalPoint": 6.06,
    "horsePoint": 1.83,
    "jockeyPoint": 3.02,
    "framePoint": 5,
    "timePoint": 4.52,
    "racePoint": 4.53,
    "roubdTotalPoint": 3.16
  },
  {
    "horseNumber": 6,
    "horseName": "○外ロータスランド",
    "jockeyName": "田辺",
    "totalPoint": 5.83,
    "horsePoint": 1.36,
    "jockeyPoint": 3.19,
    "framePoint": 1.35,
    "timePoint": 4.01,
    "racePoint": 3.74,
    "roubdTotalPoint": 3.04
  },
  {
    "horseNumber": 16,
    "horseName": "プールヴィル",
    "jockeyName": "三浦",
    "totalPoint": 5.67,
    "horsePoint": 2.53,
    "jockeyPoint": 2.24,
    "framePoint": 4.62,
    "timePoint": 4.91,
    "racePoint": 4.91,
    "roubdTotalPoint": 2.96
  },
  {
    "horseNumber": 18,
    "horseName": "パクスアメリカーナ",
    "jockeyName": "内田博",
    "totalPoint": 5.04,
    "horsePoint": 3.47,
    "jockeyPoint": 1.12,
    "framePoint": 4.62,
    "timePoint": 4.47,
    "racePoint": 2.59,
    "roubdTotalPoint": 2.63
  },
  {
    "horseNumber": 17,
    "horseName": "マイスタイル",
    "jockeyName": "横山典",
    "totalPoint": 3.83,
    "horsePoint": 2.14,
    "jockeyPoint": 1.21,
    "framePoint": 4.62,
    "timePoint": 3.65,
    "racePoint": 3.94,
    "roubdTotalPoint": 2
  },
  {
    "horseNumber": 13,
    "horseName": "カラテ",
    "jockeyName": "菅原明",
    "totalPoint": 3.66,
    "horsePoint": 1.25,
    "jockeyPoint": 1.72,
    "framePoint": 5,
    "timePoint": 4.63,
    "racePoint": 4.16,
    "roubdTotalPoint": 1.91
  },
  {
    "horseNumber": 7,
    "horseName": "ハッピーアワー",
    "jockeyName": "丸田",
    "totalPoint": 3.55,
    "horsePoint": 1.25,
    "jockeyPoint": 1.64,
    "framePoint": 1.35,
    "timePoint": 2.82,
    "racePoint": 3.74,
    "roubdTotalPoint": 1.85
  },
  {
    "horseNumber": 2,
    "horseName": "ベストアクター",
    "jockeyName": "柴田善",
    "totalPoint": 3.08,
    "horsePoint": 1.39,
    "jockeyPoint": 1.21,
    "framePoint": 0.77,
    "timePoint": 4.89,
    "racePoint": 4.93,
    "roubdTotalPoint": 1.61
  },
  {
    "horseNumber": 5,
    "horseName": "アトミックフォース",
    "jockeyName": "武藤",
    "totalPoint": 2.96,
    "horsePoint": 1.63,
    "jockeyPoint": 0.95,
    "framePoint": 1.35,
    "timePoint": 4.52,
    "racePoint": 4.53,
    "roubdTotalPoint": 1.54
  },
  {
    "horseNumber": 9,
    "horseName": "○地ソッサスブレイ",
    "jockeyName": "柴田大",
    "totalPoint": 2.45,
    "horsePoint": 0.39,
    "jockeyPoint": 1.47,
    "framePoint": 2.5,
    "timePoint": 1.15,
    "racePoint": 0.92,
    "roubdTotalPoint": 1.28
  },
  {
    "horseNumber": 1,
    "horseName": "グランデマーレ",
    "jockeyName": "藤岡佑",
    "totalPoint": 2.34,
    "horsePoint": 2.34,
    "jockeyPoint": 0,
    "framePoint": 0.77,
    "timePoint": 3.56,
    "racePoint": 2.27,
    "roubdTotalPoint": 1.22
  }
]
const top_forecast_data = [
  {
    "horseNumber": 11,
    "horseName": "ソングライン",
    "jockeyName": "池添",
    "totalPoint": 14.77,
    "horsePoint": 2.42,
    "jockeyPoint": 5,
    "oikiriPoint": 4,
    "stablePoint": 4,
    "timePoint": 6,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 4,
    "horseName": "ラセット",
    "jockeyName": "秋山真",
    "totalPoint": 10.52,
    "horsePoint": 1.57,
    "jockeyPoint": 4.24,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 6,
    "roubdTotalPoint": 3.56
  },
  {
    "horseNumber": 3,
    "horseName": "シャドウディーヴァ",
    "jockeyName": "福永",
    "totalPoint": 9.93,
    "horsePoint": 1.2,
    "jockeyPoint": 3.79,
    "oikiriPoint": 2,
    "stablePoint": 4,
    "timePoint": 3,
    "roubdTotalPoint": 3.36
  },
  {
    "horseNumber": 12,
    "horseName": "サトノアーサー",
    "jockeyName": "戸崎圭",
    "totalPoint": 9.39,
    "horsePoint": 5,
    "jockeyPoint": 3.03,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2.5,
    "roubdTotalPoint": 3.18
  },
  {
    "horseNumber": 15,
    "horseName": "ミラアイトーン",
    "jockeyName": "津村",
    "totalPoint": 8.35,
    "horsePoint": 1.14,
    "jockeyPoint": 2.58,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 6,
    "roubdTotalPoint": 2.83
  },
  {
    "horseNumber": 14,
    "horseName": "クリスティ",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 7.39,
    "horsePoint": 0.99,
    "jockeyPoint": 0.91,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 3,
    "roubdTotalPoint": 2.5
  },
  {
    "horseNumber": 17,
    "horseName": "マイスタイル",
    "jockeyName": "横山典",
    "totalPoint": 7.2,
    "horsePoint": 1.88,
    "jockeyPoint": 2.12,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3,
    "roubdTotalPoint": 2.44
  },
  {
    "horseNumber": 16,
    "horseName": "プールヴィル",
    "jockeyName": "三浦",
    "totalPoint": 6.6,
    "horsePoint": 0.86,
    "jockeyPoint": 1.21,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 6,
    "roubdTotalPoint": 2.23
  },
  {
    "horseNumber": 10,
    "horseName": "ブランノワール",
    "jockeyName": "丸山",
    "totalPoint": 6.48,
    "horsePoint": 0.99,
    "jockeyPoint": 1.82,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 3,
    "roubdTotalPoint": 2.19
  },
  {
    "horseNumber": 1,
    "horseName": "グランデマーレ",
    "jockeyName": "藤岡佑",
    "totalPoint": 6.14,
    "horsePoint": 0.97,
    "jockeyPoint": 0,
    "oikiriPoint": 4,
    "stablePoint": 2,
    "timePoint": 2.5,
    "roubdTotalPoint": 2.08
  },
  {
    "horseNumber": 6,
    "horseName": "○外ロータスランド",
    "jockeyName": "田辺",
    "totalPoint": 5.59,
    "horsePoint": 0.8,
    "jockeyPoint": 1.52,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 1.5,
    "roubdTotalPoint": 1.89
  },
  {
    "horseNumber": 13,
    "horseName": "カラテ",
    "jockeyName": "菅原明",
    "totalPoint": 5.31,
    "horsePoint": 1.26,
    "jockeyPoint": 1.67,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 6,
    "roubdTotalPoint": 1.8
  },
  {
    "horseNumber": 8,
    "horseName": "アンドラステ",
    "jockeyName": "岩田望",
    "totalPoint": 4.41,
    "horsePoint": 1.65,
    "jockeyPoint": 0,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2.5,
    "roubdTotalPoint": 1.49
  },
  {
    "horseNumber": 18,
    "horseName": "パクスアメリカーナ",
    "jockeyName": "内田博",
    "totalPoint": 4.09,
    "horsePoint": 2.73,
    "jockeyPoint": 0,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 1.38
  },
  {
    "horseNumber": 5,
    "horseName": "アトミックフォース",
    "jockeyName": "武藤",
    "totalPoint": 4.06,
    "horsePoint": 0.78,
    "jockeyPoint": 0,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 2.5,
    "roubdTotalPoint": 1.37
  },
  {
    "horseNumber": 7,
    "horseName": "ハッピーアワー",
    "jockeyName": "丸田",
    "totalPoint": 3.96,
    "horsePoint": 1.04,
    "jockeyPoint": 0.45,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 1.34
  },
  {
    "horseNumber": 9,
    "horseName": "○地ソッサスブレイ",
    "jockeyName": "柴田大",
    "totalPoint": 3.4,
    "horsePoint": 0.1,
    "jockeyPoint": 0.3,
    "oikiriPoint": 2,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 1.15
  },
  {
    "horseNumber": 2,
    "horseName": "ベストアクター",
    "jockeyName": "柴田善",
    "totalPoint": 1.05,
    "horsePoint": 0.12,
    "jockeyPoint": 0,
    "oikiriPoint": 0,
    "stablePoint": 2,
    "timePoint": 0,
    "roubdTotalPoint": 0.36
  }
]

export default Index;

