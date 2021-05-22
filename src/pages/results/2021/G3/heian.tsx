import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import {ForecastResultTable} from "../../../../components/ForecastResultTable"
import Link from "next/link";

const title = "平安ステークス(G3)"
const result_url = "https://race.netkeiba.com/race/result.html?race_id=202107030511&rf=race_list"

function Index() {
  return (
    <Layout>
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
    "title": "0509heian",
    "tan": -1000,
    "tan2": -1000,
    "huku": 300,
    "wide3box": -1000,
    "wide5box": 290,
    "3huku5box": 490,
    "1-2-3oddsRank": "2-1-3"
  }
]
const wide_forecast_data = [
  {
    "horseNumber": 12,
    "horseName": "ロードブレス",
    "jockeyName": "幸",
    "totalPoint": 16.81,
    "horsePoint": 5,
    "jockeyPoint": 2.45,
    "framePoint": 3.25,
    "timePoint": 4.75,
    "racePoint": 4.95,
    "roubdTotalPoint": 5,
    "oddsRank": 5,
    "rank": 13
  },
  {
    "horseNumber": 11,
    "horseName": "マルシュロレーヌ",
    "jockeyName": "川田",
    "totalPoint": 16.05,
    "horsePoint": 2.31,
    "jockeyPoint": 5,
    "framePoint": 3.25,
    "timePoint": 3.26,
    "racePoint": 3.82,
    "roubdTotalPoint": 4.77,
    "oddsRank": 3,
    "rank": 3
  },
  {
    "horseNumber": 9,
    "horseName": "マスターフェンサー",
    "jockeyName": "松山",
    "totalPoint": 15.47,
    "horsePoint": 3.09,
    "jockeyPoint": 2.65,
    "framePoint": 5,
    "timePoint": 3.8,
    "racePoint": 4.07,
    "roubdTotalPoint": 4.6,
    "oddsRank": 6,
    "rank": 11
  },
  {
    "horseNumber": 5,
    "horseName": "オーヴェルニュ",
    "jockeyName": "福永",
    "totalPoint": 15.24,
    "horsePoint": 1.36,
    "jockeyPoint": 4.18,
    "framePoint": 2.75,
    "timePoint": 5,
    "racePoint": 4.56,
    "roubdTotalPoint": 4.53,
    "oddsRank": 2,
    "rank": 1
  },
  {
    "horseNumber": 16,
    "horseName": "アメリカンシード",
    "jockeyName": "ルメール",
    "totalPoint": 15.14,
    "horsePoint": 2.35,
    "jockeyPoint": 5,
    "framePoint": 2.25,
    "timePoint": 3.19,
    "racePoint": 3.6,
    "roubdTotalPoint": 4.5,
    "oddsRank": 1,
    "rank": 2
  },
  {
    "horseNumber": 14,
    "horseName": "サクラアリュール",
    "jockeyName": "武豊",
    "totalPoint": 14.56,
    "horsePoint": 2.99,
    "jockeyPoint": 4.39,
    "framePoint": 1.75,
    "timePoint": 3.12,
    "racePoint": 3.82,
    "roubdTotalPoint": 4.33,
    "oddsRank": 9,
    "rank": 8
  },
  {
    "horseNumber": 15,
    "horseName": "スワーヴアラミス",
    "jockeyName": "松田",
    "totalPoint": 13.86,
    "horsePoint": 3.11,
    "jockeyPoint": 2.35,
    "framePoint": 2.25,
    "timePoint": 4.57,
    "racePoint": 5,
    "roubdTotalPoint": 4.12,
    "oddsRank": 11,
    "rank": 5
  },
  {
    "horseNumber": 4,
    "horseName": "デルマルーヴル",
    "jockeyName": "岩田康",
    "totalPoint": 13.72,
    "horsePoint": 3.2,
    "jockeyPoint": 3.16,
    "framePoint": 2.75,
    "timePoint": 3.04,
    "racePoint": 3.66,
    "roubdTotalPoint": 4.08,
    "oddsRank": 15,
    "rank": 10
  },
  {
    "horseNumber": 8,
    "horseName": "サトノギャロス",
    "jockeyName": "津村",
    "totalPoint": 13.6,
    "horsePoint": 3.35,
    "jockeyPoint": 1.73,
    "framePoint": 3.75,
    "timePoint": 4.02,
    "racePoint": 4.04,
    "roubdTotalPoint": 4.05,
    "oddsRank": 4,
    "rank": 7
  },
  {
    "horseNumber": 2,
    "horseName": "アルドーレ",
    "jockeyName": "横山典",
    "totalPoint": 12.24,
    "horsePoint": 2.15,
    "jockeyPoint": 1.84,
    "framePoint": 3.75,
    "timePoint": 3.55,
    "racePoint": 4.18,
    "roubdTotalPoint": 3.64,
    "oddsRank": 10,
    "rank": 4
  },
  {
    "horseNumber": 1,
    "horseName": "ヴェルテックス",
    "jockeyName": "岩田望",
    "totalPoint": 12.05,
    "horsePoint": 3.95,
    "jockeyPoint": 2.14,
    "framePoint": 3.75,
    "timePoint": 1.92,
    "racePoint": 1.41,
    "roubdTotalPoint": 3.58,
    "oddsRank": 7,
    "rank": 12
  },
  {
    "horseNumber": 7,
    "horseName": "ミヤジコクオウ",
    "jockeyName": "和田竜",
    "totalPoint": 12.02,
    "horsePoint": 1.34,
    "jockeyPoint": 2.55,
    "framePoint": 3.75,
    "timePoint": 3.3,
    "racePoint": 3.68,
    "roubdTotalPoint": 3.58,
    "oddsRank": 13,
    "rank": 6
  },
  {
    "horseNumber": 6,
    "horseName": "ペオース",
    "jockeyName": "藤岡康",
    "totalPoint": 11.65,
    "horsePoint": 4,
    "jockeyPoint": 2.45,
    "framePoint": 2.75,
    "timePoint": 1.81,
    "racePoint": 1.44,
    "roubdTotalPoint": 3.47,
    "oddsRank": 12,
    "rank": 16
  },
  {
    "horseNumber": 3,
    "horseName": "ケンシンコウ",
    "jockeyName": "酒井",
    "totalPoint": 10.63,
    "horsePoint": 2.56,
    "jockeyPoint": 1.63,
    "framePoint": 2.75,
    "timePoint": 3.8,
    "racePoint": 1.37,
    "roubdTotalPoint": 3.16,
    "oddsRank": 14,
    "rank": 15
  },
  {
    "horseNumber": 10,
    "horseName": "ドスハーツ",
    "jockeyName": "小沢",
    "totalPoint": 8.43,
    "horsePoint": 1.06,
    "jockeyPoint": 0,
    "framePoint": 5,
    "timePoint": 2.75,
    "racePoint": 2.92,
    "roubdTotalPoint": 2.51,
    "oddsRank": 8,
    "rank": 14
  },
  {
    "horseNumber": 13,
    "horseName": "マリオマッハー",
    "jockeyName": "団野",
    "totalPoint": 7.94,
    "horsePoint": 1.35,
    "jockeyPoint": 1.73,
    "framePoint": 1.75,
    "timePoint": 2.46,
    "racePoint": 1.99,
    "roubdTotalPoint": 2.36,
    "oddsRank": 16,
    "rank": 9
  }
]
const top_forecast_data = [
  {
    "horseNumber": 16,
    "horseName": "アメリカンシード",
    "jockeyName": "ルメール",
    "totalPoint": 8.82,
    "horsePoint": 1.82,
    "jockeyPoint": 5,
    "framePoint": 0.97,
    "timePoint": 3.19,
    "racePoint": 3.6,
    "roubdTotalPoint": 5,
    "oddsRank": 1,
    "rank": 2
  },
  {
    "horseNumber": 11,
    "horseName": "マルシュロレーヌ",
    "jockeyName": "川田",
    "totalPoint": 7.87,
    "horsePoint": 0.87,
    "jockeyPoint": 5,
    "framePoint": 0.97,
    "timePoint": 3.26,
    "racePoint": 3.82,
    "roubdTotalPoint": 4.46,
    "oddsRank": 3,
    "rank": 3
  },
  {
    "horseNumber": 14,
    "horseName": "サクラアリュール",
    "jockeyName": "武豊",
    "totalPoint": 7.48,
    "horsePoint": 1.81,
    "jockeyPoint": 4.05,
    "framePoint": 0,
    "timePoint": 3.12,
    "racePoint": 3.82,
    "roubdTotalPoint": 4.24,
    "oddsRank": 9,
    "rank": 8
  },
  {
    "horseNumber": 6,
    "horseName": "ペオース",
    "jockeyName": "藤岡康",
    "totalPoint": 7.34,
    "horsePoint": 5,
    "jockeyPoint": 1.67,
    "framePoint": 0,
    "timePoint": 1.81,
    "racePoint": 1.44,
    "roubdTotalPoint": 4.16,
    "oddsRank": 12,
    "rank": 16
  },
  {
    "horseNumber": 5,
    "horseName": "オーヴェルニュ",
    "jockeyName": "福永",
    "totalPoint": 6.25,
    "horsePoint": 0.92,
    "jockeyPoint": 3.81,
    "framePoint": 0,
    "timePoint": 5,
    "racePoint": 4.56,
    "roubdTotalPoint": 3.54,
    "oddsRank": 2,
    "rank": 1
  },
  {
    "horseNumber": 9,
    "horseName": "マスターフェンサー",
    "jockeyName": "松山",
    "totalPoint": 4.99,
    "horsePoint": 1.66,
    "jockeyPoint": 2.38,
    "framePoint": 3.06,
    "timePoint": 3.8,
    "racePoint": 4.07,
    "roubdTotalPoint": 2.83,
    "oddsRank": 6,
    "rank": 11
  },
  {
    "horseNumber": 4,
    "horseName": "デルマルーヴル",
    "jockeyName": "岩田康",
    "totalPoint": 4.81,
    "horsePoint": 1.48,
    "jockeyPoint": 2.38,
    "framePoint": 3.06,
    "timePoint": 3.04,
    "racePoint": 3.66,
    "roubdTotalPoint": 2.73,
    "oddsRank": 15,
    "rank": 10
  },
  {
    "horseNumber": 1,
    "horseName": "ヴェルテックス",
    "jockeyName": "岩田望",
    "totalPoint": 4.77,
    "horsePoint": 2.43,
    "jockeyPoint": 1.67,
    "framePoint": 5,
    "timePoint": 1.92,
    "racePoint": 1.41,
    "roubdTotalPoint": 2.7,
    "oddsRank": 7,
    "rank": 12
  },
  {
    "horseNumber": 15,
    "horseName": "スワーヴアラミス",
    "jockeyName": "松田",
    "totalPoint": 4.14,
    "horsePoint": 1.48,
    "jockeyPoint": 1.9,
    "framePoint": 0.97,
    "timePoint": 4.57,
    "racePoint": 5,
    "roubdTotalPoint": 2.35,
    "oddsRank": 11,
    "rank": 5
  },
  {
    "horseNumber": 12,
    "horseName": "ロードブレス",
    "jockeyName": "幸",
    "totalPoint": 3.92,
    "horsePoint": 1.58,
    "jockeyPoint": 1.67,
    "framePoint": 0.97,
    "timePoint": 4.75,
    "racePoint": 4.95,
    "roubdTotalPoint": 2.22,
    "oddsRank": 5,
    "rank": 13
  },
  {
    "horseNumber": 3,
    "horseName": "ケンシンコウ",
    "jockeyName": "酒井",
    "totalPoint": 3.6,
    "horsePoint": 1.93,
    "jockeyPoint": 1.19,
    "framePoint": 3.06,
    "timePoint": 3.8,
    "racePoint": 1.37,
    "roubdTotalPoint": 2.04,
    "oddsRank": 14,
    "rank": 15
  },
  {
    "horseNumber": 7,
    "horseName": "ミヤジコクオウ",
    "jockeyName": "和田竜",
    "totalPoint": 3.56,
    "horsePoint": 0.9,
    "jockeyPoint": 1.9,
    "framePoint": 3.06,
    "timePoint": 3.3,
    "racePoint": 3.68,
    "roubdTotalPoint": 2.02,
    "oddsRank": 13,
    "rank": 6
  },
  {
    "horseNumber": 2,
    "horseName": "アルドーレ",
    "jockeyName": "横山典",
    "totalPoint": 2.88,
    "horsePoint": 0.88,
    "jockeyPoint": 1.43,
    "framePoint": 5,
    "timePoint": 3.55,
    "racePoint": 4.18,
    "roubdTotalPoint": 1.63,
    "oddsRank": 10,
    "rank": 4
  },
  {
    "horseNumber": 8,
    "horseName": "サトノギャロス",
    "jockeyName": "津村",
    "totalPoint": 2.07,
    "horsePoint": 1.08,
    "jockeyPoint": 0.71,
    "framePoint": 3.06,
    "timePoint": 4.02,
    "racePoint": 4.04,
    "roubdTotalPoint": 1.17,
    "oddsRank": 4,
    "rank": 7
  },
  {
    "horseNumber": 13,
    "horseName": "マリオマッハー",
    "jockeyName": "団野",
    "totalPoint": 2,
    "horsePoint": 0.67,
    "jockeyPoint": 0.95,
    "framePoint": 0,
    "timePoint": 2.46,
    "racePoint": 1.99,
    "roubdTotalPoint": 1.13,
    "oddsRank": 16,
    "rank": 9
  },
  {
    "horseNumber": 10,
    "horseName": "ドスハーツ",
    "jockeyName": "小沢",
    "totalPoint": 0.51,
    "horsePoint": 0.51,
    "jockeyPoint": 0,
    "framePoint": 3.06,
    "timePoint": 2.75,
    "racePoint": 2.92,
    "roubdTotalPoint": 0.29,
    "oddsRank": 8,
    "rank": 14
  }
]

export default Index;

