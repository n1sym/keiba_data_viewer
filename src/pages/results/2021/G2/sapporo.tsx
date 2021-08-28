import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";
import Head from "next/head";

const title = "第57回 札幌記念(G2)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202101020411"

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
    "date": "2021/08/22",
    "dirName": "2021/G2/sapporo",
    "raceName": "札幌記念(G2)",
    "tan": -1000,
    "tan2": -1000,
    "huku": 100,
    "wide3box": -1000,
    "wide5box": -750,
    "3huku5box": -1000,
    "1-2-3oddsRank": "2-1-8"
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 4,
    "horseName": "ラヴズオンリーユー",
    "jockeyName": "川田",
    "totalPoint": 9.12,
    "horsePoint": 3.66,
    "jockeyPoint": 5,
    "framePoint": 4.52,
    "timePoint": 1,
    "racePoint": 1.53,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 12,
    "horseName": "ブラストワンピース",
    "jockeyName": "岩田康",
    "totalPoint": 8.5,
    "horsePoint": 5,
    "jockeyPoint": 1.87,
    "framePoint": 1.43,
    "timePoint": 1.93,
    "racePoint": 0.85,
    "roubdTotalPoint": 4.66
  },
  {
    "horseNumber": 13,
    "horseName": "ソダシ",
    "jockeyName": "吉田隼",
    "totalPoint": 7.88,
    "horsePoint": 4.83,
    "jockeyPoint": 1.4,
    "framePoint": 1.43,
    "timePoint": 4.32,
    "racePoint": 4.18,
    "roubdTotalPoint": 4.32
  },
  {
    "horseNumber": 2,
    "horseName": "○外サトノセシル",
    "jockeyName": "ルメール",
    "totalPoint": 7.03,
    "horsePoint": 2.85,
    "jockeyPoint": 3.8,
    "framePoint": 2.62,
    "timePoint": 4.32,
    "racePoint": 4.27,
    "roubdTotalPoint": 3.85
  },
  {
    "horseNumber": 8,
    "horseName": "ユーキャンスマイル",
    "jockeyName": "藤岡佑",
    "totalPoint": 6.37,
    "horsePoint": 3.14,
    "jockeyPoint": 2.47,
    "framePoint": 4.05,
    "timePoint": 4.92,
    "racePoint": 5,
    "roubdTotalPoint": 3.49
  },
  {
    "horseNumber": 7,
    "horseName": "ペルシアンナイト",
    "jockeyName": "横山武",
    "totalPoint": 6.1,
    "horsePoint": 3.37,
    "jockeyPoint": 1.73,
    "framePoint": 2.14,
    "timePoint": 4.4,
    "racePoint": 4.29,
    "roubdTotalPoint": 3.34
  },
  {
    "horseNumber": 6,
    "horseName": "バイオスパーク",
    "jockeyName": "池添",
    "totalPoint": 5.68,
    "horsePoint": 2.61,
    "jockeyPoint": 2.53,
    "framePoint": 2.14,
    "timePoint": 5,
    "racePoint": 4.88,
    "roubdTotalPoint": 3.11
  },
  {
    "horseNumber": 1,
    "horseName": "ステイフーリッシュ",
    "jockeyName": "坂井",
    "totalPoint": 5.23,
    "horsePoint": 2.48,
    "jockeyPoint": 2.2,
    "framePoint": 2.62,
    "timePoint": 4.94,
    "racePoint": 4.97,
    "roubdTotalPoint": 2.87
  },
  {
    "horseNumber": 10,
    "horseName": "ディアマンミノル",
    "jockeyName": "泉谷",
    "totalPoint": 3.89,
    "horsePoint": 1.18,
    "jockeyPoint": 2.8,
    "framePoint": 1.43,
    "timePoint": 4.04,
    "racePoint": 4.54,
    "roubdTotalPoint": 2.13
  },
  {
    "horseNumber": 3,
    "horseName": "マイネルウィルトス",
    "jockeyName": "団野",
    "totalPoint": 3.25,
    "horsePoint": 1.75,
    "jockeyPoint": 1,
    "framePoint": 5,
    "timePoint": 4.36,
    "racePoint": 4.22,
    "roubdTotalPoint": 1.78
  },
  {
    "horseNumber": 11,
    "horseName": "ウインキートス",
    "jockeyName": "丹内",
    "totalPoint": 2.95,
    "horsePoint": 1.46,
    "jockeyPoint": 1.13,
    "framePoint": 1.43,
    "timePoint": 3.73,
    "racePoint": 3.72,
    "roubdTotalPoint": 1.62
  },
  {
    "horseNumber": 9,
    "horseName": "アイスバブル",
    "jockeyName": "水口",
    "totalPoint": 2.42,
    "horsePoint": 1.73,
    "jockeyPoint": 0,
    "framePoint": 4.05,
    "timePoint": 3.96,
    "racePoint": 4.85,
    "roubdTotalPoint": 1.33
  },
  {
    "horseNumber": 5,
    "horseName": "トーラスジェミニ",
    "jockeyName": "横山和",
    "totalPoint": 1.89,
    "horsePoint": 0.97,
    "jockeyPoint": 0.67,
    "framePoint": 4.52,
    "timePoint": 4.94,
    "racePoint": 4.8,
    "roubdTotalPoint": 1.04
  }
]
const top_forecast_data = [
  {
    "horseNumber": 4,
    "horseName": "ラヴズオンリーユー",
    "jockeyName": "川田",
    "totalPoint": 9.39,
    "horsePoint": 2.39,
    "jockeyPoint": 5,
    "framePoint": 1.3,
    "timePoint": 1,
    "racePoint": 1.53,
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 2
  },
  {
    "horseNumber": 12,
    "horseName": "ブラストワンピース",
    "jockeyName": "岩田康",
    "totalPoint": 5.56,
    "horsePoint": 5,
    "jockeyPoint": 0.4,
    "framePoint": 1.3,
    "timePoint": 1.93,
    "racePoint": 0.85,
    "roubdTotalPoint": 2.96,
    "oddsRank": 3,
    "rank": 5
  },
  {
    "horseNumber": 10,
    "horseName": "ディアマンミノル",
    "jockeyName": "泉谷",
    "totalPoint": 5.12,
    "horsePoint": 1.2,
    "jockeyPoint": 2.8,
    "framePoint": 2.41,
    "timePoint": 4.04,
    "racePoint": 4.54,
    "roubdTotalPoint": 2.73,
    "oddsRank": 10,
    "rank": 8
  },
  {
    "horseNumber": 1,
    "horseName": "ステイフーリッシュ",
    "jockeyName": "坂井",
    "totalPoint": 4.05,
    "horsePoint": 0.97,
    "jockeyPoint": 2.2,
    "framePoint": 5,
    "timePoint": 4.94,
    "racePoint": 4.97,
    "roubdTotalPoint": 2.16,
    "oddsRank": 6,
    "rank": "中止"
  },
  {
    "horseNumber": 2,
    "horseName": "○外サトノセシル",
    "jockeyName": "ルメール",
    "totalPoint": 3.83,
    "horsePoint": 0.75,
    "jockeyPoint": 2.2,
    "framePoint": 1.3,
    "timePoint": 4.32,
    "racePoint": 4.27,
    "roubdTotalPoint": 2.04,
    "oddsRank": 4,
    "rank": 11
  },
  {
    "horseNumber": 13,
    "horseName": "ソダシ",
    "jockeyName": "吉田隼",
    "totalPoint": 3.47,
    "horsePoint": 2.63,
    "jockeyPoint": 0.6,
    "framePoint": 1.3,
    "timePoint": 4.32,
    "racePoint": 4.18,
    "roubdTotalPoint": 1.85,
    "oddsRank": 2,
    "rank": 1
  },
  {
    "horseNumber": 8,
    "horseName": "ユーキャンスマイル",
    "jockeyName": "藤岡佑",
    "totalPoint": 3.2,
    "horsePoint": 1.66,
    "jockeyPoint": 1.1,
    "framePoint": 2.41,
    "timePoint": 4.92,
    "racePoint": 5,
    "roubdTotalPoint": 1.7,
    "oddsRank": 9,
    "rank": 6
  },
  {
    "horseNumber": 7,
    "horseName": "ペルシアンナイト",
    "jockeyName": "横山武",
    "totalPoint": 2.71,
    "horsePoint": 1.17,
    "jockeyPoint": 1.1,
    "framePoint": 2.41,
    "timePoint": 4.4,
    "racePoint": 4.29,
    "roubdTotalPoint": 1.44,
    "oddsRank": 8,
    "rank": 3
  },
  {
    "horseNumber": 6,
    "horseName": "バイオスパーク",
    "jockeyName": "池添",
    "totalPoint": 1.82,
    "horsePoint": 0.98,
    "jockeyPoint": 0.6,
    "framePoint": 2.41,
    "timePoint": 5,
    "racePoint": 4.88,
    "roubdTotalPoint": 0.97,
    "oddsRank": 13,
    "rank": "中止"
  },
  {
    "horseNumber": 11,
    "horseName": "ウインキートス",
    "jockeyName": "丹内",
    "totalPoint": 1.54,
    "horsePoint": 0.56,
    "jockeyPoint": 0.7,
    "framePoint": 2.41,
    "timePoint": 3.73,
    "racePoint": 3.72,
    "roubdTotalPoint": 0.82,
    "oddsRank": 5,
    "rank": 9
  },
  {
    "horseNumber": 5,
    "horseName": "トーラスジェミニ",
    "jockeyName": "横山和",
    "totalPoint": 1.11,
    "horsePoint": 0.41,
    "jockeyPoint": 0.5,
    "framePoint": 1.3,
    "timePoint": 4.94,
    "racePoint": 4.8,
    "roubdTotalPoint": 0.59,
    "oddsRank": 7,
    "rank": 10
  },
  {
    "horseNumber": 9,
    "horseName": "アイスバブル",
    "jockeyName": "水口",
    "totalPoint": 0.73,
    "horsePoint": 0.73,
    "jockeyPoint": 0,
    "framePoint": 2.41,
    "timePoint": 3.96,
    "racePoint": 4.85,
    "roubdTotalPoint": 0.39,
    "oddsRank": 12,
    "rank": 7
  },
  {
    "horseNumber": 3,
    "horseName": "マイネルウィルトス",
    "jockeyName": "団野",
    "totalPoint": 0.64,
    "horsePoint": 0.22,
    "jockeyPoint": 0.3,
    "framePoint": 2.41,
    "timePoint": 4.36,
    "racePoint": 4.22,
    "roubdTotalPoint": 0.34,
    "oddsRank": 11,
    "rank": 4
  }
]

export default Index;
