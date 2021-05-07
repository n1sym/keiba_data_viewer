import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import HorseRecord from "../../@types/HorseRecord";

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

function displayRace(raceName: string) {
  switch (true) {
    case /G1/.test(raceName):
      return <Td bg="yellow.100">{raceName}</Td>;
    case /G2/.test(raceName):
      return <Td bg="blue.100">{raceName}</Td>;
    case /G3/.test(raceName):
      return <Td bg="orange.100">{raceName}</Td>;
    default:
      return <Td>{raceName}</Td>;
  }
}

export const HorseRecordTable = (props: { raceData: HorseRecord[] }) => (
  <Table size="sm" mt={8}>
    <Thead>
      <Tr>
        <Th>開催日</Th>
        <Th>レース名</Th>
        <Th>馬名</Th>
        <Th>人気</Th>
        <Th>順位</Th>
        
        <Th>枠番</Th>
        <Th>馬番</Th>
        <Th>斤量</Th>
        <Th>距離</Th>
        <Th>馬場</Th>
        <Th>タイム</Th>
        <Th>着差</Th>
        <Th>通過</Th>
        <Td>上り</Td>
        <Th>体重</Th>
        <Th>体重差分</Th>

        <Th>騎乗</Th>
      </Tr>
    </Thead>
    <Tbody>
      {props.raceData.map((item: HorseRecord, index: number) => {
        return (
          <Tr key={index}>
            <Td>{item.date}</Td>
            {displayRace(item.raceName)}
            <Td>{item.horseName}</Td>
            {displayRank(item.oddsRank)}
            {displayRank(item.rank)}
            <Td>{item.frameNumber}</Td>
            <Td>{item.horseNumber}</Td>
            <Td>{item.weight}</Td>
            <Td>{item.courseType + String(item.courseLength)}</Td>
            <Td>{item.courseStatus}</Td>
            <Td>{item.time}</Td>
            <Td>{item.timeDiff}</Td>
            <Td>{item.passingOrder}</Td>
            <Td>{item.time3f}</Td>
            <Td>{item.horseWeight} </Td>
            <Td>{item.horseWeightDiff}</Td>
            <Td>{item.jockeyName}</Td>
          </Tr>
        );
      })}
    </Tbody>
  </Table>
);
