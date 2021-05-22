import {
  Stack,Text,Heading
} from "@chakra-ui/react";
import Layout from "../../../../components/Layout";
import {RaceForecastTable} from "../../../../components/RaceForecastTable"
import Head from "next/head";

const title = "第82回 優駿牝馬(G1)"

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
        <Text fontWeight="bold" pt={8}>単勝予想</Text>
        <RaceForecastTable forecastData={top_forecast_data} type="top"></RaceForecastTable>
        <Text fontWeight="bold" pt={8}>ワイド予想</Text>
        <RaceForecastTable forecastData={wide_forecast_data} type="wide"></RaceForecastTable>
      </Stack>
    </Layout>
  );
}

const wide_forecast_data = [
  {
    "horseNumber": 13,
    "horseName": "ファインルージュ",
    "jockeyName": "福永祐一",
    "totalPoint": 10.93,
    "horsePoint": 4.76,
    "jockeyPoint": 2.86,
    "framePoint": 5,
    "timePoint": 3.42,
    "racePoint": 1.53,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 9,
    "horseName": "ユーバーレーベン",
    "jockeyName": "Ｍ．デムーロ",
    "totalPoint": 10.27,
    "horsePoint": 2.8,
    "jockeyPoint": 3.93,
    "framePoint": 5,
    "timePoint": 4.09,
    "racePoint": 2.69,
    "roubdTotalPoint": 4.7
  },
  {
    "horseNumber": 7,
    "horseName": "アカイトリノムスメ",
    "jockeyName": "Ｃ．ルメール",
    "totalPoint": 9.01,
    "horsePoint": 2.82,
    "jockeyPoint": 5,
    "framePoint": 1,
    "timePoint": 3.49,
    "racePoint": 2.94,
    "roubdTotalPoint": 4.12
  },
  {
    "horseNumber": 18,
    "horseName": "ステラリア",
    "jockeyName": "川田将雅",
    "totalPoint": 8.64,
    "horsePoint": 2.36,
    "jockeyPoint": 3.77,
    "framePoint": 2.75,
    "timePoint": 4.69,
    "racePoint": 4.28,
    "roubdTotalPoint": 3.95
  },
  {
    "horseNumber": 15,
    "horseName": "アールドヴィーヴル",
    "jockeyName": "松山弘平",
    "totalPoint": 8.5,
    "horsePoint": 2.44,
    "jockeyPoint": 2.06,
    "framePoint": 5,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 3.89
  },
  {
    "horseNumber": 11,
    "horseName": "ソダシ",
    "jockeyName": "吉田隼人",
    "totalPoint": 8.23,
    "horsePoint": 5,
    "jockeyPoint": 1.87,
    "framePoint": 1,
    "timePoint": 4.65,
    "racePoint": 3.82,
    "roubdTotalPoint": 3.76
  },
  {
    "horseNumber": 2,
    "horseName": "スルーセブンシーズ",
    "jockeyName": "戸崎圭太",
    "totalPoint": 7.37,
    "horsePoint": 1.08,
    "jockeyPoint": 3.33,
    "framePoint": 4.5,
    "timePoint": 3.19,
    "racePoint": 1.31,
    "roubdTotalPoint": 3.37
  },
  {
    "horseNumber": 10,
    "horseName": "エンスージアズム",
    "jockeyName": "岩田望来",
    "totalPoint": 7.34,
    "horsePoint": 1.87,
    "jockeyPoint": 1.94,
    "framePoint": 5,
    "timePoint": 3.9,
    "racePoint": 2.64,
    "roubdTotalPoint": 3.36
  },
  {
    "horseNumber": 3,
    "horseName": "パープルレディー",
    "jockeyName": "田辺裕信",
    "totalPoint": 7.04,
    "horsePoint": 2.08,
    "jockeyPoint": 2.46,
    "framePoint": 3.25,
    "timePoint": 2.25,
    "racePoint": 2.77,
    "roubdTotalPoint": 3.22
  },
  {
    "horseNumber": 1,
    "horseName": "ククナ",
    "jockeyName": "横山武史",
    "totalPoint": 6.97,
    "horsePoint": 2.07,
    "jockeyPoint": 1.31,
    "framePoint": 4.5,
    "timePoint": 4.54,
    "racePoint": 4.43,
    "roubdTotalPoint": 3.19
  },
  {
    "horseNumber": 5,
    "horseName": "クールキャット",
    "jockeyName": "武豊",
    "totalPoint": 6.83,
    "horsePoint": 2.35,
    "jockeyPoint": 2.54,
    "framePoint": 2.25,
    "timePoint": 2.74,
    "racePoint": 2.95,
    "roubdTotalPoint": 3.12
  },
  {
    "horseNumber": 4,
    "horseName": "タガノパッション",
    "jockeyName": "岩田康誠",
    "totalPoint": 6.69,
    "horsePoint": 1.76,
    "jockeyPoint": 2.06,
    "framePoint": 3.25,
    "timePoint": 3.69,
    "racePoint": 4.61,
    "roubdTotalPoint": 3.06
  },
  {
    "horseNumber": 14,
    "horseName": "ストライプ",
    "jockeyName": "柴田善臣",
    "totalPoint": 6.25,
    "horsePoint": 1.28,
    "jockeyPoint": 1.43,
    "framePoint": 5,
    "timePoint": 2.66,
    "racePoint": 2.68,
    "roubdTotalPoint": 2.86
  },
  {
    "horseNumber": 16,
    "horseName": "ニーナドレス",
    "jockeyName": "藤岡康太",
    "totalPoint": 5.05,
    "horsePoint": 1.79,
    "jockeyPoint": 1.35,
    "framePoint": 2.75,
    "timePoint": 1.87,
    "racePoint": 1.31,
    "roubdTotalPoint": 2.31
  },
  {
    "horseNumber": 17,
    "horseName": "スライリー",
    "jockeyName": "石川裕紀人",
    "totalPoint": 4.82,
    "horsePoint": 1.46,
    "jockeyPoint": 1.11,
    "framePoint": 2.75,
    "timePoint": 2.4,
    "racePoint": 3,
    "roubdTotalPoint": 2.2
  },
  {
    "horseNumber": 6,
    "horseName": "ウインアグライア",
    "jockeyName": "和田竜二",
    "totalPoint": 4.77,
    "horsePoint": 0.8,
    "jockeyPoint": 2.1,
    "framePoint": 2.25,
    "timePoint": 3.15,
    "racePoint": 2.61,
    "roubdTotalPoint": 2.18
  },
  {
    "horseNumber": 12,
    "horseName": "ミヤビハイディ",
    "jockeyName": "吉田豊",
    "totalPoint": 4.65,
    "horsePoint": 1.8,
    "jockeyPoint": 1.79,
    "framePoint": 1,
    "timePoint": 2.1,
    "racePoint": 2.29,
    "roubdTotalPoint": 2.13
  },
  {
    "horseNumber": 8,
    "horseName": "ハギノピリナ",
    "jockeyName": "藤懸貴志",
    "totalPoint": 3.03,
    "horsePoint": 0.3,
    "jockeyPoint": 1.87,
    "framePoint": 1,
    "timePoint": 2.11,
    "racePoint": 1.31,
    "roubdTotalPoint": 1.39
  }
]
const top_forecast_data = [
  {
    "horseNumber": 13,
    "horseName": "ファインルージュ",
    "jockeyName": "福永祐一",
    "totalPoint": 8.48,
    "horsePoint": 2.87,
    "jockeyPoint": 2.3,
    "framePoint": 5,
    "timePoint": 3.42,
    "racePoint": 1.53,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 18,
    "horseName": "ステラリア",
    "jockeyName": "川田将雅",
    "totalPoint": 7.9,
    "horsePoint": 2.2,
    "jockeyPoint": 3.28,
    "framePoint": 2.6,
    "timePoint": 4.69,
    "racePoint": 4.28,
    "roubdTotalPoint": 4.66
  },
  {
    "horseNumber": 7,
    "horseName": "アカイトリノムスメ",
    "jockeyName": "Ｃ．ルメール",
    "totalPoint": 7.79,
    "horsePoint": 1.48,
    "jockeyPoint": 5,
    "framePoint": 1.2,
    "timePoint": 3.49,
    "racePoint": 2.94,
    "roubdTotalPoint": 4.59
  },
  {
    "horseNumber": 11,
    "horseName": "ソダシ",
    "jockeyName": "吉田隼人",
    "totalPoint": 7.48,
    "horsePoint": 5,
    "jockeyPoint": 1.72,
    "framePoint": 0,
    "timePoint": 4.65,
    "racePoint": 3.82,
    "roubdTotalPoint": 4.41
  },
  {
    "horseNumber": 9,
    "horseName": "ユーバーレーベン",
    "jockeyName": "Ｍ．デムーロ",
    "totalPoint": 7.27,
    "horsePoint": 1.34,
    "jockeyPoint": 3.11,
    "framePoint": 3.8,
    "timePoint": 4.09,
    "racePoint": 2.69,
    "roubdTotalPoint": 4.29
  },
  {
    "horseNumber": 3,
    "horseName": "パープルレディー",
    "jockeyName": "田辺裕信",
    "totalPoint": 6.93,
    "horsePoint": 1.49,
    "jockeyPoint": 1.89,
    "framePoint": 5,
    "timePoint": 2.25,
    "racePoint": 2.77,
    "roubdTotalPoint": 4.09
  },
  {
    "horseNumber": 15,
    "horseName": "アールドヴィーヴル",
    "jockeyName": "松山弘平",
    "totalPoint": 6.81,
    "horsePoint": 1.17,
    "jockeyPoint": 1.64,
    "framePoint": 5,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 4.02
  },
  {
    "horseNumber": 4,
    "horseName": "タガノパッション",
    "jockeyName": "岩田康誠",
    "totalPoint": 5.76,
    "horsePoint": 0.77,
    "jockeyPoint": 1.07,
    "framePoint": 5,
    "timePoint": 3.69,
    "racePoint": 4.61,
    "roubdTotalPoint": 3.4
  },
  {
    "horseNumber": 10,
    "horseName": "エンスージアズム",
    "jockeyName": "岩田望来",
    "totalPoint": 5.57,
    "horsePoint": 1.53,
    "jockeyPoint": 1.23,
    "framePoint": 3.8,
    "timePoint": 3.9,
    "racePoint": 2.64,
    "roubdTotalPoint": 3.28
  },
  {
    "horseNumber": 2,
    "horseName": "スルーセブンシーズ",
    "jockeyName": "戸崎圭太",
    "totalPoint": 5.19,
    "horsePoint": 0.67,
    "jockeyPoint": 2.7,
    "framePoint": 2.6,
    "timePoint": 3.19,
    "racePoint": 1.31,
    "roubdTotalPoint": 3.06
  },
  {
    "horseNumber": 14,
    "horseName": "ストライプ",
    "jockeyName": "柴田善臣",
    "totalPoint": 4.85,
    "horsePoint": 0.74,
    "jockeyPoint": 0.57,
    "framePoint": 5,
    "timePoint": 2.66,
    "racePoint": 2.68,
    "roubdTotalPoint": 2.86
  },
  {
    "horseNumber": 16,
    "horseName": "ニーナドレス",
    "jockeyName": "藤岡康太",
    "totalPoint": 4.4,
    "horsePoint": 2.01,
    "jockeyPoint": 0.57,
    "framePoint": 2.6,
    "timePoint": 1.87,
    "racePoint": 1.31,
    "roubdTotalPoint": 2.59
  },
  {
    "horseNumber": 1,
    "horseName": "ククナ",
    "jockeyName": "横山武史",
    "totalPoint": 4.13,
    "horsePoint": 1.11,
    "jockeyPoint": 0.57,
    "framePoint": 2.6,
    "timePoint": 4.54,
    "racePoint": 4.43,
    "roubdTotalPoint": 2.44
  },
  {
    "horseNumber": 5,
    "horseName": "クールキャット",
    "jockeyName": "武豊",
    "totalPoint": 3.69,
    "horsePoint": 0.8,
    "jockeyPoint": 2.3,
    "framePoint": 0,
    "timePoint": 2.74,
    "racePoint": 2.95,
    "roubdTotalPoint": 2.18
  },
  {
    "horseNumber": 17,
    "horseName": "スライリー",
    "jockeyName": "石川裕紀人",
    "totalPoint": 2.97,
    "horsePoint": 0.48,
    "jockeyPoint": 0.33,
    "framePoint": 2.6,
    "timePoint": 2.4,
    "racePoint": 3,
    "roubdTotalPoint": 1.75
  },
  {
    "horseNumber": 12,
    "horseName": "ミヤビハイディ",
    "jockeyName": "吉田豊",
    "totalPoint": 2.72,
    "horsePoint": 1.03,
    "jockeyPoint": 1.23,
    "framePoint": 0,
    "timePoint": 2.1,
    "racePoint": 2.29,
    "roubdTotalPoint": 1.6
  },
  {
    "horseNumber": 6,
    "horseName": "ウインアグライア",
    "jockeyName": "和田竜二",
    "totalPoint": 2.16,
    "horsePoint": 0.41,
    "jockeyPoint": 1.23,
    "framePoint": 0,
    "timePoint": 3.15,
    "racePoint": 2.61,
    "roubdTotalPoint": 1.27
  },
  {
    "horseNumber": 8,
    "horseName": "ハギノピリナ",
    "jockeyName": "藤懸貴志",
    "totalPoint": 1.47,
    "horsePoint": 0,
    "jockeyPoint": 0.49,
    "framePoint": 1.2,
    "timePoint": 2.11,
    "racePoint": 1.31,
    "roubdTotalPoint": 0.87
  }
]

export default Index;
