import { Table, Thead, Tbody, Tr, Th, Td, Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export const IndexTable = (props: { result: any[] }) => (
  <>
  <Box overflowX={{base:"auto", sm:"auto", md: "auto"}}>
  <Table size="sm" mt={8}>
    <Thead>
      <Tr>
        <Th></Th>
        <Th>単勝1点</Th>
        <Th>単勝2点</Th>
        <Th>複勝1点</Th>
        <Th>ワイド3頭BOX</Th>
        <Th>ワイド5頭BOX</Th>
        <Th>三連複5頭BOX</Th>
      </Tr>
    </Thead>
    <Tbody>
      {totalNum(props.result)}
    </Tbody>
  </Table>
  </Box>
  <Box overflowX={{base:"auto", sm:"auto", md: "auto"}} pt={8}>
  <Table size="sm" mt={8}>
    <Thead>
      <Tr>
        <Th>開催日</Th>
        <Th>レース名</Th>
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
  </>
);

const totalNum = (result: any) => {
  const count = result.length * 1000
  const totalTan = result.map((item: any)=>{return item.tan}).reduce((prev: number, current:number)=>{return prev+current;})
  const totalTan2 = result.map((item: any)=>{return item.tan2}).reduce((prev: number, current:number)=>{return prev+current;})
  const totalHuku = result.map((item: any)=>{return item.huku}).reduce((prev: number, current:number)=>{return prev+current;})
  const totalWide3box = result.map((item: any)=>{return item.wide3box}).reduce((prev: number, current:number)=>{return prev+current;})
  const totalWide5box = result.map((item: any)=>{return item.wide5box}).reduce((prev: number, current:number)=>{return prev+current;})
  const total3huku5box = result.map((item: any)=>{return item["3huku5box"]}).reduce((prev: number, current:number)=>{return prev+current;})

  const recTan = String(Math.round(((count + totalTan) / count)*10000)/100) + "%"
  const recTan2 = String(Math.round(((count + totalTan2) / count)*10000)/100) + "%"
  const recHuku = String(Math.round(((count + totalHuku) / count)*10000)/100) + "%"
  const recWide3box = String(Math.round(((count + totalWide3box) / count)*10000)/100) + "%"
  const recWide5box = String(Math.round(((count + totalWide5box) / count)*10000)/100) + "%"
  const rec3huku5box = String(Math.round(((count + total3huku5box) / count)*10000)/100) + "%"

  return (
    <>
    <Tr key={0}>
      <Td minW={24}><Text fontWeight="semibold">合計</Text></Td>
      <Td minW={24}>{colorNum(totalTan)}</Td>
      <Td minW={24}>{colorNum(totalTan2)}</Td>
      <Td minW={24}>{colorNum(totalHuku)}</Td>
      <Td minW={24}>{colorNum(totalWide3box)}</Td>
      <Td minW={24}>{colorNum(totalWide5box)}</Td>
      <Td minW={24}>{colorNum(total3huku5box)}</Td>

    </Tr>
    <Tr key={0}>
      <Td minW={24}><Text fontWeight="semibold">回収率</Text></Td>
      <Td minW={24}>{recTan}</Td>
      <Td minW={24}>{recTan2}</Td>
      <Td minW={24}>{recHuku}</Td>
      <Td minW={24}>{recWide3box}</Td>
      <Td minW={24}>{recWide5box}</Td>
      <Td minW={24}>{rec3huku5box}</Td>

    </Tr>
    </>
  );
}

const displayThColor = (index: number, item: any) => {
  return (
    <Tr key={index}>
      <Td minW={24}>{item.date}</Td>
      <Td minW={40}><Link href={"results/" + item.dirName}><a><Text color="blue.500">{item.raceName}</Text></a></Link></Td>
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

const colorNum = (num: any) => {
  if (num > 0) {
    const num_str = "+" + String(num)
    if (num <= 1000) {
      return <Text color="green.400"> {num_str} </Text>
    } else {
      return <Text color="green.400" fontWeight="semibold"> {num_str} </Text>
    }
  } else if (num == "") {
    return <Text> {"-"} </Text>
  } else {
    return <Text> {num} </Text>
  }
}
