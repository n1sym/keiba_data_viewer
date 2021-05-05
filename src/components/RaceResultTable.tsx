import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import RaceData from "../../@types/RaceData";

function displayRank(rank: number) {
  switch (rank) {
    case 1:
      return <Td bg="yellow.100">{rank}</Td>;
    case 2:
      return <Td bg="blue.100">{rank}</Td>;
    case 3:
      return <Td bg="orange.100">{rank}</Td>;
    case 99:
      return <Td>{"-"}</Td>;
    default:
      return <Td>{rank}</Td>;
  }
}

export const RaceResultTable = (props: { raceData: RaceData[] }) => (
  <Table size="sm" mt={8}>
    <Thead>
      <Tr>
        <Th>年度</Th>
        <Th>順位</Th>
        <Th>人気</Th>
        <Th>枠番</Th>
        <Th>馬番</Th>
        <Th>馬名</Th>
        <Th>体重</Th>
        <Th>体重差分</Th>
        <Th>通過</Th>

        <Th>騎乗</Th>
        <Th>調教</Th>
      </Tr>
    </Thead>
    <Tbody>
      {props.raceData.map((item: RaceData, index: number) => {
        return (
          <Tr key={index}>
            <Td>{item.year}</Td>
            {displayRank(item.rank)}
            {displayRank(item.oddsRank)}
            <Td>{item.frameNumber}</Td>
            <Td>{item.horseNumber}</Td>
            <Td>{item.horseName}</Td>
            <Td>{item.horseWeight} </Td>
            <Td>{item.horseWeightDiff}</Td>
            <Td>{item.passingOrder}</Td>

            <Td>{item.jockeyName}</Td>
            <Td>{item.trainerName}</Td>
          </Tr>
        );
      })}
    </Tbody>
  </Table>
);
