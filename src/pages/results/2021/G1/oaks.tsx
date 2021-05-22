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
    "totalPoint": 11.4,
    "horsePoint": 4.76,
    "jockeyPoint": 3.33,
    "framePoint": 5,
    "timePoint": 3.42,
    "racePoint": 1.53,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 9,
    "horseName": "ユーバーレーベン",
    "jockeyName": "Ｍ．デムーロ",
    "totalPoint": 10.72,
    "horsePoint": 2.8,
    "jockeyPoint": 4.38,
    "framePoint": 5,
    "timePoint": 4.09,
    "racePoint": 2.69,
    "roubdTotalPoint": 4.7
  },
  {
    "horseNumber": 15,
    "horseName": "アールドヴィーヴル",
    "jockeyName": "松山弘平",
    "totalPoint": 9.28,
    "horsePoint": 2.44,
    "jockeyPoint": 2.84,
    "framePoint": 5,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 4.07
  },
  {
    "horseNumber": 11,
    "horseName": "ソダシ",
    "jockeyName": "吉田隼人",
    "totalPoint": 9.14,
    "horsePoint": 5,
    "jockeyPoint": 2.78,
    "framePoint": 1,
    "timePoint": 4.65,
    "racePoint": 3.82,
    "roubdTotalPoint": 4.01
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
    "roubdTotalPoint": 3.95
  },
  {
    "horseNumber": 18,
    "horseName": "ステラリア",
    "jockeyName": "川田将雅",
    "totalPoint": 8.87,
    "horsePoint": 2.36,
    "jockeyPoint": 4,
    "framePoint": 2.75,
    "timePoint": 4.69,
    "racePoint": 4.28,
    "roubdTotalPoint": 3.89
  },
  {
    "horseNumber": 1,
    "horseName": "ククナ",
    "jockeyName": "横山武史",
    "totalPoint": 8.15,
    "horsePoint": 2.07,
    "jockeyPoint": 2.49,
    "framePoint": 4.5,
    "timePoint": 4.54,
    "racePoint": 4.43,
    "roubdTotalPoint": 3.57
  },
  {
    "horseNumber": 10,
    "horseName": "エンスージアズム",
    "jockeyName": "岩田望来",
    "totalPoint": 8.06,
    "horsePoint": 1.87,
    "jockeyPoint": 2.66,
    "framePoint": 5,
    "timePoint": 3.9,
    "racePoint": 2.64,
    "roubdTotalPoint": 3.54
  },
  {
    "horseNumber": 2,
    "horseName": "スルーセブンシーズ",
    "jockeyName": "戸崎圭太",
    "totalPoint": 7.77,
    "horsePoint": 1.08,
    "jockeyPoint": 3.73,
    "framePoint": 4.5,
    "timePoint": 3.19,
    "racePoint": 1.31,
    "roubdTotalPoint": 3.41
  },
  {
    "horseNumber": 3,
    "horseName": "パープルレディー",
    "jockeyName": "田辺裕信",
    "totalPoint": 7.76,
    "horsePoint": 2.08,
    "jockeyPoint": 3.18,
    "framePoint": 3.25,
    "timePoint": 2.25,
    "racePoint": 2.77,
    "roubdTotalPoint": 3.4
  },
  {
    "horseNumber": 4,
    "horseName": "タガノパッション",
    "jockeyName": "岩田康誠",
    "totalPoint": 7.46,
    "horsePoint": 1.76,
    "jockeyPoint": 2.83,
    "framePoint": 3.25,
    "timePoint": 3.69,
    "racePoint": 4.61,
    "roubdTotalPoint": 3.27
  },
  {
    "horseNumber": 14,
    "horseName": "ストライプ",
    "jockeyName": "柴田善臣",
    "totalPoint": 7.21,
    "horsePoint": 1.28,
    "jockeyPoint": 2.39,
    "framePoint": 5,
    "timePoint": 2.66,
    "racePoint": 2.68,
    "roubdTotalPoint": 3.16
  },
  {
    "horseNumber": 5,
    "horseName": "クールキャット",
    "jockeyName": "武豊",
    "totalPoint": 7.15,
    "horsePoint": 2.35,
    "jockeyPoint": 2.86,
    "framePoint": 2.25,
    "timePoint": 2.74,
    "racePoint": 2.95,
    "roubdTotalPoint": 3.14
  },
  {
    "horseNumber": 17,
    "horseName": "スライリー",
    "jockeyName": "石川裕紀人",
    "totalPoint": 6.03,
    "horsePoint": 1.46,
    "jockeyPoint": 2.32,
    "framePoint": 2.75,
    "timePoint": 2.4,
    "racePoint": 3,
    "roubdTotalPoint": 2.64
  },
  {
    "horseNumber": 6,
    "horseName": "ウインアグライア",
    "jockeyName": "和田竜二",
    "totalPoint": 5.67,
    "horsePoint": 0.8,
    "jockeyPoint": 3,
    "framePoint": 2.25,
    "timePoint": 3.15,
    "racePoint": 2.61,
    "roubdTotalPoint": 2.49
  },
  {
    "horseNumber": 16,
    "horseName": "ニーナドレス",
    "jockeyName": "藤岡康太",
    "totalPoint": 5.66,
    "horsePoint": 1.79,
    "jockeyPoint": 1.96,
    "framePoint": 2.75,
    "timePoint": 1.87,
    "racePoint": 1.31,
    "roubdTotalPoint": 2.48
  },
  {
    "horseNumber": 12,
    "horseName": "ミヤビハイディ",
    "jockeyName": "吉田豊",
    "totalPoint": 5.66,
    "horsePoint": 1.8,
    "jockeyPoint": 2.8,
    "framePoint": 1,
    "timePoint": 2.1,
    "racePoint": 2.29,
    "roubdTotalPoint": 2.48
  },
  {
    "horseNumber": 8,
    "horseName": "ハギノピリナ",
    "jockeyName": "藤懸貴志",
    "totalPoint": 4.45,
    "horsePoint": 0.3,
    "jockeyPoint": 3.29,
    "framePoint": 1,
    "timePoint": 2.11,
    "racePoint": 1.31,
    "roubdTotalPoint": 1.95
  }
]
const top_forecast_data = [
  {
    "horseNumber": 13,
    "horseName": "ファインルージュ",
    "jockeyName": "福永祐一",
    "totalPoint": 9.15,
    "horsePoint": 2.87,
    "jockeyPoint": 2.97,
    "framePoint": 5,
    "timePoint": 3.42,
    "racePoint": 1.53,
    "roubdTotalPoint": 5
  },
  {
    "horseNumber": 11,
    "horseName": "ソダシ",
    "jockeyName": "吉田隼人",
    "totalPoint": 9.08,
    "horsePoint": 5,
    "jockeyPoint": 3.32,
    "framePoint": 0,
    "timePoint": 4.65,
    "racePoint": 3.82,
    "roubdTotalPoint": 4.96
  },
  {
    "horseNumber": 18,
    "horseName": "ステラリア",
    "jockeyName": "川田将雅",
    "totalPoint": 8.57,
    "horsePoint": 2.2,
    "jockeyPoint": 3.95,
    "framePoint": 2.6,
    "timePoint": 4.69,
    "racePoint": 4.28,
    "roubdTotalPoint": 4.68
  },
  {
    "horseNumber": 15,
    "horseName": "アールドヴィーヴル",
    "jockeyName": "松山弘平",
    "totalPoint": 8.35,
    "horsePoint": 1.17,
    "jockeyPoint": 3.18,
    "framePoint": 5,
    "timePoint": 5,
    "racePoint": 5,
    "roubdTotalPoint": 4.56
  },
  {
    "horseNumber": 3,
    "horseName": "パープルレディー",
    "jockeyName": "田辺裕信",
    "totalPoint": 8.34,
    "horsePoint": 1.49,
    "jockeyPoint": 3.3,
    "framePoint": 5,
    "timePoint": 2.25,
    "racePoint": 2.77,
    "roubdTotalPoint": 4.56
  },
  {
    "horseNumber": 9,
    "horseName": "ユーバーレーベン",
    "jockeyName": "Ｍ．デムーロ",
    "totalPoint": 8.17,
    "horsePoint": 1.34,
    "jockeyPoint": 4.01,
    "framePoint": 3.8,
    "timePoint": 4.09,
    "racePoint": 2.69,
    "roubdTotalPoint": 4.46
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
    "roubdTotalPoint": 4.26
  },
  {
    "horseNumber": 4,
    "horseName": "タガノパッション",
    "jockeyName": "岩田康誠",
    "totalPoint": 7.37,
    "horsePoint": 0.77,
    "jockeyPoint": 2.68,
    "framePoint": 5,
    "timePoint": 3.69,
    "racePoint": 4.61,
    "roubdTotalPoint": 4.03
  },
  {
    "horseNumber": 10,
    "horseName": "エンスージアズム",
    "jockeyName": "岩田望来",
    "totalPoint": 6.94,
    "horsePoint": 1.53,
    "jockeyPoint": 2.6,
    "framePoint": 3.8,
    "timePoint": 3.9,
    "racePoint": 2.64,
    "roubdTotalPoint": 3.79
  },
  {
    "horseNumber": 2,
    "horseName": "スルーセブンシーズ",
    "jockeyName": "戸崎圭太",
    "totalPoint": 6.15,
    "horsePoint": 0.67,
    "jockeyPoint": 3.66,
    "framePoint": 2.6,
    "timePoint": 3.19,
    "racePoint": 1.31,
    "roubdTotalPoint": 3.36
  },
  {
    "horseNumber": 14,
    "horseName": "ストライプ",
    "jockeyName": "柴田善臣",
    "totalPoint": 5.52,
    "horsePoint": 0.74,
    "jockeyPoint": 1.24,
    "framePoint": 5,
    "timePoint": 2.66,
    "racePoint": 2.68,
    "roubdTotalPoint": 3.02
  },
  {
    "horseNumber": 1,
    "horseName": "ククナ",
    "jockeyName": "横山武史",
    "totalPoint": 5.42,
    "horsePoint": 1.11,
    "jockeyPoint": 1.86,
    "framePoint": 2.6,
    "timePoint": 4.54,
    "racePoint": 4.43,
    "roubdTotalPoint": 2.96
  },
  {
    "horseNumber": 16,
    "horseName": "ニーナドレス",
    "jockeyName": "藤岡康太",
    "totalPoint": 4.44,
    "horsePoint": 2.01,
    "jockeyPoint": 0.61,
    "framePoint": 2.6,
    "timePoint": 1.87,
    "racePoint": 1.31,
    "roubdTotalPoint": 2.43
  },
  {
    "horseNumber": 5,
    "horseName": "クールキャット",
    "jockeyName": "武豊",
    "totalPoint": 4.39,
    "horsePoint": 0.8,
    "jockeyPoint": 3,
    "framePoint": 0,
    "timePoint": 2.74,
    "racePoint": 2.95,
    "roubdTotalPoint": 2.4
  },
  {
    "horseNumber": 17,
    "horseName": "スライリー",
    "jockeyName": "石川裕紀人",
    "totalPoint": 4.15,
    "horsePoint": 0.48,
    "jockeyPoint": 1.51,
    "framePoint": 2.6,
    "timePoint": 2.4,
    "racePoint": 3,
    "roubdTotalPoint": 2.27
  },
  {
    "horseNumber": 12,
    "horseName": "ミヤビハイディ",
    "jockeyName": "吉田豊",
    "totalPoint": 3.99,
    "horsePoint": 1.03,
    "jockeyPoint": 2.5,
    "framePoint": 0,
    "timePoint": 2.1,
    "racePoint": 2.29,
    "roubdTotalPoint": 2.18
  },
  {
    "horseNumber": 6,
    "horseName": "ウインアグライア",
    "jockeyName": "和田竜二",
    "totalPoint": 3.26,
    "horsePoint": 0.41,
    "jockeyPoint": 2.33,
    "framePoint": 0,
    "timePoint": 3.15,
    "racePoint": 2.61,
    "roubdTotalPoint": 1.78
  },
  {
    "horseNumber": 8,
    "horseName": "ハギノピリナ",
    "jockeyName": "藤懸貴志",
    "totalPoint": 1.76,
    "horsePoint": 0,
    "jockeyPoint": 0.78,
    "framePoint": 1.2,
    "timePoint": 2.11,
    "racePoint": 1.31,
    "roubdTotalPoint": 0.96
  }
]

export default Index;
