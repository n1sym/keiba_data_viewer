import {
  Heading,
  FormLabel,
  Wrap,
  FormControl,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack,
  WrapItem,
} from "@chakra-ui/react";
import prisma from "../../../lib/prisma";
import { GetStaticProps } from "next";
import { RaceResultTable } from "../../components/RaceResultTable";
import RaceData from "../../../@types/RaceData";
import { useState } from "react";
import Layout from "../../components/Layout";

function filter(
  raceData: RaceData[],
  minYear: number,
  maxYear: number,
  jockeyName: string,
  minRank: number
) {
  const result = raceData
    .filter((data) => data.year >= minYear)
    .filter((data) => data.year <= maxYear)
    .filter((data) => data.rank <= minRank)
    .filter((data) => data.jockeyName.includes(jockeyName));
  return result;
}

function Index({ raceData }: { raceData: RaceData[]; raceData3: RaceData[] }) {
  const [minYear, setMinYear] = useState(2015);
  const [maxYear, setMaxYear] = useState(2020);
  const [minRank, setMinRank] = useState(5);
  const [jockeyName, setJockeyName] = useState("");

  function handleMinYearChange(e: string) {
    setMinYear(Number(e));
  }
  function handleMaxYearChange(e: string) {
    setMaxYear(Number(e));
  }
  function handleMinRankChange(e: string) {
    setMinRank(Number(e));
  }
  function handleNameChange(e: { target: { value: string } }) {
    setJockeyName(e.target.value);
  }

  return (
    <Layout>
      <Heading py="4" px={4} size="lg">
        NHKマイルカップ
      </Heading>
      <Wrap spacing={8} px={4} pt={4}>
        <WrapItem>
          <FormControl>
            <FormLabel>開催年</FormLabel>
            <Stack shouldWrapChildren direction="row">
              <NumberInput
                size="md"
                maxW={24}
                defaultValue={2015}
                min={2001}
                value={minYear}
                onChange={(e) => handleMinYearChange(e)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <div>～</div>
              <NumberInput
                size="md"
                maxW={24}
                defaultValue={2020}
                max={2020}
                value={maxYear}
                onChange={(e) => handleMaxYearChange(e)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Stack>
          </FormControl>
        </WrapItem>
        <WrapItem>
        <FormControl id="email" maxW={44}>
          <FormLabel>騎手名</FormLabel>
          <Input
            placeholder="名前を入力"
            size="md"
            value={jockeyName}
            onChange={(e) => handleNameChange(e)}
          />
        </FormControl>
        </WrapItem>
        <WrapItem>
        <FormControl>

            <FormLabel>順位</FormLabel> 
              <NumberInput
                size="md"
                maxW={20}
                defaultValue={5}
                min={1}
                value={minRank}
                onChange={(e) => handleMinRankChange(e)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
          </FormControl>
          </WrapItem>
      </Wrap>
      <RaceResultTable
        raceData={filter(raceData, minYear, maxYear, jockeyName, minRank)}
      ></RaceResultTable>
    </Layout>
  );
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const raceData = await prisma.result.findMany({
    orderBy: [
      {
        year: "desc",
      },
      {
        rank: "asc",
      },
    ],
  });
  return { props: { raceData } };
};
