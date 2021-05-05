import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

type RaceData = {
  raceName: string;
  rank: number;
  frameNumber: number;
  horseNumber: number;
  horseName: string;
  sexualAge: string;
  weight: number;
  jockeyName: string;
  time: string;
  passingOrder: string;
  time3f: number;
  oddsNum: number;
  oddsRank: number;
  horseWeight: number;
  horseWeightDiff: number;
  trainerName: string;
};

export const RaceResultTable = (props: {raceData: RaceData[]}) => (
  <Table size="sm" mt={8}>
    <Thead>
      <Tr>
        <Th>レース</Th>
        <Th>順位</Th>
        <Th>枠番</Th>
        <Th>馬番</Th>
        <Th>馬名</Th>
        <Th>体重</Th>
        <Th>体重差分</Th>
        <Th>通過</Th>
        <Th>人気</Th>
        <Th>騎乗</Th>
        <Th>調教</Th>
      </Tr>
    </Thead>
    <Tbody>
      {props.raceData.map((item: RaceData, index: number) => {
        return (
          <Tr key={index}>
            <Td>{item.raceName}</Td>
            <Td>{item.rank}</Td>
            <Td>{item.frameNumber}</Td>
            <Td>{item.horseNumber}</Td>
            <Td>{item.horseName}</Td>
            <Td>{item.horseWeight} </Td>
            <Td>{item.horseWeightDiff}</Td>
            <Td>{item.passingOrder}</Td>
            <Td>{item.oddsRank}</Td>
            <Td>{item.jockeyName}</Td>
            <Td>{item.trainerName}</Td>
          </Tr>
        );
      })}
    </Tbody>
  </Table>
);
