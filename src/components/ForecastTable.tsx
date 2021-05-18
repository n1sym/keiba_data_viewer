import { Table, Thead, Tbody, Tr, Th, Td, Text, Box } from "@chakra-ui/react";

export const ForecastTable = (props: { forecastData: any[] }) => (
  <Box overflowX="scroll">
  <Table size="sm" mt={8}>
    <Thead>
      <Tr>
        <Th>レース名</Th>
        <Th>単勝1</Th>
        <Th>単勝2</Th>
        <Th>複勝</Th>
        <Th>ワイド1</Th>
        <Th>ワイド2</Th>
        <Th>ワイド3</Th>
        <Th>ワイド4</Th>
        <Th>馬連1</Th>
        <Th>馬連2</Th>
        <Th>馬連3</Th>
        <Th>馬連4</Th>
        <Th>三連複1</Th>
        <Th>三連複2</Th>
      </Tr>
    </Thead>
    <Tbody>
      {props.forecastData.map((item: any, index: number) => {
        return displayThColor(index, item);
      })}
    </Tbody>
  </Table>
  </Box>
);

const displayThColor = (index: number, item: any) => {
  if (index < 3) {
    return (
      <Tr key={index}>
        <Td bg="green.50"><Text fontWeights="bold"> {item.title}</Text></Td>
        <Td bg="green.50"><Text fontWeights="bold">{item.tan}</Text> </Td>
        <Td bg="green.50"><Text fontWeights="bold"></Text> {item.tan2}</Td>
        <Td bg="green.50"><Text fontWeights="bold"></Text> {item.huku}</Td>
        <Td bg="green.50"><Text fontWeights="bold"></Text> {item.wide3t}</Td>
        <Td bg="green.50"><Text fontWeights="bold"></Text> {item.wide3w}</Td>
        <Td bg="green.50"><Text fontWeights="bold"></Text> {item.wide5t}</Td>
        <Td bg="green.50"><Text fontWeights="bold"></Text> {item.wide5w}</Td>
        <Td bg="green.50"><Text fontWeights="bold"></Text> {item.umaren3t}</Td>
        <Td bg="green.50"><Text fontWeights="bold"></Text> {item.umaren3w}</Td>
        <Td bg="green.50"><Text fontWeights="bold"></Text> {item.umaren5t}</Td>
        <Td bg="green.50"><Text fontWeights="bold"></Text> {item.umaren5w}</Td>
        <Td bg="green.50"><Text fontWeights="bold"></Text> {item["3huku5t"]}</Td>
        <Td bg="green.50"><Text fontWeights="bold"></Text> {item["3huku5w"]}</Td>
      </Tr>
    );
  } else {
    return (
      <Tr key={index}>
        <Td>{item.title}</Td>
        <Td>{item.tan}</Td>
        <Td>{item.tan2}</Td>
        <Td>{item.huku}</Td>
        <Td>{item.wide3t}</Td>
        <Td>{item.wide3w}</Td>
        <Td>{item.wide5t}</Td>
        <Td>{item.wide5w}</Td>
        <Td>{item.umaren3t}</Td>
        <Td>{item.umaren3w}</Td>
        <Td>{item.umaren5t}</Td>
        <Td>{item.umaren5w}</Td>
        <Td>{item["3huku5t"]}</Td>
        <Td>{item["3huku5w"]}</Td>
      </Tr>
    );
  }
};
