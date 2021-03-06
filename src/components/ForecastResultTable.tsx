import { Table, Thead, Tbody, Tr, Th, Td, Box, Text } from "@chakra-ui/react";

export const ForecastResultTable = (props: { result: any[] }) => (
  <Box overflowX={{base:"auto", sm:"auto", md: "auto"}}>
  <Table size="sm" mt={8}>
    <Thead>
      <Tr>
        <Th>単勝1点</Th>
        <Th>単勝2点</Th>
        <Th>複勝1点</Th>
        <Th>ワイド3頭BOX</Th>
        <Th>ワイド5頭BOX</Th>
        <Th>三連複5頭BOX</Th>
        <Th>1-2-3位の人気</Th>
      </Tr>
    </Thead>
    <Tbody>
      {props.result.map((item: any, index: number) => {
        return displayThColor(index, item);
      })}
    </Tbody>
  </Table>
  </Box>
);

const displayThColor = (index: number, item: any) => {
  return (
    <Tr key={index}>
      <Td minW={24}>{colorNum(item.tan)}</Td>
      <Td minW={24}>{colorNum(item.tan2)}</Td>
      <Td minW={24}>{colorNum(item.huku)}</Td>
      <Td minW={24}>{colorNum(item.wide3box)}</Td>
      <Td minW={24}>{colorNum(item.wide5box)}</Td>
      <Td minW={24}>{colorNum(item["3huku5box"])}</Td>
      <Td minW={24}>{item["1-2-3oddsRank"]}</Td>
    </Tr>
  );
};

const colorNum = (num: number) => {
  if (num > 0) {
    const num_str = "+" + String(num)
    return <Text color="green.400"> {num_str} </Text>
  } else {
    return <Text > {num} </Text>
  }
}
