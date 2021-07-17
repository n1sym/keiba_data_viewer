import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第57回 七夕賞(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202103010411&rf=race_list"

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
    "date": "2021/07/11",
    "dirName": "2021/G3/tanabata",
    "raceName": "七夕賞(G3)",
    "tan": -1000,
    "tan2": -1000,
    "huku": -1000,
    "wide3box": -1000,
    "wide5box": -1000,
    "3huku5box": -1000,
    "1-2-3oddsRank": "2-7-9"
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 9,
    "horseName": "クレッシェンドラヴ",
    "jockeyName": "内田博",
    "totalPoint": 18.08,
    "horsePoint": 5,
    "jockeyPoint": 3.36,
    "framePoint": 4.05,
    "timePoint": 4.15,
    "racePoint": 4.55,
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 14
  },
  {
    "horseNumber": 16,
    "horseName": "ヴァンケドミンゴ",
    "jockeyName": "酒井",
    "totalPoint": 17.55,
    "horsePoint": 4.19,
    "jockeyPoint": 4.89,
    "framePoint": 1.9,
    "timePoint": 3.74,
    "racePoint": 5,
    "roubdTotalPoint": 4.85,
    "oddsRank": 4,
    "rank": 12
  },
  {
    "horseNumber": 7,
    "horseName": "カウディーリョ",
    "jockeyName": "丸山",
    "totalPoint": 16.39,
    "horsePoint": 1.55,
    "jockeyPoint": 4.12,
    "framePoint": 5,
    "timePoint": 4.07,
    "racePoint": 4.55,
    "roubdTotalPoint": 4.53,
    "oddsRank": 13,
    "rank": 6
  },
  {
    "horseNumber": 4,
    "horseName": "トーラスジェミニ",
    "jockeyName": "戸崎圭",
    "totalPoint": 16.22,
    "horsePoint": 1.09,
    "jockeyPoint": 4.8,
    "framePoint": 3.1,
    "timePoint": 5,
    "racePoint": 4.82,
    "roubdTotalPoint": 4.49,
    "oddsRank": 2,
    "rank": 1
  },
  {
    "horseNumber": 10,
    "horseName": "クラージュゲリエ",
    "jockeyName": "吉田隼",
    "totalPoint": 16.22,
    "horsePoint": 3.1,
    "jockeyPoint": 3.75,
    "framePoint": 4.05,
    "timePoint": 4.39,
    "racePoint": 2.79,
    "roubdTotalPoint": 4.49,
    "oddsRank": 6,
    "rank": 13
  },
  {
    "horseNumber": 3,
    "horseName": "ワンダープチュック",
    "jockeyName": "津村",
    "totalPoint": 14.44,
    "horsePoint": 1.79,
    "jockeyPoint": 3.55,
    "framePoint": 3.1,
    "timePoint": 4.43,
    "racePoint": 4.13,
    "roubdTotalPoint": 3.99,
    "oddsRank": 12,
    "rank": 9
  },
  {
    "horseNumber": 14,
    "horseName": "ワーケア",
    "jockeyName": "田辺",
    "totalPoint": 14.2,
    "horsePoint": 1.15,
    "jockeyPoint": 5,
    "framePoint": 1.9,
    "timePoint": 3.66,
    "racePoint": 4.01,
    "roubdTotalPoint": 3.93,
    "oddsRank": 5,
    "rank": 15
  },
  {
    "horseNumber": 8,
    "horseName": "アールスター",
    "jockeyName": "長岡",
    "totalPoint": 13.89,
    "horsePoint": 2.8,
    "jockeyPoint": 1.15,
    "framePoint": 5,
    "timePoint": 4.59,
    "racePoint": 4.53,
    "roubdTotalPoint": 3.84,
    "oddsRank": 8,
    "rank": 11
  },
  {
    "horseNumber": 6,
    "horseName": "ショウナンバルディ",
    "jockeyName": "岩田康",
    "totalPoint": 13.55,
    "horsePoint": 3.29,
    "jockeyPoint": 4.02,
    "framePoint": 1.9,
    "timePoint": 2.03,
    "racePoint": 3.73,
    "roubdTotalPoint": 3.75,
    "oddsRank": 9,
    "rank": 3
  },
  {
    "horseNumber": 11,
    "horseName": "スカーフェイス",
    "jockeyName": "三浦",
    "totalPoint": 13.52,
    "horsePoint": 1.09,
    "jockeyPoint": 4.09,
    "framePoint": 4.05,
    "timePoint": 2.85,
    "racePoint": 2.97,
    "roubdTotalPoint": 3.74,
    "oddsRank": 10,
    "rank": 10
  },
  {
    "horseNumber": 12,
    "horseName": "○地ツーエムアロンソ",
    "jockeyName": "野中",
    "totalPoint": 13.46,
    "horsePoint": 3.02,
    "jockeyPoint": 2.84,
    "framePoint": 4.05,
    "timePoint": 2.28,
    "racePoint": 3.5,
    "roubdTotalPoint": 3.72,
    "oddsRank": 16,
    "rank": 16
  },
  {
    "horseNumber": 2,
    "horseName": "ロザムール",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 12.32,
    "horsePoint": 1.14,
    "jockeyPoint": 3.97,
    "framePoint": 1.9,
    "timePoint": 2.97,
    "racePoint": 4.31,
    "roubdTotalPoint": 3.41,
    "oddsRank": 7,
    "rank": 2
  },
  {
    "horseNumber": 1,
    "horseName": "○地マウントゴールド",
    "jockeyName": "岩田望",
    "totalPoint": 12.14,
    "horsePoint": 2.53,
    "jockeyPoint": 2.37,
    "framePoint": 1.9,
    "timePoint": 3.86,
    "racePoint": 4.22,
    "roubdTotalPoint": 3.36,
    "oddsRank": 11,
    "rank": 4
  },
  {
    "horseNumber": 13,
    "horseName": "プレシャスブルー",
    "jockeyName": "柴田善",
    "totalPoint": 11.88,
    "horsePoint": 1.66,
    "jockeyPoint": 3.24,
    "framePoint": 1.9,
    "timePoint": 3.13,
    "racePoint": 4.15,
    "roubdTotalPoint": 3.29,
    "oddsRank": 15,
    "rank": 5
  },
  {
    "horseNumber": 5,
    "horseName": "ブラックマジック",
    "jockeyName": "石橋脩",
    "totalPoint": 11.85,
    "horsePoint": 2.24,
    "jockeyPoint": 4.02,
    "framePoint": 1.9,
    "timePoint": 2.52,
    "racePoint": 1.12,
    "roubdTotalPoint": 3.28,
    "oddsRank": 3,
    "rank": 8
  },
  {
    "horseNumber": 15,
    "horseName": "トラストケンシン",
    "jockeyName": "吉田豊",
    "totalPoint": 10.45,
    "horsePoint": 1.96,
    "jockeyPoint": 2.7,
    "framePoint": 1.9,
    "timePoint": 2.03,
    "racePoint": 3.91,
    "roubdTotalPoint": 2.89,
    "oddsRank": 14,
    "rank": 7
  }
]
const top_forecast_data = [
  {
    "horseNumber": 9,
    "horseName": "クレッシェンドラヴ",
    "jockeyName": "内田博",
    "totalPoint": 8.28,
    "horsePoint": 5,
    "jockeyPoint": 2.34,
    "framePoint": 1.3,
    "timePoint": 4.15,
    "racePoint": 4.55,
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 14
  },
  {
    "horseNumber": 10,
    "horseName": "クラージュゲリエ",
    "jockeyName": "吉田隼",
    "totalPoint": 8.1,
    "horsePoint": 2.99,
    "jockeyPoint": 3.65,
    "framePoint": 1.3,
    "timePoint": 4.39,
    "racePoint": 2.79,
    "roubdTotalPoint": 4.89,
    "oddsRank": 6,
    "rank": 13
  },
  {
    "horseNumber": 14,
    "horseName": "ワーケア",
    "jockeyName": "田辺",
    "totalPoint": 7.62,
    "horsePoint": 0.62,
    "jockeyPoint": 5,
    "framePoint": 1.3,
    "timePoint": 3.66,
    "racePoint": 4.01,
    "roubdTotalPoint": 4.6,
    "oddsRank": 5,
    "rank": 15
  },
  {
    "horseNumber": 7,
    "horseName": "カウディーリョ",
    "jockeyName": "丸山",
    "totalPoint": 7.33,
    "horsePoint": 0.36,
    "jockeyPoint": 4.98,
    "framePoint": 3.7,
    "timePoint": 4.07,
    "racePoint": 4.55,
    "roubdTotalPoint": 4.43,
    "oddsRank": 13,
    "rank": 6
  },
  {
    "horseNumber": 2,
    "horseName": "ロザムール",
    "jockeyName": "Ｍデムーロ",
    "totalPoint": 7.09,
    "horsePoint": 0.87,
    "jockeyPoint": 4.44,
    "framePoint": 1.3,
    "timePoint": 2.97,
    "racePoint": 4.31,
    "roubdTotalPoint": 4.28,
    "oddsRank": 7,
    "rank": 2
  },
  {
    "horseNumber": 6,
    "horseName": "ショウナンバルディ",
    "jockeyName": "岩田康",
    "totalPoint": 6.6,
    "horsePoint": 2.79,
    "jockeyPoint": 2.72,
    "framePoint": 1.3,
    "timePoint": 2.03,
    "racePoint": 3.73,
    "roubdTotalPoint": 3.99,
    "oddsRank": 9,
    "rank": 3
  },
  {
    "horseNumber": 3,
    "horseName": "ワンダープチュック",
    "jockeyName": "津村",
    "totalPoint": 6.38,
    "horsePoint": 2.15,
    "jockeyPoint": 3.02,
    "framePoint": 5,
    "timePoint": 4.43,
    "racePoint": 4.13,
    "roubdTotalPoint": 3.85,
    "oddsRank": 12,
    "rank": 9
  },
  {
    "horseNumber": 4,
    "horseName": "トーラスジェミニ",
    "jockeyName": "戸崎圭",
    "totalPoint": 6.37,
    "horsePoint": 0.84,
    "jockeyPoint": 3.95,
    "framePoint": 5,
    "timePoint": 5,
    "racePoint": 4.82,
    "roubdTotalPoint": 3.85,
    "oddsRank": 2,
    "rank": 1
  },
  {
    "horseNumber": 11,
    "horseName": "スカーフェイス",
    "jockeyName": "三浦",
    "totalPoint": 5.47,
    "horsePoint": 0.7,
    "jockeyPoint": 3.41,
    "framePoint": 3.7,
    "timePoint": 2.85,
    "racePoint": 2.97,
    "roubdTotalPoint": 3.3,
    "oddsRank": 10,
    "rank": 10
  },
  {
    "horseNumber": 15,
    "horseName": "トラストケンシン",
    "jockeyName": "吉田豊",
    "totalPoint": 5.31,
    "horsePoint": 0.75,
    "jockeyPoint": 3.26,
    "framePoint": 1.3,
    "timePoint": 2.03,
    "racePoint": 3.91,
    "roubdTotalPoint": 3.21,
    "oddsRank": 14,
    "rank": 7
  },
  {
    "horseNumber": 12,
    "horseName": "○地ツーエムアロンソ",
    "jockeyName": "野中",
    "totalPoint": 5.25,
    "horsePoint": 3.57,
    "jockeyPoint": 1.2,
    "framePoint": 3.7,
    "timePoint": 2.28,
    "racePoint": 3.5,
    "roubdTotalPoint": 3.17,
    "oddsRank": 16,
    "rank": 16
  },
  {
    "horseNumber": 13,
    "horseName": "プレシャスブルー",
    "jockeyName": "柴田善",
    "totalPoint": 5.25,
    "horsePoint": 1.34,
    "jockeyPoint": 2.79,
    "framePoint": 1.3,
    "timePoint": 3.13,
    "racePoint": 4.15,
    "roubdTotalPoint": 3.17,
    "oddsRank": 15,
    "rank": 5
  },
  {
    "horseNumber": 5,
    "horseName": "ブラックマジック",
    "jockeyName": "石橋脩",
    "totalPoint": 4.71,
    "horsePoint": 0.59,
    "jockeyPoint": 2.94,
    "framePoint": 1.3,
    "timePoint": 2.52,
    "racePoint": 1.12,
    "roubdTotalPoint": 2.84,
    "oddsRank": 3,
    "rank": 8
  },
  {
    "horseNumber": 1,
    "horseName": "○地マウントゴールド",
    "jockeyName": "岩田望",
    "totalPoint": 4.26,
    "horsePoint": 2.89,
    "jockeyPoint": 0.98,
    "framePoint": 1.3,
    "timePoint": 3.86,
    "racePoint": 4.22,
    "roubdTotalPoint": 2.57,
    "oddsRank": 11,
    "rank": 4
  },
  {
    "horseNumber": 16,
    "horseName": "ヴァンケドミンゴ",
    "jockeyName": "酒井",
    "totalPoint": 3,
    "horsePoint": 1.07,
    "jockeyPoint": 1.38,
    "framePoint": 1.3,
    "timePoint": 3.74,
    "racePoint": 5,
    "roubdTotalPoint": 1.81,
    "oddsRank": 4,
    "rank": 12
  },
  {
    "horseNumber": 8,
    "horseName": "アールスター",
    "jockeyName": "長岡",
    "totalPoint": 2.73,
    "horsePoint": 1.76,
    "jockeyPoint": 0.69,
    "framePoint": 3.7,
    "timePoint": 4.59,
    "racePoint": 4.53,
    "roubdTotalPoint": 1.65,
    "oddsRank": 8,
    "rank": 11
  }
]

export default Index;

