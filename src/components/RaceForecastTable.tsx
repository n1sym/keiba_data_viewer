import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

export const RaceForecastTable = (props: { forecastData: any[], type: string }) => (
  <Box overflowX={{base:"auto", sm:"auto", md: "auto"}}>
  <Table size="sm" mt={8}>
    <Thead>
      <Tr>
        <Th>人気</Th>
        <Th>着順</Th>
        <Th>馬番</Th>
        <Th>馬名</Th>
        <Th>騎手</Th>
        <Th>totalPoint</Th>
        <Th>horsePoint</Th>
        <Th>jockeyPoint</Th>
        <Th>framePoint</Th>
        <Th>timePoint</Th>
        <Th>racePoint</Th>
      </Tr>
    </Thead>
    <Tbody>
      {props.forecastData.map((item: any, index: number) => {
        return displayThColor(index, item, props.type);
      })}
    </Tbody>
  </Table>
  </Box>
);

const displayThColor = (index: number, item: any, type:string) => {
  return (
    <Tr key={index}>
      {displayString(item.oddsRank)}
      {displayString(item.rank)}
      <Td isNumeric>{item.horseNumber}</Td>
      <Td minW={40}>{item.horseName}</Td>
      <Td minW={32}>{item.jockeyName}</Td>
      {displayTotal(item.roubdTotalPoint,index,type)}
      <Td>{item.horsePoint}</Td>
      <Td>{item.jockeyPoint}</Td>
      <Td>{item.framePoint}</Td>
      <Td>{item.timePoint}</Td>
      <Td>{item.racePoint}</Td>
    </Tr>
  );
};

const displayString = (str:any) => {
  if (str == null) {
    return <Td>{"-"}</Td>
  } else {
    return <Td isNumeric>{str}</Td>
  }
}

const displayTotal = (point: number, index:number,type: string) => {
  if (type == "top"){
    if (index < 2){
      return <Td fontWeight="bold" bg="green.50">{point}</Td>
    } else {
      return <Td bg="green.50">{point}</Td>
    }
  } else {
    if (index < 5){
      return <Td fontWeight="bold" bg="green.50">{point}</Td>
    } else {
      return <Td bg="green.50">{point}</Td>
    }
  }
  
}
